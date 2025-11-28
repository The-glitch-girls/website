"use client"

import gamesData from "./data/games.json";
import teamMembersData from "./data/teamMembers.json";

import { Instagram, Linkedin, Github } from "lucide-react"
import NavBar, { Section } from "@/components/NavBar";
import HeroCard from "@/components/HeroCard"
import GameCard from "@/components/GameCard"
import TeamMemberCard from "@/components/TeamMemberCard"
import FilterTab from "@/components/FilterTab"
import ContactSection from "@/components/ContactSection";

import { useState } from "react"
import type { FilterType } from "@/types/filters";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeFilter, setActiveFilter] = useState<FilterType>("released");

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Sections */}
      {activeSection === "home" && (
        <section className="min-h-screen flex flex-col justify-between bg-black text-center">
          {/* Hero title */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 mt-16">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight rubik-glitch-regular">
              The Glitch Girls
            </h1>
            <p className="text-2xl text-white/70 max-w-2xl mx-auto">
              estudio independiente de videojuegos
            </p>
          </div>

          {/* Hero Cards section */}
          <div className="relative bg-gradient-to-t from-black via-black/80 to-transparent pb-16 pt-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 
                      w-full place-items-center justify-center">
                {gamesData.slice(0, 3).map((game, index) => (
                  <HeroCard
                    key={index}
                    title={game.title}
                    type={game.type}
                    imageUrl={game.heroUrl ? game.heroUrl : game.imageUrl}
                    link={game.playLink}
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
                Nuestros juegos
              </h3>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Explora nuestra colección de experiencias de juego inmersivas que desafían los límites de la realidad y la imaginación.
              </p>

              {/* Tabs accesibles */}
              <div
                role="tablist"
                aria-label="Game categories"
                className="inline-flex border-b border-white/40"
              >
                <FilterTab
                  label="Lanzados"
                  value="released"
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />

                <FilterTab
                  label="Próximamente"
                  value="coming"
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </div>
            </div>

            {activeFilter === "released" ? (
              // RELEASED
              <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-4">
                {gamesData.filter(game => game.status === "released").map((game, index) => (
                  <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    imageUrl={game.imageUrl}
                    repoLink={game.repoLink}
                    playLink={game.playLink}
                    isReleased={true}
                  />
                ))}
              </div>
            ) : (
              // COMING SOON
              <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-4">
                {gamesData.filter(game => game.status === "coming").map((game, index) => (
                  <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    imageUrl={game.imageUrl}
                    repoLink={game.repoLink}
                    isReleased={false}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

     {activeSection === "team" && (
      <section className="min-h-screen bg-black py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Conoce a las talentosas personas detrás de The Glitch Girls que dan vida a nuestros juegos.
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

      {activeSection === "contact" && (<ContactSection />)}

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/109253587/admin/dashboard/" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/The-glitch-girls" className="text-white/60 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/theglitchgirls/" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              </div>
              <p className="text-white/40 text-sm">© {new Date().getFullYear()} The Glitch Girls. Todos los derechos reservados.</p>
              </div>
            </div>
      </footer>
    
    </div>
  )
}
