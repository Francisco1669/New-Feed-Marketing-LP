'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'

export default function Cases() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCase, setActiveCase] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const cases = [
    {
      id: 1,
      client: 'E-commerce de Moda',
      title: '300% de Crescimento',
      description: 'Aumento de 300% no faturamento em 6 meses através de estratégias integradas de Instagram e tráfego pago.',
      metric: '+300%',
      metricLabel: 'Faturamento',
      icon: TrendingUp,
      color: 'from-blue-600 to-blue-800',
      stats: [
        { label: 'Alcance', value: '2.5M' },
        { label: 'Conversão', value: '+185%' },
        { label: 'ROI', value: '450%' }
      ]
    },
    {
      id: 2,
      client: 'Clínica de Estética',
      title: '5x Mais Agendamentos',
      description: 'Estratégia de conteúdo orgânico e campanhas segmentadas resultaram em 5x mais agendamentos mensais.',
      metric: '5x',
      metricLabel: 'Agendamentos',
      icon: Users,
      color: 'from-purple-600 to-purple-800',
      stats: [
        { label: 'Seguidores', value: '+12K' },
        { label: 'Engajamento', value: '+220%' },
        { label: 'CPL', value: '-45%' }
      ]
    },
    {
      id: 3,
      client: 'Restaurante Gourmet',
      title: 'Fila de Espera Diária',
      description: 'Rebranding completo e gestão de redes sociais criaram uma fila de espera constante e aumento de 400% no delivery.',
      metric: '+400%',
      metricLabel: 'Delivery',
      icon: Target,
      color: 'from-orange-600 to-orange-800',
      stats: [
        { label: 'Reservas', value: '+350%' },
        { label: 'Visibilidade', value: '+500%' },
        { label: 'Avaliações', value: '4.9★' }
      ]
    },
    {
      id: 4,
      client: 'Infoproduto',
      title: 'R$ 1.2M em 3 Meses',
      description: 'Lançamento estratégico com funil completo, tráfego pago otimizado e copy persuasiva geraram R$ 1.2M em vendas.',
      metric: 'R$ 1.2M',
      metricLabel: 'Vendas',
      icon: Zap,
      color: 'from-green-600 to-green-800',
      stats: [
        { label: 'Leads', value: '45K+' },
        { label: 'Taxa Conv.', value: '8.5%' },
        { label: 'Ticket Médio', value: 'R$ 497' }
      ]
    }
  ]

  // Atualiza o case ativo baseado no scroll
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * cases.length),
        cases.length - 1
      )
      setActiveCase(index)
    })
  }, [scrollYProgress, cases.length])

  const currentCase = cases[activeCase]
  const Icon = currentCase.icon

  return (
    <section ref={containerRef} className="relative" style={{ height: '400vh' }}>
      {/* Container Sticky com Fundo Azul */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          {/* Header Fixo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Nossos Cases
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Resultados reais que transformaram negócios
            </p>
          </motion.div>

          {/* Card do Case Ativo - Animado */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentCase.color} p-8 md:p-12 shadow-2xl`}>
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>

              {/* Icon */}
              <div className="flex items-start justify-between mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Icon size={40} className="text-white" />
                </div>

                {/* Indicador de progresso */}
                <div className="flex gap-2">
                  {cases.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeCase
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/30'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <p className="text-sm font-bold uppercase tracking-wider opacity-90 mb-3">
                  {currentCase.client}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {currentCase.title}
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl">
                  {currentCase.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {currentCase.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Big Metric */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                  <div className="text-sm font-bold uppercase tracking-wider opacity-80 mb-2">
                    {currentCase.metricLabel}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold">
                    {currentCase.metric}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCase < cases.length - 1 ? 1 : 0 }}
            className="text-center mt-12"
          >
            <p className="text-white/60 text-sm mb-2">Continue rolando</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
