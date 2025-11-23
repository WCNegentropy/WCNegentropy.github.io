/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.html',
    './*.md',
    './_posts/**/*.{md,html}',
  ],
  darkMode: 'selector', // Use 'selector' strategy for manual dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0ffe6',
          100: '#dfffcc',
          200: '#bfff99',
          300: '#9fff66',
          400: '#7fff33',
          500: '#5fff00',  // Bright lime/code green
          600: '#4cd700',
          700: '#39a500',
          800: '#267300',
          900: '#134100',
          950: '#0a2900', // Dark green for gradients
        },
      },
      boxShadow: {
        glow: '0 10px 30px rgba(95, 255, 0, 0.3)',
        'glow-lg': '0 20px 60px rgba(95, 255, 0, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      },
    },
  },
  plugins: [],
}
