import { Code, Megaphone, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Software Engineering",
    description: "From design to maintenance — complete software solutions.",
    items: [
      "Full-Cycle Software Development",
      "Web Design & Development",
      "App Design & Development",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
    ],
  },
  {
    icon: Megaphone,
    title: "Media & Marketing",
    description: "Data-driven strategies that amplify your brand.",
    items: [
      "Content Creation",
      "Creative Brand Development",
      "Digital Marketing Campaigns",
      "Social Media Management",
      "Data Analysis",
      "Advertisement Management",
    ],
  },
  {
    icon: Palette,
    title: "Design & Visual Arts",
    description: "Striking visuals that captivate and convert.",
    items: [
      "Motion Graphics",
      "Graphic Design",
      "Visual Design",
      "3D Modeling",
      "Videography",
      "Photography",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to build, market, and scale your digital presence under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/5"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
