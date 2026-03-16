"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// Client logos data with actual logo images
const clients = [
  { name: "SLB", logo: "/logos/slb.png" },
  { name: "ABIL", logo: "/logos/abil.png" },
  { name: "Michelin", logo: "/logos/michelin.png" },
  { name: "Amdocs", logo: "/logos/amdocs.jpg" },
  { name: "Four Points", logo: "/logos/fourpoints.png" },
  { name: "Hyatt", logo: "/logos/hyatt.png" },
  { name: "Hyatt Regency", logo: "/logos/hyatt-regency.png" },
  { name: "Pitney Bowes", logo: "/logos/pitneybowes.png" },
]

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "Hyatt Pune",
    eventType: "Corporate Event",
    rating: 5,
    review: "VLN Catering exceeded our expectations. The food quality and presentation were impeccable, and our guests couldn't stop praising the service.",
    initials: "RS",
  },
  {
    id: 2,
    name: "Priya Mehta",
    company: "Private Celebration",
    eventType: "Wedding",
    rating: 5,
    review: "Our wedding reception was nothing short of magical thanks to VLN. Every dish was a masterpiece, and the team handled everything flawlessly.",
    initials: "PM",
  },
  {
    id: 3,
    name: "Amit Kulkarni",
    company: "Amdocs",
    eventType: "Corporate Event",
    rating: 5,
    review: "Professional service from start to finish. VLN has been our trusted catering partner for all company events. Highly recommended!",
    initials: "AK",
  },
  {
    id: 4,
    name: "Sneha Deshmukh",
    company: "Private Party",
    eventType: "Birthday Celebration",
    rating: 5,
    review: "The attention to detail was remarkable. From appetizers to desserts, every course was thoughtfully prepared and beautifully presented.",
    initials: "SD",
  },
  {
    id: 5,
    name: "Vikram Patel",
    company: "Four Points by Sheraton",
    eventType: "Banquet Service",
    rating: 5,
    review: "VLN consistently delivers excellence. Their team understands the standards we require and always meets them with exceptional quality.",
    initials: "VP",
  },
  {
    id: 6,
    name: "Anita Joshi",
    company: "Family Gathering",
    eventType: "Anniversary",
    rating: 5,
    review: "Celebrating our 25th anniversary was made special by VLN's exquisite cuisine. The traditional dishes brought back wonderful memories.",
    initials: "AJ",
  },
  {
    id: 7,
    name: "Suresh Nair",
    company: "Michelin EON IT Park",
    eventType: "Corporate Lunch",
    rating: 5,
    review: "Our employees look forward to VLN's catering days. The variety, taste, and hygiene standards are consistently outstanding.",
    initials: "SN",
  },
  {
    id: 8,
    name: "Kavita Reddy",
    company: "Grand Wedding",
    eventType: "Wedding",
    rating: 5,
    review: "Over 500 guests and not a single complaint! VLN managed our wedding feast with grace and expertise. Truly the best in Pune.",
    initials: "KR",
  },
  {
    id: 9,
    name: "Manish Gupta",
    company: "SLB Commerzone",
    eventType: "Corporate Event",
    rating: 4,
    review: "Reliable, professional, and delicious. VLN has been serving our corporate events for years and they never disappoint.",
    initials: "MG",
  },
  {
    id: 10,
    name: "Deepa Iyer",
    company: "Private Celebration",
    eventType: "Engagement Party",
    rating: 5,
    review: "The live counters were a huge hit! VLN's team brought energy and expertise to our engagement celebration. Absolutely wonderful!",
    initials: "DI",
  },
]

// Infinite scrolling logo carousel component
function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  
  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade on edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />
      
      {/* Scrolling container */}
      <div 
        className={`flex gap-6 ${isPaused ? '[animation-play-state:paused]' : ''}`}
        style={{
          animation: 'scroll 30s linear infinite',
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="group flex min-w-[160px] flex-col items-center justify-center rounded-lg border border-border/20 bg-card/50 p-5 transition-all duration-300 hover:border-[#C9A227]/30 hover:bg-card sm:min-w-[180px] md:min-w-[200px]"
          >
            {/* Logo image */}
            <div className="mb-3 flex h-[70px] w-full items-center justify-center sm:h-[80px]">
              <div className="relative h-[70px] w-[140px] grayscale transition-all duration-300 group-hover:grayscale-0 sm:h-[80px] sm:w-[160px]">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="160px"
                  unoptimized
                />
              </div>
            </div>
            <span className="text-center font-sans text-xs font-medium text-cream/60 transition-colors duration-300 group-hover:text-cream sm:text-sm">
              {client.name}
            </span>
          </div>
        ))}
      </div>

      {/* CSS animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(rating)
              ? "fill-[#C9A227] text-[#C9A227]"
              : star - 0.5 === rating
              ? "fill-[#C9A227]/50 text-[#C9A227]"
              : "fill-transparent text-[#C9A227]/30"
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="group h-full rounded-lg border border-border/30 bg-card p-6 transition-all duration-300 hover:border-[#C9A227]/30 hover:shadow-lg hover:shadow-[#C9A227]/5">
      {/* Header with avatar and info */}
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 font-sans text-sm font-semibold text-[#C9A227]">
          {testimonial.initials}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate font-sans text-base font-semibold text-cream">
            {testimonial.name}
          </h4>
          <p className="truncate font-mono text-xs text-muted-foreground">
            {testimonial.company}
          </p>
          <span className="inline-block rounded-sm bg-[#C9A227]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#C9A227]">
            {testimonial.eventType}
          </span>
        </div>
      </div>

      {/* Star rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review text */}
      <p className="line-clamp-4 font-mono text-sm leading-relaxed text-cream/80">
        &ldquo;{testimonial.review}&rdquo;
      </p>
    </div>
  )
}

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play functionality
  useEffect(() => {
    if (!api) return

    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="relative bg-background py-24 lg:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Our Clients - Logo Grid Section */}
        <div
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-[#C9A227]">
              Trusted Partners
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
              Our <span className="text-gold-gradient">Clients</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#C9A227]/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
              <div className="h-px w-12 bg-[#C9A227]/40" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              Proudly serving Pune&apos;s finest hotels, corporate organizations, and distinguished families for over 20 years.
            </p>
          </div>

          {/* Client Logos Carousel */}
          <LogoCarousel />
        </div>

        {/* Divider */}
        <div className="mb-20 flex items-center justify-center">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
        </div>

        {/* Testimonials Section */}
        <div
          className={`transition-all delay-300 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-[#C9A227]">
              Testimonials
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#C9A227]/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
              <div className="h-px w-12 bg-[#C9A227]/40" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              Discover why Pune&apos;s most discerning hosts trust VLN Catering to create
              unforgettable culinary experiences for their most important occasions.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/50 bg-card/80 text-cream/70 backdrop-blur-sm transition-all hover:border-[#C9A227]/50 hover:bg-card hover:text-[#C9A227] lg:-left-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/50 bg-card/80 text-cream/70 backdrop-blur-sm transition-all hover:border-[#C9A227]/50 hover:bg-card hover:text-[#C9A227] lg:-right-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-[#C9A227]"
                      : "w-2 bg-[#C9A227]/30 hover:bg-[#C9A227]/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
