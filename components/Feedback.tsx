"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { adicionarDados } from '@/services/api';
import emailjs from "@emailjs/browser";
import { useToast } from '@/hooks/use-toast';

export default function Feedback() {
  const { toast } = useToast();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const dados = { nome, email, feedback };
    let apiSuccess = false;
    let emailJsSuccess = false;

    try {
      // Tenta enviar para a API própria
      const response = await adicionarDados(dados);
      if (response && response.id) {
        apiSuccess = true;
      }

      // // Tenta enviar para o EmailJS
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //   {
      //     from_name: nome,
      //     from_email: email,
      //     message: feedback,
      //   },
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      // );
      // emailJsSuccess = true;

      // Se pelo menos um dos serviços funcionou, considera sucesso
      if (apiSuccess) {
        toast({
          title: "Feedback enviado!",
          description: "Obrigado por compartilhar sua opinião conosco.",
          variant: "default",
        });
        
        setNome('');
        setEmail('');
        setFeedback('');
      } else {
        throw new Error("Ambos os serviços falharam");
      }
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro ao enviar feedback",
        description: "Ocorreu um erro ao enviar seu feedback. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sua Voz Molda o Futuro</h2>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
          O Contrata+ está em construção, e sua opinião é fundamental. Compartilhe seus pensamentos e ajude-nos a criar a plataforma dos seus sonhos.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 bg-white p-8 rounded-lg shadow-md">
          <Input 
            type="text" 
            placeholder="Seu nome" 
            required 
            value={nome}
            onChange={(e) => setNome(e.target.value)} 
            className="border-blue-300 focus:border-blue-500" 
          />
          <Input 
            type="email" 
            placeholder="Seu e-mail" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="border-blue-300 focus:border-blue-500" 
          />
          <Textarea 
            placeholder="O que você espera do Contrata+? Como ele poderia transformar sua experiência de contratação ou oferta de serviços?" 
            required 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)} 
            className="border-blue-300 focus:border-blue-500"
          />
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Feedback'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
