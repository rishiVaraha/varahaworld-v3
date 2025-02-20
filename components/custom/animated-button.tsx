import React from "react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const AnimatedButton: React.ForwardRefExoticComponent<
  AnimatedButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => (
    <button ref={ref} className="group relative z-10" {...props}>
      <span
        className={cn(
          "group flex items-center justify-center gap-2  border border-primary bg-primary text-sm uppercase text-primary-foreground",
          className
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "absolute top-0 flex items-center justify-center gap-2 border border-primary bg-transparent text-sm uppercase text-primary-foreground opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-[10px] group-hover:translate-y-[10px] group-hover:opacity-100",
          className
        )}
      />
    </button>
  )
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
