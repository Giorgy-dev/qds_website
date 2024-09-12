/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"FFF Acid Grotesk Bold"', "aktiv-grotesk", "sans-serif"],
      'display': ['"FFF Acid Grotesk Bold"'],
      'body': ['aktiv-grotesk'],
    },
    extend: {
      colors: {
        primary: "#FD4912",
        secondary: "#C73C00",
        accent: "#850018",
        neutral: "#F5F5F5",
        filled: "#0A0A0A",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
