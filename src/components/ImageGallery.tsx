
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/609fee60-8b3e-41f7-8fa5-15a6f3ba33e1.png",
  "/lovable-uploads/e77e0e39-feca-45d0-bbca-d7edfc8939ec.png",
  "/lovable-uploads/e35e187c-9474-4c77-b300-95626e8a879b.png",
  "/lovable-uploads/94d7f4d9-ee45-47d4-9077-bda0f46a4f30.png",
  "/lovable-uploads/4041164f-4b37-462c-baf7-226667e62861.png"
];

const ImageGallery = () => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ImageGallery;
