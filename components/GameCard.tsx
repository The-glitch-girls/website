"use client";

interface GameCardProps {
  title: string;
  type: string;
  imageUrl: string;
  link: string;
  rotate?: "-3" | "0" | "3";
}

export default function GameCard({ title, type, imageUrl, link, rotate = "0" }: GameCardProps) {
    return (
        <div onClick={() => (window.location.href = link)}
        className={`game-card relative w-[85vw] max-w-[350px] h-[380px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-6 hover:scale-[1.03] rotate-0
        ${rotate === "-3" ? "rotate-desktop--3" : ""}
        ${rotate === "0" ? "rotate-desktop-0" : ""}
        ${rotate === "3" ? "rotate-desktop-3" : ""}`}
        >
            <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          
            <div className="absolute bottom-8 left-0 right-0 px-8">
                <h3 className="text-white font-bold text-3xl mb-2">{title}</h3>
            <p className="text-white/80 text-base">{type}</p>
            </div>
        </div>
    );
  }