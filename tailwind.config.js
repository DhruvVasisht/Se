import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'btn': '12px', // Define a custom border radius for buttons
      },
      colors: {
        primary: '#de1614',   // Customize primary color
        secondary: '#FF6723',  // Customize secondary color
        accent: '#00c4cc',     // Customize accent color
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        customtheme: {
          ...require("daisyui/src/theming/themes")["business"], // Extend an existing theme (you can change it if you want)
          primary: '#de1614',   // Custom primary color
          secondary: '#FF6723',  // Custom secondary color
          accent: '#00c4cc',     // Custom accent color
          "--rounded-btn": "12px", // Set rounded corners globally for buttons
        },
      },
    ],
  },
};
