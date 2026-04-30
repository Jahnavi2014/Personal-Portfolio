import { Code2, Sparkles, Rocket } from "lucide-react";
import { Counter } from "../Counter";
import { Reveal } from "../Reveal";

const stats = [
  { end: 5, suffix: "+", label: "Projects Built" },
  { end: 6, suffix: "+", label: "Technologies" },
  { end: 8, suffix: "+", label: "Tools Used" },
  { end: 100, suffix: "%", label: "Dedication" },
];

const traits = [
  { Icon: Code2, title: "Clean Code", desc: "Writing clean and understandable code while learning best practices." },
  { Icon: Rocket, title: "Scalable Apps", desc: "Building simple and efficient applications with a focus on learning performance and scalability." },
  { Icon: Sparkles, title: "Problem Solving", desc: "Solving problems by learning and creating simple, practical solutions." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-mono text-sm text-accent mb-3">// about me</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Passionate fresher  <span className="text-gradient">Developer</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 items-center mb-16">
         <Reveal className="md:col-span-2">
  <div className="relative aspect-square max-w-sm mx-auto">
    <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-40 animate-glow-pulse" />
    
   <div className="relative glass-strong rounded-3xl w-full h-full flex items-center justify-center border border-white/10">
      <span className="text-8xl md:text-9xl font-bold text-gradient">
        J
      </span>
    </div>
    
  </div>
</Reveal>

          <Reveal className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-semibold">Gangavarapu Jahnavi Chowdhary</span>,
              passionate fresher Full Stack Developer focused on building user-friendly web applications.
            </p>
            <p>
              I enjoy learning new technologies, creating real-world projects, and improving my coding skills. 
              I'm currently exploring modern tools and continuously growing as a developer.
            </p>
            <p>
              I'm actively working on projects and expanding my knowledge to grow as a professional developer.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="glass rounded-2xl p-6 text-center glow-on-hover">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {traits.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="glass rounded-2xl p-6 h-full glow-on-hover neon-border group">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <t.Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
