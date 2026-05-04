'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-700 dark:text-teal-500 mb-6">
            Ideas with AI
          </span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            AI-Powered Reel Creation
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-8">
            Turn Ideas Into Viral Reels in Seconds
          </p>
          <p className="text-lg text-charcoal-900/70 dark:text-warm-50/70 mb-10 max-w-3xl mx-auto">
            Generate hyperreal motion, sound, and captions from a single prompt. No editing skills needed — just your idea.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold">10M+</div>
              <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">Reels Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">Globally</div>
            </div>
          </div>
          
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-warm-50 dark:text-charcoal-950 bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors"
          >
            Free To Start
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
