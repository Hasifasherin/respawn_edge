"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "../../lib/utils"

export default function Hero() {
  const images = [
    "/assets/slider1.jpg",
    "/assets/slider2.jpg",
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <section className="w-full flex justify-center mt-0 pt-0 px-4 sm:px-6">

      {/* Box Container */}
      <div
        className="
          relative 
          w-full 
          max-w-6xl 
          h-[320px] sm:h-[400px] md:h-[520px]
          overflow-hidden
          rounded-[30px] sm:rounded-[40px]
          border border-blue-400/30
          shadow-2xl
        "
      >
        {/* Slider */}
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] h-full"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
            GAME. CHILL. DOMINATE.
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8">
            Premium gaming experience with ultimate comfort and performance.
          </p>

          <button className="
            bg-gradient-to-r from-blue-500 to-purple-600
            px-6 sm:px-8 md:px-10
            py-2 sm:py-3
            text-sm sm:text-base
            rounded-full 
            text-white 
            font-semibold 
            hover:scale-105 
            transition-all 
            duration-300 
            shadow-lg 
            shadow-blue-500/40
          ">
            Explore Now
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2 w-6 sm:w-8 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : "bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

    </section>
  )
}