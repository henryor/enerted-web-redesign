'use client';

import { navLinks, whatsappUrl } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + Description */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">ENERTED</div>
            <p className="text-gray-400 text-sm">
              Soluciones integrales en energía, automatización e ingeniería industrial para transformar tu empresa.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition text-sm block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition text-sm block mb-2"
            >
              WhatsApp: +57 315 633 8081
            </a>
            
              href="mailto:henry@kyrbot.com"
              className="text-gray-400 hover:text-primary transition text-sm block"
            >
              Email: henry@kyrbot.com
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 ENERTED Ingeniería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
