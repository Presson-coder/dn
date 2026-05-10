"use client"

import { useState } from "react"
import { ArrowRight, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-background border border-border p-8 md:p-12 lg:p-16">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              {"Let's"} discuss how we can help you achieve your goals. Get in touch today 
              and {"let's"} start building something extraordinary together.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-background/50 border-border"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-12">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {submitted && (
              <div className="mt-4 flex items-center justify-center gap-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">{"Thanks! We'll"} be in touch soon.</span>
              </div>
            )}

            {/* Additional Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <a href="mailto:hello@dumisongwenyama.com" className="hover:text-foreground transition-colors">
                hello@dumisongwenyama.com
              </a>
              <span className="hidden sm:block">•</span>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
