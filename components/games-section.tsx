"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const releasedGames = [
  {
    title: "Cupid: Encuentra tu pareja ideal",
    description: "Step into both sides of a deceptive online relationship and uncover the dark truth behind every profile—because in this story, no one is who they seem.",
    image: "/retro-pixel-art-cyberpunk-platformer-game.jpg",
  },
  {
    title: "Sir Isaac's Pastry & Apples",
    description: "Serve customers based on their mood and use Newton’s science (and pastries) to restore emotional balance to the universe.",
    image: "/retro-pixel-art-puzzle-game-glitch-aesthetic.jpg",
  },
]

const upcomingGames = [
  {
    title: "W.A.V.E.S",
    description: "Videogame made for the game off game jam",
    image: "/retro-pixel-art-rpg-neon-city.jpg",
  },

]

export function GamesSection() {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary neon-glow pixel-text">
          OUR GAMES
        </h2>

        <Tabs defaultValue="released" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-card border-2 border-primary">
            <TabsTrigger
              value="released"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Released
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Upcoming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="released">
            <div className="grid md:grid-cols-2 gap-8">
              {releasedGames.map((game) => (
                <Card
                  key={game.title}
                  className="bg-card border-2 border-primary hover:border-secondary transition-colors overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary text-lg md:text-xl">{game.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{game.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingGames.map((game) => (
                <Card
                  key={game.title}
                  className="bg-card border-2 border-primary hover:border-accent transition-colors overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold">
                      Coming soon
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary text-lg md:text-xl">{game.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{game.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
