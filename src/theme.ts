import { extendTheme } from "@chakra-ui/core";

export const breakpoints = ["360px", "768px", "1024px", "1440px"];
export const customTheme = extendTheme({
  styles: {
    global: {
      html: {
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,Ubuntu, Cantarell, Fira Sans,Droid Sans, Helvetica Neue, sans-serif",
        scrollbarVisible: "always",
        scrollBehavior: "smooth",
        padding: 0,
        margin: 0,
        textRendering: "optimizeSpeed"
      },
      body: {
        overflowY: "scroll"
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      "a:focus": {
        outline: "none",
      },
      "*, before, after": {
        boxSizing: "border-box",
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none"
      },
      ".background-pattern": {
        backgroundColor: "#f5f5f8",
        position: "relative",
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92BB' fill-opacity='0'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      },
      ".background-pattern-gradient": {
        top: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "-1",
        backgroundColor: "#f5f5f8"
      },
      ".card-image": {
        objectFit: "cover",
        width: "100%",
        height: "50%",
      },
      ".hideImages img": {
        display: "none",
      },
      ".cover-image": {
        width: "100%",
        height: "50vh",
        objectFit: "cover",
      },
      ".cover-image-full": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      ".tagline": {
        filter: "drop-shadow(2px 4px 4px rgba(46, 21, 48, 0.3))",
      },
      /* push overlay abover appbar */
      ".chakra-modal__overlay": {
        zIndex: 10,
      },
      ".rounded4": {
        borderRadius: "0.25rem",
        overflow: "hidden",
      },
      ".blur-image": {
        filter: "blur(2px)",
      },
      ".drop-shadow": {
        filter: "drop-shadow(2px 4px 8px rgba(46, 21, 48, 0.3))",
      },
      ".imgScale:hover, .imgScale:focus": {
        section: {
          opacity: 0.5,
        },
        p: {
          opacity: 1,
        },
        img: {
          transform: "scale(1.1)",
        }
      }
    }
  },
  layerStyles: {
    alertBox: {
      backgroundColor: "rgb(255,248,220)",
      borderRadius: "4px",
      border: "1px solid rgb(255,127,80)",
      padding: 4,
      margin: { base: 2, lg: 8 }
    },
    imgScale: {
      _hover: {
        image: {
          transform: "scale(1.1)"
        }
      }
    },
  },
  textStyles: {
    notes: {
      color: "#32334FCC",
      textAlign: "center"
    },
    iconSubText: {
      color: "#FFFFFFEE",
      textAlign: "center"
    },
    pageTitle: {
      ml: "0",
      mt: [1, 1, 2],
      mb: [1, 1, 2],
      letterSpacing: "tight",
      fontWeight: "500",
      color: "white",
      fontSize: ["2rem", "2.25rem", "2.25rem"],
      fontStyle: "normal",
      borderColor: "black",
      fontFamily: 'Raleway, sans-serif'
    },
    pageTitleBold: {
      ml: "0",
      mt: [1, 1, 3],
      mb: [1, 1, 3],
      letterSpacing: "-.1rem",
      fontWeight: "500",
      color: "purple.500",
      textAlign: "center",
      fontSize: ["2.5rem", "3rem", "3.5rem"],
      fontStyle: "normal",
      fontFamily: 'Raleway, sans-serif',
      _after: {
        content: '""',
        width: "100%",
        height: "4px"
      }
    },
    tagline: {
      ml: "0",
      mt: [-1, -1, -1],
      mb: [1, 1, 2],
      lineHeight: "1.7rem",
      fontWeight: "700",
      color: "red.400",
      fontSize: ["1rem", "1.2rem", "1.4rem"],
      fontStyle: "normal",
      fontFamily: 'Kaushan Script, sans-serif'
    },
    "sectionTitle": {
      fontWeight: "normal",
      fontSize: { base: "1.8rem", md: "1.8rem" },
      pt: { base: 4, md: 5 },
      pb: { base: 0, md: 2 },
      mt: "1em",
      textAlign: { base: "center", md: "left" },
      color: "#934aad",
    },
    "sectionTitlePlain": {
      fontWeight: "bold",
      fontSize: { base: "1.5rem", md: "1.6rem" },
      pt: 8,
      pb: 4,
      pl: "1em",
      mx: "1em",
      textAlign: "center",
      color: "gray.600",

    },
    "tourTitle": {
      fontWeight: "bold",
      fontSize: { base: "1.8rem", md: "1.8rem" },
      pt: 8,
      pb: 1,
      pl: 2,
      mb: 4,
      textAlign: "left",
      borderBottom: "4px solid #934aad",
      color: "#934aad",
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: { base: "1.1rem", md: "1.1rem" },
      mx: 0,
      p: "2",
      textAlign: "left",
      color: "black",
    },
    cardBody: {
      fontWeight: "normal",
      fontSize: "0.9rem",
      mx: 0,
      color: "gray.600",
      p: "2",
      letterSpacing: "0.01rem"
    },
    cardBodyLink: {
      fontWeight: "normal",
      fontSize: "0.8rem",
      m: 1,
      height: "1.75rem",
      color: "gray.600",
      px: 2,
      borderRadius: 16,
      letterSpacing: "0.01rem"
    },
    cardSubHeading: {
      fontWeight: "normal",
      fontSize: "0.9rem",
      mx: 0,
      color: "gray.600",
      p: "2",
      letterSpacing: "0.01rem",
      b: {
        color: "purple.500"
      }
    },
    locationCardTitle: {
      fontWeight: "bold",
      fontSize: { base: "1.2rem", md: "1.2rem" },
      mx: 0,
      textAlign: "right",
      color: "white",
    },

    blogPost: {
      margin: "auto",
      color: "gray.600",
      h1: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2rem",
        margin: "1em 0"
      },
      p: {
        lineHeight: "1.6rem",
        textAlign: "left",
        fontWeight: "normal",
        fontSize: "0.95rem",
        margin: "1em 0"
      },
      h5: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "0.8rem",
        marginBottom: "2em"
      },
      img: {
        maxWidth: "50%",
        margin: "1rem auto 1rem auto"
      }
    }
  },
  colors: {
    blue: { 800: "#32375a" },
    black: "#32334F",
    white: "#FFF",
    purple: {
      50: '#faebfe',
      100: '#e2c8ec',
      200: '#cca5db',
      300: '#b782cb',
      400: '#a25eba',
      500: '#934aad',
      600: '#6a357e',
      700: '#4d255a',
      800: '#2f1539',
      900: '#130518',
    },
    gray:
    {
      50: '#e9f3fe',
      100: '#d3d7e1',
      200: '#b8bdc8',
      300: '#9ca2af',
      400: '#828797',
      500: '#686e7d',
      600: '#515563',
      700: '#393d48',
      800: '#21252e',
      900: '#0b0b17',
    },
    red: {
      400: '#F55',
    }
  },
  breakpoints: breakpoints,
  fonts: {
    body: "Raleway, sans-serif, -apple-system, BlinkMacSystemFont",
    heading: "Raleway, sans-serif, -apple-system, BlinkMacSystemFont",
    mono: "Menlo, monospace",
  },
})

