'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AIProductModels } from '@/components/ai-product-models';
import { AIInfluencerStudio } from '@/components/ai-influencer-studio';
import { AIModelBuilder } from '@/components/ai-model-builder';
import { Pricing } from '@/components/pricing';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Cta } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AIProductModels />
        <AIInfluencerStudio />
        <AIModelBuilder />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
