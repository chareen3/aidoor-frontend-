'use client';

import { motion } from 'framer-motion';
import { Instagram, Music, Play } from 'lucide-react';

export function AIInfluencerStudio() {
  const platforms = [
    { icon: Instagram, label: "Instagram" },
    { icon: Music, label: "TikTok" },
    { icon: Play, label: "YouTube Shorts" }
  ];
  
  const features = [
    "Dance & trend reels on demand",
    "Your own AI influencer persona",
    "Auto-optimized for each platform",
    "From prompt to post in seconds"
  ];
  
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI Influencer Studio
          </h2>
          <p className="text-xl mb-8">
            Create an influencer that works for you.
          </p>
          <p className="text-charcoal-900/70 dark:text-warm-50/70 max-w-3xl mx-auto">
            Generate viral dance reels, trending content, and social-ready videos — powered by your own AI influencer. Built for Instagram, TikTok, and YouTube Shorts.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {platforms.map((p, i) => (
            <div key={i} className="flex items-center gap-2 p-3 border border-charcoal-900/10 dark:border-warm-50/10 rounded-lg">
              <p.icon className="w-6 h-6" />
              <span className="font-semibold">{p.label}</span>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-700" />
              <span>{f}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-6 p-6 bg-warm-100 dark:bg-charcoal-900 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold">2.4M</div>
              <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">180K</div>
              <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12K</div>
              <div className="text-sm text-charcoal-900/60 dark:text-warm-50/60">Shares</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
