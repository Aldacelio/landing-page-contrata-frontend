import { Search, UserCheck, MessageSquare, Star } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Busque', description: 'Encontre o profissional ideal para sua necessidade específica.' },
  { icon: UserCheck, title: 'Escolha', description: 'Selecione com base em avaliações, preços e disponibilidade.' },
  { icon: MessageSquare, title: 'Comunique-se', description: 'Alinhe detalhes do projeto diretamente pela plataforma.' },
  { icon: Star, title: 'Avalie', description: 'Compartilhe sua experiência para ajudar a comunidade.' },
]

export default function ComoFunciona() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como o Contrata+ Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

