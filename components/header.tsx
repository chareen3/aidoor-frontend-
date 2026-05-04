'use client';

import { AIDoorLogo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ' +
        (scrolled
          ? 'bg-warm-50/80 dark:bg-charcoal-950/80 backdrop-blur-md border-b border-warm-200/50 dark:border-charcoal-800/50'
          : 'bg-transparent')
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center">
            <AIDoorLogo />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {['Product', 'Workflows', 'Pricing', 'Blog'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-charcoal-900/70 dark:text-warm-50/70 hover:text-charcoal-950 dark:hover:text-warm-50 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-warm-50 dark:text-charcoal-950 bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
