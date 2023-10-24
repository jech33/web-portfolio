import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#FFFFFE',
        'text-secondary': '#94A1B2',
        'primary-dark': '#583EA8',
        'primary-main': '#7F5AF0',
        'primary-light': '#987BF3',
        'secondary-dark': '#1E7F57',
        'secondary-main': '#2CB67D',
        'secondary-light': '#56C497',
        'background-dark': '#0F0F12',
        'background-main': '#16161A',
        'background-light': '#242629',
        'divider-dark': '#67707C',
        'divider-main': '#94A1B2',
        'divider-light': '#A9B3C1',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
