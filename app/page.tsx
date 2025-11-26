"use client"

import gamesData from "./data/games.json";
import teamMembersData from "./data/teamMembers.json";

import { Instagram, Linkedin, Github, Twitter, Globe, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import GameCard from "@/components/GameCard"
import TeamMemberCard from "@/components/TeamMemberCard"
import FilterTab from "@/components/FilterTab"

import { useState } from "react"
import type { FilterType } from "@/types/filters";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"home" | "games" | "team" | "contact">("home")
  const [activeFilter, setActiveFilter] = useState<FilterType>("released");

 // #const [activeFilter, setActiveFilter] = useState<"released" | "coming">("released")

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-green-300 rounded-lg" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none rubik-glitch-regular">The Glitch Girls</span>
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
      <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight rubik-glitch-regular">
        The Glitch Girls
      </h1>
      <p className="text-2xl text-white/70 max-w-2xl mx-auto">
        indie videogame studio
      </p>
    </div>

    {/* Game cards section */}
    <div className="relative bg-gradient-to-t from-black via-black/80 to-transparent pb-16 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 
                w-full place-items-center justify-center">
          {gamesData.slice(0, 3).map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              type={game.type}
              imageUrl={game.imageUrl}
              link={game.link}
              rotateClass={game.rotateClass}
            />
          ))}
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
            <FilterTab
              label="Released"
              value="released"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            <FilterTab
              label="Coming Soon"
              value="coming"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        </div>

        {activeFilter === "released" ? (
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-4">
            {/* Large Card */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-white/30 rounded-none overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/3] relative">
                <img src="/games/game-1.png" alt="Neon Pulse" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t " />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-2xl mb-1">Cupid: Encuentra a tu pareja ideal</h3>
                <p className="text-white/70 text-sm mb-4">Narrative videogame</p>
                <div className="flex gap-3">
                  <a href="https://github.com/" target="_blank" className="text-white/70 hover:text-white"><i className="fa-brands fa-github text-xl" /></a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><i className="fa-solid fa-globe text-xl" /></a>
                </div>
              </div>
            </div>

            {/* Medium Card */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-white/30 rounded-none overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/3] relative">
                <img src="/games/game-2.png" alt="Digital Dreams" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t " />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-2xl mb-1">Sir Isaac Pastry</h3>
                <p className="text-white/70 text-sm mb-4">Puzzle Platformer</p>
                <div className="flex gap-3">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><i className="fa-brands fa-github text-xl" /></a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><i className="fa-solid fa-globe text-xl" /></a>
                </div>
              </div>
            </div>

            {/* Small Card */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-white/30 rounded-none overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/3] relative">
                <img src="/games/game-3.jpg" alt="Glitch Runner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t " />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-2xl mb-1">Echoes of the amazon</h3>
                <p className="text-white/70 text-sm mb-4">Top down game</p>
                <div className="flex gap-3">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><i className="fa-brands fa-github text-xl" /></a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><i className="fa-solid fa-globe text-xl" /></a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // COMING SOON - mismo layout
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-white/30 rounded-none overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-[320px] h-[400px]">
            <div className="relative w-full h-[300px]"> {/* ✅ altura fija */}
              <img
                src="/games/game-3.jpg"
                alt="W.A.V.E.S"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-400/60 via-purple-200/30 to-transparent" />
            </div>

            <div className="p-5">
              <h3 className="text-white font-bold text-2xl mb-1">W.A.V.E.S</h3>
              <p className="text-white/70 text-sm mb-4">Endless Runner</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  <i className="fa-brands fa-github text-xl" />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  <i className="fa-solid fa-globe text-xl" />
                </a>
              </div>
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
            {/* TeamMember cards section */}
            {teamMembersData.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  socials={{
                    github: member.githubLink,
                    instagram: member.instagramLink,
                    website: member.portfolioLink,
                    linkedin: member.linkedinLink
                  }}
                />
              ))}
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
              <a href="https://www.instagram.com/theglitchgirls/" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/109253587/admin/dashboard/" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
                <a href="https://github.com/The-glitch-girls" className="text-white/60 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-white/40 text-sm">© {new Date().getFullYear()} The Glitch Girls. Todos los derechos reservados.</p>
              </div>
            </div>
            </footer>
          </div>
          )
        }
