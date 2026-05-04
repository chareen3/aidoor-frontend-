import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#0F4C4C',
          800: '#145A5A',
          700: '#1A6B6B',
          600: '#207D7D',
        },
        warm: {
          50: '#FDFBF7',
          100: '#F9F5ED',
          200: '#F2E9DB',
          900: '#2D261F',
        },
        charcoal: {
          950: '#0F1115',
          900: '#16181D',
          800: '#1E2028',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
