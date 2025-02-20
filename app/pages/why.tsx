import Wrapper from "@/components/wrapper";

import { ReactComponent as Icon1 } from "@/public/icons/icon1.svg";
import { ReactComponent as Icon2 } from "@/public/icons/icon2.svg";
import { ReactComponent as Icon3 } from "@/public/icons/icon3.svg";
import { ReactComponent as Icon4 } from "@/public/icons/icon4.svg";
import { ReactComponent as Icon5 } from "@/public/icons/icon5.svg";
import { ReactComponent as Icon6 } from "@/public/icons/icon6.svg";

export default function Why() {
  return (
    <Wrapper className="relative flex flex-col space-y-5">
      <div>
        <h1 className="font-playfair text-sm md:text-base lg:text-xl">
          Why Varaha Heritage
        </h1>

        {/* border */}
        <div className="h-[1px] w-full bg-foreground/50" />
      </div>

      {/* blur div */}
      <div className="absolute left-[-100px] top-0 size-36 bg-gradient-radial from-[#4F0787] blur-3xl" />

      <div className="flex flex-col space-y-5">
        <h1 className="font-playfair text-[25px] font-bold md:text-3xl lg:text-[35px] 2xl:text-[40px]">
          Strength
        </h1>
        <p className="pb-3 text-sm text-foreground/90 md:pb-5 lg:text-base">
          What sets Varaha Heritage apart is not just our technology, but our
          unwavering commitment to excellence and authenticity. We combine
          state-of-the-art scanning techniques with a deep respect for cultural
          heritage, ensuring that each digitized object retains its unique
          identity and historical significance. Our strength lies in our ability
          to merge tradition with innovation, preserving the past while
          embracing the future.
        </p>
        <div className="flex flex-col items-center justify-between gap-8 child:text-base child:text-foreground/90 lg:flex-row lg:gap-4 child:lg:text-xl">
          <div className="flex h-24 w-full items-center justify-center gap-4 space-x-4 border-2 border-foreground px-4 lg:h-32 lg:max-w-[485px] xl:space-x-10 xl:px-8">
            <Icon1 className="size-20" />
            <p>Affordable solutions for heritage institutions </p>
          </div>
          <div className="flex h-24 w-full items-center justify-center gap-4 space-x-4 border-2 border-foreground  px-4 lg:h-32 lg:max-w-[485px] xl:space-x-10 xl:px-8">
            <Icon2 className="size-20" />
            <p>User-friendly technology for easy implementation </p>
          </div>
          <div className="flex h-24 w-full items-center justify-center gap-4 space-x-4 border-2 border-foreground  px-4 lg:h-32 lg:max-w-[485px] xl:space-x-10 xl:px-8">
            <Icon3 className="size-20" />
            <p>Scalable solutions to grow with your needs </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5 pt-5 lg:pb-5 lg:pt-10">
        <h1 className="font-playfair text-[25px] font-bold md:text-3xl lg:text-[35px] 2xl:text-[40px]">
          Benefits
        </h1>
        <p className="pb-3 text-sm text-foreground/90 md:pb-5 lg:text-base">
          Say goodbye to heritage headaches! Varaha Heritage makes digitizing
          and documenting your treasures a breeze. Move effortlessly between
          physical artifacts, digital archives, and even explore phygital
          monetization options. We offer ready-made solutions for managing
          collections, digitization workflows, and collaboration tools all in
          one place. Our solutions are so easy, you might think they&apos;re too
          good to be true.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-8 child:text-base child:text-foreground/90 lg:flex-row lg:gap-4 child:lg:text-xl">
        <div className="flex h-24 w-full items-center justify-center gap-4 space-x-4 border-2 border-foreground  px-4 lg:h-32 lg:max-w-[485px] xl:space-x-10 xl:px-8">
          <Icon4 className="size-20" />
          <p>Increased accessibility to heritage for a wider audience </p>
        </div>
        <div className="flex h-24 w-full items-center justify-center gap-4 space-x-4 border-2 border-foreground  px-4 lg:h-32 lg:max-w-[485px] xl:space-x-10 xl:px-8">
          <Icon5 className="size-20" />
          <p>Enhanced visitor engagement and education </p>
        </div>
        <div className="flex h-24 w-full items-center justify-center gap-4 space-x-4 border-2 border-foreground  px-4 lg:h-32 lg:max-w-[485px] xl:space-x-10 xl:px-8">
          <Icon6 className="size-20" />
          <p>New revenue streams through online platforms </p>
        </div>
      </div>
    </Wrapper>
  );
}
