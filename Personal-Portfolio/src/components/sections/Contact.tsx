import { useState, FormEvent } from "react";
import { Mail, Send, Check, Github, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "../Reveal";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length < 10) e.message = "Message too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // const submit = (ev: FormEvent) => {
  //   ev.preventDefault();
  //   if (!validate()) return;
  //   setSending(true);
  //   setTimeout(() => {
  //     setSending(false);
  //     setSent(true);
  //     setForm({ name: "", email: "", message: "" });
  //     setTimeout(() => setSent(false), 4000);
  //   }, 1200);
  // };

 const submit = (ev: FormEvent) => {
  ev.preventDefault();
  if (!validate()) return;

  setSending(true);

  emailjs
    .send(
      "service_1vd01ll",
      "template_8ddkrjb",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "qgjcdCtiHSJSrw14q"
    )
    .then(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    })
    .catch(() => {
      setSending(false);
      alert("Failed to send message");
    });
};




  
  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-5xl">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-mono text-sm text-accent mb-3">// get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's build <span className="text-gradient">something great</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind or just want to say hi? Drop me a message.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-2 space-y-6">
            
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold mb-4">Find me on</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: "https://github.com/Jahnavi2014" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/jahnavi-chowdhary-941754377/" },
                  { Icon: Twitter, href: "https://x.com/jahnavi_2914" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-gradient-primary hover:shadow-neon transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={150}>
            <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all",
                    errors.name && "border-destructive"
                  )}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all",
                    errors.email && "border-destructive"
                  )}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none",
                    errors.message && "border-destructive"
                  )}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending || sent}
                className={cn(
                  "w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all",
                  sent
                    ? "bg-accent text-accent-foreground"
                    : "bg-gradient-primary text-primary-foreground hover:shadow-neon hover:scale-[1.02]"
                )}
              >
                {sent ? (
                  <>
                    <Check className="w-5 h-5" /> Message Sent!
                  </>
                ) : sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
