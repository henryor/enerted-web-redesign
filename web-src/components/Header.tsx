'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">ENERTED</div>
        
        {/* Nav Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#servicios" className="text-gray-700 hover:text-primary transition">Servicios</a>
          <a href="#nosotros" className="text-gray-700 hover:text-primary transition">Nosotros</a>
          <a href="/blog" className="text-gray-700 hover:text-primary transition">Blog</a>
          <a href="#contacto" className="text-gray-700 hover:text-primary transition">Contacto</a>
        </nav>

        {/* CTA */}
        
          href="https://wa.me/573156338081"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden md:block"
        >
          Cotizar
        </a>

        {/* Hamburguesa Mobile */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  );
}
