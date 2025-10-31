import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4zSd51IS2CF9OSKyj4Z5g7HJHSIkh8.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 neon-glow text-primary pixel-text leading-tight">
          THE GLITCH
          <br />
          GIRLS
        </h1>

        <p className="text-sm md:text-base text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting retro-futuristic pixel adventures in a neon-soaked digital universe
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/games">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pixel-border text-xs md:text-sm px-8 py-6"
            >
              OUR GAMES
            </Button>
          </Link>
          <Link href="/team">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground pixel-border text-xs md:text-sm px-8 py-6 bg-transparent"
            >
              MEET THE TEAM
            </Button>
          </Link>
        </div>
      </div>

      {/* Pixel Grid Effect */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 0, 255, 0.1) 2px,
            rgba(255, 0, 255, 0.1) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.1) 2px,
            rgba(0, 255, 255, 0.1) 4px
          )`,
        }}
      />
    </section>
  )
}
