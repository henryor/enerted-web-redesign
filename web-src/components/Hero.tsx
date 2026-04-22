'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center justify-center text-white px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        {/* H1 */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in-up">
          Energía, Automatización y Excelencia Industrial
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          Soluciones integrales para la industria colombiana
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          
            href="#servicios"
            className="btn-primary bg-white text-primary hover:bg-gray-100"
          >
            Explorar Servicios
          </a>
          
            href="https://wa.me/573156338081"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Contactar
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce-slow">
          <p className="text-gray-300 mb-2">Desplázate para más</p>
          <div className="text-3xl">↓</div>
        </div>
      </div>
    </section>
  );
}
