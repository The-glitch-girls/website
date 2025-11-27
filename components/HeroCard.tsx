"use client";

interface HeroCardProps {
  title: string;
  type: string;
  imageUrl: string;
  link: string;
  rotateClass?: string;
}

export default function HeroCard({ title, type, imageUrl, link, rotateClass }: HeroCardProps) {
    return (
        <div onClick={() => (window.location.href = link)}
        className={`
            relative
            w-[90vw] h-[65vw]              /* mobile: grande y proporcional */
            max-w-[420px]                  /* que no se pase de ancho */
            sm:w-[300px] sm:h-[400px]      /* tablets */
            md:w-[260px] md:h-[360px]      /* md: compactos para 3 columnas */
            lg:w-[320px] lg:h-[460px]      /* desktop */
            rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer
            transition-transform duration-300 hover:-translate-y-3 hover:scale-[1.03]
            ${rotateClass}
        `}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          
            <div className="absolute bottom-8 left-0 right-0 px-8">
                <h3 className="text-white font-bold text-3xl mb-2">{title}</h3>
                <p className="text-white/80 text-base">{type}</p>
            </div>
        </div>
    );
  }