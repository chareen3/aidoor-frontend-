'use client';

import { motion } from 'framer-motion';

export function TrustStrip() {
  const logos = [
    'CreatorCo', 'BrandX', 'AgencyHub', 'ContentLab', 'MediaGroup', 'StudioOne'
  ];

  return (
    <section className="py-12 border-y border-warm-200 dark:border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-charcoal-900/50 dark:text-warm-50/50 mb-8"
        >
          Trusted by teams building AI-first companies
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-center"
            >
              <span className="text-xl font-bold text-charcoal-900/20 dark:text-warm-50/20">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
