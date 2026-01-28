/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5f3f', // Dark green
          dark: '#144a32',
          light: '#2d7a5a',
          50: '#f0f9f6',
          100: '#d1f2e5',
          200: '#a3e5cb',
          300: '#75d8b1',
          400: '#47cb97',
          500: '#1a5f3f',
          600: '#144a32',
          700: '#0e3525',
        },
        accent: {
          DEFAULT: '#d97706', // Brown/orange for buttons
          light: '#f59e0b',
          dark: '#b45309',
        },
        gold: {
          DEFAULT: '#fbbf24', // Golden yellow for gavel
          light: '#fcd34d',
          dark: '#f59e0b',
        },
        beige: {
          DEFAULT: '#f5f1e8', // Light beige
          light: '#faf8f3',
          dark: '#e8e0d3',
        },
        bg: {
          DEFAULT: '#ffffff',
          light: '#f5f1e8', // Beige
          subtle: '#faf8f3',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          muted: '#64748b',
          light: '#94a3b8',
        },
        border: {
          DEFAULT: '#e2e8f0',
          light: '#f1f5f9',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
