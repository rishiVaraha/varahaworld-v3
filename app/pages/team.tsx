import Wrapper from "@/components/wrapper";

import { ReactComponent as TeamCircle } from "@/public/icons/team-circle.svg";

import Hemkant from "@/public/images/hemkant.webp";
import Hitesh from "@/public/images/hitesh.webp";
import Image from "next/image";

export default function Team() {
  return (
    <Wrapper className="mb-4 flex flex-col gap-4 lg:mb-8 lg:gap-10">
      <div>
        <h1 className="font-playfair text-sm md:text-base lg:text-xl">Team</h1>

        {/* border */}
        <div className="h-[1px] w-full bg-foreground/50" />
      </div>
      <div className="relative flex justify-center py-0 lg:py-5">
        <h1 className="font-playfair text-[25px] md:text-3xl lg:text-[40px] xl:text-[45px] 2xl:text-[50px]">
          Meet our Talented Team
        </h1>
        <TeamCircle className="absolute right-0 hidden size-16 lg:block" />
      </div>
      <div className="my-2 flex items-center justify-center gap-8 sm:gap-10 md:gap-16 lg:my-5">
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <Image
            src={Hemkant}
            alt="hemkant"
            className="size-36 md:size-48 lg:size-72 xl:size-80"
          />
          <h2 className="text-sm font-bold md:text-base lg:text-xl">
            Hemkant Tripathi
          </h2>
          <p className="text-xs lg:text-base">Co-Founder</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <div className="relative size-36 md:size-48 lg:size-72 xl:size-80">
            <Image
              src={Hitesh}
              alt="hitesh"
              className="size-full object-cover"
            />
          </div>
          <h2 className="text-base font-bold md:text-base lg:text-xl">
            Hitesh Kumar
          </h2>
          <p className="text-xs lg:text-base">Co-Founder</p>
        </div>
      </div>
    </Wrapper>
  );
}
