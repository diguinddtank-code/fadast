'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FadaLogoHorizontal } from './ui/logo';

const navLinks = [
  { name: 'O Estúdio', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Contactos', href: '/contactos' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <FadaLogoHorizontal className="transition-opacity group-hover:opacity-70" />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest font-medium transition-colors hover:text-black",
                  pathname === link.href ? "text-black" : "text-zinc-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm">
              <Link href="/contactos">Reserva Online</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-zinc-600 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-b border-zinc-200"
        >
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base uppercase tracking-widest font-medium transition-colors",
                  pathname === link.href ? "text-black bg-zinc-50" : "text-zinc-500 hover:text-black hover:bg-zinc-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild variant="default" className="w-full">
                <Link href="/contactos" onClick={() => setIsOpen(false)}>Reserva Online</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
