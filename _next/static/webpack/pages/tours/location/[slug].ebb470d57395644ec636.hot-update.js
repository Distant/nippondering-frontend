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
          cursor: "pointer",
          h2: {
            paddingRight: "20px"
          }
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
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          direction: "column",
          background: "blue.800",
          position: "absolute",
          bottom: "0.5rem",
          left: "24%",
          right: "0",
          padding: "0.5rem",
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
            textStyle: "locationCardTitle",
            width: "100%",
            children: location.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvbG9jYXRpb25DYXJkLnRzeCJdLCJuYW1lcyI6WyJMb2NhdGlvbkNhcmQiLCJsb2NhdGlvbiIsInVzZVN0YXRlIiwic2hhZG93Iiwic2V0U2hhZG93IiwiaGFzTW91bnRlZCIsInVzZUhhc01vdW50ZWQiLCJ1c2VJbWFnZUxvYWQiLCJpbWdSZWYiLCJpbWdMb2FkZWQiLCJoaWRlU3Bpbm5lciIsImRpc3BsYXkiLCJiYXNlIiwic20iLCJtZCIsImxnIiwic2x1ZyIsInN0eWxlcyIsImltZ1NjYWxlIiwiY3Vyc29yIiwiaDIiLCJwYWRkaW5nUmlnaHQiLCJzaGFkb3dzIiwiaW1nVXJsIiwiaW1hZ2VQYXRoIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBbUU7QUFBQTs7QUFBQSxNQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDOztBQUFBLGtCQUNyQ0Msc0RBQVEsQ0FBQyxDQUFELENBRDZCO0FBQUEsTUFDMURDLE1BRDBEO0FBQUEsTUFDbERDLFNBRGtEOztBQUVqRSxNQUFNQyxVQUFVLEdBQUdDLDhFQUFhLEVBQWhDOztBQUZpRSxzQkFHbkNDLHVFQUFZLEVBSHVCO0FBQUEsTUFHekRDLE1BSHlELGlCQUd6REEsTUFIeUQ7QUFBQSxNQUdqREMsU0FIaUQsaUJBR2pEQSxTQUhpRDs7QUFJakUsTUFBTUMsV0FBVyxHQUFHLENBQUNMLFVBQUQsSUFBZUksU0FBbkM7QUFFQSxzQkFDRSxxRUFBQyxtREFBRDtBQUNFLEtBQUMsRUFBQyxPQURKO0FBRUUsWUFBUSxFQUFDLFVBRlg7QUFHRSxTQUFLLEVBQUU7QUFDTEUsYUFBTyxFQUFFO0FBQUVDLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFFLEVBQUUsY0FBcEI7QUFBb0NDLFVBQUUsRUFBRSxNQUF4QztBQUFnREMsVUFBRSxFQUFFO0FBQXBEO0FBREosS0FIVDtBQUFBLGVBT0csQ0FBQ0wsV0FBRCxpQkFDQyxxRUFBQyxtREFBRDtBQUFLLGNBQVEsRUFBQyxVQUFkO0FBQXlCLFVBQUksRUFBQyxrQkFBOUI7QUFBaUQsU0FBRyxFQUFDLGtCQUFyRDtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFZRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksNEJBQXFCVCxRQUFRLENBQUNlLElBQTlCLENBQVY7QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUNFLGVBQU8sRUFBQyxVQURWO0FBRUUsaUJBQVMsRUFBRSxjQUFjQyw0REFBTSxDQUFDQyxRQUZsQztBQUdFLGdCQUFRLEVBQUU7QUFBRU4sY0FBSSxFQUFFO0FBQVIsU0FIWjtBQUlFLGtCQUFVLEVBQUMsbUVBSmI7QUFLRSx1QkFBZSxFQUFDLE9BTGxCO0FBTUUsU0FBQyxFQUFDLE9BTko7QUFPRSxTQUFDLEVBQUUsQ0FQTDtBQVFFLG1CQUFXLEVBQUU7QUFBQSxpQkFBTVIsU0FBUyxDQUFDLENBQUQsQ0FBZjtBQUFBLFNBUmY7QUFTRSxrQkFBVSxFQUFFO0FBQUEsaUJBQU1BLFNBQVMsQ0FBQyxDQUFELENBQWY7QUFBQSxTQVRkO0FBVUUsY0FBTSxFQUFFO0FBQ05lLGdCQUFNLEVBQUUsU0FERjtBQUVOQyxZQUFFLEVBQUU7QUFDRkMsd0JBQVksRUFBRTtBQURaO0FBRkUsU0FWVjtBQWdCRSxpQkFBUyxzQkFBZVgsV0FBVyxHQUFHLE1BQUgsR0FBWSxVQUF0QyxNQWhCWDtBQWlCRSxlQUFPLEVBQUVBLFdBQVcsR0FBRyxHQUFILEdBQVMsQ0FqQi9CO0FBa0JFLGdCQUFRLEVBQUM7QUFsQlgsU0FtQk1ZLG9EQUFPLENBQUNuQixNQUFELENBbkJiO0FBQUEsZ0NBcUJFLHFFQUFDLHFEQUFEO0FBQ0UsbUJBQVMsRUFBQyxZQURaO0FBRUUsaUJBQU8sRUFBQyxNQUZWO0FBR0Usb0JBQVUsRUFBQywwQkFIYjtBQUlFLGFBQUcsRUFBRW9CLHdFQUFNLENBQUN0QixRQUFRLENBQUN1QixTQUFULEdBQXFCLFlBQXRCLENBSmI7QUFLRSxXQUFDLEVBQUMsTUFMSjtBQU1FLGFBQUcsRUFBRXZCLFFBQVEsQ0FBQ3dCLElBTmhCO0FBT0UsYUFBRyxFQUFFakI7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCRixlQTZCRSxxRUFBQyxvREFBRDtBQUFNLG1CQUFTLEVBQUMsUUFBaEI7QUFBeUIsb0JBQVUsRUFBQyxVQUFwQztBQUErQyxrQkFBUSxFQUFDLFVBQXhEO0FBQW1FLGdCQUFNLEVBQUMsUUFBMUU7QUFBbUYsY0FBSSxFQUFFLEtBQXpGO0FBQWdHLGVBQUssRUFBQyxHQUF0RztBQUEwRyxpQkFBTyxFQUFDLFFBQWxIO0FBQTJILGVBQUssRUFBQyxRQUFqSTtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQVMscUJBQVMsRUFBQyxtQkFBbkI7QUFBdUMsaUJBQUssRUFBQyxNQUE3QztBQUFBLHNCQUFxRFAsUUFBUSxDQUFDd0I7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1ERDs7R0F6RFF6QixZO1VBRVlNLHNFLEVBQ1dDLCtEOzs7S0FIdkJQLFk7QUEyRE1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvdXJzL2xvY2F0aW9uL1tzbHVnXS5lYmI0NzBkNTczOTU2NDRlYzYzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgRmxleCwgSGVhZGluZywgU3Bpbm5lciwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvdXJcIjtcclxuaW1wb3J0IHsgaW1nVXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mZXRjaFV0aWxpdGllc1wiO1xyXG5pbXBvcnQgeyB1c2VIYXNNb3VudGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy91c2VIYXNNb3VudGVkXCI7XHJcbmltcG9ydCB1c2VJbWFnZUxvYWQgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy91c2VJbWFnZUxvYWRcIjtcclxuaW1wb3J0IHsgc2hhZG93cyB9IGZyb20gXCIuLi9jb21tb25Qcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdG91ckNhcmQubW9kdWxlLnNjc3MnXHJcblxyXG5mdW5jdGlvbiBMb2NhdGlvbkNhcmQoeyBsb2NhdGlvbiB9OiB7IGxvY2F0aW9uOiBMb2NhdGlvbkRldGFpbDsgfSkge1xyXG4gIGNvbnN0IFtzaGFkb3csIHNldFNoYWRvd10gPSB1c2VTdGF0ZSgyKTtcclxuICBjb25zdCBoYXNNb3VudGVkID0gdXNlSGFzTW91bnRlZCgpO1xyXG4gIGNvbnN0IHsgaW1nUmVmLCBpbWdMb2FkZWQgfSA9IHVzZUltYWdlTG9hZCgpO1xyXG4gIGNvbnN0IGhpZGVTcGlubmVyID0gIWhhc01vdW50ZWQgfHwgaW1nTG9hZGVkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBoPVwiMjIwcHhcIlxyXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgX2xhc3Q9e3tcclxuICAgICAgICBkaXNwbGF5OiB7IGJhc2U6IFwibm9uZVwiLCBzbTogXCJpbmxpbmUtYmxvY2tcIiwgbWQ6IFwibm9uZVwiLCBsZzogXCJpbmxpbmUtYmxvY2tcIiB9XHJcbiAgICAgIH19PlxyXG5cclxuICAgICAgeyFoaWRlU3Bpbm5lciAmJlxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCJjYWxjKDUwJSAtIDEycHgpXCIgdG9wPVwiY2FsYyg1MCUgLSAxMnB4KVwiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICA8L0JveD59XHJcblxyXG4gICAgICA8TGluayBocmVmPXtgL3RvdXJzL2xvY2F0aW9uLyR7bG9jYXRpb24uc2x1Z31gfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcInJvdW5kZWQ0IFwiICsgc3R5bGVzLmltZ1NjYWxlfVxyXG4gICAgICAgICAgbWF4V2lkdGg9e3sgYmFzZTogXCI0NTBweFwiIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPVwiYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDI1MG1zLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1vdXRcIlxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgaD1cIjIyMHB4XCJcclxuICAgICAgICAgIG09ezF9XHJcbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0U2hhZG93KDMpfVxyXG4gICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0U2hhZG93KDIpfVxyXG4gICAgICAgICAgX2hvdmVyPXt7IFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICBoMjoge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtoaWRlU3Bpbm5lciA/IFwiMCwgMFwiIDogXCIwLCAxMDBweFwifSlgfVxyXG4gICAgICAgICAgb3BhY2l0eT17aGlkZVNwaW5uZXIgPyAxMDAgOiAwfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICB7Li4uc2hhZG93c1tzaGFkb3ddfT5cclxuXHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiXHJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgdHJhbnNpdGlvbj1cInRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dFwiXHJcbiAgICAgICAgICAgIHNyYz17aW1nVXJsKGxvY2F0aW9uLmltYWdlUGF0aCArIFwiX3RodW1iLmpwZ1wiKX1cclxuICAgICAgICAgICAgaD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhbHQ9e2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIHJlZj17aW1nUmVmfSAvPlxyXG4gICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYmFja2dyb3VuZD1cImJsdWUuODAwXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJvdHRvbT1cIjAuNXJlbVwiIGxlZnQ9e1wiMjQlXCJ9IHJpZ2h0PVwiMFwiIHBhZGRpbmc9XCIwLjVyZW1cIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZGluZyB0ZXh0U3R5bGU9XCJsb2NhdGlvbkNhcmRUaXRsZVwiIHdpZHRoPVwiMTAwJVwiPntsb2NhdGlvbi5uYW1lfTwvSGVhZGluZz5cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25DYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==