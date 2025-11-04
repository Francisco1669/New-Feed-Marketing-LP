'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Clock, Send } from 'lucide-react'

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Duque de Caxias, 1570 sala 301\nUruguaiana, Rio Grande do Sul',
      color: 'from-primary to-orange-600'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(55) 99994-8112',
      link: 'https://wa.me/5555999948112',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@newfeed.com.br',
      link: 'mailto:contato@newfeed.com.br',
      color: 'from-accent to-purple-700'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@newfeedmarketing',
      link: 'https://www.instagram.com/newfeedmarketing',
      color: 'from-pink-500 to-rose-600'
    }
  ]

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
              Vamos Conversar?
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Estamos prontos para transformar sua presença digital em resultados reais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className={`h-full bg-gradient-to-br ${info.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all hover:scale-105`}>
                      <info.icon size={32} className="mb-4" />
                      <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                      <p className="text-white/90 whitespace-pre-line">{info.content}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`h-full bg-gradient-to-br ${info.color} p-6 rounded-2xl text-white shadow-lg`}>
                    <info.icon size={32} className="mb-4" />
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-white/90 whitespace-pre-line">{info.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-secondary to-gray-900 rounded-3xl p-12 text-white text-center shadow-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para começar?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Clique no botão abaixo e fale diretamente com nossa equipe pelo WhatsApp.
                Resposta rápida garantida!
              </p>
              <a
                href="https://wa.me/5555999948112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full hover:bg-green-600 transition-all font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Abrir WhatsApp
                <Send size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Clock size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-6">Horário de Atendimento</h3>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Segunda a Sexta</span>
                  <span className="text-gray-600">9h às 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Sábado</span>
                  <span className="text-gray-600">9h às 12h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Domingo</span>
                  <span className="text-gray-600">Fechado</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-500">
                  * Mensagens pelo WhatsApp são respondidas em até 2 horas úteis
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-center text-secondary mb-12">
              Perguntas Frequentes
            </h3>
            <div className="space-y-6">
              {[
                {
                  question: 'Qual o investimento mínimo?',
                  answer: 'Os valores variam de acordo com o serviço escolhido. Entre em contato para receber um orçamento personalizado.'
                },
                {
                  question: 'Quanto tempo para ver resultados?',
                  answer: 'Resultados iniciais podem aparecer nas primeiras semanas, mas recomendamos um trabalho contínuo de pelo menos 3 meses para resultados consistentes.'
                },
                {
                  question: 'Atendem todo o Brasil?',
                  answer: 'Sim! Apesar de sermos de Uruguaiana-RS, atendemos clientes de todo o Brasil de forma online.'
                },
                {
                  question: 'Qual a diferença entre tráfego pago e orgânico?',
                  answer: 'Tráfego pago são anúncios pagos que geram resultados rápidos. Tráfego orgânico é o crescimento natural através de conteúdo. Recomendamos trabalhar ambos.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h4 className="font-bold text-secondary mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
