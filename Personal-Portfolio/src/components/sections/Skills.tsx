import { Layout, Server, Database, Wrench } from "lucide-react";
import { Reveal } from "../Reveal";

const categories = [
  {
    Icon: Layout,
    title: "Frontend",
    color: "from-neon-purple to-neon-pink",
    skills: ["HTML", "CSS", "JavaScript","React"],
  },
  {
    Icon: Server,
    title: "Backend",
    color: "from-neon-blue to-neon-purple",
    skills: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    Icon: Database,
    title: "Database",
    color: "from-neon-pink to-neon-blue",
    skills: ["MongoDB","MySQL"],
  },
  {
    Icon: Wrench,
    title: "Tools",
    color: "from-neon-purple to-neon-blue",
    skills: ["Git&GitHub","VS Code","Postman"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-mono text-sm text-accent mb-3">// my stack</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Technologies I'm learning and using in my projects
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="glass rounded-2xl p-6 h-full glow-on-hover neon-border group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform`}>
                  <cat.Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary/60 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
