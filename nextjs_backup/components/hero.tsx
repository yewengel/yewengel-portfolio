import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-pink/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 via-blue/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple/10 to-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent">
            Yewengel Mesele
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">Software Engineering Student</p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Aspiring Full-Stack Web Developer focused on building real-world web applications using modern web technologies.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/yewengel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:yewengel.mesele@astu.edu.et" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
