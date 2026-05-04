'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Define your idea',
    description: 'Start with a single concept or campaign brief. AIDoor helps structure your input into a clear prompt.'
  },
  {
    number: '02',
    title: 'Build the persona',
    description: 'Set voice, aesthetics, and core attributes. Define consistency once, apply everywhere.'
  },
  {
    number: '03',
    title: 'Orchestrate content',
    description: 'Chain generation, review, and approval steps. Build a reliable pipelines.'
  },
  {
    number: '04',
    title: 'Ship at scale',
    description: 'Deploy across platforms with scheduled publishing and performance tracking.'
  }
];

export function Workflow() {
  return (
    <section className="py-24 lg:py-32 bg-warm-100 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A simple system, not another tool
          </h2>
          <p className="text-lg text-charcoal-900/70 dark:text-warm-50/70 max-w-2xl mx-auto">
            Four steps that turn sporadic creation into consistent production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-bold text-teal-700/10 dark:text-teal-500/10 mb-2">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal-900/70 dark:text-warm-50/70">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-1/2 h-px bg-gradient-to-r from-teal-700/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
