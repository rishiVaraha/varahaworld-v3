import * as React from "react";
import { cn } from "@/lib/utils";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  [x: string]: any;
}

const Wrapper: React.ForwardRefExoticComponent<
  WrapperProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-4 sm:mx-8 md:mx-16 xl:mx-24", className)}
      {...props}
    />
  )
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
