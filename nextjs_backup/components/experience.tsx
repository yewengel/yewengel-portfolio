import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    description:
      "Leading full-stack development projects with focus on database architecture and data visualization. Implementing MongoDB solutions and designing intuitive user interfaces.",
    tags: ["MongoDB", "React", "Node.js", "UI/UX"],
    accentColor: "border-l-green",
  },
  {
    period: "2021 — 2023",
    role: "Data Scientist & Designer",
    company: "DataViz Studio",
    description:
      "Built predictive models and created data visualization dashboards. Designed user interfaces that made complex data accessible and actionable.",
    tags: ["Python", "Data Science", "Figma", "Design Systems"],
    accentColor: "border-l-blue",
  },
  {
    period: "2019 — 2021",
    role: "UI/UX Designer",
    company: "Creative Digital Agency",
    description:
      "Designed and prototyped web and mobile applications. Created brand identities and design systems for diverse clients.",
    tags: ["UI/UX", "Graphics Design", "Branding", "Prototyping"],
    accentColor: "border-l-pink",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-br from-orange/5 via-muted/30 to-yellow/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-accent to-green bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-xl text-muted-foreground mb-12 text-pretty">
          Building impactful solutions across industries
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`p-8 border-l-4 ${exp.accentColor}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm font-mono text-muted-foreground">{exp.period}</p>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
