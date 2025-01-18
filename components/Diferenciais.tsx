import { Check, X } from 'lucide-react'

const features = [
  { name: 'Comunicação em tempo real', contrataMais: true, getNinjas: false, description: 'Sistema de comunicação em tempo real entre cliente e prestador, permitindo ajustes rápidos e precisos nos detalhes do serviço.' },
  { name: 'Verificação rigorosa de profissionais', contrataMais: true, getNinjas: false, description: 'Todos os profissionais passam por uma verificação detalhada de antecedentes e qualificações.' },
  { name: 'Sistema de pagamento seguro integrado', contrataMais: true, getNinjas: false, description: 'Pagamentos protegidos e liberados apenas após a aprovação do serviço.' },
  { name: 'Garantia de satisfação', contrataMais: true, getNinjas: false, description: 'Se o serviço não atender às expectativas, oferecemos soluções ou reembolso.' },
  { name: 'Avaliações detalhadas', contrataMais: true, getNinjas: true, description: 'Sistema de avaliação abrangente para garantir transparência e qualidade.' },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contrata+ vs. GetNinjas: Por que somos diferentes?</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Recurso</th>
                <th className="py-3 px-4 text-center">Contrata+</th>
                <th className="py-3 px-4 text-center">GetNinjas</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-4">
                    <p className="font-semibold">{feature.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.contrataMais ? (
                      <Check className="inline-block w-6 h-6 text-green-500" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-red-500" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.getNinjas ? (
                      <Check className="inline-block w-6 h-6 text-green-500" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center mt-8 text-lg">
          O Contrata+ vai além da simples conexão entre clientes e profissionais. Oferecemos uma experiência completa, 
          segura e eficiente, superando as limitações das plataformas tradicionais como o GetNinjas.
        </p>
      </div>
    </section>
  )
}

