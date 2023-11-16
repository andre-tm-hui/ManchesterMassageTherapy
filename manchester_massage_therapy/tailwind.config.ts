import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary-color)',
        secondary: 'var(--bg-secondary-color)',
        accent: 'var(--bg-accent-color)',
        menu: 'var(--bg-menu-color)',
        bookingButtonIdle: 'var(--bg-booking-button-idle-color)',
        bookingButtonHover: 'var(--bg-booking-button-hover-color)',
        dividerLine: '#B0B0B0',
        imageFilter: 'var(--image-filter-color)'
      },
      textColor: {
        primary: 'var(--text-primary-color)',
        secondary: 'var(--text-secondary-color)',
        accent: 'var(--text-accent-color)',
        menu: 'var(--text-menu-color)',
        logo: 'var(--logo-color)',
        bookingButton: 'var(--text-booking-button-color)',
        svg: 'var(--text-svg-color)',
        hyperlink: 'var(--text-hyperlink-color)'
      },
      boxShadowColor: {
        card: 'var(--shadow-card-color)'
      }
    },
  },
  plugins: [],
};
export default config;
