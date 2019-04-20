import { createMuiTheme } from "@material-ui/core/styles";

export const FontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700
};
export const ColorPalette = {
  main: {
    primary: "#F17964",
    secondary: "#606060",
    disabled: "#FFD4CD"
  },
  text: {
    primary: "#081320",
    secondary: "#737D89",
    tertiary: "#BBBABA",
    disabled: "#BBBABA"
  },
  other: {
    golden: "#efce4a",
    lightGrey: "#f2f2f2",
    mediumGrey: "#e0e0e0",
    success: "#219653"
  }
};
export default createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.23) !important"
      },
      label: {
        textTransform: "none",
        fontSize: "12px",
        fontWeight: FontWeight.semibold,
        padding: "5px"
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: "12px"
      }
    }
  },
  palette: {
    primary: {
      main: ColorPalette.main.primary,
      contrastText: "#fff"
    },
    secondary: {
      main: ColorPalette.main.secondary,
      contrastText: "#fff"
    },
    accent: {
      main: "#d81b60",
      contrastText: "#fff"
    },
    background: {
      default: "#fff"
    },
    text: {
      primary: ColorPalette.text.primary,
      secondary: ColorPalette.text.secondary,
      disabled: ColorPalette.text.disabled
    },
    action: {
      disabled: "#ffffff",
      disabledBackground: ColorPalette.main.disabled
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: FontWeight.regular,
    fontWeightRegular: FontWeight.semibold,
    fontWeightMedium: FontWeight.bold,
    h1: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.bold,
      fontSize: "36px"
    },
    h2: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.bold,
      fontSize: "30px"
    },
    h3: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.semibold,
      fontSize: "28px"
    },
    h4: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.semibold,
      fontSize: "24px"
    },
    h5: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.semibold,
      fontSize: "18px"
    },
    h6: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.semibold,
      fontSize: "14px"
    },
    body1: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.regular,
      fontSize: "14px"
    },
    body2: {
      color: ColorPalette.text.primary,
      fontWeight: FontWeight.semibold,
      fontSize: "14px"
    },
    subtitle1: {
      color: ColorPalette.text.secondary,
      fontWeight: FontWeight.regular,
      fontSize: "12px"
    },
    subtitle2: {
      color: ColorPalette.text.secondary,
      fontWeight: FontWeight.semibold,
      fontSize: "12px"
    },
    caption: {
      color: ColorPalette.text.secondary,
      fontWeight: FontWeight.regular,
      fontSize: "10px",
      lineHeight: 1.3
    }
  }
});
