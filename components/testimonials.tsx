'use client';

import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      quote: "This platform completely changed how I create content. The AI models are incredibly realistic and save me hours every week.",
      author: "Sarah Johnson",
      role: "Content Creator",
      initials: "SJ"
    },
    {
      quote: "We scaled our brand content 10x without hiring a single extra person. The quality blew our entire team away on day one.",
      author: "Marcus Lee",
      role: "Brand Strategist",
      initials: "ML"
    },
    {
      quote: "I was skeptical at first but the results speak for themselves. Our engagement went up 3x within the first month of using it.",
      author: "Priya Sharma",
      role: "Digital Marketer",
      initials: "PS"
    },
    {
      quote: "Running a creative agency means tight deadlines. This tool lets us deliver premium AI content at a pace we never thought possible.",
      author: "James Carter",
      role: "Agency Owner",
      initials: "JC"
    },
    {
      quote: "Product shoots used to cost us thousands. Now we generate stunning visuals in minutes. It pays for itself every single month.",
      author: "Aiko Tanaka",
      role: "E-commerce Founder",
      initials: "AT"
    },
    {
      quote: "Managing multiple talent accounts is complex. This platform simplified everything — content, scheduling, and AI persona creation.",
      author: "Lena Fischer",
      role: "Influencer Manager",
      initials: "LF"
    }
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Testimonials
          </h2>
          <p className="text-xl mb-8">
            Loved by creators.
          </p>
          <p className="text-charcoal-900/70 dark:text-warm-50/70 max-w-2xl mx-auto">
            Real people, real results. See what creators and brands are saying about their experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-warm-50 dark:bg-charcoal-800 rounded-2xl"
            >
              <p className="mb-6 text-charcoal-900/80 dark:text-warm-50/80">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-700/20 flex items-center justify-center text-teal-700 font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
