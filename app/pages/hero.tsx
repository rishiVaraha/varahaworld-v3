import Wrapper from "@/components/wrapper";

import { ReactComponent as ArrowForward } from "@/public/icons/arrow-forward.svg";
import AnimatedButton from "@/components/custom/animated-button";

import { ReactComponent as Underline } from "@/public/icons/underline.svg";
import Salabhanjika from "@/public/images/salabhanjika.webp";
import VideoTemplate from "@/public/images/Varaha_header02.webp";

import { AnimatedElement } from "@/components/animated-element";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Wrapper className="flex flex-col">
      <div className="relative flex">
        <AnimatedElement direction="left" className="lg:mt-[100px]">
          <div className="my-10 flex flex-[3] flex-col items-start justify-center gap-6 sm:my-20 lg:my-0">
            <div className="font-playfair text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
              <h1 className="mr-2 inline text-foreground/80 sm:mr-3 lg:mr-4">
                Developing Heritage Accessibility Solutions with
              </h1>
              <div className="relative inline-block">
                <h1>3D Technology</h1>
                <Underline className="absolute w-52 bottom-0 ml-0 px-0 sm:ml-2 md:bottom-2 md:px-4 lg:ml-6 lg:px-0 lg:w-full" />
              </div>
            </div>
            <p className="max-w-[800px] text-foreground/90 lg:text-xl">
              In response to the increasing demand for readiness in the digital
              era, the fields of Heritage and Culture require 3D digitization
              and virtual accessibility to engage new audiences and future
              generations. Varaha aims to create solutions which make it
              possible, at scale.
            </p>
            <Link href="/contact">
              <AnimatedButton className="flex h-10 w-[210px] items-center justify-center rounded-none px-4 text-sm uppercase text-primary-foreground lg:h-12 lg:w-[260px]">
                Become a Partner
                <ArrowForward />
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedElement>
        <AnimatedElement direction="right">
          <div className="relative hidden h-[600px] w-[400px] flex-col gap-4 lg:flex">
            <div className="to-gray-9000 absolute left-1/2 top-24 -z-0 size-72 -translate-x-1/2 -translate-y-1/3 transform rounded-full bg-gradient-radial from-orange-400 blur-xl" />
            <div className="relative z-10 h-[680px] w-[400px] flex items-center justify-center">
              <Image
                src={Salabhanjika}
                alt="Hero Image"
                className="object-contain"
              />
            </div>
          </div>
        </AnimatedElement>

        {/* blur div */}
        <div className="absolute -bottom-52 -right-16 hidden h-96 w-[500px] gap-4 rounded-full bg-gradient-to-t from-[#4170DB] to-[#aae1fd63] blur-3xl lg:flex" />
      </div>

      <AnimatedElement direction="zoom-in" animationDuration={0.3}>
        <div className="relative mb-4 flex w-full flex-col gap-4 sm:mb-6 md:mb-10 lg:mb-20">
          <Image
            src={VideoTemplate}
            alt=""
            className="size-full object-contain"
          />
        </div>
      </AnimatedElement>
    </Wrapper>
  );
}
