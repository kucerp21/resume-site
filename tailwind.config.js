/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './404.html'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  safelist: [
    'bg-zinc-900', 'text-white', 'dark:bg-zinc-100', 'dark:text-zinc-900',
  ],
}
