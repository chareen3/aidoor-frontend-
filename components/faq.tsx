'use client';

import { motion } from 'framer-motion';

export function FAQ() {
  const faqs = [
    {
      q: "How do I generate a product video?",
      a: "Navigate to the Product Videos section, select a model and upload your product photo. Fill in the prompt describing the scene and click Generate. The process usually takes 1–3 minutes."
    },
    {
      q: "Why is my video stuck on 'Processing'?",
      a: "Processing times can vary depending on content complexity. Most videos complete within 3 minutes. If it takes longer, try refreshing the page or contact support."
    },
    {
      q: "Can I download my generated videos?",
      a: "Yes! All generated content can be downloaded in high quality directly from your dashboard."
    },
    {
      q: "What aspect ratios are supported?",
      a: "We support all major social aspect ratios: 9:16 (Reels/TikTok/Shorts), 1:1 (Instagram posts), and 16:9 (YouTube)."
    },
    {
      q: "How do I add a new model?",
      a: "Go to the Model Builder section, follow the step-by-step guide to upload reference photos, and customize your persona. Training takes a few minutes."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. Your data is encrypted and stored securely. You own all content you create with the platform."
    }
  ];
  
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            FAQ
          </h2>
          <p className="text-xl mb-8">
            Got questions?
          </p>
          <p className="text-charcoal-900/70 dark:text-warm-50/70">
            Everything you need to know. Can't find the answer? Reach out to our support team.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 border border-charcoal-900/10 dark:border-warm-50/10 rounded-2xl"
            >
              <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
              <p className="text-charcoal-900/70 dark:text-warm-50/70">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
