import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-9 w-full border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "flex h-10 border border-input rounded bg-background px-3 py-2 text-sm  placeholder:text-black disabled:opacity-50 bg-white text-black focus-visible:outline-primary focus-visible:shadow-lg focus-visible:shadow-orange-500/50",
        secondary:
          "flex h-10 border border-input bg-background px-3 py-2 text-lg font-medium placeholder:text-white disabled:opacity-50 bg-secondary text-white focus-visible:outline-primary focus-visible:shadow-lg focus-visible:shadow-orange-500/50",
        outline:
          "border border-input text-lg rounded-md font-semibold focus-visible:outline-primary focus-visible:shadow-lg focus-visible:shadow-orange-300/60",
      },
      size: {
        default: "min-w-full px-4 py-2",
        xs: "w-24 px-1 py-1",
        sm: "w-3/12",
        lg: "w-6/12 ",
        xl: "w-8/12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";
    return (
      <Comp
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
