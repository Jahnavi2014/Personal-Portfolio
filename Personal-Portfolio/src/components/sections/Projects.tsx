import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Medicine Recommendation System",
    description: "It is a full stack machine learning web application where users enter symptoms through a frontend, and a backend ML model predicts the disease and recommends medicines.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "HTML", "CSS"],
    image: "https://img.freepik.com/free-photo/african-american-female-doctor-showing-couple-test-results-their-medical-exam-clinic_637285-1158.jpg?semt=ais_hybrid&w=740&q=80",
    github: "https://github.com/Jahnavi2014/Medicine-Recommendation-System",
    demo: "http://127.0.0.1:5000/",
    category: "fullstack",
  },
  {
    title: " Expense Tracker",
    description: "Built a full-stack Expense Tracker web application with secure user authentication It provides daily, weekly, monthly, and yearly income and expense tracking, along with interactive charts, filters, and user profile management.",
    tech: [ "React.js", "Tailwind CSS", "Node.js", "Express.js.","MongoDB"],
    image: "https://images.openai.com/static-rsc-4/SlF5KdmJHCpr-Dle1026FJFjEXjSKYBIL-s37SYno6FtIoXmeSUnpuxN0CnSIxwWk9obbAKttITQ5pFAwdqRIOvzLJjVVW_G-XxQPBGfw5LxTIm5dziGlcUNZlCJvkR-OnJzkc-r9cmQXrPrNvc6CtR1L4mv5tbTtg2UaxOJq7vFvkiUda1yCqv9DNqmcAvm?purpose=fullsize",
    github: "#",
    demo: "http://localhost:5173/",
    category: "fullstack",
  },
  {
    title: "Weather App",
    description: "Built a responsive weather application that fetches real-time weather data using an external API and displays temperature, conditions, and location-based forecasts.",
    tech: ["HTML","CSS", "JavaScript"],
    image: "https://9to5google.com/wp-content/uploads/sites/4/2023/06/google-weather-pixel-tablet.jpeg?quality=82&strip=all",
    github: "https://github.com/Jahnavi2014/Weather-App",
    demo: "http://127.0.0.1:5500/index.html",
    category: "frontend",
  },
  {
    title: "fitness point website",
    description: "Developed Fitness Point, a modern and responsive fitness website implemented multiple sections including workout categories, services, and contact interface with a focus on user-friendly design, smooth navigation, and cross-device compatibility.",
    tech: ["HTML5","CSS3" , "JavaScript" ,"Bootstrap / animations"],
    image: "https://png.pngtree.com/thumb_back/fw800/background/20251117/pngtree-diverse-group-of-friends-stretching-and-smiling-during-a-fun-fitness-image_20389309.webp",
    github: "https://github.com/Jahnavi2014/fitness-point-website",
    demo: "http://127.0.0.1:5500/Fitness_Point_28-09-24-main/index.html",
    category: "frontend",
  },
  
  {
    title: "Staff Leave Management System",
    description: "Built a full-stack Staff Leave Management System using Django, enabling automated leave request processing, approval workflows, and centralized record management. Designed secure authentication and database-driven operations to improve efficiency and reduce manual workload.",
    tech: ["HTML", "CSS", "JavaScript", "Python + Django" ,"SQLite"],
    image: "https://www.zohowebstatic.com/sites/zweb/images/people/zp-leave-dashboard.jpg",
    github: "https://github.com/Jahnavi2014/Staff-Leave-Management-System-Developed-in-Python-Django-and-SQLite-" ,
    demo: "http://127.0.0.1:8000/Admin/Home",
    category: "fullstack",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "fullstack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-mono text-sm text-accent mb-3">// portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Projects <span className="text-gradient"> So Far</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A showcase of my current projects, with a focus on continuous learning and building more in the future.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  filter === f.id
                    ? "bg-gradient-primary text-primary-foreground shadow-neon"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group glass rounded-2xl overflow-hidden h-full flex flex-col glow-on-hover neon-border">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary/70 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                       href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-20 flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary/60 text-sm font-medium hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                   <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-20 flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-neon transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
