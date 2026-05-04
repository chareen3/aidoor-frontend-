'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "STARTER",
      since: "Since May 2026",
      price: "$5",
      period: "/ 0 day",
      credits: "600 Credits",
      models: "0 Models",
      features: ["600 AI Credits", "0 AI Models", "Access for 0 day"],
      highlighted: false
    },
    {
      name: "BUILDER",
      since: "Since May 2026",
      price: "$20",
      period: "/ -1 day",
      credits: "2500 Credits",
      models: "0 Models",
      features: ["2500 AI Credits", "0 AI Models", "Access for -1 day"],
      highlighted: true
    },
    {
      name: "PRO",
      since: "Since May 2026",
      price: "$50",
      period: "/ 0 day",
      credits: "6500 Credits",
      models: "1 Models",
      features: ["6500 AI Credits", "1 AI Models", "Access for 0 day"],
      highlighted: false
    }
  ];
  
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl mb-8">
            One plan for every creator.
          </p>
          <p className="text-charcoal-900/70 dark:text-warm-50/70 max-w-2xl mx-auto">
            Start free, scale when ready. No hidden fees — just credits that power your AI content.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border ${
                plan.highlighted 
                  ? 'border-teal-700 bg-teal-700/5' 
                  : 'border-charcoal-900/10 dark:border-warm-50/10'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-teal-700 text-warm-50 text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <div className="text-sm font-semibold text-charcoal-900/60 dark:text-warm-50/60 mb-1">
                {plan.name}
              </div>
              <div className="text-xs mb-4">{plan.since}</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-charcoal-900/60 dark:text-warm-50/60">{plan.period}</span>
              </div>
              <div className="flex justify-between mb-8 pb-8 border-b border-charcoal-900/10 dark:border-warm-50/10">
                <div>{plan.credits}</div>
                <div>{plan.models}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-teal-700" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-charcoal-900/60 dark:text-warm-50/60 mb-6">
                All plans include access to the AI studio. Credits are valid for the full plan duration.
              </p>
              <button className={`w-full py-3 font-semibold rounded-xl ${
                plan.highlighted 
                  ? 'bg-teal-700 text-warm-50 hover:bg-teal-800' 
                  : 'border border-charcoal-900/20 dark:border-warm-50/20 hover:bg-charcoal-900/5 dark:hover:bg-warm-50/5'
              }`}>
                Get {plan.name} →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
