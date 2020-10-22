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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            as: "h5",
            className: "overlay",
            background: "black",
            opacity: "0",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "1",
            transition: "opacity 200ms ease-out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            as: "h2",
            className: "overlay",
            opacity: "0",
            color: "white",
            position: "absolute",
            left: "50%",
            top: "50%",
            zIndex: "2",
            transition: "opacity 100ms ease-out",
            children: "Read More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
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
            lineNumber: 55,
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
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            textStyle: "cardBody",
            minH: "40px",
            flexGrow: 1,
            textAlign: "left",
            children: tour.shortDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
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
                lineNumber: 71,
                columnNumber: 17
              }, this), "per guest"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvdG91ckNhcmQudHN4Il0sIm5hbWVzIjpbIlRvdXJDYXJkIiwidG91ciIsInVzZVN0YXRlIiwic2hhZG93Iiwic2V0U2hhZG93IiwidXNlSW1hZ2VMb2FkIiwiaW1nUmVmIiwiaW1nTG9hZGVkIiwibW91bnRlZCIsInVzZUhhc01vdW50ZWQiLCJoaWRlU3Bpbm5lciIsImltYWdlcyIsImRpc3BsYXkiLCJiYXNlIiwic20iLCJsZyIsInRvdXJJZCIsInN0eWxlcyIsImltZ1NjYWxlIiwiY3Vyc29yIiwic2hhZG93cyIsImltZ1VybCIsInRpdGxlIiwic2hvcnREZXNjcmlwdGlvbiIsInByaWNlIiwiY3VycmVuY3lDb2RlIiwiY3VycmVuY3lTeW1ib2wiLCJlc3RpbWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDMUJDLE1BRDBCO0FBQUEsTUFDbEJDLFNBRGtCOztBQUFBLHNCQUVIQyx1RUFBWSxFQUZUO0FBQUEsTUFFekJDLE1BRnlCLGlCQUV6QkEsTUFGeUI7QUFBQSxNQUVqQkMsU0FGaUIsaUJBRWpCQSxTQUZpQjs7QUFHakMsTUFBTUMsT0FBTyxHQUFHQyw4RUFBYSxFQUE3QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDRixPQUFELElBQVlELFNBQVosSUFBeUIsQ0FBQ04sSUFBSSxDQUFDVSxNQUFMLENBQVksQ0FBWixDQUE5QztBQUVBLHNCQUNFLHFFQUFDLG1EQUFEO0FBQ0UsS0FBQyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsQ0FETDtBQUVFLFlBQVEsRUFBQyxV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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4REQ7O0dBcEVRM0IsUTtVQUV1QkssK0QsRUFDZEksc0U7OztLQUhUVCxRO0FBc0VNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYWE0ODM1NDMzMGMwMzgyOThiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgRmxleCwgSGVhZGluZywgVGV4dCwgU3Bpbm5lciwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSBcIi4vY2FyZHNcIjtcclxuaW1wb3J0IHsgaW1nVXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mZXRjaFV0aWxpdGllc1wiO1xyXG5pbXBvcnQgdXNlSW1hZ2VMb2FkIGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdXNlSW1hZ2VMb2FkXCI7XHJcbmltcG9ydCB7IHNoYWRvd3MsIFByaWNlRGlzcGxheSB9IGZyb20gXCIuLi9jb21tb25Qcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VIYXNNb3VudGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy91c2VIYXNNb3VudGVkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90b3VyQ2FyZC5tb2R1bGUuc2NzcydcclxuXHJcbmZ1bmN0aW9uIFRvdXJDYXJkKHsgdG91ciB9OiBQcm9wcykge1xyXG4gIGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZSgyKTtcclxuICBjb25zdCB7IGltZ1JlZiwgaW1nTG9hZGVkIH0gPSB1c2VJbWFnZUxvYWQoKVxyXG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VIYXNNb3VudGVkKClcclxuICBjb25zdCBoaWRlU3Bpbm5lciA9ICFtb3VudGVkIHx8IGltZ0xvYWRlZCB8fCAhdG91ci5pbWFnZXNbMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGg9e1tcIjQwMHB4XCIsIFwiMzAwcHhcIiwgXCI0NjBweFwiXX1cclxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgIF9sYXN0PXt7XHJcbiAgICAgICAgZGlzcGxheTogeyBiYXNlOiBcIm5vbmVcIiwgc206IFwibm9uZVwiLCBsZzogXCJpbmxpbmUtYmxvY2tcIiB9XHJcbiAgICAgIH19PlxyXG5cclxuICAgICAgeyFoaWRlU3Bpbm5lciAmJlxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCJjYWxjKDUwJSAtIDEycHgpXCIgdG9wPVwiY2FsYyg1MCUgLSAxMnB4KVwiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICA8L0JveD59XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3RvdXIvW2lkXVwiIGFzPXtgL3RvdXIvJHt0b3VyLnRvdXJJZH1gfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgd2hpdGVTcGFjZT1cInByZS13cmFwXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17XCJyb3VuZGVkNCBcIiArIHN0eWxlcy5pbWdTY2FsZX1cclxuICAgICAgICAgIG1heFdpZHRoPXt7IGJhc2U6IFwiNDUwcHhcIiB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj1cImJveC1zaGFkb3cgMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAyNTBtcywgdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0XCJcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgIC8vbWluV2lkdGg9e3sgYmFzZTogXCIyNDBweFwiLCBtZDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgIG09ezF9XHJcbiAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFNoYWRvdygzKX1cclxuICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldFNoYWRvdygyKX1cclxuICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGg9e1tcIjQwMHB4XCIsIFwiMzAwcHhcIiwgXCI0NjBweFwiXX1cclxuICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2hpZGVTcGlubmVyID8gXCIwLCAwXCIgOiBcIjAsIDEwMHB4XCJ9KWB9XHJcbiAgICAgICAgICBvcGFjaXR5PXtoaWRlU3Bpbm5lciA/IDEwMCA6IDB9XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgIHsuLi5zaGFkb3dzW3NoYWRvd119XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MCVcIiBvdmVyZmxvdz1cImhpZGRlblwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPFRleHQgYXM9XCJoNVwiIGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBiYWNrZ3JvdW5kPVwiYmxhY2tcIiBvcGFjaXR5PVwiMFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgekluZGV4PVwiMVwiIHRyYW5zaXRpb249XCJvcGFjaXR5IDIwMG1zIGVhc2Utb3V0XCIvPlxyXG4gICAgICAgICAgICA8VGV4dCBhcz1cImgyXCIgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9wYWNpdHk9XCIwXCIgY29sb3I9XCJ3aGl0ZVwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCIgekluZGV4PVwiMlwiIHRyYW5zaXRpb249XCJvcGFjaXR5IDEwMG1zIGVhc2Utb3V0XCI+UmVhZCBNb3JlPC9UZXh0PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1mdWxsXCJcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPVwidHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0XCJcclxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdVcmwodG91ci5pbWFnZXNbMF0gKyBcIl90aHVtYi5qcGdcIil9XHJcbiAgICAgICAgICAgICAgYWx0PXt0b3VyLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHJlZj17aW1nUmVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPXtcIjUwJVwifSBteD17MX0gcHQ9ezJ9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdGV4dFN0eWxlPVwiY2FyZFRpdGxlXCI+e3RvdXIudGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCB0ZXh0U3R5bGU9XCJjYXJkQm9keVwiIG1pbkg9XCI0MHB4XCIgZmxleEdyb3c9ezF9IHRleHRBbGlnbj1cImxlZnRcIj57dG91ci5zaG9ydERlc2NyaXB0aW9ufTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggYWxpZ25TZWxmPVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0U3R5bGU9XCJjYXJkQm9keVwiPlxyXG4gICAgICAgICAgICAgICAge1wiRnJvbSBcIn1cclxuICAgICAgICAgICAgICAgIDxQcmljZURpc3BsYXkgY29kZT17dG91ci5wcmljZS5jdXJyZW5jeUNvZGV9IHN5bWJvbD17dG91ci5wcmljZS5jdXJyZW5jeVN5bWJvbH0gYW1vdW50PXt0b3VyLnByaWNlLmVzdGltYXRlIC8gNH0gLz5cclxuICAgICAgICAgICAgICAgIHtcInBlciBndWVzdFwifVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvQm94ID4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3VyQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=