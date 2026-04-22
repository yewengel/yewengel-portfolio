import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary/10 via-purple/5 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-accent via-blue to-primary bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Whether you need engineering expertise
          or design vision, let's connect.
        </p>

        <Card className="p-8 md:p-12 border-2 border-primary/20 bg-card/80 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:yewengel.mesele@astu.edu.et"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>yewengel.mesele@astu.edu.et</span>
                </a>
                <a
                  href="https://linkedin.com/in/yewengel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/yewengel</span>
                </a>
                <a
                  href="https://github.com/yewengel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/yewengel</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Button size="lg" className="w-full gap-2 bg-gradient-to-r from-primary to-pink hover:opacity-90">
                <Mail className="w-4 h-4" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full gap-2 bg-transparent border-2 border-accent/50 hover:border-accent"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>

        <p className="text-sm text-muted-foreground mt-12">© 2026 Yewengel Mesele. Crafted with passion and precision.</p>
      </div>
    </section>
  )
}
