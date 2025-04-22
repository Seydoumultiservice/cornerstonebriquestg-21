
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Utilisation des images chargées par l'utilisateur
const images = [
  "/lovable-uploads/0d785652-336c-4ddb-9369-1a11b73674c1.png",
  "/lovable-uploads/1fbdfa4a-8390-4d00-b613-77c259841a6f.png",
  "/lovable-uploads/3f0cee3a-c66e-454f-afad-9f201c95b3b6.png",
  "/lovable-uploads/b07aa7d4-7fda-47a3-babd-c0ffc56c3d9a.png",
  "/lovable-uploads/eb145d05-2402-4da8-9fbd-34bfdfdecd32.png"
];

const intervals = [10000, 8000, 5000]; // en millisecondes

const ImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [intervalIndex, setIntervalIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const scrollNext = () => {
      api.scrollNext();
      setIntervalIndex((prev) => (prev + 1) % intervals.length);
    };

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
              <div className="absolute inset-0 bg-white/30"></div>
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
