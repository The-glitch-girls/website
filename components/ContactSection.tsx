"use client"

import { useState } from "react"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusType("loading");
    setStatus("Enviando...");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
        setStatusType("success");
        setStatus("Mensaje enviado con éxito");
        setEmail("");
        setMessage("");
    } else {
        setStatusType("error");
        setStatus("Error al enviar");
    }
  };

  return (
        <section className="min-h-screen bg-black py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Ponte en Contacto</h2>
                        <p className="text-lg text-white/60">
                            ¿Tienes una pregunta o quieres trabajar con nosotras? Envíanos un mensaje y te responderemos pronto.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* honeypot anti bots */}
                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden" />

                        <div>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Textarea
                                name="message"
                                placeholder="Tu mensaje"
                                rows={6}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full bg-purple-300 hover:bg-purple-400 text-black h-12 text-base font-semibold">
                            <Send className="w-4 h-4 mr-2" />
                            Enviar Mensaje
                        </Button>

                        {status && (
                            <p className={`text-center text-white/60 text-sm mt-2
                                ${statusType === "loading" ? "text-yellow-400" : ""}
                                ${statusType === "success" ? "text-green-400" : ""}
                                ${statusType === "error" ? "text-red-400" : ""}
                                `}>{status}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}