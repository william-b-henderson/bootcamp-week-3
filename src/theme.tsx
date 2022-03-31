import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    primary: {
      orange: "#ff6600",
      dark: "#2B2541",
      yellow: "#FED800",
      stone: "#f4f8fb",
      ice: "#f9fbfd"
    },
    secondary: {
        orange: "#ff6600",
        dark: "#2B2541",
        meadow: "#7fb069",
        sand: "#e6aa68",
        dorian: "#f5f5f5",
        gold: "#f49d37",
        lake: "#3f88c5",
    },
    darkOrange: {
        100: "#FF6600",
        200: "#ED5F00",
        300: "#DB5700",
        400: "#C85000",
        500: "#B64900",
    },
    lightOrange: {
        100: "#FF6600",
        200:
        300:
        400:
        500:
        600:
    }

  },

  fonts: {
    rubik: 'Rubik',
  },
  textStyles: {
    defaults: {
      lineHeight: '100%',
      fontFamily: 'rubik',
    },
    h1: {
      fontSize: '36px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '30px',
      fontWeight: '700',
    },
    h3: {
        fontSize: '24px',
        fontWeight: '700',
    },
    h4: {
        fontSize: '18px',
        fontWeight: '700',
    },
    h5: {
        fontSize: '16px',
        fontWeight: '700',
      },
    },
    
  
})

export default theme