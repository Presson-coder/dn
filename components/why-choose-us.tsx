import { Lightbulb, Rocket, Settings, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Concept & Strategy",
    description: "We begin with deep discovery sessions to understand your vision, goals, and target audience. Our strategic approach ensures every project starts on solid ground.",
  },
  {
    icon: Settings,
    title: "Design & Development",
    description: "Our talented team brings concepts to life with cutting-edge technology and stunning design. Every pixel is crafted with purpose and precision.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We don't just build and leave. We ensure smooth launches and provide the infrastructure for your digital presence to scale seamlessly.",
  },
  {
    icon: HeartHandshake,
    title: "Support & Maintenance",
    description: "Your success is our priority. We offer ongoing support and maintenance to keep your digital assets performing at their best.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We handle everything from initial concept to final maintenance under one roof, 
            delivering exceptional results at every stage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`flex gap-6 p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/50 transition-colors ${
                index % 2 === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/50 to-card/50 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                One Team. Complete Solutions.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike agencies that outsource critical work, we keep everything in-house. 
                This means better communication, faster turnaround, and a unified vision 
                for every project we undertake.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "In-House Team" },
                { value: "48h", label: "Response Time" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "∞", label: "Commitment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
