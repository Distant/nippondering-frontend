webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! exports provided: breakpoints, customTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTheme", function() { return customTheme; });
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");

var breakpoints = ["360px", "768px", "1024px", "1440px"];
var customTheme = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  styles: {
    global: {
      html: {
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,Ubuntu, Cantarell, Fira Sans,Droid Sans, Helvetica Neue, sans-serif",
        scrollbarVisible: "always",
        scrollBehavior: "smooth"
      },
      body: {
        overflowY: "scroll"
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none"
      }
    }
  },
  layerStyles: {
    alertBox: {
      backgroundColor: "rgb(255,248,220)",
      borderRadius: "4px",
      border: "1px solid rgb(255,127,80)",
      padding: 4,
      margin: {
        base: 2,
        lg: 8
      }
    },
    imgScale: {
      _hover: {
        image: {
          transform: "scale(1.1)"
        }
      }
    }
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
      fontSize: {
        base: "1.8rem",
        md: "1.8rem"
      },
      pt: {
        base: 4,
        md: 5
      },
      pb: {
        base: 0,
        md: 2
      },
      mt: "1em",
      textAlign: {
        base: "center",
        md: "left"
      },
      color: "#934aad"
    },
    "sectionTitlePlain": {
      fontWeight: "bold",
      fontSize: {
        base: "1.5rem",
        md: "1.6rem"
      },
      pt: 8,
      pb: 4,
      pl: "1em",
      mx: "1em",
      textAlign: "center",
      color: "gray.600"
    },
    "tourTitle": {
      fontWeight: "bold",
      fontSize: {
        base: "1.8rem",
        md: "1.8rem"
      },
      pt: 8,
      pb: 1,
      pl: 2,
      mb: 4,
      textAlign: "left",
      borderBottom: "4px solid #934aad",
      color: "#934aad"
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: {
        base: "1.1rem",
        md: "1.1rem"
      },
      mx: 0,
      p: "2",
      textAlign: "left",
      color: "black"
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
      fontSize: {
        base: "1.2rem",
        md: "1.2rem"
      },
      mx: 0,
      textAlign: "right",
      color: "white"
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
    blue: {
      800: "#32375a"
    },
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
      900: '#130518'
    },
    gray: {
      50: '#e9f3fe',
      100: '#d3d7e1',
      200: '#b8bdc8',
      300: '#9ca2af',
      400: '#828797',
      500: '#686e7d',
      600: '#515563',
      700: '#393d48',
      800: '#21252e',
      900: '#0b0b17'
    },
    red: {
      400: '#F55'
    }
  },
  breakpoints: breakpoints,
  fonts: {
    body: "Raleway, sans-serif, -apple-system, BlinkMacSystemFont",
    heading: "Raleway, sans-serif, -apple-system, BlinkMacSystemFont",
    mono: "Menlo, monospace"
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lLnRzIl0sIm5hbWVzIjpbImJyZWFrcG9pbnRzIiwiY3VzdG9tVGhlbWUiLCJleHRlbmRUaGVtZSIsInN0eWxlcyIsImdsb2JhbCIsImh0bWwiLCJmb250RmFtaWx5Iiwic2Nyb2xsYmFyVmlzaWJsZSIsInNjcm9sbEJlaGF2aW9yIiwiYm9keSIsIm92ZXJmbG93WSIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJsYXllclN0eWxlcyIsImFsZXJ0Qm94IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsImJhc2UiLCJsZyIsImltZ1NjYWxlIiwiX2hvdmVyIiwiaW1hZ2UiLCJ0cmFuc2Zvcm0iLCJ0ZXh0U3R5bGVzIiwibm90ZXMiLCJjb2xvciIsInRleHRBbGlnbiIsImljb25TdWJUZXh0IiwicGFnZVRpdGxlIiwibWwiLCJtdCIsIm1iIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsImJvcmRlckNvbG9yIiwicGFnZVRpdGxlQm9sZCIsIl9hZnRlciIsImNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsInRhZ2xpbmUiLCJsaW5lSGVpZ2h0IiwibWQiLCJwdCIsInBiIiwicGwiLCJteCIsImJvcmRlckJvdHRvbSIsImNhcmRUaXRsZSIsInAiLCJjYXJkQm9keSIsImNhcmRCb2R5TGluayIsIm0iLCJweCIsImNhcmRTdWJIZWFkaW5nIiwiYiIsImxvY2F0aW9uQ2FyZFRpdGxlIiwiYmxvZ1Bvc3QiLCJoMSIsImg1IiwibWFyZ2luQm90dG9tIiwiaW1nIiwibWF4V2lkdGgiLCJjb2xvcnMiLCJibHVlIiwiYmxhY2siLCJ3aGl0ZSIsInB1cnBsZSIsImdyYXkiLCJyZWQiLCJmb250cyIsImhlYWRpbmciLCJtb25vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVP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UDtBQU9FLFdBQUssU0FQUDtBQVFFLFdBQUssU0FSUDtBQVNFLFdBQUssU0FUUDtBQVVFLFdBQUs7QUFWUCxLQWpCTTtBQTZCTkMsT0FBRyxFQUFFO0FBQ0gsV0FBSztBQURGO0FBN0JDLEdBMUw2QjtBQTJOckMxRSxhQUFXLEVBQUVBLFdBM053QjtBQTROckMyRSxPQUFLLEVBQUU7QUFDTGxFLFFBQUksRUFBRSx3REFERDtBQUVMbUUsV0FBTyxFQUFFLHdEQUZKO0FBR0xDLFFBQUksRUFBRTtBQUhEO0FBNU44QixDQUFELENBQS9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmIyYjIwNTcyODc2MGYyZDk5NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJyZWFrcG9pbnRzID0gW1wiMzYwcHhcIiwgXCI3NjhweFwiLCBcIjEwMjRweFwiLCBcIjE0NDBweFwiXTtcclxuZXhwb3J0IGNvbnN0IGN1c3RvbVRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIHN0eWxlczoge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIGh0bWw6IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgT3h5Z2VuLFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICBzY3JvbGxiYXJWaXNpYmxlOiBcImFsd2F5c1wiLFxyXG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCJcclxuICAgICAgfSxcclxuICAgICAgXCIuanMtZm9jdXMtdmlzaWJsZSA6Zm9jdXM6bm90KFtkYXRhLWZvY3VzLXZpc2libGUtYWRkZWRdKVwiOiB7XHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGF5ZXJTdHlsZXM6IHtcclxuICAgIGFsZXJ0Qm94OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LDI0OCwyMjApXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2IoMjU1LDEyNyw4MClcIixcclxuICAgICAgcGFkZGluZzogNCxcclxuICAgICAgbWFyZ2luOiB7IGJhc2U6IDIsIGxnOiA4IH1cclxuICAgIH0sXHJcbiAgICBpbWdTY2FsZToge1xyXG4gICAgICBfaG92ZXI6IHtcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMSlcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHRTdHlsZXM6IHtcclxuICAgIG5vdGVzOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMzMjMzNEZDQ1wiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgIH0sXHJcbiAgICBpY29uU3ViVGV4dDoge1xyXG4gICAgICBjb2xvcjogXCIjRkZGRkZGRUVcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICB9LFxyXG4gICAgcGFnZVRpdGxlOiB7XHJcbiAgICAgIG1sOiBcIjBcIixcclxuICAgICAgbXQ6IFsxLCAxLCAyXSxcclxuICAgICAgbWI6IFsxLCAxLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogXCJ0aWdodFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBmb250U2l6ZTogW1wiMnJlbVwiLCBcIjIuMjVyZW1cIiwgXCIyLjI1cmVtXCJdLFxyXG4gICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5LCBzYW5zLXNlcmlmJ1xyXG4gICAgfSxcclxuICAgIHBhZ2VUaXRsZUJvbGQ6IHtcclxuICAgICAgbWw6IFwiMFwiLFxyXG4gICAgICBtdDogWzEsIDEsIDNdLFxyXG4gICAgICBtYjogWzEsIDEsIDNdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0uMXJlbVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICBjb2xvcjogXCJwdXJwbGUuNTAwXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgZm9udFNpemU6IFtcIjIuNXJlbVwiLCBcIjNyZW1cIiwgXCIzLjVyZW1cIl0sXHJcbiAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnLFxyXG4gICAgICBfYWZ0ZXI6IHtcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0cHhcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGFnbGluZToge1xyXG4gICAgICBtbDogXCIwXCIsXHJcbiAgICAgIG10OiBbLTEsIC0xLCAtMV0sXHJcbiAgICAgIG1iOiBbMSwgMSwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS43cmVtXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgIGNvbG9yOiBcInJlZC40MDBcIixcclxuICAgICAgZm9udFNpemU6IFtcIjFyZW1cIiwgXCIxLjJyZW1cIiwgXCIxLjRyZW1cIl0sXHJcbiAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcclxuICAgICAgZm9udEZhbWlseTogJ0thdXNoYW4gU2NyaXB0LCBzYW5zLXNlcmlmJ1xyXG4gICAgfSxcclxuICAgIFwic2VjdGlvblRpdGxlXCI6IHtcclxuICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgZm9udFNpemU6IHsgYmFzZTogXCIxLjhyZW1cIiwgbWQ6IFwiMS44cmVtXCIgfSxcclxuICAgICAgcHQ6IHsgYmFzZTogNCwgbWQ6IDUgfSxcclxuICAgICAgcGI6IHsgYmFzZTogMCwgbWQ6IDIgfSxcclxuICAgICAgbXQ6IFwiMWVtXCIsXHJcbiAgICAgIHRleHRBbGlnbjogeyBiYXNlOiBcImNlbnRlclwiLCBtZDogXCJsZWZ0XCIgfSxcclxuICAgICAgY29sb3I6IFwiIzkzNGFhZFwiLFxyXG4gICAgfSxcclxuICAgIFwic2VjdGlvblRpdGxlUGxhaW5cIjoge1xyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgZm9udFNpemU6IHsgYmFzZTogXCIxLjVyZW1cIiwgbWQ6IFwiMS42cmVtXCIgfSxcclxuICAgICAgcHQ6IDgsXHJcbiAgICAgIHBiOiA0LFxyXG4gICAgICBwbDogXCIxZW1cIixcclxuICAgICAgbXg6IFwiMWVtXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgY29sb3I6IFwiZ3JheS42MDBcIixcclxuXHJcbiAgICB9LFxyXG4gICAgXCJ0b3VyVGl0bGVcIjoge1xyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgZm9udFNpemU6IHsgYmFzZTogXCIxLjhyZW1cIiwgbWQ6IFwiMS44cmVtXCIgfSxcclxuICAgICAgcHQ6IDgsXHJcbiAgICAgIHBiOiAxLFxyXG4gICAgICBwbDogMixcclxuICAgICAgbWI6IDQsXHJcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogXCI0cHggc29saWQgIzkzNGFhZFwiLFxyXG4gICAgICBjb2xvcjogXCIjOTM0YWFkXCIsXHJcbiAgICB9LFxyXG4gICAgY2FyZFRpdGxlOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICBmb250U2l6ZTogeyBiYXNlOiBcIjEuMXJlbVwiLCBtZDogXCIxLjFyZW1cIiB9LFxyXG4gICAgICBteDogMCxcclxuICAgICAgcDogXCIyXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICB9LFxyXG4gICAgY2FyZEJvZHk6IHtcclxuICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXHJcbiAgICAgIG14OiAwLFxyXG4gICAgICBjb2xvcjogXCJncmF5LjYwMFwiLFxyXG4gICAgICBwOiBcIjJcIixcclxuICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjAxcmVtXCJcclxuICAgIH0sXHJcbiAgICBjYXJkQm9keUxpbms6IHtcclxuICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgIG06IDEsXHJcbiAgICAgIGhlaWdodDogXCIxLjc1cmVtXCIsXHJcbiAgICAgIGNvbG9yOiBcImdyYXkuNjAwXCIsXHJcbiAgICAgIHB4OiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMDFyZW1cIlxyXG4gICAgfSxcclxuICAgIGNhcmRTdWJIZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxyXG4gICAgICBteDogMCxcclxuICAgICAgY29sb3I6IFwiZ3JheS42MDBcIixcclxuICAgICAgcDogXCIyXCIsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4wMXJlbVwiLFxyXG4gICAgICBiOiB7XHJcbiAgICAgICAgY29sb3I6IFwicHVycGxlLjUwMFwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbkNhcmRUaXRsZToge1xyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgZm9udFNpemU6IHsgYmFzZTogXCIxLjJyZW1cIiwgbWQ6IFwiMS4ycmVtXCIgfSxcclxuICAgICAgbXg6IDAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBibG9nUG9zdDoge1xyXG4gICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICBjb2xvcjogXCJncmF5LjYwMFwiLFxyXG4gICAgICBoMToge1xyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcclxuICAgICAgICBtYXJnaW46IFwiMWVtIDBcIlxyXG4gICAgICB9LFxyXG4gICAgICBwOiB7XHJcbiAgICAgICAgbGluZUhlaWdodDogXCIxLjZyZW1cIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMC45NXJlbVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxZW0gMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGg1OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyZW1cIlxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IHtcclxuICAgICAgICBtYXhXaWR0aDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiMXJlbSBhdXRvIDFyZW0gYXV0b1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbG9yczoge1xyXG4gICAgYmx1ZTogeyA4MDA6IFwiIzMyMzc1YVwiIH0sXHJcbiAgICBibGFjazogXCIjMzIzMzRGXCIsXHJcbiAgICB3aGl0ZTogXCIjRkZGXCIsXHJcbiAgICBwdXJwbGU6IHtcclxuICAgICAgNTA6ICcjZmFlYmZlJyxcclxuICAgICAgMTAwOiAnI2UyYzhlYycsXHJcbiAgICAgIDIwMDogJyNjY2E1ZGInLFxyXG4gICAgICAzMDA6ICcjYjc4MmNiJyxcclxuICAgICAgNDAwOiAnI2EyNWViYScsXHJcbiAgICAgIDUwMDogJyM5MzRhYWQnLFxyXG4gICAgICA2MDA6ICcjNmEzNTdlJyxcclxuICAgICAgNzAwOiAnIzRkMjU1YScsXHJcbiAgICAgIDgwMDogJyMyZjE1MzknLFxyXG4gICAgICA5MDA6ICcjMTMwNTE4JyxcclxuICAgIH0sXHJcbiAgICBncmF5OlxyXG4gICAge1xyXG4gICAgICA1MDogJyNlOWYzZmUnLFxyXG4gICAgICAxMDA6ICcjZDNkN2UxJyxcclxuICAgICAgMjAwOiAnI2I4YmRjOCcsXHJcbiAgICAgIDMwMDogJyM5Y2EyYWYnLFxyXG4gICAgICA0MDA6ICcjODI4Nzk3JyxcclxuICAgICAgNTAwOiAnIzY4NmU3ZCcsXHJcbiAgICAgIDYwMDogJyM1MTU1NjMnLFxyXG4gICAgICA3MDA6ICcjMzkzZDQ4JyxcclxuICAgICAgODAwOiAnIzIxMjUyZScsXHJcbiAgICAgIDkwMDogJyMwYjBiMTcnLFxyXG4gICAgfSxcclxuICAgIHJlZDoge1xyXG4gICAgICA0MDA6ICcjRjU1JyxcclxuICAgIH1cclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcclxuICBmb250czoge1xyXG4gICAgYm9keTogXCJSYWxld2F5LCBzYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnRcIixcclxuICAgIGhlYWRpbmc6IFwiUmFsZXdheSwgc2Fucy1zZXJpZiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250XCIsXHJcbiAgICBtb25vOiBcIk1lbmxvLCBtb25vc3BhY2VcIixcclxuICB9LFxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==