import { Card } from "@/components/ui/card"
import { MonitorPlay, Server, Database, Wrench } from "lucide-react"

const skills = [
  {
    icon: MonitorPlay,
    title: "Frontend",
    description: "HTML, CSS, JavaScript",
    color: "text-blue",
    bgColor: "bg-blue/10",
    borderColor: "border-blue/20",
  },
  {
    icon: Server,
    title: "Backend",
    description: "PHP, Java, Python",
    color: "text-green",
    bgColor: "bg-green/10",
    borderColor: "border-green/20",
  },
  {
    icon: Database,
    title: "Database",
    description: "MySQL",
    color: "text-purple",
    bgColor: "bg-purple/10",
    borderColor: "border-purple/20",
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Git & GitHub, VS Code, IntelliJ IDEA",
    color: "text-orange",
    bgColor: "bg-orange/10",
    borderColor: "border-orange/20",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What I Do</h2>
        <p className="text-xl text-muted-foreground mb-12 text-pretty">A diverse skill set that brings ideas to life</p>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.title}
              className={`p-8 hover:shadow-lg transition-all border-2 ${skill.borderColor} ${skill.bgColor} hover:scale-105`}
            >
              <skill.icon className={`w-12 h-12 mb-4 ${skill.color}`} />
              <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
