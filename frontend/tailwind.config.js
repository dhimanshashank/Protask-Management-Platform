/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "50%": { width: "70%" },
          // "100%": { width: "0%" },
        },
        blink: {
          "0%, 75%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 8s steps(40, end) infinite, blink 1s infinite",
      },

      colors: {
        purple: "var(--purple)",
        yellow: "var(--yellow)",
        blackboard: "var(--blackboard)",
        midnight: "var(--midnight)",
        rasbery: "var(--rasbery)",
      },
      spacing: {
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
      },
      fontFamily: {
        poppins: "var(--font-family)",
      },
      fontSize: {
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
      },
      borderRadius: {
        custom: "var(--border-radius)",
      },
      boxShadow: {
        custom: "var(--box-shadow)",
      },
      zIndex: {
        header: "var(--z-index-header)",
        modal: "var(--z-index-modal)",
      },
    },
  },
  plugins: [],
};
