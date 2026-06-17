import { Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 py-16 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6">
        <div className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center mb-2">
          <Gamepad2 className="w-6 h-6 text-muted" />
        </div>
        <div>
          <p className="text-lg font-medium text-white mb-1">Built by students. Driven by creativity.</p>
          <p className="text-muted font-display tracking-widest text-sm uppercase mt-4">
            Grow. Innovate. Inspire.
          </p>
        </div>
      </div>
    </footer>
  );
}
