/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#062B52',
          800: '#0A3765',
          700: '#124576',
          600: '#1B5288',
          900: '#041F3B',
        },
        gold: {
          DEFAULT: '#DCA52E',
          600: '#C8921F',
          400: '#E7BB55',
        },
        ink: '#172B45',
        muted: '#667085',
        surface: '#F4F6F9',
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(6,43,82,0.18)',
        lift: '0 22px 45px -20px rgba(6,43,82,0.35)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
}
