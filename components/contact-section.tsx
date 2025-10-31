"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
    alert("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", description: "" })
  }

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary neon-glow pixel-text">
          CONTACT US
        </h2>

        <Card className="max-w-2xl mx-auto bg-card border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-primary text-xl md:text-2xl">Get in Touch</CardTitle>
            <CardDescription className="text-muted-foreground">
              Have a project idea or want to collaborate? Send us a message!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-2 border-muted focus:border-primary text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-2 border-muted focus:border-primary text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground text-sm">
                  Message
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-2 border-muted focus:border-primary text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 pixel-border text-sm py-6"
              >
                SUBMIT
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
