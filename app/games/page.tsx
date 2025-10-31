import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GamesSection } from "@/components/games-section"

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <GamesSection />
      <Footer />
    </div>
  )
}
