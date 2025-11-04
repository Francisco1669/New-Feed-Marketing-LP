'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Lançamento de Produto',
      category: 'Instagram & Tráfego Pago',
      color: 'from-primary to-orange-600'
    },
    {
      title: 'Branding Completo',
      category: 'Identidade Visual',
      color: 'from-accent to-purple-700'
    },
    {
      title: 'Gestão de Redes',
      category: 'Conteúdo Estratégico',
      color: 'from-light to-blue-400'
    },
    {
      title: 'Campanha Sazonal',
      category: 'Tráfego & Conversão',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Rebranding Digital',
      category: 'Reposicionamento',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Growth Instagram',
      category: 'Crescimento Orgânico',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-64"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-sm font-semibold mb-2 opacity-90">{item.category}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              </div>

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/newfeedmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-semibold"
          >
            Ver mais no Instagram
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
