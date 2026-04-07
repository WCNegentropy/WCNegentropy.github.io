/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.html',
    './*.md',
    './_posts/**/*.{md,html}',
    './_research/**/*.md',
    './_software/**/*.md',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Refined brand — oxidised emerald-teal, keeps the green DNA but drops the neon
        brand: {
          50:  '#edfcf5',
          100: '#d3f8e8',
          200: '#aaf0d4',
          300: '#70e2b8',
          400: '#34cc96',  // main accent / hover target
          500: '#10b37a',  // primary brand
          600: '#08905f',
          700: '#077048',
          800: '#085937',
          900: '#07492e',
          950: '#02291a',
        },
        // Named surface tokens for dark-mode depth hierarchy
        ink: {
          950: '#080808',  // canvas — page background
          900: '#0f0f0f',  // base surface
          800: '#161616',  // panel surface
          700: '#1e1e1e',  // elevated panel
          600: '#262626',  // hover state
          500: '#303030',  // border
          400: '#404040',  // subtle border
          300: '#5c5c5c',  // muted text
          200: '#8a8a8a',  // secondary text
          100: '#b8b8b8',  // placeholder
          50:  '#e6e1d6',  // primary text (warm ivory)
        },
      },
      boxShadow: {
        // Architectural: border-glow shift rather than drop shadows
        glow:    '0 0 0 1px rgba(16, 179, 122, 0.45), 0 4px 20px rgba(16, 179, 122, 0.12)',
        'glow-sm':'0 0 0 1px rgba(16, 179, 122, 0.3)',
        panel:   '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
        'panel-hover': '0 4px 16px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in':    'fadeIn 0.4s ease both',
        'slide-up':   'slideUp 0.5s ease both',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'draw-line':  'drawLine 1.2s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        drawLine: {
          from: { strokeDashoffset: '1' },
          to:   { strokeDashoffset: '0' },
        },
      },
      // Tighter border radii — more exacting, less SaaS-y
      borderRadius: {
        DEFAULT: '0.25rem',
        sm:  '0.125rem',
        md:  '0.375rem',
        lg:  '0.5rem',
        xl:  '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      // Type scale additions
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.025em',
        wide:     '0.06em',
        widest:   '0.12em',
      },
    },
  },
  plugins: [],
}
