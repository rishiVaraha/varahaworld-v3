"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
// import { BASE_URL } from '@/constant/site'
import { ReactComponent as Prev } from "@/public/icons/prev.svg";
import { ReactComponent as Next } from "@/public/icons/next.svg";

import { useDotButton } from "./EmblaCarouselDotButton";
import rissalaImg from "@/public/img/rissalaImg.png";
import nationalImg from "@/public/img/national.png";
import haryanaImg from "@/public/img/haryana.png";

import { cn } from "@/lib/utils";

import "./css/embla.css";
import Link from "next/link";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.2;

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export interface blogsInter {
  author: string;
  content: string;
  ID: number;
  image: string;
  last_updated_on: Date;
  published: true;
  published_on: string;
  title: string | undefined;
  uuid: string;
  content_html: string;
}

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  // const [blogs, setBlogs] = useState<blogsInter[] | null>(null)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );

  const stories = [
    {
      image: rissalaImg,
      title:
        "Unveiling a Treasure Trove: The Rissala Heritage Collection with Varaha Heritage",
      url: "/stories/rissala",
    },
    {
      image: nationalImg,
      title:
        "Setting Sail Through Time: Varaha Heritage Charts a Course for the National Maritime Heritage Museum",
      url: "/stories/national-museum",
    },
    {
      image: haryanaImg,
      title:
        "Preserving Haryana's Legacy: A Collaboration Between the Department of Archaeology and Varaha Heritage",

      url: "/stories/haryana",
    },
  ];

  // const getBlogs = async () => {
  //   const response = await fetch(BASE_URL + '/blogs-vheritage')
  //   const data = await response.json()
  //   setBlogs(data)
  // }

  // useEffect(() => {
  //   getBlogs()
  // }, [])

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax);
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative overflow-hidden">
      <div className="absolute -top-36 left-1/2 z-10 h-[180px] w-[800px] -translate-x-1/2 transform rounded-[60%] bg-background sm:w-[900px] md:h-56 md:w-[1300px] lg:w-[2000px] lg:rounded-[40%]" />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {stories?.map((data) => (
            <div className="embla__slide" key={data.title}>
              <div className="embla__parallax">
                <Link href={data.url}>
                  <div className="embla__parallax__layer group relative flex flex-col items-center">
                    <Image
                      src={data.image}
                      alt="Image"
                      className="h-[320px] w-full object-cover md:h-[540px] lg:blur-lg "
                    />
                    <div className="absolute inset-0 hidden lg:block">
                      <Image
                        className="embla__slide__img embla__parallax__img scale-x-[0.4] scale-y-[0.7] transition-all duration-500 ease-in-out group-hover:scale-x-[0.5] group-hover:scale-y-[0.9]  group-hover:object-cover"
                        src={data.image}
                        alt="Your alt text"
                      />
                    </div>
                    <div className="absolute bottom-0 hidden h-0 w-full items-end justify-start bg-gradient-to-t from-black via-black/80 to-transparent transition-all duration-500 ease-in-out group-hover:h-[215px] group-hover:w-full group-hover:items-center lg:flex ">
                      <p className="mx-20 hidden text-left font-normal text-white group-hover:block lg:p-3 lg:text-base xl:text-xl">
                        {data.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__prev absolute left-5 top-36 z-40 md:left-10 md:top-64 "
        onClick={scrollPrev}
      >
        <Prev />
      </button>
      <button
        className="embla__next absolute right-5 top-36 z-40 md:right-10 md:top-64 "
        onClick={scrollNext}
      >
        <Next />
      </button>

      <div className="absolute -bottom-36 left-1/2 z-10 flex h-[180px] w-[800px] -translate-x-1/2 transform items-center justify-center rounded-[60%] bg-background sm:w-[900px] md:h-56 md:w-[1300px] lg:w-[2000px] lg:rounded-[40%]"></div>
      <div className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-center gap-3 md:bottom-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "flex size-6 items-center justify-center rounded-full",
              selectedIndex !== index && "text-muted-foreground"
            )}
          >
            <span className="text-xs">0{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
