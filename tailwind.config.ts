import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#F4F3ED",
        "dark-forest": "#3E4B2D",
        "leaf-green": "#5F7347",
        "pink-orange": "#FF9476",
        "mellow-gray": "#BCBAAD",
      },
      keyframes: {
        // overlayShow: {
        //   from: { opacity: "0", backgroundColor: "rgba(0, 0, 0, 0.4)" },
        //   to: { opacity: "1", backgroundColor: "rgba(0, 0, 0, 0.4)" },
        // },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
});
