'use client'

import { motion } from 'framer-motion'
import { Instagram, TrendingUp, Palette } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Instagram,
      title: 'Gestão de Redes Sociais',
      description: 'Conteúdo estratégico e criativo que engaja sua audiência e gera conexão com sua marca.',
      color: 'from-primary to-orange-600',
      features: [
        'Planejamento de conteúdo',
        'Design de posts e stories',
        'Gerenciamento de comunidade',
        'Análise de métricas'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Tráfego Pago',
      description: 'Campanhas segmentadas no Instagram e Facebook Ads que convertem visitantes em clientes.',
      color: 'from-accent to-purple-700',
      features: [
        'Criação de campanhas',
        'Segmentação de público',
        'Otimização de anúncios',
        'Relatórios de performance'
      ]
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Fortalecemos sua presença digital com propósito, identidade visual e comunicação autêntica.',
      color: 'from-light to-blue-400',
      features: [
        'Identidade visual',
        'Manual da marca',
        'Posicionamento estratégico',
        'Tom de voz e comunicação'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                <service.icon size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
