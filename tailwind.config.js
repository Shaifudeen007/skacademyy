/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        obsidian: '#09090B',
        charcoal: '#121214',
        'slate-dark': '#18181B',
        'gold-metallic': '#D4AF37',
        'gold-champagne': '#F5D061',
        'gold-bronze': '#AA7C11',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)',
        'glare-gradient': 'linear-gradient(110deg, #D4AF37 35%, #FFFFFF 50%, #D4AF37 65%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'text-glare': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        'text-glare': 'text-glare 3s linear infinite',
        marquee: 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}
