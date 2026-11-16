/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: { 950: '#05060a', 900: '#0a0c14', 800: '#11141f', 700: '#1a1e2d' },
        neon: { cyan: '#22d3ee', violet: '#a78bfa', lime: '#a3e635' },
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        shine: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
      },
    },
  },
  plugins: [],
}
