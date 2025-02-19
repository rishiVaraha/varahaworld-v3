import Wrapper from "@/components/wrapper";

import Underline from "@/public/icons/underline.svg?img";
import Trails from "@/public/images/trails.png";

import Image from "next/image";

export default function Mission() {
  return (
    <Wrapper
      className="relative mb-10 flex flex-col space-y-10 lg:mb-24"
      id="mission"
    >
      <div>
        <h1 className="font-playfair text-sm md:text-base lg:text-xl">
          Our Mission
        </h1>

        {/* border */}
        <div className="h-[1px] w-full bg-foreground/50" />

        <div className="mt-4 max-w-3xl font-playfair text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px]">
          <h1 className="inline text-foreground/80">
            Unlocking Heritage for the Future through
          </h1>{" "}
          <div className="relative inline-block">
            <h1>Digital Preservation</h1>
            <Image
              className="absolute bottom-0"
              src={Underline}
              alt="red underline"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/herigateverse.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col justify-between gap-2 md:gap-4">
          <h2 className="text-xl md:text-[25px] lg:text-3xl xl:text-[35px]">
            Why
          </h2>
          <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
            <div className="w-full text-lg child:text-foreground/90 xl:max-w-3xl xl:text-xl">
              <p>
                In an era of rapid change, the digital preservation of heritage
                objects and spaces, especially through 3D digitization, is
                paramount due to its ability to address the monumental challenge
                of safeguarding our cultural legacy.
              </p>
              <br />
              <p>
                With the vast array of undocumented artifacts and sites,
                traditional digitisation methods alone are insufficient. 3D
                digitization offers a comprehensive solution, capturing
                intricate details and enabling immersive experiences that
                transcend physical limitations. However, the scale of this
                endeavor is immense, and current solutions are often limited.
                Therefore, embracing advanced digital technologies is essential
                to ensure the preservation, accessibility, and appreciation of
                our heritage for generations to come.
              </p>
              <br />
              <p>
                Varaha Heritage recognizes the urgency of this task. Our mission
                is to democratize heritage preservation by harnessing
                cutting-edge digital solutions. With advanced 3D scanning and
                documentation techniques, our goal is to develop tools that
                digitally preserve cultural treasures, making them available for
                generations to come.
              </p>
            </div>
            <video
              className="h-full w-full object-cover md:h-[300px] xl:w-[500px] 2xl:h-[400px] 2xl:w-[600px]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/bg1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="bord flex flex-col-reverse justify-between gap-8 xl:flex-row">
          <div className="relative md:h-[500px] xl:h-[874px] xl:w-[600px] 2xl:w-[788px]">
            <Image
              className="h-hull w-full object-contain"
              src={Trails}
              alt="img"
              layout="fill"
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-4 text-lg md:gap-8 xl:max-w-3xl xl:text-xl">
            <h2 className="text-xl md:text-[25px] lg:text-3xl xl:text-[35px]">
              How
            </h2>
            <div className="child:text-foreground/90">
              <h3 className="mb-4 font-playfair text-[25px] italic !text-foreground sm:text-[30px] md:mb-8 md:text-[35px] lg:text-[40px] xl:text-[45px]">
                Speed, Scale, Expertise
              </h3>
              <p>
                Varaha Heritage implements innovative technological frameworks
                tailored to bring speed and accuracy to the end-to-end process
                of 3D documentation. Through a combination of cloud-based
                infrastructure and automated 3D digitization pipelines, we
                streamline the process of heritage preservation, reducing manual
                effort and enhancing efficiency.
              </p>
              <br />
              <p>
                Our platform provides intuitive tools for data management,
                archival, and dissemination, enabling heritage organisation and
                collections to curate, analyze, and share their collections with
                ease. Additionally, we remain committed to continuous
                innovation, embracing emerging technologies to ensure dynamic
                accessibility and engagement with heritage and culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
