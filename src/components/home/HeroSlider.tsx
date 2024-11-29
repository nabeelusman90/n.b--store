import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Premium Electronics',
    description: 'Discover our latest collection of high-end gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&h=900&q=80',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'Luxury Watches',
    description: 'Timeless pieces for the modern individual',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1600&h=900&q=80',
    cta: 'View Collection',
  },
  {
    id: 3,
    title: 'Smart Living',
    description: 'Transform your lifestyle with smart technology',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&h=900&q=80',
    cta: 'Explore More',
  },
];

export const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;
    
    const parallaxBg = currentTarget.querySelector('.parallax-bg') as HTMLElement;
    if (parallaxBg) {
      parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  if (!mounted) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      effect="fade"
      speed={1000}
      className="h-[600px] w-full"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div 
            className="relative h-full w-full hero-slide overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <div className="parallax-bg">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover hero-image"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 hero-overlay" />
            <div className="absolute inset-0 flex items-center justify-center hero-content">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-10 opacity-90">
                  {slide.description}
                </p>
                <Button 
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full transform transition-transform hover:scale-105"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => swiperRef.current?.slideTo(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};