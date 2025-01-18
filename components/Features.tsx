import { MapPin, UserCheck, MessageCircle, Shield, Gift } from 'lucide-react'

const features = [
  { icon: MapPin, title: 'Geolocalização', description: 'Encontre profissionais próximos a você instantaneamente.' },
  { icon: UserCheck, title: 'Perfis Verificados', description: 'Trabalhe com especialistas confiáveis e validados.' },
  { icon: MessageCircle, title: 'Chat em Tempo Real', description: 'Comunique-se facilmente dentro da plataforma.' },
  { icon: Shield, title: 'Pagamentos Seguros', description: 'Seu dinheiro está protegido até a conclusão do serviço.' },
  { icon: Gift, title: 'Programa de Fidelidade', description: 'Ganhe pontos e descontos a cada contratação.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Por que Escolher o Contrata+?</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          Descubra as funcionalidades inovadoras que tornam o Contrata+ a escolha ideal para 
          encontrar profissionais qualificados e gerenciar seus projetos com facilidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

