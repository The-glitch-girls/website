"use client";

import { Github, Globe } from "lucide-react"

interface GameCardProps {
    title: string;
    description: string;
    imageUrl: string;
    repoLink: string;
    playLink?: string;
    rotateClass?: string;
    isReleased?: boolean;
}

export default function GameCard({ title, description, imageUrl, repoLink, playLink, isReleased }: GameCardProps) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-white/30 rounded-none overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="aspect-[4/3] relative">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t " />
            </div>
            <div className="p-5">
                <h3 className="text-white font-bold text-2xl mb-1">{title}</h3>
                <p className="text-white/70 text-sm mb-4">{description}</p>
                <div className="flex gap-3">
                    <a href={playLink} target="_blank" className="text-white/60 hover:text-white transition-colors">
                        <Globe className="w-6 h-6" />
                    </a>
                    {isReleased && (
                        <a href={repoLink} target="_blank" className="text-white/60 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}