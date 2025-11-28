"use client";

export const sections = ["home", "games", "team", "contact"] as const;
export type Section = (typeof sections)[number];

const labels: Record<Section, string> = {
  home: "Inicio",
  games: "Juegos",
  team: "Equipo",
  contact: "Contacto",
};

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export default function NavBar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo + Text */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="The Glitch Girls Logo"
              className="w-8 h-8 object-contain"
            />

            {/* Esconder texto en pantallas pequenas */}
            <div className="flex flex-col hidden md:flex">
              <span className="text-white font-bold text-lg leading-none rubik-glitch-regular">
                The Glitch Girls
              </span>
              <span className="text-white/60 text-xs" style={{ maxWidth: "148px" }}>estudio independiente de videojuegos</span>
            </div>
          </div>

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`transition-colors ${
                    activeSection === section
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {labels[section]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
