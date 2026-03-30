"use client"

import { useEffect, useRef, useState, useCallback } from "react"
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
  { src: "/images/gallery/image15.jpg", alt: "Catering event setup", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery/image16.jpg", alt: "CHAAT COUNTER", span: "md:col-span-2" },
  { src: "/images/gallery/image17.jpg", alt: "hightea", span: "" },
  { src: "/images/gallery/image18.jpg", alt: "hightea", span: "" },
  { src: "/images/gallery/image19.jpg", alt: "Premium Falooda", span: "md:col-span-2" },
  { src: "/images/gallery/image20.jpg", alt: "healthy coconut", span: "" },
  { src: "/images/gallery/image21.jpg", alt: "Corporate catering arrangement", span: "" },
  { src: "/images/gallery/image22.jpg", alt: "Corporate catering service", span: "md:col-span-2" },
  { src: "/images/gallery/image23.jpg", alt: "Corporate preparing dishes", span: "" },
  { src: "/images/gallery/image24.jpg", alt: "Buffet food presentation", span: "" },
  { src: "/images/gallery/image25.jpg", alt: "Corporate catering service", span: "" },
  { src: "/images/gallery/image26.jpg", alt: "Corporate catering service", span: "md:col-span-2" },
  { src: "/images/gallery/image27.jpg", alt: "Corporate chaat catering setup", span: "" },
  { src: "/images/gallery/image28.jpg", alt: "Corporate chaat catering setup", span: "" }
  { src: "/images/gallery/image29.jpg", alt: "Catering event setup", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery/image30.jpg", alt: "Indian catering buffet", span: "md:col-span-2" },
  { src: "/images/gallery/image31.jpg", alt: "Chaat counter", span: "" },
  { src: "/images/gallery/image32.jpg", alt: "Chaat counter", span: "" },
  { src: "/images/gallery/image33.jpg", alt: "Chaat counter", span: "md:col-span-2" },
  { src: "/images/gallery/image34.jpg", alt: "Chaat counter", span: "" },
  { src: "/images/gallery/image35.jpg", alt: "Chaat counter", span: "" },
  { src: "/images/gallery/image36.jpg", alt: "Event catering service", span: "md:col-span-2" },
]

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  // Track which image is displayed at each grid position
  const [imagePositions, setImagePositions] = useState<number[]>(() => 
    galleryImages.map((_, i) => i)
  )
  
  // Track which images are currently swapping for animation
  const [swappingPair, setSwappingPair] = useState<[number, number] | null>(null)

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

  // Swap animation logic
  const performSwap = useCallback(() => {
    if (hoveredIndex !== null) return // Don't swap while hovering
    
    // Pick two random different positions to swap
    const pos1 = Math.floor(Math.random() * galleryImages.length)
    let pos2 = Math.floor(Math.random() * galleryImages.length)
    while (pos2 === pos1) {
      pos2 = Math.floor(Math.random() * galleryImages.length)
    }
    
    // Start the swap animation
    setSwappingPair([pos1, pos2])
    
    // After animation completes, update positions
    setTimeout(() => {
      setImagePositions(prev => {
        const newPositions = [...prev]
        const temp = newPositions[pos1]
        newPositions[pos1] = newPositions[pos2]
        newPositions[pos2] = temp
        return newPositions
      })
      setSwappingPair(null)
    }, 1200) // Match animation duration
  }, [hoveredIndex])

  // Set up interval for continuous swapping
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(performSwap, 3500) // Swap every 3.5 seconds
    return () => clearInterval(interval)
  }, [isVisible, performSwap])

  return (
    <>
      {/* CSS Keyframe Animations */}
      <style jsx global>{`
        .gallery-swap-container {
          perspective: 1000px;
        }
        
        .gallery-image-card {
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .gallery-image-card.swapping-out {
          animation: flipOut 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .gallery-image-card.swapping-in {
          animation: flipIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes flipOut {
          0% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotateY(90deg) scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: rotateY(180deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes flipIn {
          0% {
            transform: rotateY(-180deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotateY(-90deg) scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
        }
        
        /* Subtle floating animation when not swapping */
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-4px) rotateY(2deg);
          }
        }
        
        .gallery-image-card.floating {
          animation: gentleFloat 6s ease-in-out infinite;
        }
        
        .gallery-image-card.floating:nth-child(odd) {
          animation-delay: -3s;
        }
        
        .gallery-image-card.floating:nth-child(3n) {
          animation-duration: 7s;
        }
        
        .gallery-image-card.floating:nth-child(4n) {
          animation-duration: 5s;
          animation-delay: -1.5s;
        }
        
        /* Hover state */
        .gallery-image-wrapper:hover .gallery-image-card {
          animation-play-state: paused !important;
          transform: scale(1.05) rotateY(0deg) !important;
        }
        
        .gallery-image-wrapper:hover {
          z-index: 20;
        }
        
        /* Smooth image transition */
        .gallery-image-inner {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .gallery-image-wrapper:hover .gallery-image-inner {
          transform: scale(1.08);
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

          {/* Masonry Grid with swapping animation */}
          <div className="gallery-swap-container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {galleryImages.map((gridSlot, gridIndex) => {
              const imageIndex = imagePositions[gridIndex]
              const img = galleryImages[imageIndex]
              const isSwapping = swappingPair && (swappingPair[0] === gridIndex || swappingPair[1] === gridIndex)
              const isSwappingOut = swappingPair && swappingPair[0] === gridIndex
              const isSwappingIn = swappingPair && swappingPair[1] === gridIndex
              
              return (
                <div
                  key={gridIndex}
                  className={`gallery-image-wrapper group relative cursor-pointer overflow-hidden rounded-sm ${gridSlot.span} transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${gridIndex * 80}ms` }}
                  onClick={() => setSelectedImage(img.src)}
                  onMouseEnter={() => setHoveredIndex(gridIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div 
                      className={`gallery-image-card relative aspect-square overflow-hidden ${
                        isSwappingOut ? 'swapping-out' : 
                        isSwappingIn ? 'swapping-in' : 
                        (isVisible && !isSwapping ? 'floating' : '')
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={600}
                        className="gallery-image-inner w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-transparent transition-all duration-300 group-hover:bg-black/10" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="font-mono text-xs text-cream">{img.alt}</p>
                    </div>
                    {/* Gold corner accent */}
                    <div className="absolute left-0 top-0 h-0 w-0 border-l-2 border-t-2 border-gold/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/60" />
                    <div className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-r-2 border-gold/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/60" />
                  </div>
                </div>
              )
            })}
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
            className="absolute right-6 top-6 font-mono text-2xl text-white/60 transition-colors hover:text-white"
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
