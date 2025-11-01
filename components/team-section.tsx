import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Shiara Arauzo",
    role: "Game Developer",
    image: "/team/shiara-arauzo.jpeg",
  },
  {
    name: "Melissa Huerta",
    role: "Game Developer",
    image: "/team/melissa-huerta.jpg",
  },
  {
    name: "Ariadna Mestanza",
    role: "UI Artist",
    image: "/team/ariadna-mestanza.jpg",
  },
  {
    name: "Selene Negrón",
    role: "Artist",
    image: "/portrait-woman-artist-pixel-art-style.jpg",
  },
  {
    name: "Malu Munayco",
    role: "Game Developer",
    image: "/portrait-woman-developer-pixel-art-style.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary neon-glow pixel-text">
          MEET THE TEAM
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="bg-card border-2 border-primary hover:border-secondary transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-primary text-base md:text-lg leading-relaxed">{member.name}</CardTitle>
                <p className="text-secondary text-xs md:text-sm mt-2">{member.role}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
