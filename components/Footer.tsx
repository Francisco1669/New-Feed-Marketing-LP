import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">New Feed</span> Marketing
            </h3>
            <p className="text-gray-300 mb-4">
              Ajudamos empresas a crescer no Instagram e vender mais 🚀
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/newfeed.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Duque de Caxias, 1570 sala 301<br />
                  Uruguaiana, Rio Grande do Sul, Brasil
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-primary" />
                <a
                  href="https://wa.me/5555999948112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (55) 99994-8112
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-primary" />
                <span className="text-gray-300">contato@newfeed.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} New Feed Marketing — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
