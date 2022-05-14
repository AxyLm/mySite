const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // build时删除未使用的类名
  safelist: [
    'bg-blue-500',
    'text-center',
    'hover:opacity-100',
    'lg:text-right',
  ], // 将特定类列入安全列表 （no delete）
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      trueGray: colors.neutral,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}