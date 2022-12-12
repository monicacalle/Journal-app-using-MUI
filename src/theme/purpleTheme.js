import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#262254",
    },
    secondary: {
      main: "#54384",
    },
    error: {
      main: red.A400,
    },
  },
});
