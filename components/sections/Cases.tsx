'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, Users, Target, Award } from 'lucide-react'
import { useRef } from 'react'

export default function Cases() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const cases = [
    {
      icon: TrendingUp,
      client: 'Boutique Fashion',
      result: '+500% em vendas',
      description: 'Transformamos um perfil comum em referência de moda local',
      metrics: [
        { label: 'Seguidores', value: '500 → 5.2k' },
        { label: 'Vendas/mês', value: '+500%' },
        { label: 'Engajamento', value: '+380%' }
      ],
      color: 'from-primary to-orange-600'
    },
    {
      icon: Users,
      client: 'Restaurante Sabor & Arte',
      result: '+300% em delivery',
      description: 'Branding profissional que triplicou o faturamento em 3 meses',
      metrics: [
        { label: 'Pedidos/dia', value: '15 → 60' },
        { label: 'Ticket médio', value: '+45%' },
        { label: 'Avaliações', value: '4.9★' }
      ],
      color: 'from-accent to-purple-700'
    },
    {
      icon: Target,
      client: 'Studio de Beleza',
      result: 'Agenda sempre lotada',
      description: 'Tráfego pago estratégico que gerou clientes recorrentes',
      metrics: [
        { label: 'Novos clientes', value: '+180/mês' },
        { label: 'ROI', value: '420%' },
        { label: 'Retenção', value: '87%' }
      ],
      color: 'from-light to-blue-400'
    },
    {
      icon: Award,
      client: 'E-commerce Local',
      result: 'Faturamento recorde',
      description: 'Estratégia completa que revolucionou as vendas online',
      metrics: [
        { label: 'Faturamento', value: '+650%' },
        { label: 'Conversão', value: '8.5%' },
        { label: 'CAC', value: '-60%' }
      ],
      color: 'from-green-500 to-emerald-600'
    }
  ]

  const currentCaseIndex = useTransform(scrollYProgress, [0, 1], [0, cases.length - 1])

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${cases.length * 100}vh` }}
    >
      {/* Fundo fixo - Sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-gray-900 to-secondary">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Header - sempre visível */}
        <motion.div
          className="absolute top-20 left-0 right-0 text-center z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Nossos Cases
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-gray-300">
            Resultados reais que transformaram negócios
          </p>
        </motion.div>

        {/* Cards que mudam durante o scroll */}
        <div className="relative w-full max-w-5xl px-4">
          {cases.map((caseItem, index) => {
            const start = index / cases.length
            const end = (index + 1) / cases.length

            const opacity = useTransform(scrollYProgress,
              [start - 0.1, start, end - 0.05, end],
              [0, 1, 1, 0]
            )

            const scale = useTransform(scrollYProgress,
              [start - 0.1, start, end - 0.05, end],
              [0.8, 1, 1, 0.8]
            )

            const y = useTransform(scrollYProgress,
              [start - 0.1, start, end - 0.05, end],
              [100, 0, 0, -100]
            )

            return (
              <motion.div
                key={caseItem.client}
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity, scale, y }}
              >
                <div className={`relative w-full bg-gradient-to-br ${caseItem.color} rounded-3xl p-8 md:p-12 shadow-2xl`}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <caseItem.icon size={48} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-white text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        {caseItem.client}
                      </h3>
                      <p className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">
                        {caseItem.result}
                      </p>
                      <p className="text-lg md:text-xl text-white/80 mb-6">
                        {caseItem.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {caseItem.metrics.map((metric, i) => (
                          <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <div className="text-xs uppercase tracking-wider text-white/70 mb-1">
                              {metric.label}
                            </div>
                            <div className="text-xl md:text-2xl font-bold">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-4 right-4 text-white/50 text-sm font-semibold">
                    {index + 1} / {cases.length}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm mb-2">Role para ver mais</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto relative">
            <motion.div
              className="w-1.5 h-3 bg-white/60 rounded-full absolute left-1/2 -translate-x-1/2 top-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
