webpackHotUpdate_N_E("pages/tours/location/[slug]",{

/***/ "./src/components/cards/locationCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/cards/locationCard.tsx ***!
  \***********************************************/
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
/* harmony import */ var _utilities_useHasMounted__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/useHasMounted */ "./src/utilities/useHasMounted.tsx");
/* harmony import */ var _utilities_useImageLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/useImageLoad */ "./src/utilities/useImageLoad.ts");
/* harmony import */ var _commonProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commonProps */ "./src/components/commonProps.tsx");
/* harmony import */ var _tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tourCard.module.scss */ "./src/components/cards/tourCard.module.scss");
/* harmony import */ var _tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "E:\\Users\\Phil\\Documents\\GitHub\\nippondering-next\\src\\components\\cards\\locationCard.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function LocationCard(_ref) {
  _s();

  var location = _ref.location;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(2),
      shadow = _useState[0],
      setShadow = _useState[1];

  var hasMounted = Object(_utilities_useHasMounted__WEBPACK_IMPORTED_MODULE_6__["useHasMounted"])();

  var _useImageLoad = Object(_utilities_useImageLoad__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      imgRef = _useImageLoad.imgRef,
      imgLoaded = _useImageLoad.imgLoaded;

  var hideSpinner = !hasMounted || imgLoaded;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    h: "220px",
    position: "relative",
    _last: {
      display: {
        base: "none",
        sm: "inline-block",
        md: "none",
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
      href: "/tours/location/".concat(location.slug),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _objectSpread(_objectSpread({
        variant: "unstyled",
        className: "rounded4 " + _tourCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.imgScale,
        maxWidth: {
          base: "450px"
        },
        transition: "box-shadow 0.2s ease-out, opacity 250ms, transform 300ms ease-out",
        backgroundColor: "white",
        h: "220px",
        m: 1,
        onMouseOver: function onMouseOver() {
          return setShadow(3);
        },
        onMouseOut: function onMouseOut() {
          return setShadow(2);
        },
        _hover: {
          cursor: "pointer"
        },
        transform: "translate(".concat(hideSpinner ? "0, 0" : "0, 100px", ")"),
        opacity: hideSpinner ? 100 : 0,
        position: "relative"
      }, _commonProps__WEBPACK_IMPORTED_MODULE_8__["shadows"][shadow]), {}, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          className: "card-image",
          loading: "lazy",
          transition: "transform 200ms ease-out",
          src: Object(_utilities_fetchUtilities__WEBPACK_IMPORTED_MODULE_5__["imgUrl"])(location.imagePath + "_thumb.jpg"),
          h: "100%",
          alt: location.name,
          ref: imgRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          direction: "column",
          background: "blue.800",
          position: "absolute",
          bottom: "0.5rem",
          left: "24%",
          width: "100%",
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
            textStyle: "locationCardTitle",
            children: location.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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

_s(LocationCard, "glixqdBULhNrjZQYQt4f7/BSEYo=", false, function () {
  return [_utilities_useHasMounted__WEBPACK_IMPORTED_MODULE_6__["useHasMounted"], _utilities_useImageLoad__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = LocationCard;
/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

var _c;

$RefreshReg$(_c, "LocationCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvbG9jYXRpb25DYXJkLnRzeCJdLCJuYW1lcyI6WyJMb2NhdGlvbkNhcmQiLCJsb2NhdGlvbiIsInVzZVN0YXRlIiwic2hhZG93Iiwic2V0U2hhZG93IiwiaGFzTW91bnRlZCIsInVzZUhhc01vdW50ZWQiLCJ1c2VJbWFnZUxvYWQiLCJpbWdSZWYiLCJpbWdMb2FkZWQiLCJoaWRlU3Bpbm5lciIsImRpc3BsYXkiLCJiYXNlIiwic20iLCJtZCIsImxnIiwic2x1ZyIsInN0eWxlcyIsImltZ1NjYWxlIiwiY3Vyc29yIiwic2hhZG93cyIsImltZ1VybCIsImltYWdlUGF0aCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQzs7QUFBQSxrQkFDckNDLHNEQUFRLENBQUMsQ0FBRCxDQUQ2QjtBQUFBLE1BQzFEQyxNQUQwRDtBQUFBLE1BQ2xEQyxTQURrRDs7QUFFakUsTUFBTUMsVUFBVSxHQUFHQyw4RUFBYSxFQUFoQzs7QUFGaUUsc0JBR25DQyx1RUFBWSxFQUh1QjtBQUFBLE1BR3pEQyxNQUh5RCxpQkFHekRBLE1BSHlEO0FBQUEsTUFHakRDLFNBSGlELGlCQUdqREEsU0FIaUQ7O0FBSWpFLE1BQU1DLFdBQVcsR0FBRyxDQUFDTCxVQUFELElBQWVJLFNBQW5DO0FBRUEsc0JBQ0UscUVBQUMsbURBQUQ7QUFDRSxLQUFDLEVBQUMsT0FESjtBQUVFLFlBQVEsRUFBQyxVQUZYO0FBR0UsU0FBSyxFQUFFO0FBQ0xFLGFBQU8sRUFBRTtBQUFFQyxZQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBRSxFQUFFLGNBQXBCO0FBQW9DQyxVQUFFLEVBQUUsTUFBeEM7QUFBZ0RDLFVBQUUsRUFBRTtBQUFwRDtBQURKLEtBSFQ7QUFBQSxlQU9HLENBQUNMLFdBQUQsaUJBQ0MscUVBQUMsbURBQUQ7QUFBSyxjQUFRLEVBQUMsVUFBZDtBQUF5QixVQUFJLEVBQUMsa0JBQTlCO0FBQWlELFNBQUcsRUFBQyxrQkFBckQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBWUUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLDRCQUFxQlQsUUFBUSxDQUFDZSxJQUE5QixDQUFWO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxlQUFPLEVBQUMsVUFEVjtBQUVFLGlCQUFTLEVBQUUsY0FBY0MsNERBQU0sQ0FBQ0MsUUFGbEM7QUFHRSxnQkFBUSxFQUFFO0FBQUVOLGNBQUksRUFBRTtBQUFSLFNBSFo7QUFJRSxrQkFBVSxFQUFDLG1FQUpiO0FBS0UsdUJBQWUsRUFBQyxPQUxsQjtBQU1FLFNBQUMsRUFBQyxPQU5KO0FBT0UsU0FBQyxFQUFFLENBUEw7QUFRRSxtQkFBVyxFQUFFO0FBQUEsaUJBQU1SLFNBQVMsQ0FBQyxDQUFELENBQWY7QUFBQSxTQVJmO0FBU0Usa0JBQVUsRUFBRTtBQUFBLGlCQUFNQSxTQUFTLENBQUMsQ0FBRCxDQUFmO0FBQUEsU0FUZDtBQVVFLGNBQU0sRUFBRTtBQUFFZSxnQkFBTSxFQUFFO0FBQVYsU0FWVjtBQVdFLGlCQUFTLHNCQUFlVCxXQUFXLEdBQUcsTUFBSCxHQUFZLFVBQXRDLE1BWFg7QUFZRSxlQUFPLEVBQUVBLFdBQVcsR0FBRyxHQUFILEdBQVMsQ0FaL0I7QUFhRSxnQkFBUSxFQUFDO0FBYlgsU0FjTVUsb0RBQU8sQ0FBQ2pCLE1BQUQsQ0FkYjtBQUFBLGdDQWdCRSxxRUFBQyxxREFBRDtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGlCQUFPLEVBQUMsTUFGVjtBQUdFLG9CQUFVLEVBQUMsMEJBSGI7QUFJRSxhQUFHLEVBQUVrQix3RUFBTSxDQUFDcEIsUUFBUSxDQUFDcUIsU0FBVCxHQUFxQixZQUF0QixDQUpiO0FBS0UsV0FBQyxFQUFDLE1BTEo7QUFNRSxhQUFHLEVBQUVyQixRQUFRLENBQUNzQixJQU5oQjtBQU9FLGFBQUcsRUFBRWY7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixlQXdCRSxxRUFBQyxvREFBRDtBQUFNLG1CQUFTLEVBQUMsUUFBaEI7QUFBeUIsb0JBQVUsRUFBQyxVQUFwQztBQUErQyxrQkFBUSxFQUFDLFVBQXhEO0FBQW1FLGdCQUFNLEVBQUMsUUFBMUU7QUFBbUYsY0FBSSxFQUFFLEtBQXpGO0FBQWlHLGVBQUssRUFBQyxNQUF2RztBQUE4RyxlQUFLLEVBQUMsUUFBcEg7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFTLHFCQUFTLEVBQUMsbUJBQW5CO0FBQUEsc0JBQXlDUCxRQUFRLENBQUNzQjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOENEOztHQXBEUXZCLFk7VUFFWU0sc0UsRUFDV0MsK0Q7OztLQUh2QlAsWTtBQXNETUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG91cnMvbG9jYXRpb24vW3NsdWddLjkwMzNlMmRlMGI5MGY1YjEyNTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlLCBGbGV4LCBIZWFkaW5nLCBTcGlubmVyLCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25EZXRhaWwgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG91clwiO1xyXG5pbXBvcnQgeyBpbWdVcmwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZldGNoVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IHVzZUhhc01vdW50ZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VzZUhhc01vdW50ZWRcIjtcclxuaW1wb3J0IHVzZUltYWdlTG9hZCBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VzZUltYWdlTG9hZFwiO1xyXG5pbXBvcnQgeyBzaGFkb3dzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90b3VyQ2FyZC5tb2R1bGUuc2NzcydcclxuXHJcbmZ1bmN0aW9uIExvY2F0aW9uQ2FyZCh7IGxvY2F0aW9uIH06IHsgbG9jYXRpb246IExvY2F0aW9uRGV0YWlsOyB9KSB7XHJcbiAgY29uc3QgW3NoYWRvdywgc2V0U2hhZG93XSA9IHVzZVN0YXRlKDIpO1xyXG4gIGNvbnN0IGhhc01vdW50ZWQgPSB1c2VIYXNNb3VudGVkKCk7XHJcbiAgY29uc3QgeyBpbWdSZWYsIGltZ0xvYWRlZCB9ID0gdXNlSW1hZ2VMb2FkKCk7XHJcbiAgY29uc3QgaGlkZVNwaW5uZXIgPSAhaGFzTW91bnRlZCB8fCBpbWdMb2FkZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGg9XCIyMjBweFwiXHJcbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICBfbGFzdD17e1xyXG4gICAgICAgIGRpc3BsYXk6IHsgYmFzZTogXCJub25lXCIsIHNtOiBcImlubGluZS1ibG9ja1wiLCBtZDogXCJub25lXCIsIGxnOiBcImlubGluZS1ibG9ja1wiIH1cclxuICAgICAgfX0+XHJcblxyXG4gICAgICB7IWhpZGVTcGlubmVyICYmXHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cImNhbGMoNTAlIC0gMTJweClcIiB0b3A9XCJjYWxjKDUwJSAtIDEycHgpXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvQm94Pn1cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvdG91cnMvbG9jYXRpb24vJHtsb2NhdGlvbi5zbHVnfWB9PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1wicm91bmRlZDQgXCIgKyBzdHlsZXMuaW1nU2NhbGV9XHJcbiAgICAgICAgICBtYXhXaWR0aD17eyBiYXNlOiBcIjQ1MHB4XCIgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249XCJib3gtc2hhZG93IDAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgMjUwbXMsIHRyYW5zZm9ybSAzMDBtcyBlYXNlLW91dFwiXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBoPVwiMjIwcHhcIlxyXG4gICAgICAgICAgbT17MX1cclxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRTaGFkb3coMyl9XHJcbiAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRTaGFkb3coMil9XHJcbiAgICAgICAgICBfaG92ZXI9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7aGlkZVNwaW5uZXIgPyBcIjAsIDBcIiA6IFwiMCwgMTAwcHhcIn0pYH1cclxuICAgICAgICAgIG9wYWNpdHk9e2hpZGVTcGlubmVyID8gMTAwIDogMH1cclxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgey4uLnNoYWRvd3Nbc2hhZG93XX0+XHJcblxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIlxyXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXRcIlxyXG4gICAgICAgICAgICBzcmM9e2ltZ1VybChsb2NhdGlvbi5pbWFnZVBhdGggKyBcIl90aHVtYi5qcGdcIil9XHJcbiAgICAgICAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgYWx0PXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICByZWY9e2ltZ1JlZn0gLz5cclxuICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGJhY2tncm91bmQ9XCJibHVlLjgwMFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBib3R0b209XCIwLjVyZW1cIiBsZWZ0PXtcIjI0JVwifSAgd2lkdGg9XCIxMDAlXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWRpbmcgdGV4dFN0eWxlPVwibG9jYXRpb25DYXJkVGl0bGVcIiA+e2xvY2F0aW9uLm5hbWV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkNhcmQiXSwic291cmNlUm9vdCI6IiJ9