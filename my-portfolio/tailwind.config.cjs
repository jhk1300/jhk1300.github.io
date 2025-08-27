/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F172A',      // 사이드바 및 배경색
        'dark-card': '#1E293B',    // 카드 배경색
        'light-text': '#E2E8F0',   // 밝은 텍스트 색상
        'gray-text': '#94A3B8',    // 회색 텍스트 색상
        'accent-color': '#3B82F6', // 포인트 색상 (파란색)
      },
    },
  },
  plugins: [],
}