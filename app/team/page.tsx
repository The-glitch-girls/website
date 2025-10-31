import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TeamSection />
      <Footer />
    </div>
  )
}
