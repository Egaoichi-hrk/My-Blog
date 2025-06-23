import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link 
      href={service.link}
      className="block group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
        <div className="relative w-full h-3/5">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 h-2/5">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
} 