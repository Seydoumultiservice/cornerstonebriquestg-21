
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  '/lovable-uploads/ac5ba7f0-1184-47fc-9799-e72a6533109c.png',
  '/lovable-uploads/4666dac9-56b5-43de-88d3-cdf5d141bd4a.png',
  '/lovable-uploads/6cc08641-6389-48ad-8b1b-e54d72bbb219.png',
  '/lovable-uploads/81b06260-a5d2-4692-9f08-65cdad35910f.png',
  '/lovable-uploads/74d126a0-fb81-4d53-a3e5-3c1973f9f26a.png',
  '/lovable-uploads/1fe474bc-f7ce-42a1-a43e-0a44c75ceebb.png',
  '/lovable-uploads/886f30bf-8221-492b-a458-a2eb2b66013e.png'
];

const intervals = [10000, 8000, 5000]; // Intervalles en millisecondes

const ImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [intervalIndex, setIntervalIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Fonction pour passer à la diapositive suivante
    const scrollNext = () => {
      api.scrollNext();
      setCurrentIndex((prev) => (prev + 1) % images.length);
      // Alterner entre les intervalles
      setIntervalIndex((prev) => (prev + 1) % intervals.length);
    };

    // Configurer l'intervalle avec la durée actuelle
    const intervalId = setInterval(scrollNext, intervals[intervalIndex]);
    
    return () => clearInterval(intervalId);
  }, [api, intervalIndex]);

  return (
    <Carousel
      opts={{ loop: true }}
      setApi={setApi}
      className="w-full h-full"
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-[600px]">
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 z-20" />
      <CarouselNext className="absolute right-4 z-20" />
    </Carousel>
  );
};

export default ImageCarousel;
