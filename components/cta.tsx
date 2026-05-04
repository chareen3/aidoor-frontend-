'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-3xl p-10 lg:p-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-warm-50 mb-6">
            Ready to build your first AI influencer system?
          </h2>
          <p className="text-lg text-warm-100/80 mb-10 max-w-2xl mx-auto">
            Start with a free account. No credit card required.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-teal-700 bg-warm-50 hover:bg-warm-100 rounded-xl transition-colors"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
