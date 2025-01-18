export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">O que é o Contrata+?</h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          O Contrata+ é uma plataforma inovadora que reinventa a forma como profissionais e clientes se conectam. 
          Combinamos tecnologia avançada com um foco na segurança e satisfação para criar um ecossistema de serviços confiável e eficiente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Para Clientes</h3>
            <p>Acesso fácil a profissionais verificados, com garantia de qualidade e pagamentos seguros.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-600">Para Profissionais</h3>
            <p>Oportunidades de trabalho consistentes, ferramentas para gerenciar projetos e pagamentos pontuais.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">Nossa Missão</h3>
            <p>Transformar o mercado de serviços, promovendo confiança, qualidade e eficiência em cada interação.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

