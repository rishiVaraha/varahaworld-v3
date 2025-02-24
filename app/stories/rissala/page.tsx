import StoriesHero from "@/components/stories-hero";
import RissalaImg from "@/public/img/rissalaImg.png";
import Collection1Img from "@/public/images/rissala/collection1.png";
import Collection2Img from "@/public/images/rissala/collection2.png";
import Image from "next/image";

const Rissala = () => {
  return (
    <div className="relative z-10 min-h-screen bg-background">
      <StoriesHero
        text="Unveiling a Treasure Trove: The Rissala Heritage Collection with Varaha Heritage"
        image={RissalaImg}
        className="bg-[url('/img/rissalaImg.png')]"
      />
      <div className="mx-4 my-6 flex flex-col gap-10 lg:mx-20 lg:my-20 lg:gap-20 2xl:mx-40">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-6 text-base lg:gap-16 lg:text-xl flex-1">
            <p>
              Step into the world of Rissala Heritage, a private collection
              unlike any other. Here, history whispers through an extraordinary
              array of antiquities, each piece a testament to the rich tapestry
              of human experience. In collaboration with Varaha Heritage, we
              embark on a journey to not only meticulously document this vast
              collection but also share its wonders with the world
            </p>
            <div>
              <h3 className="pb-6 text-lg font-bold lg:text-2xl">
                A Kaleidoscope of Cultures
              </h3>
              <p className="pb-2">
                Rissala Heritage boasts a truly diverse collection, encompassing
                a range that would astound even the most seasoned collector.
              </p>
              <ul className="list-disc child:ml-4 child:py-2">
                <li>
                  <span className="font-bold">The Might of Metal:</span> A
                  captivating display of arms and armor, whispering tales of
                  battles fought and empires forged.
                </li>
                <li>
                  <span className="font-bold">Echoes of the Himalayas:</span>{" "}
                  Exquisite Himalayan art, imbued with the spiritual essence of
                  the mountain kingdom.
                </li>
                <li>
                  <span className="font-bold">
                    India&apos;s Ancient Legacy:
                  </span>{" "}
                  A breathtaking collection of bronze sculptures, each piece a
                  testament to the artistry and devotion of bygone eras.
                </li>
                <li>
                  <span className="font-bold">Whispers of Wood:</span> Wooden
                  sculptures and architectural fragments, offering glimpses into
                  the craftsmanship and architectural styles of a bygone age.
                </li>
              </ul>
              <p className="pt-2">
                The sheer variety in the Rissala Heritage collection is a
                testament to the breadth of human creativity and cultural
                exchange.
              </p>
            </div>
          </div>

          <div className="relative flex-1 md:h-[500px] lg:h-[700px]">
            <Image
              className="size-full object-contain"
              src={Collection1Img}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-16">
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg font-bold lg:text-2xl">
              Varaha Heritage: Capturing the Collection for Eternity
            </h3>
            <p className="font text-base font-normal lg:text-xl">
              Varaha Heritage is honored to be entrusted with the meticulous
              task of digitizing this extraordinary collection. Through
              cutting-edge technology, we are creating a comprehensive digital
              archive that captures every detail of each piece – its form,
              material, provenance, and historical significance. This digital
              record will not only ensure the collection&apos;s preservation but
              also allow for wider access and appreciation.
            </p>
          </div>
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg font-bold lg:text-2xl">
              Sharing the Legacy:
            </h3>
            <div className="flex flex-col justify-between gap-10 lg:flex-row ">
              <div className="relative flex-1">
                <Image
                  className="object-contain lg:object-cover size-full"
                  src={Collection2Img}
                  alt="artifactIMG"
                />
              </div>
              <div className="flex-1">
                <p className="pb-2">
                  Beyond digitization, Varaha Heritage is committed to raising
                  awareness about the Rissala Heritage collection. We believe
                  that these treasures deserve to be known and celebrated by a
                  global audience. Through exhibitions, educational programs,
                  and compelling online content, we aim to:
                </p>

                <ul className="ml-4 list-disc child:py-2">
                  <li>
                    <span className="font-bold">Spark Curiosity:</span> Ignite a
                    passion for history and the beauty of cultural artifacts
                  </li>
                  <li>
                    <span className="font-bold">Bridge the Gap:</span> Foster a
                    deeper understanding of diverse cultures and their artistic
                    expressions.
                  </li>
                  <li>
                    <span className="font-bold">Inspire the Future:</span>{" "}
                    Ensure the legacy of these objects lives on, inspiring
                    future generations to appreciate and protect our shared
                    heritage.
                  </li>
                </ul>
                <p className="pt-2">
                  Join us on this remarkable journey as we unveil the wonders of
                  the Rissala Heritage collection. Together, let&apos;s
                  celebrate the richness of human history and ensure its
                  preservation for generations to come.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rissala;
