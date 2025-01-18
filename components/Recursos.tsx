import { MapPin, UserCheck, MessageCircle, Shield, Gift } from 'lucide-react'
import { motion } from "framer-motion"

const recursos = [
  { icon: MapPin, titulo: 'Geolocalização', descricao: 'Encontre profissionais próximos a você instantaneamente.' },
  { icon: UserCheck, titulo: 'Perfis Verificados', descricao: 'Trabalhe com especialistas confiáveis e validados.' },
  { icon: MessageCircle, titulo: 'Chat em Tempo Real', descricao: 'Comunique-se facilmente dentro da plataforma.' },
  { icon: Shield, titulo: 'Pagamentos Seguros', descricao: 'Seu dinheiro está protegido até a conclusão do serviço.' },
  { icon: Gift, titulo: 'Programa de Fidelidade', descricao: 'Ganhe pontos e descontos a cada contratação.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Recursos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Por que Escolher o Contrata+?
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubra as funcionalidades inovadoras que tornam o Contrata+ a escolha ideal para 
          encontrar profissionais qualificados e gerenciar seus projetos com facilidade.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {recursos.map((recurso, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <recurso.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{recurso.titulo}</h3>
              <p>{recurso.descricao}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

