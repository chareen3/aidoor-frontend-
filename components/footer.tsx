import { AIDoorLogo } from './logo';

export function Footer() {
  const links = [
    {
      title: 'Product',
      items: ['Features', 'Workflows', 'Pricing', 'Changelog']
    },
    {
      title: 'Company',
      items: ['About', 'Blog', 'Careers', 'Contact']
    },
    {
      title: 'Resources',
      items: ['Documentation', 'API', 'Templates', 'Support']
    }
  ];

  return (
    <footer className="pt-20 pb-12 border-t border-warm-200 dark:border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <AIDoorLogo />
            <p className="mt-6 text-charcoal-900/70 dark:text-warm-50/70 max-w-sm">
              AI Influencer workflows, built to scale.
            </p>
          </div>
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-charcoal-900/70 dark:text-warm-50/70 hover:text-charcoal-950 dark:hover:text-warm-50 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-warm-200 dark:border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal-900/50 dark:text-warm-50/50">
            © 2025 AIDoor. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-charcoal-900/50 dark:text-warm-50/50 hover:text-charcoal-950 dark:hover:text-warm-50">
              Privacy
            </a>
            <a href="#" className="text-sm text-charcoal-900/50 dark:text-warm-50/50 hover:text-charcoal-950 dark:hover:text-warm-50">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
