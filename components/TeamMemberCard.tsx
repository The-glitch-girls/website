"use client";

import { Github, Instagram, Linkedin, Twitter, Globe } from "lucide-react";

type SocialLinks = {
  website?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  socials?: SocialLinks;
}

export default function TeamMemberCard({ name, role, imageUrl, socials = {}}: TeamMemberCardProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-purple-400 text-sm mb-4">{role}</p>

            <div className="flex items-center justify-center gap-3">
                {socials.website && (
                    <a target="_blank" href={socials.website} className="text-white/60 hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                    </a>
                )}
                {socials.linkedin && (
                    <a target="_blank" href={socials.linkedin} className="text-white/60 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                )}
                {socials.github && (
                    <a target="_blank" href={socials.github} className="text-white/60 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                )}
                {socials.instagram && (
                    <a target="_blank" href={socials.instagram} className="text-white/60 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                )}
                {socials.twitter && (
                    <a target="_blank" href={socials.twitter} className="text-white/60 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                )}
            </div>

        </div>
    );
}