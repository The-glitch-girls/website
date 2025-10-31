import { Github, Linkedin, Calendar } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://calendly.com"
              target="_blank"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Schedule Appointment"
            >
              <Calendar className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs text-center">© 2025 The Glitch Girls. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
