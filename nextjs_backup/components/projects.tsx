import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ASTU Student Registration System",
    description:
      "Manage student authentication and registration. Features include registration, login system, session handling, and database integration.",
    image: "/placeholder.svg",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    gradient: "from-green/80 to-blue/80",
  },
  {
    title: "Student Portal System",
    description:
      "Web-based system connected to database to organize and manage student information. Features include dashboard, user login, and data management.",
    image: "/placeholder.svg",
    tags: ["Web", "Database", "Dashboard"],
    link: "#",
    gradient: "from-purple/80 to-pink/80",
  },
  {
    title: "Chat Application (Client-Server)",
    description:
      "Built using client-server architecture concepts. Enables communication between users and demonstrates backend communication and networking logic.",
    image: "/placeholder.svg",
    tags: ["Client-Server", "Networking", "Backend"],
    link: "#",
    gradient: "from-orange/80 to-yellow/80",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-pink to-orange bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground mb-12 text-pretty">A selection of my recent work</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-balance">{project.title}</h3>
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="sr-only">View project</span>
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
