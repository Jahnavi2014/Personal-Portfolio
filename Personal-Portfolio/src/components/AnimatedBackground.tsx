export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-orb-drift"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-purple)), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 animate-orb-drift"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-blue)), transparent 70%)", animationDelay: "5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 animate-orb-drift"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-pink)), transparent 70%)", animationDelay: "10s" }}
      />
    </div>
  );
};
