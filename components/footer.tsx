import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle, Youtube, Instagram, Facebook } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Pure Veg Delicacies",
  "Traditional Sweets",
  "Live Cooking Counters",
  "Chaat & Street Food",
  "Corporate Catering",
  "Grand Event Catering",
]

export default function Footer() {
  return (
    <footer className="relative bg-[#F3E5C8]">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="VLN Caterers Logo"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <div>
                <p className="text-gold-gradient font-sans text-lg font-bold tracking-wider">
                  VLN Caterers
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {"& Event Management"}
                </p>
              </div>
            </div>
            <p className="mb-4 font-mono text-xs leading-relaxed text-[#1A1A1A]/70">
              ISO Certified premium catering services delivering authentic Indian
              vegetarian cuisine to Pune&apos;s finest hotels, corporates, and events since 2001.
            </p>
            <p className="mb-6 font-mono text-[10px] text-[#1A1A1A]/70">
              <span className="text-gold font-semibold">Managing Director:</span> Mr. Gajanan Sharma
            </p>
            <div className="flex items-center gap-2 rounded-sm border border-gold/20 bg-gold/5 px-3 py-2 w-fit">
              <div className="h-2 w-2 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                ISO 22000 Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-gold" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+918888872700"
                  className="flex items-center gap-3 font-mono text-xs text-[#1A1A1A]/70 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-gold/60" />
                  +91 88888 72700
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918888872700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-xs text-[#1A1A1A]/70 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-gold/60" />
                  +91 8888872700
                </a>
              </li>
              <li>
                <a
                  href="mailto:vlneventmangement@gmail.com"
                  className="flex items-center gap-3 font-mono text-xs text-[#1A1A1A]/70 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-gold/60" />
                  vlneventmangement@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/60" />
                  <span className="font-mono text-xs text-[#1A1A1A]/70">
                    Anand Nagar Lane No.03, Wadgaon Sheri, Pune 411014
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-5">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10 hover:shadow-[0_4px_20px_rgba(201,162,39,0.25)]"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-foreground/70 transition-colors duration-300 group-hover:text-gold" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10 hover:shadow-[0_4px_20px_rgba(201,162,39,0.25)]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-foreground/70 transition-colors duration-300 group-hover:text-gold" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10 hover:shadow-[0_4px_20px_rgba(201,162,39,0.25)]"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-foreground/70 transition-colors duration-300 group-hover:text-gold" />
            </a>
          </div>
        </div>
{/* Bottom Bar */}
      <div className="mt-8 border-t border-border/30 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* 1. Copyright Part */}
          <p className="font-mono text-xs text-[#1A1A1A]/70">
            &copy; {new Date().getFullYear()} VLN Catering & Event Management. All rights reserved.
          </p>

          {/* 2. My Signature and Passion Note Part */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-gold/40" />
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#1A1A1A]/70">
                Crafted with passion in Pune, India
              </p>
              <div className="h-1 w-1 rounded-full bg-gold/40" />
            </div>

            {/* My Branding Line */}
            <p className="font-mono text-[9px] text-[#1A1A1A]/50 tracking-tight">
              Designed & Developed by 
              <a 
                href="https://www.linkedin.com/in/omkar-yadav-6432a1230?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-1 text-gold font-semibold hover:underline"
              >
                Omkar S. Yadav
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    }
)
