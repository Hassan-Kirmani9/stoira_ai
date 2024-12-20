'use client'

import { useState, useEffect } from "react"
import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "John Doe",
    role: "John Doe",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: 5,
  },
  {
    name: "Steve Smith",
    role: "Steve Smith",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: 5,
  },
  {
    name: "Kristen",
    role: "Kristen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: 5,
  },
  {
    name: "Kristen",
    role: "Kristen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: 5,
  },
  {
    name: "Kristen",
    role: "Kristen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: 5,
  },
  {
    name: "Kristen",
    role: "Kristen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: 5,
  },
]

export function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesPerView = {
    mobile: 1,
    desktop: 3,
  }
  
  const totalSlides = testimonials.length
  const totalSlidesVisible = window.innerWidth >= 768 ? slidesPerView.desktop : slidesPerView.mobile
  const maxSlideIndex = totalSlides - totalSlidesVisible

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [maxSlideIndex])

  const handleDotClick = () => {
    setCurrentSlide(index)
  }

  return (
    <div className=" max-w-2xl px-4 py-12">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / totalSlidesVisible)}%)`,
            width: `${(totalSlides / totalSlidesVisible) * 100}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-none w-full md:w-1/3"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-4 bg-blue-600" : "bg-blue-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

