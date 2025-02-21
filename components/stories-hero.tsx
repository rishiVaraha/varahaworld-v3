import * as React from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/legacy/image";

interface StoriesHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  image: string | StaticImageData;
  text: string;
}

const StoriesHero: React.ForwardRefExoticComponent<
  StoriesHeroProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, StoriesHeroProps>(
  ({ className, image, text }) => (
    <div
      className={cn(
        "relative  max-h-[40vh] w-full overflow-hidden bg-cover bg-no-repeat md:max-h-[60vh] lg:max-h-[80vh]",
        className
      )}
    >
      <div className="flex items-center justify-center bg-black/50  backdrop-blur-xl">
        <Image className="opacity-70" src={image} alt="" />
      </div>

      <div className="absolute bottom-4 left-0 w-full px-4 md:px-10 lg:bottom-10 lg:left-28 lg:max-w-4xl lg:px-0">
        <h1 className="font-playfair text-xl !leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
          {text}
        </h1>
      </div>
    </div>
  )
);

StoriesHero.displayName = "Wrapper";

export default StoriesHero;
