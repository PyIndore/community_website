import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        python: {
          blue: '#306998',
          'blue-bright': '#4a90d9',
          'blue-deep': '#1e4d7a',
          yellow: '#ffd43b',
          'yellow-bright': '#ffe566',
          'yellow-deep': '#e6b800',
        },
        dark: {
          bg: '#03081a',
          surface: '#071020',
          card: '#0d1b30',
          elevated: '#132240',
          border: 'rgba(255,255,255,0.09)',
          'border-strong': 'rgba(255,255,255,0.17)',
          text: '#f0f4f8',
          secondary: '#c8d8e8',
          muted: '#8da5be',
          tertiary: '#4d6880',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 7s ease-in-out infinite',
        'glow-fast': 'glow 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.55' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-blue-yellow': 'linear-gradient(135deg, #306998 0%, #ffd43b 100%)',
        'gradient-blue': 'linear-gradient(135deg, #4a90d9 0%, #306998 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(48,105,152,0.4), 0 4px 16px rgba(0,0,0,0.3)',
        'glow-blue-sm': '0 0 16px rgba(48,105,152,0.3)',
        'glow-yellow': '0 0 30px rgba(255,212,59,0.3)',
        'glass': 'inset 0 1.5px 0 rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.25)',
        'glass-lg': 'inset 0 2px 0 rgba(255,255,255,0.18), 0 16px 48px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
export default config;
