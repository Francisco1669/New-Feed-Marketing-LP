'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Target } from 'lucide-react'

const portfolioItems = [
  {
    title: 'Lançamento de Produto',
    category: 'Instagram & Tráfego Pago',
    description: 'Campanha completa de lançamento que gerou mais de 500 vendas em 30 dias.',
    color: 'from-primary to-orange-600',
    results: [
      { label: 'Vendas', value: '500+' },
      { label: 'ROI', value: '450%' },
      { label: 'Alcance', value: '50k+' }
    ]
  },
  {
    title: 'Branding Completo',
    category: 'Identidade Visual',
    description: 'Desenvolvimento de identidade visual completa e reposicionamento de marca.',
    color: 'from-accent to-purple-700',
    results: [
      { label: 'Engajamento', value: '+320%' },
      { label: 'Seguidores', value: '+2.5k' },
      { label: 'Reconhecimento', value: '+200%' }
    ]
  },
  {
    title: 'Gestão de Redes',
    category: 'Conteúdo Estratégico',
    description: 'Gestão completa de Instagram com foco em engajamento e conversão.',
    color: 'from-light to-blue-400',
    results: [
      { label: 'Posts', value: '90/mês' },
      { label: 'Engajamento', value: '+180%' },
      { label: 'Leads', value: '250+' }
    ]
  },
  {
    title: 'Campanha Sazonal',
    category: 'Tráfego & Conversão',
    description: 'Campanha de tráfego pago para Black Friday com resultados excepcionais.',
    color: 'from-pink-500 to-rose-600',
    results: [
      { label: 'Conversões', value: '380+' },
      { label: 'CTR', value: '12.5%' },
      { label: 'CPA', value: '-65%' }
    ]
  },
  {
    title: 'Rebranding Digital',
    category: 'Reposicionamento',
    description: 'Transformação completa da presença digital de uma marca tradicional.',
    color: 'from-green-500 to-emerald-600',
    results: [
      { label: 'Novos clientes', value: '+450' },
      { label: 'Ticket médio', value: '+85%' },
      { label: 'Reconhecimento', value: '+300%' }
    ]
  },
  {
    title: 'Growth Instagram',
    category: 'Crescimento Orgânico',
    description: 'Estratégia de crescimento orgânico com foco em audiência qualificada.',
    color: 'from-yellow-500 to-orange-500',
    results: [
      { label: 'Seguidores', value: '+8.5k' },
      { label: 'Alcance', value: '+420%' },
      { label: 'Salvamentos', value: '+380%' }
    ]
  }
]

const stats = [
  { icon: Users, label: 'Clientes Atendidos', value: '30+' },
  { icon: TrendingUp, label: 'Crescimento Médio', value: '+280%' },
  { icon: Target, label: 'Taxa de Satisfação', value: '98%' }
]

export default function PortfolioPage() {
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
              Nosso Portfólio
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Resultados reais que transformaram negócios em Uruguaiana e região
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon size={32} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <span className="text-sm font-semibold text-white/90">{item.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-secondary">Resultados:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {item.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <div className="text-xl font-bold text-primary">{result.value}</div>
                          <div className="text-xs text-gray-500">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quer ver mais?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Acompanhe nosso Instagram para ver mais casos de sucesso e bastidores dos nossos projetos
            </p>
            <a
              href="https://www.instagram.com/newfeedmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full hover:shadow-2xl transition-all font-bold text-xl"
            >
              Seguir no Instagram
              <ExternalLink size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
