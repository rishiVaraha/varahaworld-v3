import { cn } from "@/lib/utils";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  return (
    <div className="lg:hidden">
      <button className="group relative" onClick={() => setIsOpen(!isOpen)}>
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200">
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            <div
              className={cn(
                "h-[2px] w-7 origin-left transform bg-white transition-all duration-300",
                isOpen && "translate-x-10"
              )}
            ></div>
            <div
              className={cn(
                "h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300",
                isOpen && "translate-x-10"
              )}
            />
            <div
              className={cn(
                "h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300",
                isOpen && "translate-x-10"
              )}
            />

            <div
              className={cn(
                "absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ",
                isOpen && "w-12 translate-x-0"
              )}
            >
              <div className="absolute h-[2px] w-5  rotate-45 transform bg-white transition-all delay-300 duration-500"></div>
              <div className="absolute h-[2px] w-5  -rotate-45 transform bg-white transition-all delay-300 duration-500"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
