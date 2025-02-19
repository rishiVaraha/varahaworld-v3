import Wrapper from "@/components/wrapper";
import Ganesha from "@/public/images/ganesha.webp";
import Image from "next/image";

export default function Purpose() {
  return (
    <Wrapper
      className="relative mb-10 mt-5 flex flex-col space-y-5 md:mt-0 lg:mb-24"
      id="purpose"
    >
      <div>
        <h1 className="font-playfair text-sm md:text-base lg:text-xl">
          Our Passion and Purpose
        </h1>

        {/* border */}
        <div className="h-[1px] w-full bg-foreground/50" />
      </div>
      <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-[18px] text-foreground/85 md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px]">
            Varaha Heritage
            <span className="font-bold text-foreground">
              {" "}
              bridges the gap between stories and the audience.{" "}
            </span>{" "}
            We provide solutions starting from the accurate 3D digitisation and
            documentation of the vast treasure of archaeological and heritage
            artifacts, monuments, sites, and artistic expressions, to creating
            digital presence through online and offline tools.
          </p>
        </div>
        <div className="flex w-full items-center justify-center lg:w-[500px] xl:h-[400px] 2xl:w-[600px]">
          <Image
            src={Ganesha}
            alt="ganseha image"
            className="ml-0 object-cover lg:ml-10 xl:ml-40"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 xl:gap-10 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-muted p-4 lg:items-start lg:border-none lg:py-4">
          <h1 className="text-base font-bold lg:text-xl xl:text-2xl">
            Leading Technology Intervention
          </h1>
          <div>
            <p className="text-sm text-foreground/90 xl:text-base">
              The 3D archival is the world-leading technology intervention to
              archive and document heritage treasures, and Varaha is at the
              forefront of this massive transformation.
            </p>
          </div>
        </div>

        {/* border */}
        <div className="hidden h-40 w-[1px] bg-foreground/30 lg:block" />

        <div className="flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-muted p-4 lg:items-start lg:border-none lg:py-4 lg:pl-8">
          <h1 className="text-base font-bold lg:text-xl xl:text-2xl">
            Specialized Solutions
          </h1>
          <div>
            <p className="text-sm text-foreground/90 xl:text-base">
              From automated 3D scanning to virtualization solutions, we
              specialize in creating scalable digitization pipelines that
              streamline the process of preserving and showcasing heritage
              objects.
            </p>
          </div>
        </div>

        {/* border */}
        <div className="hidden h-40 w-[1px] bg-foreground/30 lg:block" />
        <div className="flex w-full flex-col items-start justify-start gap-4 rounded-3xl border border-muted p-4 lg:items-start lg:border-none lg:py-4 lg:pl-8">
          <h1 className="text-base font-bold lg:text-xl xl:text-2xl">
            Bringing Heritage to Life
          </h1>
          <div>
            <p className="text-sm text-foreground/90 xl:text-base">
              Through meticulous attention to detail and innovative
              technologies, we bring ancient artifacts, monuments, and cultural
              landmarks to life in stunning digital detail.
            </p>
          </div>
        </div>
      </div>

      {/* blur div */}
      <div className="absolute  right-10 top-80 flex h-[150px] w-[150px] gap-4 rounded-full bg-gradient-to-t from-[#416fdb9a] to-[#aae1fd63]  blur-3xl sm:bottom-80 sm:left-auto sm:right-56 md:h-[300px] md:w-[300px] lg:right-24 lg:top-60 xl:-right-20 xl:bottom-48 xl:h-[400px] xl:w-[600px]" />
    </Wrapper>
  );
}
