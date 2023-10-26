import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#FF2B51',
        secondary: "#00e1ff",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  darkMode: "class",
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  daisyui: {
    themes: [
      {
        myDark: {
          "primary": "#FF2B51",
          "secondary": "#00e1ff",
          "accent": "#1FB2A5",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      },
      {
        winter : {
          "primary": "#FF2B51",
          "secondary": "#00e1ff",
          "accent": "#1FB2A5",
          "neutral": "#C2E2F2",
          "base-100": "#D6EAF8",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      },
    ],
  },
  plugins: [require('daisyui')],
}
