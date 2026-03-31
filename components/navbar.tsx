"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo with luxury shine effect */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="logo-container relative overflow-hidden rounded-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110">
            <Image
              src="/images/logo.png"
              alt="VLN Caterers Logo"
              width={80}
              height={80}
              className="h-14 w-auto sm:h-16 lg:h-[72px] drop-shadow-[0_0_8px_rgba(201,162,39,0.4)]"
              priority
            />
            {/* Shine overlay */}
            <div className="logo-shine absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </div>
          <div className="block">
            <p className="text-gold-gradient font-sans text-sm font-bold tracking-wider sm:text-lg lg:text-xl">
              VLN Caterers
            </p>
            <p className={`font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors duration-500 ${
              isScrolled ? "text-muted-foreground" : "text-white/80"
            }`}>
              {"& Event Management"}
            </p>
          </div>
        </a>

        {/* Logo shine animation styles */}
        <style jsx global>{`
          @keyframes logo-shine {
            0% {
              transform: translateX(-100%) skewX(-12deg);
            }
            100% {
              transform: translateX(200%) skewX(-12deg);
            }
          }
          
          .logo-container {
            box-shadow: 0 0 20px rgba(201, 162, 39, 0.2);
          }
          
          .logo-container:hover {
            box-shadow: 0 0 30px rgba(201, 162, 39, 0.4);
          }
          
          .logo-shine {
            animation: logo-shine 4s ease-in-out infinite;
            animation-delay: 2s;
          }
        `}</style>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative font-mono text-sm uppercase tracking-wider transition-colors hover:text-gold ${
                  isScrolled ? "text-foreground/80" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+918888872700"
            className="flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-gold lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gold/10 bg-background/98 px-6 pb-8 pt-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-border/30 pb-3 font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-gold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+918888872700"
            className="mt-6 flex items-center justify-center gap-2 rounded-sm border border-gold bg-gold/10 px-5 py-3 font-mono text-sm uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
