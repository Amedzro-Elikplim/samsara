import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        500: "#C8EEEF",
        600: "#72A4A5",
      },
      secondary: {
        500: "#E48440"
      },
      white: "#ffffff",
    },
    maxWidth: {
      '8xl': '90rem', // 1440px
      '9xl': '96rem', // 1536px
      // Add your custom sizes here
    },
    fontFamily: {
      scinter: ['Inter'],
      scnunito: ['Nunito Sans'],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "Raleway"
      ],
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    fontSize: {
      sm: '0.8rem',
      md: '1rem',
      base: '2rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '3.441rem',
      '5xl': '6.052rem',
      '6xl': '7rem',
    },
    extend: {
      backgroundImage: {
          'hero': "url('/hero.png')",
      },
      textColor: {
        white: '#ffffff',
        'gray-500': '#655F5F',
      },
    },
  },
  plugins: [], 
};
export default config;
