/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik"]
      },
      backgroundPosition: {
        '3/4': '80%',
      },
      colors: {
        'blue': "hsl(246, 80%, 60%)",
        'pale-blue': 'hsl(236, 100%, 87%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 36%, 30%)',
        'background-blue': 'hsl(226, 43%, 10%)',
        'work-color': 'hsl(15, 100%, 70%)',
        'exercise-color': 'hsl(145, 58%, 55%)',
        'play-color': 'hsl(195, 74%, 62%)',
        'study-color': 'hsl(348, 100%, 68%)',
        'social-color': 'hsl(264, 64%, 52%)',
        'self-color': 'hsl(43, 84%, 65%)'
      },
    },
  },
  plugins: [],
}

