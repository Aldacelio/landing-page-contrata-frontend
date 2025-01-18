import { Shield, Clock, ThumbsUp, DollarSign } from 'lucide-react'

const benefits = [
  { icon: Shield, title: 'Segurança', description: 'Profissionais verificados e transações seguras.' },
  { icon: Clock, title: 'Economia de Tempo', description: 'Encontre o profissional ideal rapidamente.' },
  { icon: ThumbsUp, title: 'Qualidade Garantida', description: 'Avaliações reais de outros clientes.' },
  { icon: DollarSign, title: 'Preços Justos', description: 'Compare orçamentos e escolha o melhor.' },
]

export default function Beneficios() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefícios do Contrata+</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

