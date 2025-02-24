import StoriesHero from "@/components/stories-hero";
import haryanaImg from "@/public/img/haryana.png";
import ArtifactImg1 from "@/public/images/haryana/artifact1.png";
import ArtifactImg2 from "@/public/images/haryana/artifact2.png";
import Image from "next/legacy/image";

const Haryana = () => {
  return (
    <div className="relative z-10 bg-background lg:min-h-screen">
      <StoriesHero
        text="Preserving Haryana's Legacy: A Collaboration Between the Department of Archaeology and Varaha Heritage"
        image={haryanaImg}
        className="bg-[url('/img/haryana.png')]"
      />

      <div className="mx-4 my-6 flex flex-col gap-10 lg:mx-20 lg:my-20 lg:gap-20 2xl:mx-40">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start xl:gap-0">
          <div className="flex flex-col gap-6 text-base lg:max-w-md lg:gap-16 lg:text-xl xl:max-w-lg 2xl:max-w-2xl">
            <div className="space-y-6">
              <p>
                Haryana, the land of emperors and saints, sages and scholars,
                stands as a testament to India&apos;s vibrant history. As the
                gateway to North India, Haryana has witnessed pivotal moments
                from ancient battles to the rise and fall of empires. From the
                Indus Valley Civilization to the Mughal era and beyond,
                Haryana&apos;s soil is rich with stories waiting to be
                unearthed.
              </p>
              <p>
                The Department of Archaeology, Haryana, plays a vital role in
                safeguarding this legacy. Through meticulous excavations at
                sites like Nauragabad, Mittathal, and Rakhi Garhi, they have
                brought to light the grandeur of pre-Harappan and Harappan
                cultures, along with countless other historical treasures.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-lg font-bold lg:text-2xl">
                Protecting the Past for the Future
              </h3>
              <p>
                Preserving these monuments and heritage sites is not just about
                safeguarding stones and structures; it&apos;s about protecting
                the cultural identity and rich tapestry of Haryana&apos;s past.
                To ensure these stories continue to inspire future generations,
                the Department of Archaeology, Haryana, is partnering with
                Varaha Heritage, a company at the forefront of technological
                preservation.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full md:h-[500px] lg:h-[700px] border border-red-500">
            <Image
              className="object-contain"
              src={ArtifactImg1}
              alt="artifactIMG"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-16">
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg font-bold lg:text-2xl">
              Varaha Heritage: Ushering in a New Era of Digital Archaeology
            </h3>
            <p className="font text-base font-normal lg:text-xl">
              Varaha Heritage proposes a groundbreaking initiative to 3D
              digitize 100 stone objects from the vast collection entrusted to
              the Department of Archaeology, Haryana. This cutting-edge
              technology will create high-fidelity digital replicas, ensuring
              the preservation of these intricate pieces for years to come.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20 2xl:gap-40">
            <div>
              <Image
                className="size-full"
                src={ArtifactImg2}
                alt="artifactIMG"
              />
            </div>
            <div className="max-w-lg text-base lg:text-xl xl:max-w-3xl">
              <h3 className="pb-6 text-lg font-bold lg:text-2xl">
                The Benefits of 3D Digitization
              </h3>
              <p>This collaboration offers several advantages:</p>
              <ul className="ml-4 list-disc child:py-2">
                <li>
                  <span className="font-bold">Enhanced Preservation:</span> 3D
                  models provide a permanent record of these artifacts,
                  safeguarding them from damage or loss.
                </li>
                <li>
                  <span className="font-bold">Accessibility:</span> Digital
                  replicas allow researchers, students, and the public to access
                  these objects virtually, fostering a deeper appreciation for
                  Haryana&apos;s heritage.
                </li>
                <li>
                  <span className="font-bold">Educational Opportunities:</span>{" "}
                  3D models can be used to create interactive exhibits and
                  educational programs, bringing history to life for new
                  audiences.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-base lg:space-y-6 lg:text-xl">
          <h3 className="text-lg font-bold lg:text-2xl">
            A Shared Vision for the Future
          </h3>
          <p>
            The Department of Archaeology, Haryana, and Varaha Heritage are
            embarking on a journey to ensure Haryana&apos;s cultural legacy
            endures. By leveraging technology, this collaboration will
            illuminate the past for generations to come, fostering a deeper
            understanding and appreciation for the treasures that lie within
            Haryana
          </p>
          <h3 className="text-lg font-bold lg:text-2xl">
            Unveiling Haryana: A Souvenir Channel for Everyday Treasures
          </h3>
          <p>
            Welcome to a journey through the heart of Haryana, the cradle of
            Indian civilization! This channel serves as a bridge between our
            on-site shop and our online store, offering a unique blend of
            cultural knowledge and everyday merchandise.
          </p>
          <h3 className="text-lg font-bold lg:text-2xl">
            More Than Souvenirs, Stories Unwrapped
          </h3>
          <p>
            We believe souvenirs are more than just trinkets. Each item you see
            here embodies a piece of Haryana&apos;s rich heritage, a story
            waiting to be told. Through our daily uploads, we&apos;ll delve into
            the significance behind each product, its connection to
            Haryana&apos;s vibrant past, and the craftsmanship that brings it to
            life.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Haryana;
