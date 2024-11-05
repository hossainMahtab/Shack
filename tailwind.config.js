/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      segoe: ['"Segoe UI"', "sans-serif"],
      serif: ["Garamond", "serif"],
      // roboto: ['"Roboto"', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        xl: "4rem",
      },

      // default breakpoints but with 40px removed
      screens: {
        sm: "620px",
        md: "728px",
        lg: "964px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
