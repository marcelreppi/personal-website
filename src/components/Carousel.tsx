import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useRef } from "react";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const emblaOptions: EmblaOptionsType = {
    loop: true,
  };
  const autoPlayOptions: AutoplayOptionsType = {
    delay: 3000,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const autoplay = useRef(Autoplay(autoPlayOptions));
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [autoplay.current]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container h-[320px]">
          {images.map((image) => {
            return (
              <div className="embla__slide">
                <Image
                  quality={100}
                  placeholder="blur"
                  height={320}
                  objectFit="contain"
                  src={image}
                />
              </div>
            );
          })}
        </div>
        <button
          className="embla__prev absolute left-0 bottom-1/2 translate-y-1/2 flex"
          onClick={scrollPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.75}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          className="embla__next absolute right-0 bottom-1/2 translate-y-1/2 flex"
          onClick={scrollNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.75}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
