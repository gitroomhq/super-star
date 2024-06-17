/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "530px",
      sm: "768px",
      md: "960px",
      tablet: "1080px",
      laptop: "1280px",
      lg: "1370px",
    },
    extend: {
      fontFamily: {
        matter: ["var(--font-matter)"],
        "chakra-petch": ["var(--font-chakra-petch)"],
        "ibm-plex-sans": ["var(--font-ibm-plex-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "star-background": 'url("/pngs/bg.png")',
        "card-mask":
          "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%)",
        "card-mask-reverse":
          "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)",
        "illustration-mask-b":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
        "illustration-mask-r":
          "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      },
      boxShadow: {
        "inner-outer": "0 0 60px 0, inset 0 0 40px 0",
      },
    },
  },
  plugins: [],
};
