import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import ComoFunciona from '@/components/ComoFunciona'
import Diferenciais from '@/components/Diferenciais'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <Sobre />
      <ComoFunciona />
      <Diferenciais />
      <Feedback />
      <Footer />
    </main>
  )
}

