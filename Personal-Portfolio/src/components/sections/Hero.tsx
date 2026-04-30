import { Github, Linkedin, Twitter, Download, ArrowDown } from "lucide-react";
import { Typewriter } from "../Typewriter";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient">Jahnavi Chowdhary</span>
          </h1>

          <div className="text-2xl md:text-3xl font-mono h-12 flex items-center justify-center">
            <Typewriter
              words={[
                "Full Stack Developer",
              ]}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Motivated Full Stack Developer fresher seeking an opportunity to apply my skills 
            In developing scalable web applications and grow in a professional environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold overflow-hidden transition-all hover:shadow-neon hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            <a
              href="public/JAHNAVIRESUME.pdf"
              download
              className="px-8 py-4 rounded-xl glass-strong text-foreground font-semibold flex items-center gap-2 hover:shadow-neon-blue hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            {[
              { Icon: Github, href: "https://github.com/Jahnavi2014", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/jahnavi-chowdhary-941754377/", label: "LinkedIn" },
              { Icon: Twitter, href: "https://x.com/jahnavi_2914", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-neon hover:-translate-y-1 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};
