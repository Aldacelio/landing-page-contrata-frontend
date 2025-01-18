import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const recursos = [
  'Profissionais Verificados',
  'Pagamentos Seguros',
  'Chat em Tempo Real',
  'Geolocalização',
  'Programa de Fidelidade',
]

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Comparacao() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contrata+ vs. Concorrência
        </motion.h2>
        <div className="overflow-x-auto">
          <motion.table 
            className="w-full bg-white shadow-sm rounded-lg overflow-hidden"
            variants={tableVariants}
            initial="hidden"
            animate="visible"
          >
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Recursos</th>
                <th className="py-3 px-6 text-center">Contrata+</th>
                <th className="py-3 px-6 text-center">Concorrência</th>
              </tr>
            </thead>
            <tbody>
              {recursos.map((recurso, index) => (
                <motion.tr 
                  key={index} 
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  variants={rowVariants}
                >
                  <td className="py-4 px-6">{recurso}</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="inline-block w-6 h-6 text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    {recurso === 'Geolocalização' ? (
                      <Check className="inline-block w-6 h-6 text-green-500" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-red-500" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Pronto para uma experiência melhor? Junte-se ao Contrata+ hoje!
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

