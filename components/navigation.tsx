"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b-2 border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-primary neon-glow text-sm md:text-base hover:text-secondary transition-colors">
            THE GLITCH GIRLS
          </Link>

          <div className="flex gap-4 md:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs md:text-sm hover:text-primary transition-colors",
                  pathname === link.href ? "text-primary neon-glow" : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
