/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
