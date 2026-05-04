'use client';

import { motion } from 'framer-motion';

const useCases = [
  {
    title: 'For creators',
    description: 'Scale your personal brand without burning out. Build consistent content across platforms while staying true to your voice.',
    features: ['Multi-platform scheduling', 'Content batch generation', 'Performance insights']
  },
  {
    title: 'For agencies',
    description: 'Standardize client workflows across teams. Deliver predictable results with reusable pipelines and approval processes.',
    features: ['Team collaboration', 'Client workspaces', 'Template libraries']
  },
  {
    title: 'For brands',
    description: 'Launch AI influencer programs with confidence. Maintain brand safety, consistency, and measurable ROI.',
    features: ['Brand compliance', 'Analytics dashboard', 'Campaign reporting']
  }
];

export function UseCases() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for how teams actually work
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group p-8 rounded-2xl border border-warm-200 dark:border-charcoal-800 hover:border-teal-700/30 dark:hover:border-teal-500/30 transition-colors"
            >
              <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-500 transition-colors">
                {useCase.title}
              </h3>
              <p className="text-charcoal-900/70 dark:text-warm-50/70 mb-6">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-700" />
                    <span className="text-charcoal-900/70 dark:text-warm-50/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
