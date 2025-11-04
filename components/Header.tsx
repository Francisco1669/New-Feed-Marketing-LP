'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Início' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className={`max-w-3xl mx-auto backdrop-blur-md rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-xl shadow-primary/10'
            : 'bg-white/70 shadow-lg'
        }`}
      >
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className="text-xl font-bold">
              <span className="text-primary">New Feed</span>
              <span className="text-secondary hidden sm:inline"> Marketing</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-primary transition-colors font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="https://wa.me/5555999948112"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-orange-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all font-semibold text-sm"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-secondary hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/5555999948112"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-primary to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-semibold text-center"
                >
                  Fale Conosco
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
