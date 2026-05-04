'use client';

import { motion } from 'framer-motion';
import { Palette, Users, Video, Infinity } from 'lucide-react';

export function AIModelBuilder() {
  const features = [
    { icon: Palette, title: "Any appearance, ethnicity, style" },
    { icon: Users, title: "Trained on your unique identity" },
    { icon: Video, title: "Ready for reels, ads & shoots" },
    { icon: Infinity, title: "Unlimited content, zero reshoots" }
  ];
  
  return (
    <section className="py-24 lg:py-32 bg-warm-100 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI Model Builder
          </h2>
          <p className="text-xl mb-8">
            Build your own AI model. Any look. Any vibe.
          </p>
          <p className="text-charcoal-900/70 dark:text-warm-50/70 max-w-3xl mx-auto mb-12">
            Design a fully custom AI persona — your face, your style, your identity. Then deploy it across videos, reels, campaigns, and product shoots. No camera. No crew.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-warm-50 dark:bg-charcoal-800 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-teal-700/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-teal-700" />
              </div>
              <p className="font-semibold">{f.title}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {[
            { name: "Luna", role: "Fashion Model" },
            { name: "Kai", role: "Dance Influencer" },
            { name: "Zara", role: "Brand Ambassador" },
            { name: "Rex", role: "Fitness Creator" }
          ].map((p, i) => (
            <div key={i} className="text-center p-4 bg-warm-50 dark:bg-charcoal-800 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal-700/20 to-teal-700/5" />
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
