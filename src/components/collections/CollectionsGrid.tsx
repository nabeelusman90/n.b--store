import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Electronics',
    description: 'Latest gadgets and tech accessories',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    title: 'Watches',
    description: 'Luxury timepieces and accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    color: 'from-amber-500 to-red-500',
  },
  {
    id: 3,
    title: 'Smart Home',
    description: 'Connected devices for modern living',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Audio',
    description: 'Premium sound equipment',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    color: 'from-purple-500 to-pink-500',
  },
];

export const CollectionsGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative h-[400px] overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-60`} />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-white text-lg mb-4">{collection.description}</p>
                <button className="flex items-center text-white font-medium group/button">
                  <span className="border-b-2 border-transparent group-hover/button:border-white transition-all">
                    Shop Collection
                  </span>
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover/button:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}