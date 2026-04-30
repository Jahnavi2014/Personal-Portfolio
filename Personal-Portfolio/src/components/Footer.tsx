export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 mt-12">
      <div className="container text-center text-sm text-muted-foreground">
        <p className="font-mono">
          © {new Date().getFullYear()} Jahnavi Chowdhary · Designed & built with{" "}
          <span className="text-gradient font-semibold">passion</span>
        </p>
      </div>
    </footer>
  );
};
