import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contrata+ - Conectando Profissionais e Clientes',
  description: 'Descubra uma nova forma de contratar serviços e encontrar oportunidades.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}

