import { createTheme } from "@mui/material/styles";
import { blue, red, grey, lightBlue } from "@mui/material/colors";

//NOTE Create Custom Theme
export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: "#bd93f9",
    },
    danger: {
      main: "#C70039",
    },
    lightBlue: {
      main: lightBlue[400]
    },
    tabs: {
      main: grey[800]
    },
    background: {
      main: "#27374D"
    },

  },
  typography: {
    fontFamily: "vazir, roboto",
  }

});

export const lighttheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: grey[400],
    },
    secondary: {
      main: "#bd93f9",
    },
    danger: {
      main: "#C70039",
    },
    lightBlue: {
      main: lightBlue[900]
    },
    tabs: {
      main: grey[100]
    },
    background: {
      main: "#F6F1F1"
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
  },

});