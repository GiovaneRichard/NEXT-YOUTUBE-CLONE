import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light", // Define o modo do tema como "light" por padrão
    background: {
      default: "#fff",
      paper: "#fff",
    },
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3ea6ff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

// Sobrescreva as propriedades para o tema escuro (dark)
const darkTheme = createTheme(theme, {
  palette: {
    mode: "dark",
    background: {
      default: "#f4f6f8",
      paper: "#242424",
    },
  },
});

export default theme;
export { darkTheme };
