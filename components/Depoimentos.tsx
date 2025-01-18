import { motion } from "framer-motion"

const depoimentos = [
  {
    texto: "O Contrata+ revolucionou a forma como eu encontro profissionais. Tudo é tão simples e eficiente!",
    autor: "Maria Silva, Cliente Satisfeita"
  },
  {
    texto: "Como prestador de serviços, o Contrata+ me ajudou a expandir minha base de clientes e gerenciar meus projetos de forma mais eficaz.",
    autor: "João Santos, Eletricista"
  },
  {
    texto: "A verificação de perfis e os pagamentos seguros me dão muita tranquilidade ao contratar serviços pelo Contrata+.",
    autor: "Ana Oliveira, Empresária"
  }
]

export default function Depoimentos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          O que Nossos Usuários Dizem
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lg italic mb-4">{depoimento.texto}</p>
              <p className="font-semibold">{depoimento.autor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

