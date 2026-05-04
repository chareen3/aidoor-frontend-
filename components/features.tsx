'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, Layers, Zap } from 'lucide-react';

const features = [
  {
    title: 'Idea generation that connects to execution',
    description: 'Turn abstract concepts into structured prompts. No more scattered notes—every idea has a clear path to production.',
    icon: Sparkles,
    color: 'from-teal-700/20 to-teal-700/5'
  },
  {
    title: 'Personas with consistent visual identity',
    description: 'Define characteristics once, deploy everywhere. AIDoor keeps your AI influencers cohesive across platforms.',
    icon: Users,
    color: 'from-teal-600/20 to-teal-600/5'
  },
  {
    title: 'Workflows that orchestrate the chaos',
    description: 'Chain together ideation, creation, and approval steps. Build once, run reliably every time.',
    icon: Layers,
    color: 'from-teal-700/20 to-teal-700/5'
  },
  {
    title: 'Velocity without compromising quality',
    description: 'Ship campaigns faster while maintaining brand standards. Automation for the tedious parts, control where it matters.',
    icon: Zap,
    color: 'from-teal-600/20 to-teal-600/5'
  }
];

export function Features() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="w-7 h-7 text-teal-700 dark:text-teal-500" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-charcoal-900/70 dark:text-warm-50/70">
                  {feature.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative aspect-[4/3] bg-warm-100 dark:bg-charcoal-800 rounded-2xl border border-warm-200 dark:border-charcoal-700 overflow-hidden">
                  <div className="absolute inset-0 p-8">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-lg bg-warm-50 dark:bg-charcoal-900 border border-warm-200/50 dark:border-charcoal-700/50 ${i === 2 || i === 4 ? 'col-span-2' : ''} ${i === 3 ? 'row-span-2' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
