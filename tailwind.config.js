/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        dark:  '#303A41',
        dark2: '#3B464E',
        cream: '#F7FBF8',
        cream2:'#EFF3F1',
        acc:   '#F4A25A',
        accD:  '#E88F41',
        muted: '#8A9294',
        line:  '#E2E7E5',
      },
      fontFamily: {
        display: ["'Russo One'", 'system-ui', 'sans-serif'],
        body: ["'Manrope'", 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        cardm: '20px',
        cards: '14px',
      },
      boxShadow: {
        card:  '0 18px 45px -18px rgba(48,58,65,.14)',
        cardS: '0 10px 30px -14px rgba(48,58,65,.12)',
      },
    },
  },
  plugins: [],
}
