"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Play, X } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    title: "Grand Wedding Setup",
    description: "A glimpse into how we transform venues into culinary wonderlands",
    src: "/videos/wedding.mp4",
    poster: "/images/wedding-catering.jpg",
  },
  {
    title: "Live Kitchen in Action",
    description: "Watch our chefs create magic at interactive cooking stations",
    src: "https://videos.pexels.com/video-files/3298572/3298572-uhd_2560_1440_25fps.mp4",
    poster: "/images/live-counter.jpg",
  },
  {
    title: "Corporate Excellence",
    description: "Precision catering for Pune's leading IT companies and corporations",
    src: "/videos/corporate.mp4",
    poster: "/images/corporate-event.jpg",
  },
]

// Video Modal Component
function VideoModal({
  video,
  isOpen,
  onClose,
}: {
  video: (typeof videos)[0] | null
  isOpen: boolean
  onClose: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Auto-play when modal opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      })
    }
  }, [isOpen])

  if (!isOpen || !video) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
        aria-label="Close video"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Video container */}
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
          <video
            ref={videoRef}
            controls
            playsInline
            poster={video.poster}
            className="h-full w-full object-contain"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-sans text-xl font-semibold text-white">
            {video.title}
          </h3>
          <p className="mt-1 font-mono text-sm text-white/70">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function VideoCard({
  video,
  index,
  isVisible,
  onPlay,
}: {
  video: (typeof videos)[0]
  index: number
  isVisible: boolean
  onPlay: () => void
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-border/30 bg-card transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={onPlay}>
        {/* Poster Image */}
        <Image
          src={video.poster}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlay with Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/40">
          <button
            onClick={onPlay}
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/60 bg-black/50 text-gold backdrop-blur-sm transition-all hover:scale-110 hover:border-gold hover:bg-black/70"
            aria-label="Play video"
          >
            <Play className="ml-1 h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 font-sans text-lg font-semibold text-cream">
          {video.title}
        </h3>
        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
          {video.description}
        </p>
      </div>
    </div>
  )
}

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const openVideoModal = useCallback((video: (typeof videos)[0]) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }, [])

  const closeVideoModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }, [])

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

  return (
    <>
      <section ref={sectionRef} className="relative bg-background py-24 lg:py-32">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Experience
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
              See Us <span className="text-gold-gradient">In Action</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              Watch how we orchestrate grand culinary experiences, from meticulous
              preparation to flawless execution.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <VideoCard
                key={video.title}
                video={video}
                index={index}
                isVisible={isVisible}
                onPlay={() => openVideoModal(video)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeVideoModal}
      />
    </>
  )
}
