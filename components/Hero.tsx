import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Contrata+</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Imagine um mundo onde encontrar o profissional perfeito é tão fácil quanto um clique. Bem-vindo ao Contrata+.
        </p>
        <Button asChild className="bg-white text-blue-600 hover:bg-blue-100 animate-bounce">
          <Link href="#sobre" className="flex items-center">
            Descubra o Futuro <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

