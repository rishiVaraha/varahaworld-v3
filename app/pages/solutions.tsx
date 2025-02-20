import Wrapper from "@/components/wrapper";

import Digitize from "@/public/images/digitize.webp";
import Virtualize from "@/public/images/virtualize.webp";
import Monetize from "@/public/images/monetize.webp";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Solutions() {
  return (
    <Wrapper
      className="relative mb-10 flex flex-col space-y-5 md:space-y-10 lg:mb-24"
      id="solution"
    >
      <div>
        <h1 className="font-playfair text-sm md:text-base lg:text-xl">
          Unified Solutions
        </h1>

        {/* border */}
        <div className="h-[1px] w-full bg-foreground/50" />
      </div>

      <div className="flex w-full flex-col justify-center gap-12 lg:items-center">
        <div className="flex flex-col items-baseline gap-4 text-center lg:max-w-[643px] lg:items-center lg:justify-center">
          <h2 className="mx-0 font-playfair text-[25px] md:text-[35px] lg:mx-12 lg:text-[40px] lg:text-foreground/80 xl:text-[50px]">
            Welcome to the
            <span className="text-foreground">
              {" "}
              vision of the open culture world
            </span>
          </h2>
          <p className="text-sm text-foreground/90 sm:text-base md:text-lg">
            Through our innovative solutions, we empower heritage institutions
            to embrace the digital age, unlocking new possibilities for
            education, exploration, and discovery. From virtual museum tours to
            online exhibitions, we help create immersive experiences that
            transcend geographical boundaries and ignite a passion for cultural
            heritage.{" "}
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-start xl:gap-8">
          {/* Digitize */}
          <Link href="/digitize">
            <div className="group relative">
              <div className="relative lg:w-[485px] lg:h-[500px]">
                <Image
                  className="object-cover opacity-55 transition-all duration-500 ease-in-out lg:opacity-100 lg:group-hover:scale-125
                lg:group-hover:opacity-55"
                  src={Digitize}
                  alt="image"
                  layout="fill"
                />

                {/* on hover translate to center with animation */}
                <h2 className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center font-playfair text-[30px]  transition-all  duration-500 lg:bottom-10 lg:top-auto lg:group-hover:translate-y-[-185px] xl:text-[40px] xl:group-hover:translate-y-[-170px]">
                  Digitize
                </h2>
                {/* text will slide to bottom from center with opacity fadein and out */}
                <p className="absolute bottom-5 left-0 right-0 mx-10 text-center text-sm  transition-all duration-500 group-hover:opacity-100 sm:bottom-20 md:text-base lg:bottom-10 lg:translate-y-[-50px] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:animate-opacity xl:translate-y-[-150px]">
                  3D digitizes heritage treasures and antiquities in museums or
                  private collections with exceptional speed and precision using
                  automated processing solutions.
                </p>
              </div>
            </div>
          </Link>
          {/* Virtualize */}
          <Link href={"/virtualize"}>
            <div className="group relative">
              <div className="relative lg:w-[485px] lg:h-[500px]">
                <Image
                  className="object-cover opacity-55 transition-all duration-500 ease-in-out lg:opacity-100 lg:group-hover:scale-125
                lg:group-hover:opacity-55"
                  src={Virtualize}
                  alt="image"
                  layout="fill"
                />
                {/* on hover translate to center with animation */}
                <h2 className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center font-playfair text-[30px] transition-all duration-500  lg:bottom-10 lg:top-auto lg:group-hover:translate-y-[-150px] xl:text-[40px]">
                  Virtualise
                </h2>
                {/* text will slide to bottom from center with opacity fadein and out */}
                <p className="absolute bottom-0 left-0 right-0 mx-10 translate-y-[-50px] text-center text-sm transition-all duration-500  sm:bottom-10 sm:text-base lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:animate-opacity lg:group-hover:opacity-100 xl:translate-y-[-150px]">
                  Online 3D visualisation framework, providing an intuitive and
                  interactive metaverse-ready global access .
                </p>
              </div>
            </div>
          </Link>
          <div className="group relative">
            <div className="relative lg:w-[485px] lg:h-[500px]">
              <Image
                className="object-cover opacity-55 transition-all duration-500 ease-in-out lg:opacity-100 lg:group-hover:scale-125
                lg:group-hover:opacity-55"
                src={Monetize}
                alt="image"
              />
              {/* on hover translate to center with animation */}
              <h2 className="absolute bottom-10 left-0 right-0 top-0 flex items-center justify-center font-playfair text-[30px] transition-all duration-500  lg:top-auto lg:group-hover:translate-y-[-150px] xl:text-[40px]">
                Monetize
              </h2>
              {/* text will slide to bottom from center with opacity fadein and out */}
              <p className="absolute bottom-5 left-0 right-0 mx-10 text-center text-sm transition-all duration-500  group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-24 sm:text-base lg:bottom-10 lg:translate-y-[-50px] lg:opacity-0 lg:group-hover:animate-opacity xl:translate-y-[-150px]">
                Utilize the online shopping revolution to create an efficient
                e-commerce platform for heritage merchandising and cultural
                souvenirs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
