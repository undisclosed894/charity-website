import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logo from '@/assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-charity-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <img 
                src={logo}
                alt="Vereinshaus Nasira Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Eine interkulturelle, interreligiöse und internationale Initiative für die gesamte Gesellschaft.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/verein" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Verein
                </Link>
              </li>
              <li>
                <Link to="/aktuelle-projekte" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Aktuelle Projekte
                </Link>
              </li>
              <li>
                <Link to="/geplante-projekte" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Geplante Projekte
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Media
                </Link>
              </li>
              <li>
                <Link to="/jahres-ruckblick" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Jahres Rückblick
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@vh-nasira.de" className="text-white/80 hover:text-charity-gold transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white/60" />
                  info@vh-nasira.de
                </a>
              </li>
              <li>
                <a href="tel:015752053347" className="text-white/80 hover:text-charity-gold transition-colors text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white/60" />
                  015752053347
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white font-semibold text-sm mb-2">Vorsitzende</p>
              <p className="text-white/80 text-sm mb-1">Safia Noor</p>
              <a href="mailto:safia.noor@vh-nasira.de" className="text-white/80 hover:text-charity-gold transition-colors text-xs">
                safia.noor@vh-nasira.de
              </a>
            </div>
          </div>

          {/* Column 4: Projects & Social */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wider">Projekte</h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href="mailto:recht@vh-nasira.de" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Recht
                </a>
              </li>
              <li>
                <a href="mailto:integrationslotsen@vh-nasira.de" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Integrationslotsen
                </a>
              </li>
              <li>
                <a href="mailto:frauentreff-int@vh-nasira.de" className="text-white/80 hover:text-charity-gold transition-colors text-sm">
                  Int. Frauentreff
                </a>
              </li>
            </ul>

            <h3 className="font-bold text-white text-base mb-4 uppercase tracking-wider">Social Media</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/nasira_ev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-charity-gold rounded-lg flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Nasira_ev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-charity-gold rounded-lg flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@nasiraev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-charity-gold rounded-lg flex items-center justify-center transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Vereinshaus Nasira (Die Helferin) e.V. · Alle Rechte vorbehalten
          </p>
          <p className="text-white/40 text-xs mt-2 italic">Mit freundlichen Grüßen</p>
        </div>
      </div>
    </footer>
  )
}