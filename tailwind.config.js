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
          50: '#e6f8ff',
          100: '#ccefff',
          200: '#99dfff',
          300: '#66cfff',
          400: '#33bfff',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49', // Added for dark mode gradients
        },
      },
      boxShadow: {
        glow: '0 10px 30px rgba(14, 165, 233, 0.25)',
        'glow-lg': '0 20px 60px rgba(14, 165, 233, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      },
    },
  },
  plugins: [],
}
