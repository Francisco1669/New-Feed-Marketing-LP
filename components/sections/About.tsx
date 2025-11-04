'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Heart } from 'lucide-react'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Quem somos?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos uma agência de marketing de <strong>Uruguaiana</strong> que transforma
              perfis comuns em marcas que vendem. Nosso foco é gerar{' '}
              <span className="text-primary font-semibold">resultados reais no digital</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-primary to-orange-600 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Foco em Resultado</h3>
              <p className="text-white/90 leading-relaxed">
                Não fazemos só post bonito. Criamos estratégias que convertem seguidores em clientes reais.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-accent to-purple-700 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Agilidade e Criatividade</h3>
              <p className="text-white/90 leading-relaxed">
                Nosso time jovem e antenado traz o que há de mais atual no marketing digital.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-light to-blue-400 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Parceria de Verdade</h3>
              <p className="text-white/90 leading-relaxed">
                Seu sucesso é o nosso sucesso. Caminhamos juntos para alcançar seus objetivos.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
