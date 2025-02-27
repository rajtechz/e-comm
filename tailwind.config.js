// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
    ],
    theme: {
      extend: {
        colors: {
          'custom-red': '#ea2e0e', // Define your custom color
        },
      },
    },
    plugins: [],
  };