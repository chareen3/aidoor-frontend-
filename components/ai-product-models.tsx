'use client';

import { motion } from 'framer-motion';
import { Sparkles, Palette, Zap } from 'lucide-react';

export function AIProductModels() {
  const features = [
    { title: "Custom AI Model", icon: Sparkles },
    { title: "Any Scene", icon: Palette },
    { title: "Any Style", icon: Palette },
    { title: "Instant Output", icon: Zap }
  ];
  
  return (
    <section className="py-24 lg:py-32 bg-warm-100 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              AI Product Models
            </h2>
            <p className="text-xl mb-8">
              Your product. Your model. Your story.
            </p>
            <p className="text-charcoal-900/70 dark:text-warm-50/70 mb-8">
              Train a custom AI model on your brand. Then let it wear, hold, and showcase your products — in any scene, any style, any world you imagine.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-warm-50 dark:bg-charcoal-800 rounded-lg">
                  <f.icon className="w-6 h-6 text-teal-700" />
                  <span className="font-semibold">{f.title}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 border border-teal-700/30 rounded-lg">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-500">Show my product in a luxury setting</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 to-transparent rounded-3xl border border-teal-700/10" />
            <div className="absolute inset-8 bg-warm-50 dark:bg-charcoal-800 rounded-2xl border border-warm-200 dark:border-charcoal-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-700/20 to-teal-700/5" />
                <div className="font-semibold">Luna</div>
                <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">Fashion Model</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
