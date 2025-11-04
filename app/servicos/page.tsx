'use client'

import { motion } from 'framer-motion'
import { Instagram, TrendingUp, Palette, Check, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

const services = [
  {
    icon: Instagram,
    title: 'Gestão de Redes Sociais',
    description: 'Transformamos seu Instagram em uma máquina de vendas com conteúdo estratégico e criativo.',
    color: 'from-primary to-orange-600',
    features: [
      'Planejamento estratégico de conteúdo',
      'Design profissional de posts e stories',
      'Criação de reels e vídeos engajadores',
      'Gerenciamento de comunidade e DMs',
      'Copywriting persuasivo',
      'Análise completa de métricas',
      'Relatórios mensais detalhados',
      'Estratégias de crescimento orgânico'
    ],
    benefits: [
      'Aumento de seguidores qualificados',
      'Maior engajamento nas publicações',
      'Fortalecimento da marca',
      'Geração de leads constante'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Tráfego Pago',
    description: 'Campanhas otimizadas que convertem investimento em clientes reais e vendas comprovadas.',
    color: 'from-accent to-purple-700',
    features: [
      'Criação e gestão de campanhas no Meta Ads',
      'Segmentação avançada de público-alvo',
      'Desenvolvimento de criativos de alta conversão',
      'Testes A/B constantes',
      'Otimização diária de anúncios',
      'Remarketing estratégico',
      'Pixel de conversão e rastreamento',
      'ROI maximizado'
    ],
    benefits: [
      'Alcance o público certo',
      'Redução de custo por lead',
      'Aumento nas vendas',
      'Resultados mensuráveis'
    ]
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Construímos marcas autênticas e memoráveis que se destacam no mercado digital.',
    color: 'from-light to-blue-400',
    features: [
      'Desenvolvimento de identidade visual completa',
      'Criação de logo profissional',
      'Paleta de cores estratégica',
      'Manual da marca detalhado',
      'Definição de tom de voz',
      'Posicionamento de mercado',
      'Estratégia de comunicação',
      'Aplicações da marca em diversos formatos'
    ],
    benefits: [
      'Marca profissional e coesa',
      'Diferenciação da concorrência',
      'Autoridade no mercado',
      'Conexão emocional com clientes'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Soluções completas de marketing digital para fazer seu negócio crescer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`bg-gradient-to-br ${service.color} p-12 rounded-3xl text-white shadow-2xl`}>
                    <service.icon size={56} className="mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-4">O que está incluso:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <Check size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-secondary mb-3">Benefícios:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato e descubra qual serviço é ideal para o seu negócio
            </p>
            <a
              href="https://wa.me/5555999948112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full hover:bg-orange-600 transition-all font-bold text-xl shadow-xl hover:shadow-2xl"
            >
              Falar com especialista
              <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
