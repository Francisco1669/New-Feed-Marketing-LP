'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useRef } from 'react'

export default function Portfolio() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const portfolioItems = [
    {
      title: 'Lançamento de Produto',
      category: 'Instagram & Tráfego Pago',
      color: 'from-primary to-orange-600',
      description: 'Estratégia completa de lançamento com resultados expressivos'
    },
    {
      title: 'Branding Completo',
      category: 'Identidade Visual',
      color: 'from-accent to-purple-700',
      description: 'Identidade visual única que destaca a marca no mercado'
    },
    {
      title: 'Gestão de Redes',
      category: 'Conteúdo Estratégico',
      color: 'from-light to-blue-400',
      description: 'Conteúdo que engaja e converte seguidores em clientes'
    },
    {
      title: 'Campanha Sazonal',
      category: 'Tráfego & Conversão',
      color: 'from-pink-500 to-rose-600',
      description: 'Campanhas otimizadas para datas especiais e eventos'
    },
    {
      title: 'Rebranding Digital',
      category: 'Reposicionamento',
      color: 'from-green-500 to-emerald-600',
      description: 'Transformação digital completa de marcas tradicionais'
    },
    {
      title: 'Growth Instagram',
      category: 'Crescimento Orgânico',
      color: 'from-yellow-500 to-orange-500',
      description: 'Crescimento sustentável com audiência qualificada'
    }
  ]

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Portfólio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alguns dos nossos trabalhos que geraram resultados reais
          </p>
        </motion.div>

        {/* Versão Desktop - Sticky Stack Effect */}
        <div className="hidden md:block relative" style={{ height: `${portfolioItems.length * 80}vh` }}>
          {portfolioItems.map((item, index) => {
            const targetScale = 1 - (portfolioItems.length - index) * 0.05

            return (
              <motion.div
                key={item.title}
                className="sticky top-24 flex justify-center items-center mb-8"
                style={{
                  top: `${100 + index * 20}px`
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full max-w-4xl"
                  style={{
                    scale: targetScale
                  }}
                >
                  <div className={`relative overflow-hidden rounded-3xl shadow-2xl h-[500px] group cursor-pointer`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>

                    <motion.div
                      className="absolute inset-0 bg-black/30"
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-sm font-bold mb-3 opacity-90 uppercase tracking-wider"
                      >
                        {item.category}
                      </motion.span>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-5xl font-bold mb-4"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-lg opacity-90 max-w-2xl"
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    <motion.div
                      className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm p-4 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    >
                      <ExternalLink size={24} className="text-white" />
                    </motion.div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Versão Mobile - Grid Normal */}
        <div className="md:hidden grid grid-cols-1 gap-6 max-w-xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg h-80"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold mb-2 opacity-90 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="https://www.instagram.com/newfeedmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold"
          >
            Ver mais no Instagram
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
