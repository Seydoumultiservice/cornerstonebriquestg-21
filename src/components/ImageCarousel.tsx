
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Utilisation des nouvelles images chargées
const images = [
  "/lovable-uploads/dcea2990-4842-413e-93da-d20880beba51.png",
  "/lovable-uploads/127e4ffa-7afc-4ee0-ac18-f037fc31f377.png",
  "/lovable-uploads/cb336614-2f01-411b-9a54-d393f321fef1.png",
  "/lovable-uploads/63c49fa0-42af-4afe-8c10-b4cef0193b31.png",
  "/lovable-uploads/4d868688-dd1c-4537-bca8-80a23fc3e52f.png",
  "/lovable-uploads/aed86bea-eec6-4d26-b96b-e695c4818ad1.png",
  "/lovable-uploads/d916edf3-d8aa-4b38-83fc-cb851342fd5c.png",
  "/lovable-uploads/daa88119-0787-491c-babb-3de9c11eed31.png"
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
