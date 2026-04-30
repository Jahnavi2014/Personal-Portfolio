import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map(l => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div className={cn("glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all", scrolled && "shadow-elevated")}>
          <a href="#home" className="font-mono text-lg font-bold text-gradient">
            &lt;JC /&gt;
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all relative",
                  active === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </a>
            ))}
            <a
              href="public/JAHNAVIRESUME.pdf"
              download
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:shadow-neon transition-all"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-2 animate-fade-in">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium",
                  active === link.href.slice(1) ? "bg-secondary text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-3 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
