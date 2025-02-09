/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        white: "var(--white-color)",
        dark: "var(--dark-color)",
        hover: "var(--hover-color)",
        "color-01": "var(--color-01)",
        "color-02": "var(--color-02)",
        "color-03": "var(--color-03)",
        "color-04": "var(--color-04)",
        "color-05": "var(--color-05)",
      },
      fontSize: {
        h1: "var(--h1-font-size)",
        h2: "var(--h2-font-size)",
        h3: "var(--h3-font-size)",
        h4: "var(--h4-font-size)",
        h5: "var(--h5-font-size)",
        base: "var(--base-font-size)",
        small: "var(--small-font-size)",
      },
      fontWeight: {
        light: "var(--font-light)",
        normal: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semi-bold)",
        bold: "var(--font-bold)",
      },
      zIndex: {
        base: "var(--z-base)",
        low: "var(--z-low)",
        high: "var(--z-high)",
        tooltip: "var(--z-tooltip)",
        menu: "var(--z-menu)",
        overlay: "var(--z-overlay)"
      },
      backgroundColor: {
        body: "var(--body-color)",
        nav: "var(--bottom-nav-bg)",
        card: "var(--card-bg)",
        "modal-backdrop": "var(--modal-backdrop-bg)",
        footer: "var(--footer-bg)",
      },
      height: {
        custom: "calc(100vh - 72px)"
      },
      screens: {
        'custom-xl': {max: '868px'},
        'custom-lg': {max: '768px'},
        'custom-md': {max: '668px'},
        'custom-sm': {max: '568px'},
        'custom-xsm': {max: '468px'},
      }
    },
  },
  plugins: [],
};
