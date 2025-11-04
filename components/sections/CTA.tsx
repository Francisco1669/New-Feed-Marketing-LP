'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-orange-600 to-orange-700 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Sparkles size={20} />
            <span className="font-semibold">Vamos crescer juntos?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pronto pra crescer no Instagram?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light max-w-2xl mx-auto">
            Agende uma conversa gratuita e descubra como podemos transformar
            sua presença digital em <strong>resultados reais</strong>.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://wa.me/5555999948112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full hover:shadow-2xl transition-all font-bold text-xl"
            >
              Fale com a New Feed agora 🚀
              <ArrowRight size={24} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/80 text-sm"
          >
            Resposta rápida • Atendimento humanizado • Sem compromisso
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
