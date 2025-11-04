'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      business: 'Boutique Fashion',
      text: 'A New Feed transformou meu Instagram! Antes eu tinha 500 seguidores e quase nenhuma venda. Hoje são mais de 5 mil e vendemos todos os dias pela rede.',
      rating: 5
    },
    {
      name: 'João Santos',
      business: 'Restaurante Sabor & Arte',
      text: 'O trabalho de branding foi sensacional. Nossa identidade ficou profissional e nosso delivery cresceu 300% em 3 meses.',
      rating: 5
    },
    {
      name: 'Carla Oliveira',
      business: 'Studio de Beleza',
      text: 'Melhor investimento que fiz! As campanhas de tráfego pago trouxeram clientes novos toda semana. Super recomendo!',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Resultados que falam por si
          </p>
          <div className="inline-block bg-gradient-to-r from-primary to-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold">
            +30 negócios atendidos com resultados reais 📈
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-primary opacity-20">
                <Quote size={48} />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
