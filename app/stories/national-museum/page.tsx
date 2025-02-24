import StoriesHero from "@/components/stories-hero";
import NationalImg from "@/public/img/national.png";
import Work1Img from "@/public/images/national/work1.png";
import Work2Img from "@/public/images/national/work2.png";
import Work3Img from "@/public/images/national/work3.png";
import Work4Img from "@/public/images/national/work4.png";
import Image from "next/image";

const NationalMuseum = () => {
  return (
    <div className="relative z-10 bg-background lg:min-h-screen">
      <StoriesHero
        text="Setting Sail Through Time: Varaha Heritage Charts a Course for the National Maritime Heritage Museum "
        image={NationalImg}
        className="bg-[url('/img/national.png')]"
      />
      <div className="mx-4 my-6 flex flex-col gap-10 lg:mx-20 lg:my-20 lg:gap-20 2xl:mx-40">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start xl:gap-0">
          <div className="flex flex-col gap-6 text-base lg:max-w-md lg:gap-16 lg:text-xl xl:max-w-lg 2xl:max-w-2xl">
            <p>
              India&apos;s rich maritime history is about to embark on a
              groundbreaking voyage into the future. Varaha Heritage, a company
              at the forefront of technological preservation, is lending its
              expertise in VR (Virtual Reality) and 3D modeling to create a
              world-class National Maritime Heritage Museum (NMHC). This
              ambitious project promises to be a captivating journey through the
              ages, bridging the gap between visitors and India&apos;s
              fascinating maritime past.
            </p>
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-lg font-bold lg:text-2xl">
                A Treasure Trove of Maritime Marvels{" "}
              </h3>
              <p>
                Imagine a museum that transcends physical limitations. The NMHC,
                with Varaha Heritage&apos;s cutting-edge technology, will
                consolidate a vast collection of artifacts – from ancient
                navigational tools to modern seafaring marvels. This
                comprehensive approach ensures a complete picture of
                India&apos;s maritime heritage, from the Indus Valley
                Civilization to the present day.{" "}
              </p>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-lg font-bold lg:text-2xl">
                Edutainment: Where Learning Meets Immersion{" "}
              </h3>
              <p>
                The NMHC won&apos;t be your typical museum experience. By
                embracing the power of 3D Technology, Varaha Heritage is
                crafting an &quot;edutainment&quot; approach. Interactive
                exhibits and immersive virtual environments will bring history
                to life, allowing visitors to feel the spray of the ocean and
                the thrill of exploration firsthand.{" "}
              </p>
            </div>
          </div>
          <div className="relative w-full lg:h-[525px] lg:w-[698px]">
            <Image
              className="lg:object-right  object-contain size-full"
              src={Work1Img}
              alt="WorkImage"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:gap-20 2xl:gap-40">
          <div className="relative flex-1 lg:w-[634px] h-[475px]">
            <Image
              className="object-contain size-full"
              src={Work2Img}
              alt="workImage"
            />
          </div>
          <div className="flex-1 space-y-4 text-base lg:space-y-6 lg:text-xl ">
            <h3 className="text-lg font-bold lg:text-2xl">
              Photogrammetry: Charting a Course for Precision{" "}
            </h3>
            <p className="text-xl">
              Varaha Heritage is taking a meticulous approach to preserving
              India&apos;s maritime legacy. Photogrammetry, a technique that
              creates detailed 3D models from photographs, will be used to
              meticulously reproduce artifacts. This ensures unmatched accuracy
              and opens doors for the creation of a truly massive digital
              collection within the NMHC
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-20 2xl:gap-40">
          <div className="space-y-4 text-base lg:space-y-6 lg:text-xl flex-1">
            <h3 className="text-lg font-bold lg:text-2xl">
              A New Dawn for Antiquity Reproduction
            </h3>
            <p className="text-xl">
              The NMHC project isn&apos;t just about showcasing the past;
              it&apos;s about shaping the future. By leveraging 3D printing and
              other advanced technologies, Varaha Heritage is paving the way for
              a new era of antiquity reproduction. This could lead to more
              accessible and accurate replicas, fostering a deeper appreciation
              for India&apos;s maritime heritage.
            </p>
          </div>
          <div className="relative flex-1 md:h-[360px] lg:h-[450px] lg:w-[337px]">
            <Image
              className="object-contain size-full"
              src={Work3Img}
              alt="workImage"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:gap-20 2xl:gap-40">
          <div className="relative flex-1 first-line:md:h-[350px] lg:h-[441px]">
            <Image
              className="object-contain size-full"
              src={Work4Img}
              alt="workImage"
            />
          </div>
          <div className="flex-1 space-y-4 text-base lg:space-y-6 lg:text-xl">
            <h3 className="text-2xl font-bold">
              Technology and Heritage: A Perfect Harmony
            </h3>
            <p>
              The NMHC stands as a testament to the power of technology in
              preserving and sharing cultural heritage. Varaha Heritage&apos;s
              involvement ensures an uninterrupted journey through the wonders
              of Indian maritime history. This project is a beacon of
              innovation, demonstrating how the past and present can seamlessly
              intertwine to create a truly unique and unforgettable visitor
              experience.
            </p>
            <p>
              A museum that transcends physical limitations. The NMHC, with
              Varaha Heritage&apos;s cutting-edge technology, will consolidate a
              vast collection of artifacts – unearthed from the vaults of
              institutions across India. This comprehensive approach ensures a
              complete picture of India&apos;s maritime heritage, from the Indus
              Valley Civilization to the present day.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalMuseum;
