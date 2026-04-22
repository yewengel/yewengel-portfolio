export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-purple/5 via-muted/30 to-blue/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="text-pretty">
            I am Yewengel Mesele, a Software Engineering student passionate about web development and backend systems.
          </p>

          <p className="text-pretty">
            I enjoy building practical web applications such as student management systems and real-time applications.
          </p>

          <p className="text-pretty">
            My goal is to become a skilled full-stack web developer and build impactful software solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
