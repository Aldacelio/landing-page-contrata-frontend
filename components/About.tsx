export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">O que é o Contrata+?</h2>
        <p className="text-lg mb-8 text-center">
          O Contrata+ é uma plataforma inovadora projetada para conectar clientes e prestadores de serviços de forma simples e eficiente. 
          Com recursos avançados como profissionais verificados, chat em tempo real, geolocalização e pagamentos seguros, 
          somos a sua solução confiável para encontrar e contratar serviços de qualidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Profissionais verificados', 'Transações seguras e transparentes', 'Combinação inteligente para contratações mais rápidas'].map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

