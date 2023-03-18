/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/components/*.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            mainBgColor: "#fff",
            primaryColor: "#04ddb2",
            bigTextColor: "#333",
            smallTextColor: "#767676",
            sectionBgColor: "#F2F3F5",
            btnBgColor: "#EEF0F2",
            blur: "rgba(178, 174, 176, 0.8)",
         },
         width: {
            extra: "150%",
         },
         keyframes: {
            toright: {
               "100%": { left: "100%" },
            },
            toleft: {
               "100%": { right: "100%" },
            },
            popup: {
               "0%": {
                  transform: "scale(0)",
                  opacity: "0",
                  // width: "0",
                  // height: "0",
               },
               "100%": {
                  transform: "scale(1)",
                  opacity: "1",
                  // width: "56px",
                  // height: "56px",
               },
            },
         },

         animation: {
            popup: "popup 1s linear",
         },
      },
   },
   plugins: [require("tailwind-scrollbar")],
};
