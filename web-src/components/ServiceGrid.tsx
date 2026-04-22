'use client';

import { services } from '@/lib/constants';
import ServiceCard from './ServiceCard';

export default function ServiceGrid() {
  return (
    <section id="servicios" className="py-20 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-dark">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluciones especializadas para transformar tu industria
        </p>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
