'use client';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'service_click', {
        service_name: title,
      });
    }
  };

  return (
    <div className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
         style={{ backgroundImage: `url(${image})` }}
         onClick={handleClick}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-75 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 line-clamp-2">{description}</p>
        
          href={href}
          className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit"
        >
          Ver Detalle →
        </a>
      </div>
    </div>
  );
}
