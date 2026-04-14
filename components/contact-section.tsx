"use client"

import { useEffect, useRef, useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 88888 72700",
    href: "tel:+918888872700",
    description: "Open 365 Days",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 8888872700",
    href: "https://wa.me/918888872700?text=Hello%20VLN%20Catering!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services.",
    description: "Quick response guaranteed",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "vlneventmangement@gmail.com",
    href: "mailto:vlneventmangement@gmail.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Anand Park, Wadgaon Sheri, Pune, Maharashtra 411014",
    href: "https://maps.app.goo.gl/he1AhmMhctH4bXaW6?g_st=awb",
    description: "Walk-in consultations welcome",
  },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-background py-24 lg:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Get in Touch
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-[#1A1A1A] md:text-5xl">
            Let&apos;s Plan Your <span className="text-gold-gradient">Next Event</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-[#1A1A1A]/70">
            Ready to create an unforgettable culinary experience? Reach out to us through
            any of the channels below. We would love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Contact Methods */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "WhatsApp" || method.label === "Visit Us" ? "_blank" : undefined}
                  rel={method.label === "WhatsApp" || method.label === "Visit Us" ? "noopener noreferrer" : undefined}
                  className="hover-lift group rounded-sm border border-border/30 bg-card p-6 transition-all hover:border-gold/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm border border-gold/20 bg-gold/5 transition-colors group-hover:border-gold/40 group-hover:bg-gold/10">
                    <method.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mb-1 font-sans text-base font-semibold text-[#1A1A1A]">
                    {method.label}
                  </h3>
                  <p className="mb-2 font-mono text-sm text-gold">{method.value}</p>
                  <p className="font-mono text-[11px] text-[#1A1A1A]/70">
                    {method.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-6 rounded-sm border border-gold/15 bg-gold/5 p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-sans text-base font-semibold text-[#1A1A1A]">
                  Business Hours
                </h3>
              </div>
              <p className="mt-3 font-mono text-sm font-medium text-gold">
                Open 365 Days
              </p>
            </div>

            {/* Social Media Buttons */}
            <div className="mt-6 rounded-sm border border-border/30 bg-card p-6">
              <h3 className="mb-4 font-sans text-base font-semibold text-[#1A1A1A]">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-sm border border-gold/20 bg-gold/5 px-4 py-3 font-mono text-sm text-[#1A1A1A] transition-all duration-300 hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 hover:text-[#FF0000]"
                >
                  <Youtube className="h-5 w-5 text-gold transition-colors duration-300 group-hover:text-[#FF0000]" />
                  YouTube
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-sm border border-gold/20 bg-gold/5 px-4 py-3 font-mono text-sm text-[#1A1A1A] transition-all duration-300 hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 hover:text-[#E4405F]"
                >
                  <Instagram className="h-5 w-5 text-gold transition-colors duration-300 group-hover:text-[#E4405F]" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-sm border border-gold/20 bg-gold/5 px-4 py-3 font-mono text-sm text-[#1A1A1A] transition-all duration-300 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
                >
                  <Facebook className="h-5 w-5 text-gold transition-colors duration-300 group-hover:text-[#1877F2]" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div
            className={`transition-all delay-300 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm border border-border/30">
        <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.356391444167!2d73.91899177519253!3d18.557999782542563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13d7d740001%3A0xc66699a7776510a7!2sAnand%20Nagar%20Lane%20No.03%2C%20Wadgaon%20Sheri%2C%20Pune%20411014!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
               width="100%"
               height="400"
              style={{ border: 0, filter: "sepia(15%) saturate(80%) brightness(1.02)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VLN Catering Location - Anand Nagar Lane No.03 Wadgaon Sheri Pune"
              className="rounded-sm"
        />
              {/* Map overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/90 to-transparent p-6 pt-12">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#1A1A1A]">
                      VLN Catering & Event Management
                    </p>
                    <p className="mt-1 font-mono text-xs text-[#1A1A1A]/70">
                      Pune, Maharashtra, India
                    </p>
                    <a
                      href="https://maps.app.goo.gl/he1AhmMhctH4bXaW6?g_st=awb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-mono text-xs text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/918888872700?text=Hello%20VLN%20Catering!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 rounded-sm bg-[#25D366] px-6 py-4 font-mono text-sm uppercase tracking-wider text-white transition-all hover:bg-[#22bf5b] hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
