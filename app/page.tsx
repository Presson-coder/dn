import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </main>
  )
}
