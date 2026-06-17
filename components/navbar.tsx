"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Gamepad2 className="w-8 h-8 text-primary" />
          <span className="font-display font-bold text-xl tracking-tight text-white">GDC ELEX</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`transition-colors ${pathname === link.path ? "text-white" : "text-muted hover:text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/join" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            Join GDC
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav Dropdown (Simplified) */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.path} href={link.path} className="text-muted hover:text-white" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="/join" className="text-primary font-medium" onClick={() => setIsOpen(false)}>
            Join GDC
          </Link>
        </div>
      )}
    </nav>
  );
}