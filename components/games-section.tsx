"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const releasedGames = [
  {
    title: "Neon Runners",
    description: "Fast-paced platformer through a cyberpunk cityscape",
    image: "/retro-pixel-art-cyberpunk-platformer-game.jpg",
  },
  {
    title: "Glitch Protocol",
    description: "Puzzle adventure in a corrupted digital world",
    image: "/retro-pixel-art-puzzle-game-glitch-aesthetic.jpg",
  },
]

const upcomingGames = [
  {
    title: "Pixel Dreamers",
    description: "Narrative-driven RPG set in a neon utopia",
    image: "/retro-pixel-art-rpg-neon-city.jpg",
  },
  {
    title: "Circuit Breakers",
    description: "Co-op action game with retro-futuristic vibes",
    image: "/retro-pixel-art-action-game-futuristic.jpg",
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
              RELEASED
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              UPCOMING
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
                      COMING SOON
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
