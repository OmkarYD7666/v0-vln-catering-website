"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery/image1.jpg", alt: "Catering event setup", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery/image2.jpg", alt: "Indian catering buffet", span: "md:col-span-2" },
  { src: "/images/gallery/image3.jpg", alt: "Premium catering dish", span: "" },
  { src: "/images/gallery/image4.jpg", alt: "Live catering counter", span: "" },
  { src: "/images/gallery/image5.jpg", alt: "Luxury catering setup", span: "md:col-span-2" },
  { src: "/images/gallery/image6.jpg", alt: "Traditional Indian dish", span: "" },
  { src: "/images/gallery/image7.jpg", alt: "Wedding catering arrangement", span: "" },
  { src: "/images/gallery/image8.jpg", alt: "Event catering service", span: "md:col-span-2" },
  { src: "/images/gallery/image9.jpg", alt: "Chef preparing dishes", span: "" },
  { src: "/images/gallery/image10.jpg", alt: "Buffet food presentation", span: "" },
  { src: "/images/gallery/image11.jpg", alt: "Premium catering dishes", span: "" },
  { src: "/images/gallery/image12.jpg", alt: "Indian catering thali", span: "md:col-span-2" },
  { src: "/images/gallery/image13.jpg", alt: "Traditional catering setup", span: "" },
  { src: "/images/gallery/image14.jpg", alt: "Luxury food presentation", span: "" }
]

// Different animation variants for variety
const floatVariants = [
  "animate-float-1",
  "animate-float-2",
  "animate-float-3",
  "animate-float-4",
]

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* CSS Keyframe Animations */}
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(3px, -4px) rotate(0.5deg);
          }
          50% {
            transform: translate(-2px, 3px) rotate(-0.5deg);
          }
          75% {
            transform: translate(4px, 2px) rotate(0.3deg);
          }
        }
        
        @keyframes float-2 {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(-4px, 3px) rotate(-0.6deg);
          }
          50% {
            transform: translate(3px, -3px) rotate(0.4deg);
          }
          75% {
            transform: translate(-2px, -4px) rotate(-0.3deg);
          }
        }
        
        @keyframes float-3 {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(2px, 4px) rotate(0.4deg);
          }
          50% {
            transform: translate(-3px, -2px) rotate(-0.6deg);
          }
          75% {
            transform: translate(-4px, 3px) rotate(0.5deg);
          }
        }
        
        @keyframes float-4 {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(-3px, -3px) rotate(-0.4deg);
          }
          50% {
            transform: translate(4px, 2px) rotate(0.6deg);
          }
          75% {
            transform: translate(2px, -4px) rotate(-0.5deg);
          }
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 9s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float-4 11s ease-in-out infinite;
        }
        
        .gallery-image-wrapper:hover .gallery-float-image {
          animation-play-state: paused;
          transform: scale(1.08) rotate(0deg) !important;
        }
        
        .gallery-float-image {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      <section
        id="gallery"
        ref={sectionRef}
        className="relative bg-darker-bg py-24 lg:py-32"
      >
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Gallery
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
              A Visual <span className="text-gold-gradient">Feast</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              A glimpse into our world of exquisite flavours, elaborate setups, and unforgettable events.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className={`gallery-image-wrapper group relative cursor-pointer overflow-hidden rounded-sm ${img.span} transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={600}
                      className={`gallery-float-image w-full h-full object-cover ${
                        isVisible ? floatVariants[index % floatVariants.length] : ""
                      }`}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-mono text-xs text-cream">{img.alt}</p>
                  </div>
                  {/* Gold corner accent */}
                  <div className="absolute left-0 top-0 h-0 w-0 border-l-2 border-t-2 border-gold/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/60" />
                  <div className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-r-2 border-gold/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 font-mono text-2xl text-cream/60 transition-colors hover:text-cream"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            {"x"}
          </button>
          <div className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-sm">
            <Image
              src={selectedImage}
              alt="Gallery image fullscreen"
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto object-contain"
              quality={90}
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
