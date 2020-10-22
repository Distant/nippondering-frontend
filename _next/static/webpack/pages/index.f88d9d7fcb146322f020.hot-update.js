webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/cards/tourCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/cards/tourCard.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_fetchUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/fetchUtilities */ "./src/utilities/fetchUtilities.ts");
/* harmony import */ var _utilities_useImageLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/useImageLoad */ "./src/utilities/useImageLoad.ts");
/* harmony import */ var _commonProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commonProps */ "./src/components/commonProps.tsx");
/* harmony import */ var _utilities_useHasMounted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/useHasMounted */ "./src/utilities/useHasMounted.tsx");
/* harmony import */ var _tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tourCard.module.scss */ "./src/components/cards/tourCard.module.scss");
/* harmony import */ var _tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "E:\\Users\\Phil\\Documents\\GitHub\\nippondering-next\\src\\components\\cards\\tourCard.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function TourCard(_ref) {
  _s();

  var tour = _ref.tour;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(2),
      shadow = _useState[0],
      setShadow = _useState[1];

  var _useImageLoad = Object(_utilities_useImageLoad__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      imgRef = _useImageLoad.imgRef,
      imgLoaded = _useImageLoad.imgLoaded;

  var mounted = Object(_utilities_useHasMounted__WEBPACK_IMPORTED_MODULE_8__["useHasMounted"])();
  var hideSpinner = !mounted || imgLoaded || !tour.images[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    h: ["400px", "300px", "460px"],
    position: "relative",
    _last: {
      display: {
        base: "none",
        sm: "none",
        lg: "inline-block"
      }
    },
    children: [!hideSpinner && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      position: "absolute",
      left: "calc(50% - 12px)",
      top: "calc(50% - 12px)",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/tour/[id]",
      as: "/tour/".concat(tour.tourId),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _objectSpread(_objectSpread({
        variant: "unstyled",
        whiteSpace: "pre-wrap",
        className: "rounded4 " + _tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.imgScale,
        maxWidth: {
          base: "450px"
        },
        transition: "box-shadow 0.2s ease-out, opacity 250ms, transform 300ms ease-out",
        backgroundColor: "white" //minWidth={{ base: "240px", md: "20px" }}
        ,
        m: 1,
        mx: "auto",
        onMouseOver: function onMouseOver() {
          return setShadow(3);
        },
        onMouseOut: function onMouseOut() {
          return setShadow(2);
        },
        _hover: {
          cursor: "pointer"
        },
        h: ["400px", "300px", "460px"],
        transform: "translate(".concat(hideSpinner ? "0, 0" : "0, 100px", ")"),
        opacity: hideSpinner ? 100 : 0,
        position: "relative"
      }, _commonProps__WEBPACK_IMPORTED_MODULE_7__["shadows"][shadow]), {}, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          width: "100%",
          height: "50%",
          overflow: "hidden",
          position: "relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            className: "overlay",
            background: "black",
            opacity: "0",
            position: "absolute",
            width: "100%",
            height: "100%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            className: "cover-image-full",
            transition: "transform 200ms ease-out",
            loading: "lazy",
            src: Object(_utilities_fetchUtilities__WEBPACK_IMPORTED_MODULE_5__["imgUrl"])(tour.images[0] + "_thumb.jpg"),
            alt: tour.title,
            ref: imgRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          direction: "column",
          h: "50%",
          mx: 1,
          pt: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
            as: "h2",
            textStyle: "cardTitle",
            children: tour.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            textStyle: "cardBody",
            minH: "40px",
            flexGrow: 1,
            textAlign: "left",
            children: tour.shortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            alignSelf: "flex-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              textStyle: "cardBody",
              children: ["From ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_commonProps__WEBPACK_IMPORTED_MODULE_7__["PriceDisplay"], {
                code: tour.price.currencyCode,
                symbol: tour.price.currencySymbol,
                amount: tour.price.estimate / 4
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), "per guest"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(TourCard, "LQiCmXCiM3kW1vD35ixbgExYGFA=", false, function () {
  return [_utilities_useImageLoad__WEBPACK_IMPORTED_MODULE_6__["default"], _utilities_useHasMounted__WEBPACK_IMPORTED_MODULE_8__["useHasMounted"]];
});

_c = TourCard;
/* harmony default export */ __webpack_exports__["default"] = (TourCard);

var _c;

$RefreshReg$(_c, "TourCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvdG91ckNhcmQudHN4Il0sIm5hbWVzIjpbIlRvdXJDYXJkIiwidG91ciIsInVzZVN0YXRlIiwic2hhZG93Iiwic2V0U2hhZG93IiwidXNlSW1hZ2VMb2FkIiwiaW1nUmVmIiwiaW1nTG9hZGVkIiwibW91bnRlZCIsInVzZUhhc01vdW50ZWQiLCJoaWRlU3Bpbm5lciIsImltYWdlcyIsImRpc3BsYXkiLCJiYXNlIiwic20iLCJsZyIsInRvdXJJZCIsInN0eWxlcyIsImltZ1NjYWxlIiwiY3Vyc29yIiwic2hhZG93cyIsImltZ1VybCIsInRpdGxlIiwic2hvcnREZXNjcmlwdGlvbiIsInByaWNlIiwiY3VycmVuY3lDb2RlIiwiY3VycmVuY3lTeW1ib2wiLCJlc3RpbWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDMUJDLE1BRDBCO0FBQUEsTUFDbEJDLFNBRGtCOztBQUFBLHNCQUVIQyx1RUFBWSxFQUZUO0FBQUEsTUFFekJDLE1BRnlCLGlCQUV6QkEsTUFGeUI7QUFBQSxNQUVqQkMsU0FGaUIsaUJBRWpCQSxTQUZpQjs7QUFHakMsTUFBTUMsT0FBTyxHQUFHQyw4RUFBYSxFQUE3QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDRixPQUFELElBQVlELFNBQVosSUFBeUIsQ0FBQ04sSUFBSSxDQUFDVSxNQUFMLENBQVksQ0FBWixDQUE5QztBQUVBLHNCQUNFLHFFQUFDLG1EQUFEO0FBQ0UsS0FBQyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsQ0FETDtBQUVFLFlBQVEsRUFBQyxV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O0FBQTJCLGdCQUFJLEVBQUMsTUFBaEM7QUFBdUMsb0JBQVEsRUFBRSxDQUFqRDtBQUFvRCxxQkFBUyxFQUFDLE1BQTlEO0FBQUEsc0JBQXNFckIsSUFBSSxDQUFDc0I7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUlFLHFFQUFDLG1EQUFEO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0UscUVBQUMsb0RBQUQ7QUFBTSx1QkFBUyxFQUFDLFVBQWhCO0FBQUEseUJBQ0csT0FESCxlQUVFLHFFQUFDLHlEQUFEO0FBQWMsb0JBQUksRUFBRXRCLElBQUksQ0FBQ3VCLEtBQUwsQ0FBV0MsWUFBL0I7QUFBNkMsc0JBQU0sRUFBRXhCLElBQUksQ0FBQ3VCLEtBQUwsQ0FBV0UsY0FBaEU7QUFBZ0Ysc0JBQU0sRUFBRXpCLElBQUksQ0FBQ3VCLEtBQUwsQ0FBV0csUUFBWCxHQUFzQjtBQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBR0csV0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkREOztHQW5FUTNCLFE7VUFFdUJLLCtELEVBQ2RJLHNFOzs7S0FIVFQsUTtBQXFFTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjg4ZDlkN2ZjYjE0NjMyMmYwMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIEZsZXgsIEhlYWRpbmcsIFRleHQsIFNwaW5uZXIsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gXCIuL2NhcmRzXCI7XHJcbmltcG9ydCB7IGltZ1VybCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmV0Y2hVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHVzZUltYWdlTG9hZCBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VzZUltYWdlTG9hZFwiO1xyXG5pbXBvcnQgeyBzaGFkb3dzLCBQcmljZURpc3BsYXkgfSBmcm9tIFwiLi4vY29tbW9uUHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlSGFzTW91bnRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdXNlSGFzTW91bnRlZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdG91ckNhcmQubW9kdWxlLnNjc3MnXHJcblxyXG5mdW5jdGlvbiBUb3VyQ2FyZCh7IHRvdXIgfTogUHJvcHMpIHtcclxuICBjb25zdCBbc2hhZG93LCBzZXRTaGFkb3ddID0gdXNlU3RhdGUoMik7XHJcbiAgY29uc3QgeyBpbWdSZWYsIGltZ0xvYWRlZCB9ID0gdXNlSW1hZ2VMb2FkKClcclxuICBjb25zdCBtb3VudGVkID0gdXNlSGFzTW91bnRlZCgpXHJcbiAgY29uc3QgaGlkZVNwaW5uZXIgPSAhbW91bnRlZCB8fCBpbWdMb2FkZWQgfHwgIXRvdXIuaW1hZ2VzWzBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBoPXtbXCI0MDBweFwiLCBcIjMwMHB4XCIsIFwiNDYwcHhcIl19XHJcbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICBfbGFzdD17e1xyXG4gICAgICAgIGRpc3BsYXk6IHsgYmFzZTogXCJub25lXCIsIHNtOiBcIm5vbmVcIiwgbGc6IFwiaW5saW5lLWJsb2NrXCIgfVxyXG4gICAgICB9fT5cclxuXHJcbiAgICAgIHshaGlkZVNwaW5uZXIgJiZcclxuICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBsZWZ0PVwiY2FsYyg1MCUgLSAxMnB4KVwiIHRvcD1cImNhbGMoNTAlIC0gMTJweClcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9Cb3g+fVxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi90b3VyL1tpZF1cIiBhcz17YC90b3VyLyR7dG91ci50b3VySWR9YH0+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcclxuICAgICAgICAgIHdoaXRlU3BhY2U9XCJwcmUtd3JhcFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1wicm91bmRlZDQgXCIgKyBzdHlsZXMuaW1nU2NhbGV9XHJcbiAgICAgICAgICBtYXhXaWR0aD17eyBiYXNlOiBcIjQ1MHB4XCIgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249XCJib3gtc2hhZG93IDAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgMjUwbXMsIHRyYW5zZm9ybSAzMDBtcyBlYXNlLW91dFwiXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAvL21pbldpZHRoPXt7IGJhc2U6IFwiMjQwcHhcIiwgbWQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICBtPXsxfVxyXG4gICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRTaGFkb3coMyl9XHJcbiAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRTaGFkb3coMil9XHJcbiAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBoPXtbXCI0MDBweFwiLCBcIjMwMHB4XCIsIFwiNDYwcHhcIl19XHJcbiAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtoaWRlU3Bpbm5lciA/IFwiMCwgMFwiIDogXCIwLCAxMDBweFwifSlgfVxyXG4gICAgICAgICAgb3BhY2l0eT17aGlkZVNwaW5uZXIgPyAxMDAgOiAwfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICB7Li4uc2hhZG93c1tzaGFkb3ddfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTAlXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwib3ZlcmxheVwiIGJhY2tncm91bmQ9XCJibGFja1wiIG9wYWNpdHk9XCIwXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIi8+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXRcIlxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICBzcmM9e2ltZ1VybCh0b3VyLmltYWdlc1swXSArIFwiX3RodW1iLmpwZ1wiKX1cclxuICAgICAgICAgICAgICBhbHQ9e3RvdXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgcmVmPXtpbWdSZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGg9e1wiNTAlXCJ9IG14PXsxfSBwdD17Mn0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiB0ZXh0U3R5bGU9XCJjYXJkVGl0bGVcIj57dG91ci50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IHRleHRTdHlsZT1cImNhcmRCb2R5XCIgbWluSD1cIjQwcHhcIiBmbGV4R3Jvdz17MX0gdGV4dEFsaWduPVwibGVmdFwiPnt0b3VyLnNob3J0RGVzY3JpcHRpb259PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgPEJveCBhbGlnblNlbGY9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRTdHlsZT1cImNhcmRCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7XCJGcm9tIFwifVxyXG4gICAgICAgICAgICAgICAgPFByaWNlRGlzcGxheSBjb2RlPXt0b3VyLnByaWNlLmN1cnJlbmN5Q29kZX0gc3ltYm9sPXt0b3VyLnByaWNlLmN1cnJlbmN5U3ltYm9sfSBhbW91bnQ9e3RvdXIucHJpY2UuZXN0aW1hdGUgLyA0fSAvPlxyXG4gICAgICAgICAgICAgICAge1wicGVyIGd1ZXN0XCJ9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9Cb3ggPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdXJDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==