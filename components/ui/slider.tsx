// "use client"

// import * as React from "react"
// import * as SliderPrimitive from "@radix-ui/react-slider"

// import { cn } from "@/lib/utils"

// const Slider = React.forwardRef<
//   React.ElementRef<typeof SliderPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
// >(({ className, ...props }, ref) => (
//   <SliderPrimitive.Root
//     ref={ref}
//     className={cn(
//       "relative flex w-full touch-none select-none items-center",
//       className
//     )}
//     {...props}
//   >
//     <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
//       <SliderPrimitive.Range className="absolute h-full bg-primary" />
//     </SliderPrimitive.Track>
//     <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
//   </SliderPrimitive.Root>
// ))
// Slider.displayName = SliderPrimitive.Root.displayName

// export { Slider }







// components/ui/Slider.tsx
import Image from "next/image";
import { useState, useEffect } from "react";
import { sliderContent } from "@/sliderData";
import { useTheme } from "@/components/theme-context"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden">
      {sliderContent.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Luxury Car ${index + 1}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className={`absolute bottom-10 left-10  ${theme === "dark" ? "text-white" : "text-black"}  z-10`}>
            <h1 className="text-6xl font-bold mb-6">NKRY CARS</h1>
            <p className="text-3xl max-w-md">{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
