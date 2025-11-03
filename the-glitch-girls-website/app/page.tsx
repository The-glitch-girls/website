"use client"

import { Instagram, Linkedin, Github, Twitter, Globe, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState<"home" | "games" | "team" | "contact">("home")
  const [activeFilter, setActiveFilter] = useState<"released" | "coming">("released")

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-green-300 rounded-lg" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">The Glitch Girls</span>
                <span className="text-white/60 text-xs">indie videogame studio</span>
              </div>
            </div>
            <ul className="flex items-center gap-8">
              <li>
                <button
                  onClick={() => setActiveSection("home")}
                  className={`transition-colors ${
                    activeSection === "home" ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("games")}
                  className={`transition-colors ${
                    activeSection === "games" ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  games
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("team")}
                  className={`transition-colors ${
                    activeSection === "team" ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  team
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("contact")}
                  className={`transition-colors ${
                    activeSection === "contact" ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>



{activeSection === "home" && (
  <section className="min-h-screen flex flex-col justify-between bg-black text-center">
    {/* Hero title */}
    <div className="flex-1 flex flex-col items-center justify-center px-6 mt-16">
      <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
        The Glitch Girls
      </h1>
      <p className="text-2xl text-white/70 max-w-2xl mx-auto">
        indie videogame studio
      </p>
    </div>

    {/* Game cards section */}
    <div className="relative bg-gradient-to-t from-black via-black/80 to-transparent pb-16 pt-10">
      <div className="flex justify-center items-end gap-12 max-w-7xl mx-auto px-6">
        {/* Game Card 1 */}
        <div
          onClick={() => setActiveSection("games")}
          className="relative w-[340px] h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-6 hover:scale-[1.03]"
          style={{ transform: "rotate(-3deg)" }}
        >
          <img
            src="/games/game-1.png"
            alt="Cupid: Encuentra a tu pareja ideal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 px-8">
            <h3 className="text-white font-bold text-3xl mb-2">
              Cupid: Encuentra a tu pareja ideal
            </h3>
            <p className="text-white/80 text-base">Narrative videogame</p>
          </div>
        </div>

        {/* Game Card 2 */}
        <div
          onClick={() => setActiveSection("games")}
          className="relative w-[380px] h-[540px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-6 hover:scale-[1.03]"
        >
          <img
            src="/games/game-2.png"
            alt="Sir Isaac's Pastry & Apples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 px-8">
            <h3 className="text-white font-bold text-3xl mb-2">
              Sir Isaac's Pastry & Apples
            </h3>
            <p className="text-white/80 text-base">Puzzle Platformer</p>
          </div>
        </div>

        {/* Game Card 3 */}
        <div
          onClick={() => setActiveSection("games")}
          className="relative w-[340px] h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-6 hover:scale-[1.03]"
          style={{ transform: "rotate(3deg)" }}
        >
          <img
            src="/games/game-3.jpg"
            alt="Echoes of the Amazon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 px-8">
            <h3 className="text-white font-bold text-3xl mb-2">
              Echoes of the Amazon
            </h3>
            <p className="text-white/80 text-base">Videogame</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}


      {activeSection === "games" && (
        <section className="min-h-screen py-32">
          <div className="container mx-auto px-6">
           <div className="text-center mb-16">
  <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
    Games We Made
  </h3>
  <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
    Explore our collection of immersive gaming experiences that push the
    boundaries of reality and imagination
  </p>

  {/* Tabs accesibles */}
  <div
    role="tablist"
    aria-label="Game categories"
    className="inline-flex border-b border-white/40"
  >
    <button
      role="tab"
      aria-selected={activeFilter === "released"}
      tabIndex={activeFilter === "released" ? 0 : -1}
      onClick={() => setActiveFilter("released")}
      className={`px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-all ${
        activeFilter === "released"
          ? "text-white border-b-2 border-white"
          : "text-white/60 hover:text-white"
      }`}
    >
      Released
    </button>
    <button
      role="tab"
      aria-selected={activeFilter === "coming"}
      tabIndex={activeFilter === "coming" ? 0 : -1}
      onClick={() => setActiveFilter("coming")}
      className={`px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-all ${
        activeFilter === "coming"
          ? "text-white border-b-2 border-white"
          : "text-white/60 hover:text-white"
      }`}
    >
      Coming Soon
    </button>
  </div>
</div>


            {activeFilter === "released" ? (
              <div className="relative max-w-6xl mx-auto h-[1100px]">
                {/* Game Card 1 - Top Left, Large */}
                <div
                  className="absolute w-[40%] group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  style={{ top: "0", left: "0", zIndex: 1 }}
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src="/cyberpunk-girl-with-neon-lights.jpg"
                      alt="Neon Pulse game"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-300/90 via-purple-300/40 to-transparent" />
                    <div className="absolute bottom-6 left-0 right-0 px-6">
                      <h3 className="text-white font-bold text-2xl mb-1">Neon Pulse</h3>
                      <p className="text-white/80 text-sm">Cyberpunk Adventure</p>
                    </div>
                  </div>
                </div>

                {/* Game Card 2 - Top Right, Medium */}
                <div
                  className="absolute w-[48%] group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  style={{ top: "0", right: "0", zIndex: 2 }}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src="/silhouette-girl-gamer-pink-background.jpg"
                      alt="Digital Dreams game"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-300/90 via-green-300/40 to-transparent" />
                    <div className="absolute bottom-6 left-0 right-0 px-6">
                      <h3 className="text-white font-bold text-2xl mb-1">Digital Dreams</h3>
                      <p className="text-white/80 text-sm">Puzzle Platformer</p>
                    </div>
                  </div>
                </div>

                {/* Game Card 3 - Middle Left, Small */}
                <div
                  className="absolute w-[35%] group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  style={{ top: "480px", left: "0", zIndex: 3 }}
                >
                  <div className="aspect-[16/9] relative">
                    <img
                      src="/cyberpunk-girl-with-neon-lights.jpg"
                      alt="Glitch Runner game"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-300/90 via-green-300/40 to-transparent" />
                    <div className="absolute bottom-6 left-0 right-0 px-6">
                      <h3 className="text-white font-bold text-2xl mb-1">Glitch Runner</h3>
                      <p className="text-white/80 text-sm">Endless Runner</p>
                    </div>
                  </div>
                </div>

                {/* Game Card 4 - Bottom Right, Large */}
                <div
                  className="absolute w-[52%] group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  style={{ top: "420px", right: "0", zIndex: 4 }}
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src="/futuristic-girl-with-holographic-visor.jpg"
                      alt="Cyber Shift game"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-300/90 via-purple-300/40 to-transparent" />
                    <div className="absolute bottom-6 left-0 right-0 px-6">
                      <h3 className="text-white font-bold text-2xl mb-1">Cyber Shift</h3>
                      <p className="text-white/80 text-sm">Action RPG</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-300/20 to-green-300/20 rounded-3xl flex items-center justify-center mb-6 mx-auto border border-white/10">
                    <span className="text-6xl">🎮</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Exciting Games Coming Soon</h3>
                  <p className="text-white/60">Stay tuned for our upcoming releases</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

     {activeSection === "team" && (
  <section className="min-h-screen bg-black py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Team</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Meet the talented individuals behind The Glitch Girls who bring our games to life
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/team-photo/shiara-arauzo.jpeg"
              alt="Shiara Arauzo"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Shiara Arauzo</h3>
          <p className="text-purple-400 text-sm mb-4">Technical Designer & Game Developer</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/team-photo/melissa-huerta.jpg"
              alt="Melissa Huerta"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Melissa Huerta</h3>
          <p className="text-purple-400 text-sm mb-4">Technical Designer & Game Developer</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/team-photo/malu-munayco.jpg"
              alt="Malu Munayco"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Malu Munayco</h3>
          <p className="text-purple-400 text-sm mb-4">Game Developer</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

               {/* Team Member 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/team-photo/ariadna-mestanza.jpg"
              alt="Ariadna Mestanza"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Ariadna Mestanza</h3>
          <p className="text-purple-400 text-sm mb-4">Artist</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

               {/* Team Member 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src="/team-photo/selene-negron.jpg"
              alt="Selene Negrón"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Selene Negrón</h3>
          <p className="text-purple-400 text-sm mb-4">Artist</p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
)}



      {activeSection === "contact" && (
        <section className="min-h-screen bg-black py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-lg text-white/60">
                  Have a question or want to work together? Send us a message and we'll get back to you soon
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </div>
                <Button className="w-full bg-purple-300 hover:bg-purple-400 text-black h-12 text-base font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-white/40 text-sm">© 2025 The Glitch Girls. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
