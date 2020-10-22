(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");








var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return option.label + " " + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref =  false ? undefined : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
};

var A11yText = function A11yText(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", _extends$1({
    css: _ref
  }, props));
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = _objectWithoutPropertiesLoose(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", _extends$2({
    ref: innerRef
  }, props, {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGluOiBpblByb3AsXG4gIG91dCxcbiAgb25FeGl0ZWQsXG4gIGFwcGVhcixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIGlubmVyUmVmLFxuICBlbW90aW9uLFxuICAuLi5wcm9wc1xufTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY3NzPXt7XG4gICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NodeResolver, _Component);

  function NodeResolver() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NodeResolver.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this));
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.innerRef(null);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$1(ScrollLock, _Component);

  function ScrollLock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  var _proto = ScrollLock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!canUseDOM) return;
    var _this$props = this.props,
        accountForScrollbars = _this$props.accountForScrollbars,
        touchScrollTarget = _this$props.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        _this2.originalStyles[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = adjustedPadding + "px";
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    if (!canUseDOM) return;
    var _this$props2 = this.props,
        accountForScrollbars = _this$props2.accountForScrollbars,
        touchScrollTarget = _this$props2.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = _this3.originalStyles[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _ref$1 =  false ? undefined : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEVSIsImZpbGUiOiJTY3JvbGxCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQsIHR5cGUgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IE5vZGVSZXNvbHZlciBmcm9tICcuL05vZGVSZXNvbHZlcic7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICcuL1Njcm9sbExvY2svaW5kZXgnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogRWxlbWVudDwqPixcbiAgaXNFbmFibGVkOiBib29sZWFuLFxufTtcbnR5cGUgU3RhdGUgPSB7XG4gIHRvdWNoU2Nyb2xsVGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwsXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfTtcblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuICBnZXRTY3JvbGxUYXJnZXQgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChyZWYgPT09IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgfTtcblxuICAvLyB0aGlzIHdpbGwgY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgYmx1clNlbGVjdElucHV0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvdWNoU2Nyb2xsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG5cbiAgICAgKiBOb2RlUmVzb2x2ZXJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgKiBtb2JpbGUgZGV2aWNlc1xuXG4gICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLmdldFNjcm9sbFRhcmdldH0+e2NoaWxkcmVufTwvTm9kZVJlc29sdmVyPlxuICAgICAgICB7dG91Y2hTY3JvbGxUYXJnZXQgPyAoXG4gICAgICAgICAgPFNjcm9sbExvY2sgdG91Y2hTY3JvbGxUYXJnZXQ9e3RvdWNoU2Nyb2xsVGFyZ2V0fSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose$2(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  var _proto = ScrollBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

    if (!isEnabled) return children;
    /*
     * Div
     * ------------------------------
     * blocks scrolling on non-body elements behind the menu
      * NodeResolver
     * ------------------------------
     * we need a reference to the scrollable element to "unlock" scroll on
     * mobile devices
      * ScrollLock
     * ------------------------------
     * actually does the scroll locking
     */

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      onClick: this.blurSelectInput,
      css: _ref$1
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(NodeResolver, {
      innerRef: this.getScrollTarget
    }, children), touchScrollTarget ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(ScrollLock, {
      touchScrollTarget: touchScrollTarget
    }) : null);
  };

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$3(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  var _proto = ScrollCaptor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListening(this.scrollTarget);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListening(this.scrollTarget);
  };

  _proto.startListening = function startListening(el) {
    // bail early if no element is available to attach to
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.stopListening = function stopListening(el) {
    // all the if statements are to appease Flow 😢
    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
      innerRef: this.getScrollTarget
    }, this.props.children);
  };

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = _objectWithoutPropertiesLoose$1(_ref, ["isEnabled"]);

  return isEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event, context) {
  if (context === void 0) {
    context = {};
  }

  var _context = context,
      isSearchable = _context.isSearchable,
      isMulti = _context.isMulti,
      label = _context.label,
      isDisabled = _context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options" + (isDisabled ? '' : ', press Enter to select the currently focused option') + ", press Escape to exit the menu, press Tab to select the option and exit the menu.";

    case 'input':
      return (label ? label : 'Select') + " is focused " + (isSearchable ? ',type to refine list' : '') + ", press Down to open the menu, " + (isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option " + value + ", deselected.";

    case 'select-option':
      return isDisabled ? "option " + value + " is disabled. Select another option." : "option " + value + ", selected.";
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value " + getOptionLabel(focusedValue) + " focused, " + (selectValue.indexOf(focusedValue) + 1) + " of " + selectValue.length + ".";
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option " + getOptionLabel(focusedOption) + " focused" + (focusedOption.isDisabled ? ' disabled' : '') + ", " + (options.indexOf(focusedOption) + 1) + " of " + options.length + ".";
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "" + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + ".";
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var defaultStyles = {
  clearIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["c"],
  container: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["a"],
  control: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["b"],
  dropdownIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["d"],
  group: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["g"],
  groupHeading: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["e"],
  indicatorsContainer: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["i"],
  indicatorSeparator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["f"],
  input: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["h"],
  loadingIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["l"],
  loadingMessage: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["j"],
  menu: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["m"],
  menuList: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["k"],
  menuPortal: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["n"],
  multiValue: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["o"],
  multiValueLabel: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["p"],
  multiValueRemove: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["q"],
  noOptionsMessage: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["r"],
  option: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["s"],
  placeholder: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["t"],
  singleValue: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["u"],
  valueContainer: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source, target) {
  if (target === void 0) {
    target = {};
  }

  // initialize with source styles
  var styles = _extends$3({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["i"])(),
  captureMenuScroll: !Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["i"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["d"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + " result" + (count !== 1 ? 's' : '') + " available";
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$4(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["w"])({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _extends$4({}, actionMeta, {
        name: name
      }));
    };

    _this.setValue = function (newValue, action, option) {
      if (action === void 0) {
        action = 'set-value';
      }

      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(selectValue, [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return _this.instancePrefix + "-" + element;
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _extends$4({}, context, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["j"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = _this.getElementId('option') + "-" + id;
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + "-" + i);
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = _this.getElementId('group') + "-" + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "" + itemIndex);

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.cacheComponents, _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"]).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["e"])(_value);

    _this.buildMenuOptions = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          newProps = _ref6[0],
          newSelectValue = _ref6[1];
      var _ref7 = lastArgs,
          lastProps = _ref7[0],
          lastSelectValue = _ref7[1];
      return Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newSelectValue, lastSelectValue) && Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newProps.inputValue, lastProps.inputValue) && Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newProps.options, lastProps.options);
    }).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListeningComposition();
    this.startListeningToTouch();

    if (this.props.closeMenuOnScroll && document && document.addEventListener) {
      // Listen to all scroll events, and filter them out inside of 'onScroll'
      document.addEventListener('scroll', this.onScroll, true);
    }

    if (this.props.autoFocus) {
      this.focusInput();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props8 = this.props,
        options = _this$props8.options,
        value = _this$props8.value,
        menuIsOpen = _this$props8.menuIsOpen,
        inputValue = _this$props8.inputValue; // re-cache custom components

    this.cacheComponents(nextProps.components); // rebuild the menu options

    if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
      var selectValue = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["e"])(nextProps.value);
      var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
        render: [],
        focusable: []
      };
      var focusedValue = this.getNextFocusedValue(selectValue);
      var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
      this.setState({
        menuOptions: menuOptions,
        selectValue: selectValue,
        focusedOption: focusedOption,
        focusedValue: focusedValue
      });
    } // some updates should toggle the state of the input visibility


    if (this.inputIsHiddenAfterUpdate != null) {
      this.setState({
        inputIsHidden: this.inputIsHiddenAfterUpdate
      });
      delete this.inputIsHiddenAfterUpdate;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props9 = this.props,
        isDisabled = _this$props9.isDisabled,
        menuIsOpen = _this$props9.menuIsOpen;
    var isFocused = this.state.isFocused;

    if ( // ensure focus is restored correctly when the control becomes enabled
    isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
    isFocused && menuIsOpen && !prevProps.menuIsOpen) {
      this.focusInput();
    } // scroll the focused option into view if necessary


    if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
      Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this.menuListRef, this.focusedOptionRef);
      this.scrollToFocusedOptionOnUpdate = false;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListeningComposition();
    this.stopListeningToTouch();
    document.removeEventListener('scroll', this.onScroll, true);
  };

  // ==============================
  // Consumer Handlers
  // ==============================
  _proto.onMenuOpen = function onMenuOpen() {
    this.props.onMenuOpen();
  };

  _proto.onMenuClose = function onMenuClose() {
    var _this$props10 = this.props,
        isSearchable = _this$props10.isSearchable,
        isMulti = _this$props10.isMulti;
    this.announceAriaLiveContext({
      event: 'input',
      context: {
        isSearchable: isSearchable,
        isMulti: isMulti
      }
    });
    this.onInputChange('', {
      action: 'menu-close'
    });
    this.props.onMenuClose();
  };

  _proto.onInputChange = function onInputChange(newValue, actionMeta) {
    this.props.onInputChange(newValue, actionMeta);
  } // ==============================
  // Methods
  // ==============================
  ;

  _proto.focusInput = function focusInput() {
    if (!this.inputRef) return;
    this.inputRef.focus();
  };

  _proto.blurInput = function blurInput() {
    if (!this.inputRef) return;
    this.inputRef.blur();
  } // aliased for consumers
  ;

  _proto.openMenu = function openMenu(focusOption) {
    var _this2 = this;

    var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        isFocused = _this$state3.isFocused;
    var menuOptions = this.buildMenuOptions(this.props, selectValue);
    var isMulti = this.props.isMulti;
    var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

    if (!isMulti) {
      var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

      if (selectedIndex > -1) {
        openAtIndex = selectedIndex;
      }
    } // only scroll if the menu isn't already open


    this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
    this.inputIsHiddenAfterUpdate = false;
    this.setState({
      menuOptions: menuOptions,
      focusedValue: null,
      focusedOption: menuOptions.focusable[openAtIndex]
    }, function () {
      _this2.onMenuOpen();

      _this2.announceAriaLiveContext({
        event: 'menu'
      });
    });
  };

  _proto.focusValue = function focusValue(direction) {
    var _this$props11 = this.props,
        isMulti = _this$props11.isMulti,
        isSearchable = _this$props11.isSearchable;
    var _this$state4 = this.state,
        selectValue = _this$state4.selectValue,
        focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

    if (!isMulti) return;
    this.setState({
      focusedOption: null
    });
    var focusedIndex = selectValue.indexOf(focusedValue);

    if (!focusedValue) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'value'
      });
    }

    var lastIndex = selectValue.length - 1;
    var nextFocus = -1;
    if (!selectValue.length) return;

    switch (direction) {
      case 'previous':
        if (focusedIndex === 0) {
          // don't cycle from the start to the end
          nextFocus = 0;
        } else if (focusedIndex === -1) {
          // if nothing is focused, focus the last value first
          nextFocus = lastIndex;
        } else {
          nextFocus = focusedIndex - 1;
        }

        break;

      case 'next':
        if (focusedIndex > -1 && focusedIndex < lastIndex) {
          nextFocus = focusedIndex + 1;
        }

        break;
    }

    if (nextFocus === -1) {
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
    }

    this.setState({
      inputIsHidden: nextFocus !== -1,
      focusedValue: selectValue[nextFocus]
    });
  };

  _proto.focusOption = function focusOption(direction) {
    if (direction === void 0) {
      direction = 'first';
    }

    var pageSize = this.props.pageSize;
    var _this$state5 = this.state,
        focusedOption = _this$state5.focusedOption,
        menuOptions = _this$state5.menuOptions;
    var options = menuOptions.focusable;
    if (!options.length) return;
    var nextFocus = 0; // handles 'first'

    var focusedIndex = options.indexOf(focusedOption);

    if (!focusedOption) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }

    if (direction === 'up') {
      nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
    } else if (direction === 'down') {
      nextFocus = (focusedIndex + 1) % options.length;
    } else if (direction === 'pageup') {
      nextFocus = focusedIndex - pageSize;
      if (nextFocus < 0) nextFocus = 0;
    } else if (direction === 'pagedown') {
      nextFocus = focusedIndex + pageSize;
      if (nextFocus > options.length - 1) nextFocus = options.length - 1;
    } else if (direction === 'last') {
      nextFocus = options.length - 1;
    }

    this.scrollToFocusedOptionOnUpdate = true;
    this.setState({
      focusedOption: options[nextFocus],
      focusedValue: null
    });
    this.announceAriaLiveContext({
      event: 'menu',
      context: {
        isDisabled: isOptionDisabled(options[nextFocus])
      }
    });
  };

  // ==============================
  // Getters
  // ==============================
  _proto.getTheme = function getTheme() {
    // Use the default theme if there are no customizations.
    if (!this.props.theme) {
      return defaultTheme;
    } // If the theme prop is a function, assume the function
    // knows how to merge the passed-in default theme with
    // its own modifications.


    if (typeof this.props.theme === 'function') {
      return this.props.theme(defaultTheme);
    } // Otherwise, if a plain theme object was passed in,
    // overlay it with the default theme.


    return _extends$4({}, defaultTheme, this.props.theme);
  };

  _proto.getCommonProps = function getCommonProps() {
    var clearValue = this.clearValue,
        getStyles = this.getStyles,
        setValue = this.setValue,
        selectOption = this.selectOption,
        props = this.props;
    var classNamePrefix = props.classNamePrefix,
        isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
    var selectValue = this.state.selectValue;
    var hasValue = this.hasValue();

    var getValue = function getValue() {
      return selectValue;
    };

    var cx = _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["h"].bind(null, classNamePrefix);
    return {
      cx: cx,
      clearValue: clearValue,
      getStyles: getStyles,
      getValue: getValue,
      hasValue: hasValue,
      isMulti: isMulti,
      isRtl: isRtl,
      options: options,
      selectOption: selectOption,
      setValue: setValue,
      selectProps: props,
      theme: this.getTheme()
    };
  };

  _proto.getNextFocusedValue = function getNextFocusedValue(nextSelectValue) {
    if (this.clearFocusValueOnUpdate) {
      this.clearFocusValueOnUpdate = false;
      return null;
    }

    var _this$state6 = this.state,
        focusedValue = _this$state6.focusedValue,
        lastSelectValue = _this$state6.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }

    return null;
  };

  _proto.getNextFocusedOption = function getNextFocusedOption(options) {
    var lastFocusedOption = this.state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  };

  _proto.hasValue = function hasValue() {
    var selectValue = this.state.selectValue;
    return selectValue.length > 0;
  };

  _proto.hasOptions = function hasOptions() {
    return !!this.state.menuOptions.render.length;
  };

  _proto.countOptions = function countOptions() {
    return this.state.menuOptions.focusable.length;
  };

  _proto.isClearable = function isClearable() {
    var _this$props12 = this.props,
        isClearable = _this$props12.isClearable,
        isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
    // multi select, by default, IS clearable

    if (isClearable === undefined) return isMulti;
    return isClearable;
  };

  _proto.isOptionDisabled = function isOptionDisabled(option, selectValue) {
    return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
  };

  _proto.isOptionSelected = function isOptionSelected(option, selectValue) {
    var _this3 = this;

    if (selectValue.indexOf(option) > -1) return true;

    if (typeof this.props.isOptionSelected === 'function') {
      return this.props.isOptionSelected(option, selectValue);
    }

    var candidate = this.getOptionValue(option);
    return selectValue.some(function (i) {
      return _this3.getOptionValue(i) === candidate;
    });
  };

  _proto.filterOption = function filterOption(option, inputValue) {
    return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
  };

  _proto.formatOptionLabel = function formatOptionLabel(data, context) {
    if (typeof this.props.formatOptionLabel === 'function') {
      var inputValue = this.props.inputValue;
      var selectValue = this.state.selectValue;
      return this.props.formatOptionLabel(data, {
        context: context,
        inputValue: inputValue,
        selectValue: selectValue
      });
    } else {
      return this.getOptionLabel(data);
    }
  };

  _proto.formatGroupLabel = function formatGroupLabel(data) {
    return this.props.formatGroupLabel(data);
  } // ==============================
  // Mouse Handlers
  // ==============================
  ;

  // ==============================
  // Composition Handlers
  // ==============================
  _proto.startListeningComposition = function startListeningComposition() {
    if (document && document.addEventListener) {
      document.addEventListener('compositionstart', this.onCompositionStart, false);
      document.addEventListener('compositionend', this.onCompositionEnd, false);
    }
  };

  _proto.stopListeningComposition = function stopListeningComposition() {
    if (document && document.removeEventListener) {
      document.removeEventListener('compositionstart', this.onCompositionStart);
      document.removeEventListener('compositionend', this.onCompositionEnd);
    }
  };

  // ==============================
  // Touch Handlers
  // ==============================
  _proto.startListeningToTouch = function startListeningToTouch() {
    if (document && document.addEventListener) {
      document.addEventListener('touchstart', this.onTouchStart, false);
      document.addEventListener('touchmove', this.onTouchMove, false);
      document.addEventListener('touchend', this.onTouchEnd, false);
    }
  };

  _proto.stopListeningToTouch = function stopListeningToTouch() {
    if (document && document.removeEventListener) {
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  // ==============================
  // Renderers
  // ==============================
  _proto.constructAriaLiveMessage = function constructAriaLiveMessage() {
    var _this$state7 = this.state,
        ariaLiveContext = _this$state7.ariaLiveContext,
        selectValue = _this$state7.selectValue,
        focusedValue = _this$state7.focusedValue,
        focusedOption = _this$state7.focusedOption;
    var _this$props13 = this.props,
        options = _this$props13.options,
        menuIsOpen = _this$props13.menuIsOpen,
        inputValue = _this$props13.inputValue,
        screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

    var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
      focusedValue: focusedValue,
      getOptionLabel: this.getOptionLabel,
      selectValue: selectValue
    }) : ''; // An aria live message representing the currently focused option in the select.

    var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
      focusedOption: focusedOption,
      getOptionLabel: this.getOptionLabel,
      options: options
    }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

    var resultsMsg = resultsAriaMessage({
      inputValue: inputValue,
      screenReaderMessage: screenReaderStatus({
        count: this.countOptions()
      })
    });
    return focusedValueMsg + " " + focusedOptionMsg + " " + resultsMsg + " " + ariaLiveContext;
  };

  _proto.renderInput = function renderInput() {
    var _this$props14 = this.props,
        isDisabled = _this$props14.isDisabled,
        isSearchable = _this$props14.isSearchable,
        inputId = _this$props14.inputId,
        inputValue = _this$props14.inputValue,
        tabIndex = _this$props14.tabIndex;
    var Input = this.components.Input;
    var inputIsHidden = this.state.inputIsHidden;
    var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

    var ariaAttributes = {
      'aria-autocomplete': 'list',
      'aria-label': this.props['aria-label'],
      'aria-labelledby': this.props['aria-labelledby']
    };

    if (!isSearchable) {
      // use a dummy input to maintain focus/blur functionality
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DummyInput, _extends$4({
        id: id,
        innerRef: this.getInputRef,
        onBlur: this.onInputBlur,
        onChange: _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["n"],
        onFocus: this.onInputFocus,
        readOnly: true,
        disabled: isDisabled,
        tabIndex: tabIndex,
        value: ""
      }, ariaAttributes));
    }

    var _this$commonProps = this.commonProps,
        cx = _this$commonProps.cx,
        theme = _this$commonProps.theme,
        selectProps = _this$commonProps.selectProps;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends$4({
      autoCapitalize: "none",
      autoComplete: "off",
      autoCorrect: "off",
      cx: cx,
      getStyles: this.getStyles,
      id: id,
      innerRef: this.getInputRef,
      isDisabled: isDisabled,
      isHidden: inputIsHidden,
      onBlur: this.onInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.onInputFocus,
      selectProps: selectProps,
      spellCheck: "false",
      tabIndex: tabIndex,
      theme: theme,
      type: "text",
      value: inputValue
    }, ariaAttributes));
  };

  _proto.renderPlaceholderOrValue = function renderPlaceholderOrValue() {
    var _this4 = this;

    var _this$components = this.components,
        MultiValue = _this$components.MultiValue,
        MultiValueContainer = _this$components.MultiValueContainer,
        MultiValueLabel = _this$components.MultiValueLabel,
        MultiValueRemove = _this$components.MultiValueRemove,
        SingleValue = _this$components.SingleValue,
        Placeholder = _this$components.Placeholder;
    var commonProps = this.commonProps;
    var _this$props15 = this.props,
        controlShouldRenderValue = _this$props15.controlShouldRenderValue,
        isDisabled = _this$props15.isDisabled,
        isMulti = _this$props15.isMulti,
        inputValue = _this$props15.inputValue,
        placeholder = _this$props15.placeholder;
    var _this$state8 = this.state,
        selectValue = _this$state8.selectValue,
        focusedValue = _this$state8.focusedValue,
        isFocused = _this$state8.isFocused;

    if (!this.hasValue() || !controlShouldRenderValue) {
      return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, _extends$4({}, commonProps, {
        key: "placeholder",
        isDisabled: isDisabled,
        isFocused: isFocused
      }), placeholder);
    }

    if (isMulti) {
      var selectValues = selectValue.map(function (opt, index) {
        var isOptionFocused = opt === focusedValue;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiValue, _extends$4({}, commonProps, {
          components: {
            Container: MultiValueContainer,
            Label: MultiValueLabel,
            Remove: MultiValueRemove
          },
          isFocused: isOptionFocused,
          isDisabled: isDisabled,
          key: _this4.getOptionValue(opt),
          index: index,
          removeProps: {
            onClick: function onClick() {
              return _this4.removeValue(opt);
            },
            onTouchEnd: function onTouchEnd() {
              return _this4.removeValue(opt);
            },
            onMouseDown: function onMouseDown(e) {
              e.preventDefault();
              e.stopPropagation();
            }
          },
          data: opt
        }), _this4.formatOptionLabel(opt, 'value'));
      });
      return selectValues;
    }

    if (inputValue) {
      return null;
    }

    var singleValue = selectValue[0];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleValue, _extends$4({}, commonProps, {
      data: singleValue,
      isDisabled: isDisabled
    }), this.formatOptionLabel(singleValue, 'value'));
  };

  _proto.renderClearIndicator = function renderClearIndicator() {
    var ClearIndicator = this.components.ClearIndicator;
    var commonProps = this.commonProps;
    var _this$props16 = this.props,
        isDisabled = _this$props16.isDisabled,
        isLoading = _this$props16.isLoading;
    var isFocused = this.state.isFocused;

    if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
      return null;
    }

    var innerProps = {
      onMouseDown: this.onClearIndicatorMouseDown,
      onTouchEnd: this.onClearIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isFocused: isFocused
    }));
  };

  _proto.renderLoadingIndicator = function renderLoadingIndicator() {
    var LoadingIndicator = this.components.LoadingIndicator;
    var commonProps = this.commonProps;
    var _this$props17 = this.props,
        isDisabled = _this$props17.isDisabled,
        isLoading = _this$props17.isLoading;
    var isFocused = this.state.isFocused;
    if (!LoadingIndicator || !isLoading) return null;
    var innerProps = {
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderIndicatorSeparator = function renderIndicatorSeparator() {
    var _this$components2 = this.components,
        DropdownIndicator = _this$components2.DropdownIndicator,
        IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

    if (!DropdownIndicator || !IndicatorSeparator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorSeparator, _extends$4({}, commonProps, {
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderDropdownIndicator = function renderDropdownIndicator() {
    var DropdownIndicator = this.components.DropdownIndicator;
    if (!DropdownIndicator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    var innerProps = {
      onMouseDown: this.onDropdownIndicatorMouseDown,
      onTouchEnd: this.onDropdownIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderMenu = function renderMenu() {
    var _this5 = this;

    var _this$components3 = this.components,
        Group = _this$components3.Group,
        GroupHeading = _this$components3.GroupHeading,
        Menu = _this$components3.Menu,
        MenuList = _this$components3.MenuList,
        MenuPortal = _this$components3.MenuPortal,
        LoadingMessage = _this$components3.LoadingMessage,
        NoOptionsMessage = _this$components3.NoOptionsMessage,
        Option = _this$components3.Option;
    var commonProps = this.commonProps;
    var _this$state9 = this.state,
        focusedOption = _this$state9.focusedOption,
        menuOptions = _this$state9.menuOptions;
    var _this$props18 = this.props,
        captureMenuScroll = _this$props18.captureMenuScroll,
        inputValue = _this$props18.inputValue,
        isLoading = _this$props18.isLoading,
        loadingMessage = _this$props18.loadingMessage,
        minMenuHeight = _this$props18.minMenuHeight,
        maxMenuHeight = _this$props18.maxMenuHeight,
        menuIsOpen = _this$props18.menuIsOpen,
        menuPlacement = _this$props18.menuPlacement,
        menuPosition = _this$props18.menuPosition,
        menuPortalTarget = _this$props18.menuPortalTarget,
        menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
        noOptionsMessage = _this$props18.noOptionsMessage,
        onMenuScrollToTop = _this$props18.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
    if (!menuIsOpen) return null; // TODO: Internal Option Type here

    var render = function render(props) {
      // for performance, the menu options in state aren't changed when the
      // focused option changes so we calculate additional props based on that
      var isFocused = focusedOption === props.data;
      props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, _extends$4({}, commonProps, props, {
        isFocused: isFocused
      }), _this5.formatOptionLabel(props.data, 'menu'));
    };

    var menuUI;

    if (this.hasOptions()) {
      menuUI = menuOptions.render.map(function (item) {
        if (item.type === 'group') {
          var type = item.type,
              group = _objectWithoutPropertiesLoose$2(item, ["type"]);

          var headingId = item.key + "-heading";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Group, _extends$4({}, commonProps, group, {
            Heading: GroupHeading,
            headingProps: {
              id: headingId
            },
            label: _this5.formatGroupLabel(item.data)
          }), item.options.map(function (option) {
            return render(option);
          }));
        } else if (item.type === 'option') {
          return render(item);
        }
      });
    } else if (isLoading) {
      var message = loadingMessage({
        inputValue: inputValue
      });
      if (message === null) return null;
      menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingMessage, commonProps, message);
    } else {
      var _message = noOptionsMessage({
        inputValue: inputValue
      });

      if (_message === null) return null;
      menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoOptionsMessage, commonProps, _message);
    }

    var menuPlacementProps = {
      minMenuHeight: minMenuHeight,
      maxMenuHeight: maxMenuHeight,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition,
      menuShouldScrollIntoView: menuShouldScrollIntoView
    };
    var menuElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["M"], _extends$4({}, commonProps, menuPlacementProps), function (_ref8) {
      var ref = _ref8.ref,
          _ref8$placerProps = _ref8.placerProps,
          placement = _ref8$placerProps.placement,
          maxHeight = _ref8$placerProps.maxHeight;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, _extends$4({}, commonProps, menuPlacementProps, {
        innerRef: ref,
        innerProps: {
          onMouseDown: _this5.onMenuMouseDown,
          onMouseMove: _this5.onMenuMouseMove
        },
        isLoading: isLoading,
        placement: placement
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptorSwitch, {
        isEnabled: captureMenuScroll,
        onTopArrive: onMenuScrollToTop,
        onBottomArrive: onMenuScrollToBottom
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollBlock, {
        isEnabled: menuShouldBlockScroll
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuList, _extends$4({}, commonProps, {
        innerRef: _this5.getMenuListRef,
        isLoading: isLoading,
        maxHeight: maxHeight
      }), menuUI))));
    }); // positioning behaviour is almost identical for portalled and fixed,
    // so we use the same component. the actual portalling logic is forked
    // within the component based on `menuPosition`

    return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPortal, _extends$4({}, commonProps, {
      appendTo: menuPortalTarget,
      controlElement: this.controlRef,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition
    }), menuElement) : menuElement;
  };

  _proto.renderFormField = function renderFormField() {
    var _this6 = this;

    var _this$props19 = this.props,
        delimiter = _this$props19.delimiter,
        isDisabled = _this$props19.isDisabled,
        isMulti = _this$props19.isMulti,
        name = _this$props19.name;
    var selectValue = this.state.selectValue;
    if (!name || isDisabled) return;

    if (isMulti) {
      if (delimiter) {
        var value = selectValue.map(function (opt) {
          return _this6.getOptionValue(opt);
        }).join(delimiter);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: value
        });
      } else {
        var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            key: "i-" + i,
            name: name,
            type: "hidden",
            value: _this6.getOptionValue(opt)
          });
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden"
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, input);
      }
    } else {
      var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: name,
        type: "hidden",
        value: _value2
      });
    }
  };

  _proto.renderLiveRegion = function renderLiveRegion() {
    if (!this.state.isFocused) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A11yText, {
      "aria-live": "polite"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aria-selection-event"
    }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aria-context"
    }, "\xA0", this.constructAriaLiveMessage()));
  };

  _proto.render = function render() {
    var _this$components4 = this.components,
        Control = _this$components4.Control,
        IndicatorsContainer = _this$components4.IndicatorsContainer,
        SelectContainer = _this$components4.SelectContainer,
        ValueContainer = _this$components4.ValueContainer;
    var _this$props20 = this.props,
        className = _this$props20.className,
        id = _this$props20.id,
        isDisabled = _this$props20.isDisabled,
        menuIsOpen = _this$props20.menuIsOpen;
    var isFocused = this.state.isFocused;
    var commonProps = this.commonProps = this.getCommonProps();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectContainer, _extends$4({}, commonProps, {
      className: className,
      innerProps: {
        id: id,
        onKeyDown: this.onKeyDown
      },
      isDisabled: isDisabled,
      isFocused: isFocused
    }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends$4({}, commonProps, {
      innerRef: this.getControlRef,
      innerProps: {
        onMouseDown: this.onControlMouseDown,
        onTouchEnd: this.onControlTouchEnd
      },
      isDisabled: isDisabled,
      isFocused: isFocused,
      menuIsOpen: menuIsOpen
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueContainer, _extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorsContainer, _extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  };

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/index-4322c0ed.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exportedEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return components; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_6__);








function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["a"])(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["b"])(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["s"])(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"" + placement + "\".");
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _ref3[alignToControl(placement)] = '100%', _ref3.backgroundColor = colors.neutral0, _ref3.borderRadius = borderRadius, _ref3.boxShadow = '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)', _ref3.marginBottom = spacing.menuGutter, _ref3.marginTop = spacing.menuGutter, _ref3.position = 'absolute', _ref3.width = '100%', _ref3.zIndex = 1, _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MenuPlacer, _Component);

  function MenuPlacer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _extends({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  var _proto = MenuPlacer.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children({
      ref: this.getPlacement,
      placerProps: this.getUpdatedProps()
    });
  };

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenuPlacer.contextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: baseUnit * 2 + "px " + baseUnit * 3 + "px",
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(MenuPortal, _Component2);

  function MenuPortal() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  var _proto2 = MenuPortal.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      getPortalPlacement: this.getPortalPlacement
    };
  } // callback for occassions where the menu must "flip"
  ;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        appendTo = _this$props2.appendTo,
        children = _this$props2.children,
        controlElement = _this$props2.controlElement,
        menuPlacement = _this$props2.menuPlacement,
        position = _this$props2.menuPosition,
        getStyles = _this$props2.getStyles;
    var isFixed = position === 'fixed'; // bail early if required elements aren't present

    if (!appendTo && !isFixed || !controlElement) {
      return null;
    }

    var placement = this.state.placement || coercePlacement(menuPlacement);
    var rect = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["g"])(controlElement);
    var scrollDistance = isFixed ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    var state = {
      offset: offset,
      position: position,
      rect: rect
    }; // same wrapper element whether fixed or portalled

    var menuWrapper = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: getStyles('menuPortal', state)
    }, children);
    return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
  };

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenuPortal.childContextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$1({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + "px " + spacing.baseUnit * 2 + "px",
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref2 =  false ? undefined : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", _extends$2({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, _extends$2({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, _extends$2({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", _extends$2({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"])({
      animation: loadingDotAnimations + " 1s ease-in-out " + delay + "ms infinite;",
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px " + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$3({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Heading, _extends$4({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutPropertiesLoose$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$4({
    css: getStyles('groupHeading', _extends$4({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose$2(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('input', _extends$5({
      theme: theme
    }, props))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default.a, _extends$5({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Container, {
      data: data,
      innerProps: _extends$6({}, innerProps, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Remove, {
      data: data,
      innerProps: _extends$6({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + "px " + spacing.baseUnit * 3 + "px",
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$7({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$8({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - " + spacing.baseUnit * 2 + "px)",
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$9({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _extends$a({}, components, props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__["y"]; });

/* harmony import */ var _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");














function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_11__["default"])({
        nonce: nonce
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["CacheProvider"], {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var index = Object(_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(StateManager, _Component);

    function StateManager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    var _proto = StateManager.prototype;

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    } // FIXME: untyped flow code, return any
    ;

    _proto.getProp = function getProp(key) {
      return this.props[key] !== undefined ? this.props[key] : this.state[key];
    } // FIXME: untyped flow code, return any
    ;

    _proto.callProp = function callProp(name) {
      if (typeof this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = this.props)[name].apply(_this$props, args);
      }
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          defaultInputValue = _this$props2.defaultInputValue,
          defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
          defaultValue = _this$props2.defaultValue,
          props = _objectWithoutPropertiesLoose(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
        ref: function ref(_ref) {
          _this2.select = _ref;
        },
        inputValue: this.getProp('inputValue'),
        menuIsOpen: this.getProp('menuIsOpen'),
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        onMenuClose: this.onMenuClose,
        onMenuOpen: this.onMenuOpen,
        value: this.getProp('value')
      }));
    };

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = defaultProps, _temp;
};




/***/ }),

/***/ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, n, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animatedScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBoundingClientObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return scrollTo; });
// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("" + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to, duration, callback) {
  if (duration === void 0) {
    duration = 200;
  }

  if (callback === void 0) {
    callback = noop;
  }

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LWF1dG9zaXplL2xpYi9BdXRvc2l6ZUlucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvU2VsZWN0LTlmZGI4Y2QwLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvaW5kZXgtNDMyMmMwZWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9zdGF0ZU1hbmFnZXItMDRmNzM0YTIuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC91dGlscy0wNmIwZDVhNC5icm93c2VyLmVzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXJDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FB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Q0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FB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QUNYLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELHdFQUFpQjtBQUNwRTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSw0QkFBNEIsMkRBQVUsd0JBQXdCLGdFQUFhOztBQUUzRTs7QUFFQTs7QUFFQSx1QkFBdUIsd0VBQVU7O0FBRWpDLDZCQUE2QiwyREFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdFQUFhLHFDQUFxQyx3RUFBYSwrQ0FBK0Msd0VBQWE7QUFDeEksS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0MsK0NBQStDOztBQUUvQztBQUNBLHdCQUF3Qix3RUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsTUFBTSx3RUFBYztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnRUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLFVBQVUsd0VBQWdCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLFVBQVUsd0VBQWdCO0FBQzFCLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSxRQUFRLHdFQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsVUFBVSx3RUFBZ0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHdFQUFnQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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L2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHNpemVyU3R5bGUgPSB7XG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHR0b3A6IDAsXG5cdGxlZnQ6IDAsXG5cdHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuXHRoZWlnaHQ6IDAsXG5cdG92ZXJmbG93OiAnc2Nyb2xsJyxcblx0d2hpdGVTcGFjZTogJ3ByZSdcbn07XG5cbnZhciBJTlBVVF9QUk9QU19CTEFDS0xJU1QgPSBbJ2V4dHJhV2lkdGgnLCAnaW5qZWN0U3R5bGVzJywgJ2lucHV0Q2xhc3NOYW1lJywgJ2lucHV0UmVmJywgJ2lucHV0U3R5bGUnLCAnbWluV2lkdGgnLCAnb25BdXRvc2l6ZScsICdwbGFjZWhvbGRlcklzTWluV2lkdGgnXTtcblxudmFyIGNsZWFuSW5wdXRQcm9wcyA9IGZ1bmN0aW9uIGNsZWFuSW5wdXRQcm9wcyhpbnB1dFByb3BzKSB7XG5cdElOUFVUX1BST1BTX0JMQUNLTElTVC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuXHRcdHJldHVybiBkZWxldGUgaW5wdXRQcm9wc1tmaWVsZF07XG5cdH0pO1xuXHRyZXR1cm4gaW5wdXRQcm9wcztcbn07XG5cbnZhciBjb3B5U3R5bGVzID0gZnVuY3Rpb24gY29weVN0eWxlcyhzdHlsZXMsIG5vZGUpIHtcblx0bm9kZS5zdHlsZS5mb250U2l6ZSA9IHN0eWxlcy5mb250U2l6ZTtcblx0bm9kZS5zdHlsZS5mb250RmFtaWx5ID0gc3R5bGVzLmZvbnRGYW1pbHk7XG5cdG5vZGUuc3R5bGUuZm9udFdlaWdodCA9IHN0eWxlcy5mb250V2VpZ2h0O1xuXHRub2RlLnN0eWxlLmZvbnRTdHlsZSA9IHN0eWxlcy5mb250U3R5bGU7XG5cdG5vZGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IHN0eWxlcy5sZXR0ZXJTcGFjaW5nO1xuXHRub2RlLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBzdHlsZXMudGV4dFRyYW5zZm9ybTtcbn07XG5cbnZhciBpc0lFID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciA/IC9NU0lFIHxUcmlkZW50XFwvfEVkZ2VcXC8vLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIDogZmFsc2U7XG5cbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcblx0Ly8gd2Ugb25seSBuZWVkIGFuIGF1dG8tZ2VuZXJhdGVkIElEIGZvciBzdHlsZXNoZWV0IGluamVjdGlvbiwgd2hpY2ggaXMgb25seVxuXHQvLyB1c2VkIGZvciBJRS4gc28gaWYgdGhlIGJyb3dzZXIgaXMgbm90IElFLCB0aGlzIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkLlxuXHRyZXR1cm4gaXNJRSA/ICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikgOiB1bmRlZmluZWQ7XG59O1xuXG52YXIgQXV0b3NpemVJbnB1dCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhBdXRvc2l6ZUlucHV0LCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBBdXRvc2l6ZUlucHV0KHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dG9zaXplSW5wdXQpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dG9zaXplSW5wdXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdXRvc2l6ZUlucHV0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaW5wdXRSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLmlucHV0ID0gZWw7XG5cdFx0XHRpZiAodHlwZW9mIF90aGlzLnByb3BzLmlucHV0UmVmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdF90aGlzLnByb3BzLmlucHV0UmVmKGVsKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0X3RoaXMucGxhY2VIb2xkZXJTaXplclJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMucGxhY2VIb2xkZXJTaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zaXplclJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuc2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFdpZHRoOiBwcm9wcy5taW5XaWR0aCxcblx0XHRcdGlucHV0SWQ6IHByb3BzLmlkIHx8IGdlbmVyYXRlSWQoKVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEF1dG9zaXplSW5wdXQsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmNvcHlJbnB1dFN0eWxlcygpO1xuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdHZhciBpZCA9IG5leHRQcm9wcy5pZDtcblxuXHRcdFx0aWYgKGlkICE9PSB0aGlzLnByb3BzLmlkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dElkOiBpZCB8fCBnZW5lcmF0ZUlkKCkgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHRpZiAocHJldlN0YXRlLmlucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25BdXRvc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25BdXRvc2l6ZSh0aGlzLnN0YXRlLmlucHV0V2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29weUlucHV0U3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29weUlucHV0U3R5bGVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBpbnB1dFN0eWxlcyA9IHRoaXMuaW5wdXQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbnB1dCk7XG5cdFx0XHRpZiAoIWlucHV0U3R5bGVzKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMuc2l6ZXIpO1xuXHRcdFx0aWYgKHRoaXMucGxhY2VIb2xkZXJTaXplcikge1xuXHRcdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZUlucHV0V2lkdGgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXRoaXMuc2l6ZXIgfHwgdHlwZW9mIHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBuZXdJbnB1dFdpZHRoID0gdm9pZCAwO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucGxhY2Vob2xkZXIgJiYgKCF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy5wbGFjZWhvbGRlcklzTWluV2lkdGgpKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSBNYXRoLm1heCh0aGlzLnNpemVyLnNjcm9sbFdpZHRoLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIuc2Nyb2xsV2lkdGgpICsgMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnNpemVyLnNjcm9sbFdpZHRoICsgMjtcblx0XHRcdH1cblx0XHRcdC8vIGFkZCBleHRyYVdpZHRoIHRvIHRoZSBkZXRlY3RlZCB3aWR0aC4gZm9yIG51bWJlciB0eXBlcywgdGhpcyBkZWZhdWx0cyB0byAxNiB0byBhbGxvdyBmb3IgdGhlIHN0ZXBwZXIgVUlcblx0XHRcdHZhciBleHRyYVdpZHRoID0gdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyAmJiB0aGlzLnByb3BzLmV4dHJhV2lkdGggPT09IHVuZGVmaW5lZCA/IDE2IDogcGFyc2VJbnQodGhpcy5wcm9wcy5leHRyYVdpZHRoKSB8fCAwO1xuXHRcdFx0bmV3SW5wdXRXaWR0aCArPSBleHRyYVdpZHRoO1xuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggPCB0aGlzLnByb3BzLm1pbldpZHRoKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFdpZHRoOiBuZXdJbnB1dFdpZHRoXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldElucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnB1dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpbmplY3RzIHN0eWxlcyB0byBoaWRlIElFJ3MgY2xlYXIgaW5kaWNhdG9yLCB3aGljaCBtZXNzZXNcblx0XHRcdC8vIHdpdGggaW5wdXQgc2l6ZSBkZXRlY3Rpb24uIHRoZSBzdHlsZXNoZWV0IGlzIG9ubHkgaW5qZWN0ZWQgd2hlbiB0aGVcblx0XHRcdC8vIGJyb3dzZXIgaXMgSUUsIGFuZCBjYW4gYWxzbyBiZSBkaXNhYmxlZCBieSB0aGUgYGluamVjdFN0eWxlc2AgcHJvcC5cblx0XHRcdHZhciBpbmplY3RTdHlsZXMgPSB0aGlzLnByb3BzLmluamVjdFN0eWxlcztcblxuXHRcdFx0cmV0dXJuIGlzSUUgJiYgaW5qZWN0U3R5bGVzID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuXHRcdFx0XHRcdF9faHRtbDogJ2lucHV0IycgKyB0aGlzLnN0YXRlLmlucHV0SWQgKyAnOjotbXMtY2xlYXIge2Rpc3BsYXk6IG5vbmU7fSdcblx0XHRcdFx0fSB9KSA6IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIHNpemVyVmFsdWUgPSBbdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHRoaXMucHJvcHMudmFsdWUsICcnXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0XHRpZiAocHJldmlvdXNWYWx1ZSAhPT0gbnVsbCAmJiBwcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXNWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciB3cmFwcGVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0XHRpZiAoIXdyYXBwZXJTdHlsZS5kaXNwbGF5KSB3cmFwcGVyU3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG5cdFx0XHR2YXIgaW5wdXRTdHlsZSA9IF9leHRlbmRzKHtcblx0XHRcdFx0Ym94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuXHRcdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS5pbnB1dFdpZHRoICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5pbnB1dFN0eWxlKTtcblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG5cdFx0XHRjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcyk7XG5cdFx0XHRpbnB1dFByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0XHRpbnB1dFByb3BzLmlkID0gdGhpcy5zdGF0ZS5pbnB1dElkO1xuXHRcdFx0aW5wdXRQcm9wcy5zdHlsZSA9IGlucHV0U3R5bGU7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHdyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclN0eWxlcygpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywgeyByZWY6IHRoaXMuaW5wdXRSZWYgfSkpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5zaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHRzaXplclZhbHVlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEF1dG9zaXplSW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdXRvc2l6ZUlucHV0LnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBkZWZhdWx0IGZpZWxkIHZhbHVlXG5cdGV4dHJhV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBhZGRpdGlvbmFsIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGlkIHRvIHVzZSBmb3IgdGhlIGlucHV0LCBjYW4gYmUgc2V0IGZvciBjb25zaXN0ZW50IHNuYXBzaG90c1xuXHRpbmplY3RTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gaW5qZWN0IHRoZSBjdXN0b20gc3R5bGVzaGVldCB0byBoaWRlIGNsZWFyIFVJLCBkZWZhdWx0cyB0byB0cnVlXG5cdGlucHV0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyByZWYgY2FsbGJhY2sgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRtaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdG9uQXV0b3NpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25BdXRvc2l6ZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdXaWR0aCkge31cblx0b25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHt9XG5cdHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRwbGFjZWhvbGRlcklzTWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZG9uJ3QgY29sbGFwc2Ugc2l6ZSB0byBsZXNzIHRoYW4gdGhlIHBsYWNlaG9sZGVyXG5cdHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0dmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55IC8vIGZpZWxkIHZhbHVlXG59O1xuQXV0b3NpemVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdG1pbldpZHRoOiAxLFxuXHRpbmplY3RTdHlsZXM6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9zaXplSW5wdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgaSBhcyBpc1RvdWNoQ2FwYWJsZSwgZCBhcyBpc01vYmlsZURldmljZSwgZSBhcyBjbGVhblZhbHVlLCBmIGFzIHNjcm9sbEludG9WaWV3LCBoIGFzIGNsYXNzTmFtZXMsIG4gYXMgbm9vcCwgaiBhcyBpc0RvY3VtZW50RWxlbWVudCB9IGZyb20gJy4vdXRpbHMtMDZiMGQ1YTQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgYyBhcyBjbGVhckluZGljYXRvckNTUywgYSBhcyBjb250YWluZXJDU1MsIGIgYXMgY3NzLCBkIGFzIGRyb3Bkb3duSW5kaWNhdG9yQ1NTLCBnIGFzIGdyb3VwQ1NTLCBlIGFzIGdyb3VwSGVhZGluZ0NTUywgaSBhcyBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTLCBmIGFzIGluZGljYXRvclNlcGFyYXRvckNTUywgaCBhcyBpbnB1dENTUywgbCBhcyBsb2FkaW5nSW5kaWNhdG9yQ1NTLCBqIGFzIGxvYWRpbmdNZXNzYWdlQ1NTLCBtIGFzIG1lbnVDU1MsIGsgYXMgbWVudUxpc3RDU1MsIG4gYXMgbWVudVBvcnRhbENTUywgbyBhcyBtdWx0aVZhbHVlQ1NTLCBwIGFzIG11bHRpVmFsdWVMYWJlbENTUywgcSBhcyBtdWx0aVZhbHVlUmVtb3ZlQ1NTLCByIGFzIG5vT3B0aW9uc01lc3NhZ2VDU1MsIHMgYXMgb3B0aW9uQ1NTLCB0IGFzIHBsYWNlaG9sZGVyQ1NTLCB1IGFzIGNzcyQxLCB2IGFzIHZhbHVlQ29udGFpbmVyQ1NTLCBNIGFzIE1lbnVQbGFjZXIsIHcgYXMgZGVmYXVsdENvbXBvbmVudHMsIHggYXMgZXhwb3J0ZWRFcXVhbCB9IGZyb20gJy4vaW5kZXgtNDMyMmMwZWQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IF9jc3MgZnJvbSAnQGVtb3Rpb24vY3NzJztcblxudmFyIGRpYWNyaXRpY3MgPSBbe1xuICBiYXNlOiAnQScsXG4gIGxldHRlcnM6IC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZ1xufSwge1xuICBiYXNlOiAnQUEnLFxuICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2dcbn0sIHtcbiAgYmFzZTogJ0FFJyxcbiAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2dcbn0sIHtcbiAgYmFzZTogJ0FPJyxcbiAgbGV0dGVyczogL1tcXHVBNzM0XS9nXG59LCB7XG4gIGJhc2U6ICdBVScsXG4gIGxldHRlcnM6IC9bXFx1QTczNl0vZ1xufSwge1xuICBiYXNlOiAnQVYnLFxuICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nXG59LCB7XG4gIGJhc2U6ICdBWScsXG4gIGxldHRlcnM6IC9bXFx1QTczQ10vZ1xufSwge1xuICBiYXNlOiAnQicsXG4gIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nXG59LCB7XG4gIGJhc2U6ICdDJyxcbiAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2dcbn0sIHtcbiAgYmFzZTogJ0QnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nXG59LCB7XG4gIGJhc2U6ICdEWicsXG4gIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2dcbn0sIHtcbiAgYmFzZTogJ0R6JyxcbiAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZ1xufSwge1xuICBiYXNlOiAnRScsXG4gIGxldHRlcnM6IC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nXG59LCB7XG4gIGJhc2U6ICdGJyxcbiAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2dcbn0sIHtcbiAgYmFzZTogJ0cnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZ1xufSwge1xuICBiYXNlOiAnSCcsXG4gIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2dcbn0sIHtcbiAgYmFzZTogJ0knLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nXG59LCB7XG4gIGJhc2U6ICdKJyxcbiAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZ1xufSwge1xuICBiYXNlOiAnSycsXG4gIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2dcbn0sIHtcbiAgYmFzZTogJ0wnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZ1xufSwge1xuICBiYXNlOiAnTEonLFxuICBsZXR0ZXJzOiAvW1xcdTAxQzddL2dcbn0sIHtcbiAgYmFzZTogJ0xqJyxcbiAgbGV0dGVyczogL1tcXHUwMUM4XS9nXG59LCB7XG4gIGJhc2U6ICdNJyxcbiAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZ1xufSwge1xuICBiYXNlOiAnTicsXG4gIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZ1xufSwge1xuICBiYXNlOiAnTkonLFxuICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2dcbn0sIHtcbiAgYmFzZTogJ05qJyxcbiAgbGV0dGVyczogL1tcXHUwMUNCXS9nXG59LCB7XG4gIGJhc2U6ICdPJyxcbiAgbGV0dGVyczogL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nXG59LCB7XG4gIGJhc2U6ICdPSScsXG4gIGxldHRlcnM6IC9bXFx1MDFBMl0vZ1xufSwge1xuICBiYXNlOiAnT08nLFxuICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2dcbn0sIHtcbiAgYmFzZTogJ09VJyxcbiAgbGV0dGVyczogL1tcXHUwMjIyXS9nXG59LCB7XG4gIGJhc2U6ICdQJyxcbiAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nXG59LCB7XG4gIGJhc2U6ICdRJyxcbiAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2dcbn0sIHtcbiAgYmFzZTogJ1InLFxuICBsZXR0ZXJzOiAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nXG59LCB7XG4gIGJhc2U6ICdTJyxcbiAgbGV0dGVyczogL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZ1xufSwge1xuICBiYXNlOiAnVCcsXG4gIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nXG59LCB7XG4gIGJhc2U6ICdUWicsXG4gIGxldHRlcnM6IC9bXFx1QTcyOF0vZ1xufSwge1xuICBiYXNlOiAnVScsXG4gIGxldHRlcnM6IC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZ1xufSwge1xuICBiYXNlOiAnVicsXG4gIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2dcbn0sIHtcbiAgYmFzZTogJ1ZZJyxcbiAgbGV0dGVyczogL1tcXHVBNzYwXS9nXG59LCB7XG4gIGJhc2U6ICdXJyxcbiAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nXG59LCB7XG4gIGJhc2U6ICdYJyxcbiAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZ1xufSwge1xuICBiYXNlOiAnWScsXG4gIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nXG59LCB7XG4gIGJhc2U6ICdaJyxcbiAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZ1xufSwge1xuICBiYXNlOiAnYScsXG4gIGxldHRlcnM6IC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2dcbn0sIHtcbiAgYmFzZTogJ2FhJyxcbiAgbGV0dGVyczogL1tcXHVBNzMzXS9nXG59LCB7XG4gIGJhc2U6ICdhZScsXG4gIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nXG59LCB7XG4gIGJhc2U6ICdhbycsXG4gIGxldHRlcnM6IC9bXFx1QTczNV0vZ1xufSwge1xuICBiYXNlOiAnYXUnLFxuICBsZXR0ZXJzOiAvW1xcdUE3MzddL2dcbn0sIHtcbiAgYmFzZTogJ2F2JyxcbiAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZ1xufSwge1xuICBiYXNlOiAnYXknLFxuICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2dcbn0sIHtcbiAgYmFzZTogJ2InLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZ1xufSwge1xuICBiYXNlOiAnYycsXG4gIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZ1xufSwge1xuICBiYXNlOiAnZCcsXG4gIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2dcbn0sIHtcbiAgYmFzZTogJ2R6JyxcbiAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZ1xufSwge1xuICBiYXNlOiAnZScsXG4gIGxldHRlcnM6IC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZ1xufSwge1xuICBiYXNlOiAnZicsXG4gIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nXG59LCB7XG4gIGJhc2U6ICdnJyxcbiAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2dcbn0sIHtcbiAgYmFzZTogJ2gnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZ1xufSwge1xuICBiYXNlOiAnaHYnLFxuICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2dcbn0sIHtcbiAgYmFzZTogJ2knLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nXG59LCB7XG4gIGJhc2U6ICdqJyxcbiAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2dcbn0sIHtcbiAgYmFzZTogJ2snLFxuICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nXG59LCB7XG4gIGJhc2U6ICdsJyxcbiAgbGV0dGVyczogL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nXG59LCB7XG4gIGJhc2U6ICdsaicsXG4gIGxldHRlcnM6IC9bXFx1MDFDOV0vZ1xufSwge1xuICBiYXNlOiAnbScsXG4gIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2dcbn0sIHtcbiAgYmFzZTogJ24nLFxuICBsZXR0ZXJzOiAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nXG59LCB7XG4gIGJhc2U6ICduaicsXG4gIGxldHRlcnM6IC9bXFx1MDFDQ10vZ1xufSwge1xuICBiYXNlOiAnbycsXG4gIGxldHRlcnM6IC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZ1xufSwge1xuICBiYXNlOiAnb2knLFxuICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2dcbn0sIHtcbiAgYmFzZTogJ291JyxcbiAgbGV0dGVyczogL1tcXHUwMjIzXS9nXG59LCB7XG4gIGJhc2U6ICdvbycsXG4gIGxldHRlcnM6IC9bXFx1QTc0Rl0vZ1xufSwge1xuICBiYXNlOiAncCcsXG4gIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZ1xufSwge1xuICBiYXNlOiAncScsXG4gIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nXG59LCB7XG4gIGJhc2U6ICdyJyxcbiAgbGV0dGVyczogL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZ1xufSwge1xuICBiYXNlOiAncycsXG4gIGxldHRlcnM6IC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nXG59LCB7XG4gIGJhc2U6ICd0JyxcbiAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nXG59LCB7XG4gIGJhc2U6ICd0eicsXG4gIGxldHRlcnM6IC9bXFx1QTcyOV0vZ1xufSwge1xuICBiYXNlOiAndScsXG4gIGxldHRlcnM6IC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZ1xufSwge1xuICBiYXNlOiAndicsXG4gIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2dcbn0sIHtcbiAgYmFzZTogJ3Z5JyxcbiAgbGV0dGVyczogL1tcXHVBNzYxXS9nXG59LCB7XG4gIGJhc2U6ICd3JyxcbiAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZ1xufSwge1xuICBiYXNlOiAneCcsXG4gIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2dcbn0sIHtcbiAgYmFzZTogJ3knLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2dcbn0sIHtcbiAgYmFzZTogJ3onLFxuICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nXG59XTtcbnZhciBzdHJpcERpYWNyaXRpY3MgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGlhY3JpdGljcy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKGRpYWNyaXRpY3NbaV0ubGV0dGVycywgZGlhY3JpdGljc1tpXS5iYXNlKTtcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgdHJpbVN0cmluZyA9IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxudmFyIGRlZmF1bHRTdHJpbmdpZnkgPSBmdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5KG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLmxhYmVsICsgXCIgXCIgKyBvcHRpb24udmFsdWU7XG59O1xuXG52YXIgY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbiwgcmF3SW5wdXQpIHtcbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX2V4dGVuZHMoe1xuICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICBzdHJpbmdpZnk6IGRlZmF1bHRTdHJpbmdpZnksXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgIH0sIGNvbmZpZyksXG4gICAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgICAgaWdub3JlQWNjZW50cyA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVBY2NlbnRzLFxuICAgICAgICBzdHJpbmdpZnkgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2Muc3RyaW5naWZ5LFxuICAgICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICAgIG1hdGNoRnJvbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5tYXRjaEZyb207XG5cbiAgICB2YXIgaW5wdXQgPSB0cmltID8gdHJpbVN0cmluZyhyYXdJbnB1dCkgOiByYXdJbnB1dDtcbiAgICB2YXIgY2FuZGlkYXRlID0gdHJpbSA/IHRyaW1TdHJpbmcoc3RyaW5naWZ5KG9wdGlvbikpIDogc3RyaW5naWZ5KG9wdGlvbik7XG5cbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIGlucHV0ID0gc3RyaXBEaWFjcml0aWNzKGlucHV0KTtcbiAgICAgIGNhbmRpZGF0ZSA9IHN0cmlwRGlhY3JpdGljcyhjYW5kaWRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaEZyb20gPT09ICdzdGFydCcgPyBjYW5kaWRhdGUuc3Vic3RyKDAsIGlucHV0Lmxlbmd0aCkgPT09IGlucHV0IDogY2FuZGlkYXRlLmluZGV4T2YoaW5wdXQpID4gLTE7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyQxKCkgeyBfZXh0ZW5kcyQxID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgX3JlZiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCIxbGFhbzIxLWExMXlUZXh0XCIsXG4gIHN0eWxlczogXCJsYWJlbDphMTF5VGV4dDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3dyYXA7XCJcbn0gOiB7XG4gIG5hbWU6IFwiMWxhYW8yMS1hMTF5VGV4dFwiLFxuICBzdHlsZXM6IFwibGFiZWw6YTExeVRleHQ7ei1pbmRleDo5OTk5O2JvcmRlcjowO2NsaXA6cmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO2hlaWdodDoxcHg7d2lkdGg6MXB4O3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm93cmFwO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtFeE1YbFVaWGgwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFWRk5JaXdpWm1sc1pTSTZJa0V4TVhsVVpYaDBMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdRR1pzYjNkY2JpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ2RIbHdaU0JGYkdWdFpXNTBRMjl1Wm1sbklIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ2FuTjRJSDBnWm5KdmJTQW5RR1Z0YjNScGIyNHZZMjl5WlNjN1hHNWNiaTh2SUVGemMybHpkR2wyWlNCMFpYaDBJSFJ2SUdSbGMyTnlhV0psSUhacGMzVmhiQ0JsYkdWdFpXNTBjeTRnU0dsa1pHVnVJR1p2Y2lCemFXZG9kR1ZrSUhWelpYSnpMbHh1WTI5dWMzUWdRVEV4ZVZSbGVIUWdQU0FvY0hKdmNITTZJRVZzWlcxbGJuUkRiMjVtYVdjOEozTndZVzRuUGlrZ1BUNGdLRnh1SUNBZ0lEeHpjR0Z1WEc0Z0lDQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lDQWdiR0ZpWld3NklDZGhNVEY1VkdWNGRDY3NYRzRnSUNBZ0lDQWdJSHBKYm1SbGVEb2dPVGs1T1N4Y2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5T2lBd0xGeHVJQ0FnSUNBZ0lDQmpiR2x3T2lBbmNtVmpkQ2d4Y0hnc0lERndlQ3dnTVhCNExDQXhjSGdwSnl4Y2JpQWdJQ0FnSUNBZ2FHVnBaMmgwT2lBeExGeHVJQ0FnSUNBZ0lDQjNhV1IwYURvZ01TeGNiaUFnSUNBZ0lDQWdjRzl6YVhScGIyNDZJQ2RoWW5OdmJIVjBaU2NzWEc0Z0lDQWdJQ0FnSUc5MlpYSm1iRzkzT2lBbmFHbGtaR1Z1Snl4Y2JpQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01DeGNiaUFnSUNBZ0lDQWdkMmhwZEdWVGNHRmpaVG9nSjI1dmQzSmhjQ2NzWEc0Z0lDQWdJQ0I5ZlZ4dUlDQWdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQWdJQzgrWEc0cE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJNVEY1VkdWNGREdGNiaUpkZlE9PSAqL1wiXG59O1xuXG52YXIgQTExeVRleHQgPSBmdW5jdGlvbiBBMTF5VGV4dChwcm9wcykge1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyQxKHtcbiAgICBjc3M6IF9yZWZcbiAgfSwgcHJvcHMpKTtcbn07XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDIoKSB7IF9leHRlbmRzJDIgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIER1bW15SW5wdXQoX3JlZikge1xuICB2YXIgaW5Qcm9wID0gX3JlZi5pbixcbiAgICAgIG91dCA9IF9yZWYub3V0LFxuICAgICAgb25FeGl0ZWQgPSBfcmVmLm9uRXhpdGVkLFxuICAgICAgYXBwZWFyID0gX3JlZi5hcHBlYXIsXG4gICAgICBlbnRlciA9IF9yZWYuZW50ZXIsXG4gICAgICBleGl0ID0gX3JlZi5leGl0LFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZW1vdGlvbiA9IF9yZWYuZW1vdGlvbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiaW5cIiwgXCJvdXRcIiwgXCJvbkV4aXRlZFwiLCBcImFwcGVhclwiLCBcImVudGVyXCIsIFwiZXhpdFwiLCBcImlubmVyUmVmXCIsIFwiZW1vdGlvblwiXSk7XG5cbiAgcmV0dXJuIGpzeChcImlucHV0XCIsIF9leHRlbmRzJDIoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjc3M6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9jc3Moe1xuICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1IxYlcxNVNXNXdkWFF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmJVSk5JaXdpWm1sc1pTSTZJa1IxYlcxNVNXNXdkWFF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJBWm14dmQxeHVMeW9xSUVCcWMzZ2dhbk40SUNvdlhHNXBiWEJ2Y25RZ2V5QnFjM2dnZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTlqYjNKbEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdSSFZ0YlhsSmJuQjFkQ2g3WEc0Z0lHbHVPaUJwYmxCeWIzQXNYRzRnSUc5MWRDeGNiaUFnYjI1RmVHbDBaV1FzWEc0Z0lHRndjR1ZoY2l4Y2JpQWdaVzUwWlhJc1hHNGdJR1Y0YVhRc1hHNGdJR2x1Ym1WeVVtVm1MRnh1SUNCbGJXOTBhVzl1TEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nWVc1NUtTQjdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQR2x1Y0hWMFhHNGdJQ0FnSUNCeVpXWTllMmx1Ym1WeVVtVm1mVnh1SUNBZ0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0N1hHNGdJQ0FnSUNBZ0lHeGhZbVZzT2lBblpIVnRiWGxKYm5CMWRDY3NYRzRnSUNBZ0lDQWdJQzh2SUdkbGRDQnlhV1FnYjJZZ1lXNTVJR1JsWm1GMWJIUWdjM1I1YkdWelhHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJREFzWEc0Z0lDQWdJQ0FnSUdKdmNtUmxjam9nTUN4Y2JpQWdJQ0FnSUNBZ1ptOXVkRk5wZW1VNklDZHBibWhsY21sMEp5eGNiaUFnSUNBZ0lDQWdiM1YwYkdsdVpUb2dNQ3hjYmlBZ0lDQWdJQ0FnY0dGa1pHbHVaem9nTUN4Y2JpQWdJQ0FnSUNBZ0x5OGdhVzF3YjNKMFlXNTBJU0IzYVhSb2IzVjBJR0IzYVdSMGFHQWdZbkp2ZDNObGNuTWdkMjl1SjNRZ1lXeHNiM2NnWm05amRYTmNiaUFnSUNBZ0lDQWdkMmxrZEdnNklERXNYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2NtVnRiM1psSUdOMWNuTnZjaUJ2YmlCa1pYTnJkRzl3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUFuZEhKaGJuTndZWEpsYm5RbkxGeHVYRzRnSUNBZ0lDQWdJQzh2SUhKbGJXOTJaU0JqZFhKemIzSWdiMjRnYlc5aWFXeGxJSGRvYVd4emRDQnRZV2x1ZEdGcGJtbHVaeUJjSW5OamNtOXNiQ0JwYm5SdklIWnBaWGRjSWlCaVpXaGhkbWx2ZFhKY2JpQWdJQ0FnSUNBZ2JHVm1kRG9nTFRFd01DeGNiaUFnSUNBZ0lDQWdiM0JoWTJsMGVUb2dNQ3hjYmlBZ0lDQWdJQ0FnY0c5emFYUnBiMjQ2SUNkeVpXeGhkR2wyWlNjc1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJUb2dKM05qWVd4bEtEQXBKeXhjYmlBZ0lDQWdJSDE5WEc0Z0lDQWdMejVjYmlBZ0tUdGNibjFjYmlKZGZRPT0gKi9cIilcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE5vZGVSZXNvbHZlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOb2RlUmVzb2x2ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vZGVSZXNvbHZlcigpIHtcbiAgICByZXR1cm4gX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTm9kZVJlc29sdmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmlubmVyUmVmKGZpbmRET01Ob2RlKHRoaXMpKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmlubmVyUmVmKG51bGwpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH07XG5cbiAgcmV0dXJuIE5vZGVSZXNvbHZlcjtcbn0oQ29tcG9uZW50KTtcblxudmFyIFNUWUxFX0tFWVMgPSBbJ2JveFNpemluZycsICdoZWlnaHQnLCAnb3ZlcmZsb3cnLCAncGFkZGluZ1JpZ2h0JywgJ3Bvc2l0aW9uJ107XG52YXIgTE9DS19TVFlMRVMgPSB7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAvLyBhY2NvdW50IGZvciBwb3NzaWJsZSBkZWNsYXJhdGlvbiBgd2lkdGg6IDEwMCU7YCBvbiBib2R5XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5mdW5jdGlvbiBwcmV2ZW50VG91Y2hNb3ZlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24gcHJldmVudEluZXJ0aWFTY3JvbGwoKSB7XG4gIHZhciB0b3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgdmFyIHRvdGFsU2Nyb2xsID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gIHZhciBjdXJyZW50U2Nyb2xsID0gdG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKHRvcCA9PT0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsID09PSB0b3RhbFNjcm9sbCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gdG9wIC0gMTtcbiAgfVxufSAvLyBgb250b3VjaHN0YXJ0YCBjaGVjayB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4vLyBgbWF4VG91Y2hQb2ludHNgIHdvcmtzIG9uIElFMTAvMTEgYW5kIFN1cmZhY2VcblxuZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlJDEoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG52YXIgY2FuVXNlRE9NID0gISEoIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG52YXIgYWN0aXZlU2Nyb2xsTG9ja3MgPSAwO1xuXG52YXIgU2Nyb2xsTG9jayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZSQxKFNjcm9sbExvY2ssIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbExvY2soKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMub3JpZ2luYWxTdHlsZXMgPSB7fTtcbiAgICBfdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2Nyb2xsTG9jay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjY291bnRGb3JTY3JvbGxiYXJzID0gX3RoaXMkcHJvcHMuYWNjb3VudEZvclNjcm9sbGJhcnMsXG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0ID0gX3RoaXMkcHJvcHMudG91Y2hTY3JvbGxUYXJnZXQ7XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycykge1xuICAgICAgLy8gc3RvcmUgYW55IHN0eWxlcyBhbHJlYWR5IGFwcGxpZWQgdG8gdGhlIGJvZHlcbiAgICAgIFNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSB0YXJnZXRTdHlsZSAmJiB0YXJnZXRTdHlsZVtrZXldO1xuICAgICAgICBfdGhpczIub3JpZ2luYWxTdHlsZXNba2V5XSA9IHZhbDtcbiAgICAgIH0pO1xuICAgIH0gLy8gYXBwbHkgdGhlIGxvY2sgc3R5bGVzIGFuZCBwYWRkaW5nIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHNjcm9sbCBsb2NrXG5cblxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIHZhciBjdXJyZW50UGFkZGluZyA9IHBhcnNlSW50KHRoaXMub3JpZ2luYWxTdHlsZXMucGFkZGluZ1JpZ2h0LCAxMCkgfHwgMDtcbiAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgIHZhciBhZGp1c3RlZFBhZGRpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNsaWVudFdpZHRoICsgY3VycmVudFBhZGRpbmcgfHwgMDtcbiAgICAgIE9iamVjdC5rZXlzKExPQ0tfU1RZTEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IExPQ0tfU1RZTEVTW2tleV07XG5cbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICB0YXJnZXRTdHlsZS5wYWRkaW5nUmlnaHQgPSBhZGp1c3RlZFBhZGRpbmcgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfSAvLyBhY2NvdW50IGZvciB0b3VjaCBkZXZpY2VzXG5cblxuICAgIGlmICh0YXJnZXQgJiYgaXNUb3VjaERldmljZSgpKSB7XG4gICAgICAvLyBNb2JpbGUgU2FmYXJpIGlnbm9yZXMgeyBvdmVyZmxvdzogaGlkZGVuIH0gZGVjbGFyYXRpb24gb24gdGhlIGJvZHkuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpOyAvLyBBbGxvdyBzY3JvbGwgb24gcHJvdmlkZWQgdGFyZ2V0XG5cbiAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgYWxsb3dUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIGluY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cblxuICAgIGFjdGl2ZVNjcm9sbExvY2tzICs9IDE7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY2NvdW50Rm9yU2Nyb2xsYmFycyA9IF90aGlzJHByb3BzMi5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQgPSBfdGhpcyRwcm9wczIudG91Y2hTY3JvbGxUYXJnZXQ7XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTsgLy8gc2FmZWx5IGRlY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cbiAgICBhY3RpdmVTY3JvbGxMb2NrcyA9IE1hdGgubWF4KGFjdGl2ZVNjcm9sbExvY2tzIC0gMSwgMCk7IC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IF90aGlzMy5vcmlnaW5hbFN0eWxlc1trZXldO1xuXG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gcmVtb3ZlIHRvdWNoIGxpc3RlbmVyc1xuXG5cbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgICAgaWYgKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50SW5lcnRpYVNjcm9sbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBTY3JvbGxMb2NrO1xufShDb21wb25lbnQpO1xuXG5TY3JvbGxMb2NrLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjb3VudEZvclNjcm9sbGJhcnM6IHRydWVcbn07XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlJDIoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVmJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWRzYnBjcFwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjA7XCJcbn0gOiB7XG4gIG5hbWU6IFwiMWRzYnBjcFwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjA7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbE5qY205c2JFSnNiMk5yTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFUWkVWU0lzSW1acGJHVWlPaUpUWTNKdmJHeENiRzlqYXk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVCbWJHOTNYRzR2S2lvZ1FHcHplQ0JxYzNnZ0tpOWNibWx0Y0c5eWRDQjdJRkIxY21WRGIyMXdiMjVsYm5Rc0lIUjVjR1VnUld4bGJXVnVkQ0I5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJR3B6ZUNCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDJOdmNtVW5PMXh1YVcxd2IzSjBJRTV2WkdWU1pYTnZiSFpsY2lCbWNtOXRJQ2N1TDA1dlpHVlNaWE52YkhabGNpYzdYRzVwYlhCdmNuUWdVMk55YjJ4c1RHOWpheUJtY205dElDY3VMMU5qY205c2JFeHZZMnN2YVc1a1pYZ25PMXh1WEc1MGVYQmxJRkJ5YjNCeklEMGdlMXh1SUNCamFHbHNaSEpsYmpvZ1JXeGxiV1Z1ZER3cVBpeGNiaUFnYVhORmJtRmliR1ZrT2lCaWIyOXNaV0Z1TEZ4dWZUdGNiblI1Y0dVZ1UzUmhkR1VnUFNCN1hHNGdJSFJ2ZFdOb1UyTnliMnhzVkdGeVoyVjBPaUJJVkUxTVJXeGxiV1Z1ZENCOElHNTFiR3dzWEc1OU8xeHVYRzR2THlCT1QxUkZPbHh1THk4Z1YyVWdjMmh2ZFd4a2JpZDBJRzVsWldRZ2RHaHBjeUJoWm5SbGNpQjFjR1JoZEdsdVp5QjBieUJTWldGamRDQjJNVFl1TXk0d0xDQjNhR2xqYUNCcGJuUnliMlIxWTJWek9seHVMeThnTFNCamNtVmhkR1ZTWldZb0tTQm9kSFJ3Y3pvdkwzSmxZV04wYW5NdWIzSm5MMlJ2WTNNdmNtVmhZM1F0WVhCcExtaDBiV3dqY21WaFkzUmpjbVZoZEdWeVpXWmNiaTh2SUMwZ1ptOXlkMkZ5WkZKbFppZ3BJR2gwZEhCek9pOHZjbVZoWTNScWN5NXZjbWN2Wkc5amN5OXlaV0ZqZEMxaGNHa3VhSFJ0YkNOeVpXRmpkR1p2Y25kaGNtUnlaV1pjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVMk55YjJ4c1FteHZZMnNnWlhoMFpXNWtjeUJRZFhKbFEyOXRjRzl1Wlc1MFBGQnliM0J6TENCVGRHRjBaVDRnZTF4dUlDQnpkR0YwWlNBOUlIc2dkRzkxWTJoVFkzSnZiR3hVWVhKblpYUTZJRzUxYkd3Z2ZUdGNibHh1SUNBdkx5QnRkWE4wSUdKbElHbHVJSE4wWVhSbElIUnZJSFJ5YVdkblpYSWdZU0J5WlMxeVpXNWtaWElzSUc5dWJIa2djblZ1Y3lCdmJtTmxJSEJsY2lCcGJuTjBZVzVqWlZ4dUlDQm5aWFJUWTNKdmJHeFVZWEpuWlhRZ1BTQW9jbVZtT2lCSVZFMU1SV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJR2xtSUNoeVpXWWdQVDA5SUhSb2FYTXVjM1JoZEdVdWRHOTFZMmhUWTNKdmJHeFVZWEpuWlhRcElISmxkSFZ5Ymp0Y2JpQWdJQ0IwYUdsekxuTmxkRk4wWVhSbEtIc2dkRzkxWTJoVFkzSnZiR3hVWVhKblpYUTZJSEpsWmlCOUtUdGNiaUFnZlR0Y2JseHVJQ0F2THlCMGFHbHpJSGRwYkd3Z1kyeHZjMlVnZEdobElHMWxiblVnZDJobGJpQmhJSFZ6WlhJZ1kyeHBZMnR6SUc5MWRITnBaR1ZjYmlBZ1lteDFjbE5sYkdWamRFbHVjSFYwSUQwZ0tDa2dQVDRnZTF4dUlDQWdJR2xtSUNoa2IyTjFiV1Z1ZEM1aFkzUnBkbVZGYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0JrYjJOMWJXVnVkQzVoWTNScGRtVkZiR1Z0Wlc1MExtSnNkWElvS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ2NtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdselJXNWhZbXhsWkNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCN0lIUnZkV05vVTJOeWIyeHNWR0Z5WjJWMElIMGdQU0IwYUdsekxuTjBZWFJsTzF4dVhHNGdJQ0FnTHk4Z1ltRnBiQ0JsWVhKc2VTQnBaaUJ1YjNRZ1pXNWhZbXhsWkZ4dUlDQWdJR2xtSUNnaGFYTkZibUZpYkdWa0tTQnlaWFIxY200Z1kyaHBiR1J5Wlc0N1hHNWNiaUFnSUNBdktseHVJQ0FnSUNBcUlFUnBkbHh1SUNBZ0lDQXFJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUlDQWdJQ0FxSUdKc2IyTnJjeUJ6WTNKdmJHeHBibWNnYjI0Z2JtOXVMV0p2WkhrZ1pXeGxiV1Z1ZEhNZ1ltVm9hVzVrSUhSb1pTQnRaVzUxWEc1Y2JpQWdJQ0FnS2lCT2IyUmxVbVZ6YjJ4MlpYSmNiaUFnSUNBZ0tpQXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmlBZ0lDQWdLaUIzWlNCdVpXVmtJR0VnY21WbVpYSmxibU5sSUhSdklIUm9aU0J6WTNKdmJHeGhZbXhsSUdWc1pXMWxiblFnZEc4Z1hDSjFibXh2WTJ0Y0lpQnpZM0p2Ykd3Z2IyNWNiaUFnSUNBZ0tpQnRiMkpwYkdVZ1pHVjJhV05sYzF4dVhHNGdJQ0FnSUNvZ1UyTnliMnhzVEc5amExeHVJQ0FnSUNBcUlDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1SUNBZ0lDQXFJR0ZqZEhWaGJHeDVJR1J2WlhNZ2RHaGxJSE5qY205c2JDQnNiMk5yYVc1blhHNGdJQ0FnSUNvdlhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJRHhrYVhZK1hHNGdJQ0FnSUNBZ0lEeGthWFpjYmlBZ0lDQWdJQ0FnSUNCdmJrTnNhV05yUFh0MGFHbHpMbUpzZFhKVFpXeGxZM1JKYm5CMWRIMWNiaUFnSUNBZ0lDQWdJQ0JqYzNNOWUzc2djRzl6YVhScGIyNDZJQ2RtYVhobFpDY3NJR3hsWm5RNklEQXNJR0p2ZEhSdmJUb2dNQ3dnY21sbmFIUTZJREFzSUhSdmNEb2dNQ0I5ZlZ4dUlDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0lDQThUbTlrWlZKbGMyOXNkbVZ5SUdsdWJtVnlVbVZtUFh0MGFHbHpMbWRsZEZOamNtOXNiRlJoY21kbGRIMCtlMk5vYVd4a2NtVnVmVHd2VG05a1pWSmxjMjlzZG1WeVBseHVJQ0FnSUNBZ0lDQjdkRzkxWTJoVFkzSnZiR3hVWVhKblpYUWdQeUFvWEc0Z0lDQWdJQ0FnSUNBZ1BGTmpjbTlzYkV4dlkyc2dkRzkxWTJoVFkzSnZiR3hVWVhKblpYUTllM1J2ZFdOb1UyTnliMnhzVkdGeVoyVjBmU0F2UGx4dUlDQWdJQ0FnSUNBcElEb2diblZzYkgxY2JpQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDazdYRzRnSUgxY2JuMWNiaUpkZlE9PSAqL1wiXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcbnZhciBTY3JvbGxCbG9jayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UkMihTY3JvbGxCbG9jaywgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbEJsb2NrKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9QdXJlQ29tcG9uZW50LmNhbGwuYXBwbHkoX1B1cmVDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0b3VjaFNjcm9sbFRhcmdldDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRTY3JvbGxUYXJnZXQgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBpZiAocmVmID09PSBfdGhpcy5zdGF0ZS50b3VjaFNjcm9sbFRhcmdldCkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0OiByZWZcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5ibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbEJsb2NrLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGlzRW5hYmxlZCA9IF90aGlzJHByb3BzLmlzRW5hYmxlZDtcbiAgICB2YXIgdG91Y2hTY3JvbGxUYXJnZXQgPSB0aGlzLnN0YXRlLnRvdWNoU2Nyb2xsVGFyZ2V0OyAvLyBiYWlsIGVhcmx5IGlmIG5vdCBlbmFibGVkXG5cbiAgICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuIGNoaWxkcmVuO1xuICAgIC8qXG4gICAgICogRGl2XG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogYmxvY2tzIHNjcm9sbGluZyBvbiBub24tYm9keSBlbGVtZW50cyBiZWhpbmQgdGhlIG1lbnVcbiAgICAgICogTm9kZVJlc29sdmVyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogd2UgbmVlZCBhIHJlZmVyZW5jZSB0byB0aGUgc2Nyb2xsYWJsZSBlbGVtZW50IHRvIFwidW5sb2NrXCIgc2Nyb2xsIG9uXG4gICAgICogbW9iaWxlIGRldmljZXNcbiAgICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG5cbiAgICByZXR1cm4ganN4KFwiZGl2XCIsIG51bGwsIGpzeChcImRpdlwiLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLmJsdXJTZWxlY3RJbnB1dCxcbiAgICAgIGNzczogX3JlZiQxXG4gICAgfSksIGpzeChOb2RlUmVzb2x2ZXIsIHtcbiAgICAgIGlubmVyUmVmOiB0aGlzLmdldFNjcm9sbFRhcmdldFxuICAgIH0sIGNoaWxkcmVuKSwgdG91Y2hTY3JvbGxUYXJnZXQgPyBqc3goU2Nyb2xsTG9jaywge1xuICAgICAgdG91Y2hTY3JvbGxUYXJnZXQ6IHRvdWNoU2Nyb2xsVGFyZ2V0XG4gICAgfSkgOiBudWxsKTtcbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsQmxvY2s7XG59KFB1cmVDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQxKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2UkMyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNjcm9sbENhcHRvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZSQzKFNjcm9sbENhcHRvciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2Nyb2xsQ2FwdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmlzQm90dG9tID0gZmFsc2U7XG4gICAgX3RoaXMuaXNUb3AgPSBmYWxzZTtcbiAgICBfdGhpcy5zY3JvbGxUYXJnZXQgPSB2b2lkIDA7XG4gICAgX3RoaXMudG91Y2hTdGFydCA9IHZvaWQgMDtcblxuICAgIF90aGlzLmNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFdmVudERlbHRhID0gZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25Cb3R0b21BcnJpdmUgPSBfdGhpcyRwcm9wcy5vbkJvdHRvbUFycml2ZSxcbiAgICAgICAgICBvbkJvdHRvbUxlYXZlID0gX3RoaXMkcHJvcHMub25Cb3R0b21MZWF2ZSxcbiAgICAgICAgICBvblRvcEFycml2ZSA9IF90aGlzJHByb3BzLm9uVG9wQXJyaXZlLFxuICAgICAgICAgIG9uVG9wTGVhdmUgPSBfdGhpcyRwcm9wcy5vblRvcExlYXZlO1xuICAgICAgdmFyIF90aGlzJHNjcm9sbFRhcmdldCA9IF90aGlzLnNjcm9sbFRhcmdldCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF90aGlzJHNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3RoaXMkc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICAgIHZhciB0YXJnZXQgPSBfdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB2YXIgaXNEZWx0YVBvc2l0aXZlID0gZGVsdGEgPiAwO1xuICAgICAgdmFyIGF2YWlsYWJsZVNjcm9sbCA9IHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCAtIHNjcm9sbFRvcDtcbiAgICAgIHZhciBzaG91bGRDYW5jZWxTY3JvbGwgPSBmYWxzZTsgLy8gcmVzZXQgYm90dG9tL3RvcCBmbGFnc1xuXG4gICAgICBpZiAoYXZhaWxhYmxlU2Nyb2xsID4gZGVsdGEgJiYgX3RoaXMuaXNCb3R0b20pIHtcbiAgICAgICAgaWYgKG9uQm90dG9tTGVhdmUpIG9uQm90dG9tTGVhdmUoZXZlbnQpO1xuICAgICAgICBfdGhpcy5pc0JvdHRvbSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIF90aGlzLmlzVG9wKSB7XG4gICAgICAgIGlmIChvblRvcExlYXZlKSBvblRvcExlYXZlKGV2ZW50KTtcbiAgICAgICAgX3RoaXMuaXNUb3AgPSBmYWxzZTtcbiAgICAgIH0gLy8gYm90dG9tIGxpbWl0XG5cblxuICAgICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBkZWx0YSA+IGF2YWlsYWJsZVNjcm9sbCkge1xuICAgICAgICBpZiAob25Cb3R0b21BcnJpdmUgJiYgIV90aGlzLmlzQm90dG9tKSB7XG4gICAgICAgICAgb25Cb3R0b21BcnJpdmUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaXNCb3R0b20gPSB0cnVlOyAvLyB0b3AgbGltaXRcbiAgICAgIH0gZWxzZSBpZiAoIWlzRGVsdGFQb3NpdGl2ZSAmJiAtZGVsdGEgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgaWYgKG9uVG9wQXJyaXZlICYmICFfdGhpcy5pc1RvcCkge1xuICAgICAgICAgIG9uVG9wQXJyaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICBzaG91bGRDYW5jZWxTY3JvbGwgPSB0cnVlO1xuICAgICAgICBfdGhpcy5pc1RvcCA9IHRydWU7XG4gICAgICB9IC8vIGNhbmNlbCBzY3JvbGxcblxuXG4gICAgICBpZiAoc2hvdWxkQ2FuY2VsU2Nyb2xsKSB7XG4gICAgICAgIF90aGlzLmNhbmNlbFNjcm9sbChldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uV2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGV2ZW50LmRlbHRhWSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gc2V0IHRvdWNoIHN0YXJ0IHNvIHdlIGNhbiBjYWxjdWxhdGUgdG91Y2htb3ZlIGRlbHRhXG4gICAgICBfdGhpcy50b3VjaFN0YXJ0ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBkZWx0YVkgPSBfdGhpcy50b3VjaFN0YXJ0IC0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgICAgX3RoaXMuaGFuZGxlRXZlbnREZWx0YShldmVudCwgZGVsdGFZKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U2Nyb2xsVGFyZ2V0ID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuc2Nyb2xsVGFyZ2V0ID0gcmVmO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2Nyb2xsQ2FwdG9yLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKHRoaXMuc2Nyb2xsVGFyZ2V0KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy5zY3JvbGxUYXJnZXQpO1xuICB9O1xuXG4gIF9wcm90by5zdGFydExpc3RlbmluZyA9IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nKGVsKSB7XG4gICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBhdHRhY2ggdG9cbiAgICBpZiAoIWVsKSByZXR1cm47IC8vIGFsbCB0aGUgaWYgc3RhdGVtZW50cyBhcmUgdG8gYXBwZWFzZSBGbG93IPCfmKJcblxuICAgIGlmICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc3RvcExpc3RlbmluZyA9IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZWwpIHtcbiAgICAvLyBhbGwgdGhlIGlmIHN0YXRlbWVudHMgYXJlIHRvIGFwcGVhc2UgRmxvdyDwn5iiXG4gICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm9kZVJlc29sdmVyLCB7XG4gICAgICBpbm5lclJlZjogdGhpcy5nZXRTY3JvbGxUYXJnZXRcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsQ2FwdG9yO1xufShDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBTY3JvbGxDYXB0b3JTd2l0Y2goX3JlZikge1xuICB2YXIgX3JlZiRpc0VuYWJsZWQgPSBfcmVmLmlzRW5hYmxlZCxcbiAgICAgIGlzRW5hYmxlZCA9IF9yZWYkaXNFbmFibGVkID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRpc0VuYWJsZWQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJDEoX3JlZiwgW1wiaXNFbmFibGVkXCJdKTtcblxuICByZXR1cm4gaXNFbmFibGVkID8gUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxDYXB0b3IsIHByb3BzKSA6IHByb3BzLmNoaWxkcmVuO1xufVxuXG52YXIgaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UgPSBmdW5jdGlvbiBpbnN0cnVjdGlvbnNBcmlhTWVzc2FnZShldmVudCwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IHt9O1xuICB9XG5cbiAgdmFyIF9jb250ZXh0ID0gY29udGV4dCxcbiAgICAgIGlzU2VhcmNoYWJsZSA9IF9jb250ZXh0LmlzU2VhcmNoYWJsZSxcbiAgICAgIGlzTXVsdGkgPSBfY29udGV4dC5pc011bHRpLFxuICAgICAgbGFiZWwgPSBfY29udGV4dC5sYWJlbCxcbiAgICAgIGlzRGlzYWJsZWQgPSBfY29udGV4dC5pc0Rpc2FibGVkO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdtZW51JzpcbiAgICAgIHJldHVybiBcIlVzZSBVcCBhbmQgRG93biB0byBjaG9vc2Ugb3B0aW9uc1wiICsgKGlzRGlzYWJsZWQgPyAnJyA6ICcsIHByZXNzIEVudGVyIHRvIHNlbGVjdCB0aGUgY3VycmVudGx5IGZvY3VzZWQgb3B0aW9uJykgKyBcIiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnUsIHByZXNzIFRhYiB0byBzZWxlY3QgdGhlIG9wdGlvbiBhbmQgZXhpdCB0aGUgbWVudS5cIjtcblxuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAobGFiZWwgPyBsYWJlbCA6ICdTZWxlY3QnKSArIFwiIGlzIGZvY3VzZWQgXCIgKyAoaXNTZWFyY2hhYmxlID8gJyx0eXBlIHRvIHJlZmluZSBsaXN0JyA6ICcnKSArIFwiLCBwcmVzcyBEb3duIHRvIG9wZW4gdGhlIG1lbnUsIFwiICsgKGlzTXVsdGkgPyAnIHByZXNzIGxlZnQgdG8gZm9jdXMgc2VsZWN0ZWQgdmFsdWVzJyA6ICcnKTtcblxuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgIHJldHVybiAnVXNlIGxlZnQgYW5kIHJpZ2h0IHRvIHRvZ2dsZSBiZXR3ZWVuIGZvY3VzZWQgdmFsdWVzLCBwcmVzcyBCYWNrc3BhY2UgdG8gcmVtb3ZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSc7XG4gIH1cbn07XG52YXIgdmFsdWVFdmVudEFyaWFNZXNzYWdlID0gZnVuY3Rpb24gdmFsdWVFdmVudEFyaWFNZXNzYWdlKGV2ZW50LCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHQudmFsdWUsXG4gICAgICBpc0Rpc2FibGVkID0gY29udGV4dC5pc0Rpc2FibGVkO1xuICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgY2FzZSAncG9wLXZhbHVlJzpcbiAgICBjYXNlICdyZW1vdmUtdmFsdWUnOlxuICAgICAgcmV0dXJuIFwib3B0aW9uIFwiICsgdmFsdWUgKyBcIiwgZGVzZWxlY3RlZC5cIjtcblxuICAgIGNhc2UgJ3NlbGVjdC1vcHRpb24nOlxuICAgICAgcmV0dXJuIGlzRGlzYWJsZWQgPyBcIm9wdGlvbiBcIiArIHZhbHVlICsgXCIgaXMgZGlzYWJsZWQuIFNlbGVjdCBhbm90aGVyIG9wdGlvbi5cIiA6IFwib3B0aW9uIFwiICsgdmFsdWUgKyBcIiwgc2VsZWN0ZWQuXCI7XG4gIH1cbn07XG52YXIgdmFsdWVGb2N1c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gdmFsdWVGb2N1c0FyaWFNZXNzYWdlKF9yZWYpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IF9yZWYuZm9jdXNlZFZhbHVlLFxuICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcmVmLmdldE9wdGlvbkxhYmVsLFxuICAgICAgc2VsZWN0VmFsdWUgPSBfcmVmLnNlbGVjdFZhbHVlO1xuICByZXR1cm4gXCJ2YWx1ZSBcIiArIGdldE9wdGlvbkxhYmVsKGZvY3VzZWRWYWx1ZSkgKyBcIiBmb2N1c2VkLCBcIiArIChzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSkgKyAxKSArIFwiIG9mIFwiICsgc2VsZWN0VmFsdWUubGVuZ3RoICsgXCIuXCI7XG59O1xudmFyIG9wdGlvbkZvY3VzQXJpYU1lc3NhZ2UgPSBmdW5jdGlvbiBvcHRpb25Gb2N1c0FyaWFNZXNzYWdlKF9yZWYyKSB7XG4gIHZhciBmb2N1c2VkT3B0aW9uID0gX3JlZjIuZm9jdXNlZE9wdGlvbixcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gX3JlZjIuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgcmV0dXJuIFwib3B0aW9uIFwiICsgZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZE9wdGlvbikgKyBcIiBmb2N1c2VkXCIgKyAoZm9jdXNlZE9wdGlvbi5pc0Rpc2FibGVkID8gJyBkaXNhYmxlZCcgOiAnJykgKyBcIiwgXCIgKyAob3B0aW9ucy5pbmRleE9mKGZvY3VzZWRPcHRpb24pICsgMSkgKyBcIiBvZiBcIiArIG9wdGlvbnMubGVuZ3RoICsgXCIuXCI7XG59O1xudmFyIHJlc3VsdHNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc3VsdHNBcmlhTWVzc2FnZShfcmVmMykge1xuICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYzLmlucHV0VmFsdWUsXG4gICAgICBzY3JlZW5SZWFkZXJNZXNzYWdlID0gX3JlZjMuc2NyZWVuUmVhZGVyTWVzc2FnZTtcbiAgcmV0dXJuIFwiXCIgKyBzY3JlZW5SZWFkZXJNZXNzYWdlICsgKGlucHV0VmFsdWUgPyAnIGZvciBzZWFyY2ggdGVybSAnICsgaW5wdXRWYWx1ZSA6ICcnKSArIFwiLlwiO1xufTtcblxudmFyIGZvcm1hdEdyb3VwTGFiZWwgPSBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbn07XG52YXIgaXNPcHRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB7XG4gIHJldHVybiAhIW9wdGlvbi5pc0Rpc2FibGVkO1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkMygpIHsgX2V4dGVuZHMkMyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICBjbGVhckluZGljYXRvcjogY2xlYXJJbmRpY2F0b3JDU1MsXG4gIGNvbnRhaW5lcjogY29udGFpbmVyQ1NTLFxuICBjb250cm9sOiBjc3MsXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBkcm9wZG93bkluZGljYXRvckNTUyxcbiAgZ3JvdXA6IGdyb3VwQ1NTLFxuICBncm91cEhlYWRpbmc6IGdyb3VwSGVhZGluZ0NTUyxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogaW5kaWNhdG9yc0NvbnRhaW5lckNTUyxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsXG4gIGlucHV0OiBpbnB1dENTUyxcbiAgbG9hZGluZ0luZGljYXRvcjogbG9hZGluZ0luZGljYXRvckNTUyxcbiAgbG9hZGluZ01lc3NhZ2U6IGxvYWRpbmdNZXNzYWdlQ1NTLFxuICBtZW51OiBtZW51Q1NTLFxuICBtZW51TGlzdDogbWVudUxpc3RDU1MsXG4gIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxDU1MsXG4gIG11bHRpVmFsdWU6IG11bHRpVmFsdWVDU1MsXG4gIG11bHRpVmFsdWVMYWJlbDogbXVsdGlWYWx1ZUxhYmVsQ1NTLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBtdWx0aVZhbHVlUmVtb3ZlQ1NTLFxuICBub09wdGlvbnNNZXNzYWdlOiBub09wdGlvbnNNZXNzYWdlQ1NTLFxuICBvcHRpb246IG9wdGlvbkNTUyxcbiAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ1NTLFxuICBzaW5nbGVWYWx1ZTogY3NzJDEsXG4gIHZhbHVlQ29udGFpbmVyOiB2YWx1ZUNvbnRhaW5lckNTU1xufTsgLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgPT09IHZvaWQgMCkge1xuICAgIHRhcmdldCA9IHt9O1xuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSB3aXRoIHNvdXJjZSBzdHlsZXNcbiAgdmFyIHN0eWxlcyA9IF9leHRlbmRzJDMoe30sIHNvdXJjZSk7IC8vIG1hc3NhZ2UgaW4gdGFyZ2V0IHN0eWxlc1xuXG5cbiAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoc291cmNlW2tleV0pIHtcbiAgICAgIHN0eWxlc1trZXldID0gZnVuY3Rpb24gKHJzQ3NzLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV0oc291cmNlW2tleV0ocnNDc3MsIHByb3BzKSwgcHJvcHMpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufVxuXG52YXIgY29sb3JzID0ge1xuICBwcmltYXJ5OiAnIzI2ODRGRicsXG4gIHByaW1hcnk3NTogJyM0QzlBRkYnLFxuICBwcmltYXJ5NTA6ICcjQjJENEZGJyxcbiAgcHJpbWFyeTI1OiAnI0RFRUJGRicsXG4gIGRhbmdlcjogJyNERTM1MEInLFxuICBkYW5nZXJMaWdodDogJyNGRkJEQUQnLFxuICBuZXV0cmFsMDogJ2hzbCgwLCAwJSwgMTAwJSknLFxuICBuZXV0cmFsNTogJ2hzbCgwLCAwJSwgOTUlKScsXG4gIG5ldXRyYWwxMDogJ2hzbCgwLCAwJSwgOTAlKScsXG4gIG5ldXRyYWwyMDogJ2hzbCgwLCAwJSwgODAlKScsXG4gIG5ldXRyYWwzMDogJ2hzbCgwLCAwJSwgNzAlKScsXG4gIG5ldXRyYWw0MDogJ2hzbCgwLCAwJSwgNjAlKScsXG4gIG5ldXRyYWw1MDogJ2hzbCgwLCAwJSwgNTAlKScsXG4gIG5ldXRyYWw2MDogJ2hzbCgwLCAwJSwgNDAlKScsXG4gIG5ldXRyYWw3MDogJ2hzbCgwLCAwJSwgMzAlKScsXG4gIG5ldXRyYWw4MDogJ2hzbCgwLCAwJSwgMjAlKScsXG4gIG5ldXRyYWw5MDogJ2hzbCgwLCAwJSwgMTAlKSdcbn07XG52YXIgYm9yZGVyUmFkaXVzID0gNDsgLy8gVXNlZCB0byBjYWxjdWxhdGUgY29uc2lzdGVudCBtYXJnaW4vcGFkZGluZyBvbiBlbGVtZW50c1xuXG52YXIgYmFzZVVuaXQgPSA0OyAvLyBUaGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIGNvbnRyb2xcblxudmFyIGNvbnRyb2xIZWlnaHQgPSAzODsgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSBjb250cm9sIGFuZCBtZW51ICovXG5cbnZhciBtZW51R3V0dGVyID0gYmFzZVVuaXQgKiAyO1xudmFyIHNwYWNpbmcgPSB7XG4gIGJhc2VVbml0OiBiYXNlVW5pdCxcbiAgY29udHJvbEhlaWdodDogY29udHJvbEhlaWdodCxcbiAgbWVudUd1dHRlcjogbWVudUd1dHRlclxufTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICBjb2xvcnM6IGNvbG9ycyxcbiAgc3BhY2luZzogc3BhY2luZ1xufTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UkMihzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDQoKSB7IF9leHRlbmRzJDQgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlJDQoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlOiB0cnVlLFxuICBibHVySW5wdXRPblNlbGVjdDogaXNUb3VjaENhcGFibGUoKSxcbiAgY2FwdHVyZU1lbnVTY3JvbGw6ICFpc1RvdWNoQ2FwYWJsZSgpLFxuICBjbG9zZU1lbnVPblNlbGVjdDogdHJ1ZSxcbiAgY2xvc2VNZW51T25TY3JvbGw6IGZhbHNlLFxuICBjb21wb25lbnRzOiB7fSxcbiAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiB0cnVlLFxuICBlc2NhcGVDbGVhcnNWYWx1ZTogZmFsc2UsXG4gIGZpbHRlck9wdGlvbjogY3JlYXRlRmlsdGVyKCksXG4gIGZvcm1hdEdyb3VwTGFiZWw6IGZvcm1hdEdyb3VwTGFiZWwsXG4gIGdldE9wdGlvbkxhYmVsOiBnZXRPcHRpb25MYWJlbCxcbiAgZ2V0T3B0aW9uVmFsdWU6IGdldE9wdGlvblZhbHVlLFxuICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgaXNNdWx0aTogZmFsc2UsXG4gIGlzUnRsOiBmYWxzZSxcbiAgaXNTZWFyY2hhYmxlOiB0cnVlLFxuICBpc09wdGlvbkRpc2FibGVkOiBpc09wdGlvbkRpc2FibGVkLFxuICBsb2FkaW5nTWVzc2FnZTogZnVuY3Rpb24gbG9hZGluZ01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdMb2FkaW5nLi4uJztcbiAgfSxcbiAgbWF4TWVudUhlaWdodDogMzAwLFxuICBtaW5NZW51SGVpZ2h0OiAxNDAsXG4gIG1lbnVJc09wZW46IGZhbHNlLFxuICBtZW51UGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbWVudVBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBtZW51U2hvdWxkQmxvY2tTY3JvbGw6IGZhbHNlLFxuICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXc6ICFpc01vYmlsZURldmljZSgpLFxuICBub09wdGlvbnNNZXNzYWdlOiBmdW5jdGlvbiBub09wdGlvbnNNZXNzYWdlKCkge1xuICAgIHJldHVybiAnTm8gb3B0aW9ucyc7XG4gIH0sXG4gIG9wZW5NZW51T25Gb2N1czogZmFsc2UsXG4gIG9wZW5NZW51T25DbGljazogdHJ1ZSxcbiAgb3B0aW9uczogW10sXG4gIHBhZ2VTaXplOiA1LFxuICBwbGFjZWhvbGRlcjogJ1NlbGVjdC4uLicsXG4gIHNjcmVlblJlYWRlclN0YXR1czogZnVuY3Rpb24gc2NyZWVuUmVhZGVyU3RhdHVzKF9yZWYpIHtcbiAgICB2YXIgY291bnQgPSBfcmVmLmNvdW50O1xuICAgIHJldHVybiBjb3VudCArIFwiIHJlc3VsdFwiICsgKGNvdW50ICE9PSAxID8gJ3MnIDogJycpICsgXCIgYXZhaWxhYmxlXCI7XG4gIH0sXG4gIHN0eWxlczoge30sXG4gIHRhYkluZGV4OiAnMCcsXG4gIHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZVxufTtcbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIFNlbGVjdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZSQ0KFNlbGVjdCwgX0NvbXBvbmVudCk7XG5cbiAgLy8gTWlzYy4gSW5zdGFuY2UgUHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVE9ET1xuICAvLyBSZWZzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZ1bmN0aW9uIFNlbGVjdChfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBfcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhcmlhTGl2ZVNlbGVjdGlvbjogJycsXG4gICAgICBhcmlhTGl2ZUNvbnRleHQ6ICcnLFxuICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbCxcbiAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgIGlucHV0SXNIaWRkZW46IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIG1lbnVPcHRpb25zOiB7XG4gICAgICAgIHJlbmRlcjogW10sXG4gICAgICAgIGZvY3VzYWJsZTogW11cbiAgICAgIH0sXG4gICAgICBzZWxlY3RWYWx1ZTogW11cbiAgICB9O1xuICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICBfdGhpcy5pc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIF90aGlzLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXMuY29tbW9uUHJvcHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuY29tcG9uZW50cyA9IHZvaWQgMDtcbiAgICBfdGhpcy5oYXNHcm91cHMgPSBmYWxzZTtcbiAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gMDtcbiAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICBfdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSB2b2lkIDA7XG4gICAgX3RoaXMuaW5zdGFuY2VQcmVmaXggPSAnJztcbiAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIF90aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSB2b2lkIDA7XG4gICAgX3RoaXMuY29udHJvbFJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRDb250cm9sUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuY29udHJvbFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMubWVudUxpc3RSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0TWVudUxpc3RSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5tZW51TGlzdFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuaW5wdXRSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0SW5wdXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5pbnB1dFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2FjaGVDb21wb25lbnRzID0gZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICAgIF90aGlzLmNvbXBvbmVudHMgPSBkZWZhdWx0Q29tcG9uZW50cyh7XG4gICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHNcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5mb2N1cyA9IF90aGlzLmZvY3VzSW5wdXQ7XG4gICAgX3RoaXMuYmx1ciA9IF90aGlzLmJsdXJJbnB1dDtcblxuICAgIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wcy5uYW1lO1xuICAgICAgb25DaGFuZ2UobmV3VmFsdWUsIF9leHRlbmRzJDQoe30sIGFjdGlvbk1ldGEsIHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uLCBvcHRpb24pIHtcbiAgICAgIGlmIChhY3Rpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBhY3Rpb24gPSAnc2V0LXZhbHVlJztcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0ID0gX3RoaXMkcHJvcHMyLmNsb3NlTWVudU9uU2VsZWN0LFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aTtcblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdzZXQtdmFsdWUnXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNsb3NlTWVudU9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9ICFpc011bHRpO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IC8vIHdoZW4gdGhlIHNlbGVjdCB2YWx1ZSBzaG91bGQgY2hhbmdlLCB3ZSBzaG91bGQgcmVzZXQgZm9jdXNlZFZhbHVlXG5cblxuICAgICAgX3RoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSB0cnVlO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZWxlY3RPcHRpb24gPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBibHVySW5wdXRPblNlbGVjdCA9IF90aGlzJHByb3BzMy5ibHVySW5wdXRPblNlbGVjdCxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpcy5nZXRPcHRpb25WYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgICAgIH0pLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuXG4gICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBldmVudDogJ2Rlc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIV90aGlzLmlzT3B0aW9uRGlzYWJsZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWUoW10uY29uY2F0KHNlbGVjdFZhbHVlLCBbbmV3VmFsdWVdKSwgJ3NlbGVjdC1vcHRpb24nLCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYW5ub3VuY2UgdGhhdCBvcHRpb24gaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKSxcbiAgICAgICAgICAgICAgICBpc0Rpc2FibGVkOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFfdGhpcy5pc09wdGlvbkRpc2FibGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSwgJ3NlbGVjdC1vcHRpb24nKTtcblxuICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFubm91bmNlIHRoYXQgb3B0aW9uIGlzIGRpc2FibGVkXG4gICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpLFxuICAgICAgICAgICAgICBpc0Rpc2FibGVkOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGJsdXJJbnB1dE9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLmJsdXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVWYWx1ZSA9IGZ1bmN0aW9uIChyZW1vdmVkVmFsdWUpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUocmVtb3ZlZFZhbHVlKTtcblxuICAgICAgdmFyIG5ld1ZhbHVlID0gc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLmxlbmd0aCA/IG5ld1ZhbHVlIDogbnVsbCwge1xuICAgICAgICBhY3Rpb246ICdyZW1vdmUtdmFsdWUnLFxuICAgICAgICByZW1vdmVkVmFsdWU6IHJlbW92ZWRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICBldmVudDogJ3JlbW92ZS12YWx1ZScsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogcmVtb3ZlZFZhbHVlID8gX3RoaXMuZ2V0T3B0aW9uTGFiZWwocmVtb3ZlZFZhbHVlKSA6ICcnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlKGlzTXVsdGkgPyBbXSA6IG51bGwsIHtcbiAgICAgICAgYWN0aW9uOiAnY2xlYXInXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9wVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBsYXN0U2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdFZhbHVlW3NlbGVjdFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gc2VsZWN0VmFsdWUuc2xpY2UoMCwgc2VsZWN0VmFsdWUubGVuZ3RoIC0gMSk7XG5cbiAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICBldmVudDogJ3BvcC12YWx1ZScsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogbGFzdFNlbGVjdGVkVmFsdWUgPyBfdGhpcy5nZXRPcHRpb25MYWJlbChsYXN0U2VsZWN0ZWRWYWx1ZSkgOiAnJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUubGVuZ3RoID8gbmV3VmFsdWUgOiBudWxsLCB7XG4gICAgICAgIGFjdGlvbjogJ3BvcC12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogbGFzdFNlbGVjdGVkVmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuZ2V0T3B0aW9uTGFiZWwoZGF0YSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5nZXRPcHRpb25WYWx1ZShkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBiYXNlID0gZGVmYXVsdFN0eWxlc1trZXldKHByb3BzKTtcbiAgICAgIGJhc2UuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgdmFyIGN1c3RvbSA9IF90aGlzLnByb3BzLnN0eWxlc1trZXldO1xuICAgICAgcmV0dXJuIGN1c3RvbSA/IGN1c3RvbShiYXNlLCBwcm9wcykgOiBiYXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLmluc3RhbmNlUHJlZml4ICsgXCItXCIgKyBlbGVtZW50O1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRBY3RpdmVEZXNjZW5kZW50SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudUlzT3BlbiA9IF90aGlzLnByb3BzLm1lbnVJc09wZW47XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBtZW51T3B0aW9ucyA9IF90aGlzJHN0YXRlLm1lbnVPcHRpb25zLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uIHx8ICFtZW51SXNPcGVuKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgdmFyIGluZGV4ID0gbWVudU9wdGlvbnMuZm9jdXNhYmxlLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgICB2YXIgb3B0aW9uID0gbWVudU9wdGlvbnMucmVuZGVyW2luZGV4XTtcbiAgICAgIHJldHVybiBvcHRpb24gJiYgb3B0aW9uLmtleTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGV2ZW50ID0gX3JlZjIuZXZlbnQsXG4gICAgICAgICAgY29udGV4dCA9IF9yZWYyLmNvbnRleHQ7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYUxpdmVTZWxlY3Rpb246IHZhbHVlRXZlbnRBcmlhTWVzc2FnZShldmVudCwgY29udGV4dClcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIGV2ZW50ID0gX3JlZjMuZXZlbnQsXG4gICAgICAgICAgY29udGV4dCA9IF9yZWYzLmNvbnRleHQ7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYUxpdmVDb250ZXh0OiBpbnN0cnVjdGlvbnNBcmlhTWVzc2FnZShldmVudCwgX2V4dGVuZHMkNCh7fSwgY29udGV4dCwge1xuICAgICAgICAgIGxhYmVsOiBfdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgb3Blbk1lbnVPbkNsaWNrID0gX3RoaXMucHJvcHMub3Blbk1lbnVPbkNsaWNrO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfSBlbHNlIGlmICghX3RoaXMucHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICggLy8gJEZsb3dGaXhNZVxuICAgICAgICBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCAvLyAkRmxvd0ZpeE1lXG4gICAgICBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM0LmlzTXVsdGksXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9ICFpc011bHRpO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWY0LnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzLml0ZW0oMCk7XG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gdG91Y2guY2xpZW50WDtcbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSB0b3VjaC5jbGllbnRZO1xuICAgICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgIHZhciB0b3VjaGVzID0gX3JlZjUudG91Y2hlcztcbiAgICAgIHZhciB0b3VjaCA9IHRvdWNoZXMuaXRlbSgwKTtcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gX3RoaXMuaW5pdGlhbFRvdWNoWCk7XG4gICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnModG91Y2guY2xpZW50WSAtIF90aGlzLmluaXRpYWxUb3VjaFkpO1xuICAgICAgdmFyIG1vdmVUaHJlc2hvbGQgPSA1O1xuICAgICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSBkZWx0YVggPiBtb3ZlVGhyZXNob2xkIHx8IGRlbHRhWSA+IG1vdmVUaHJlc2hvbGQ7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuOyAvLyBjbG9zZSB0aGUgbWVudSBpZiB0aGUgdXNlciB0YXBzIG91dHNpZGVcbiAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIG9uIGV2ZW50LnRhcmdldCBoZXJlIGluc3RlYWQgb2YgZXZlbnQuY3VycmVudFRhcmdldCwgYmVjYXVzZSB3ZSB3YW50IHRvIGFzc2VydCBpbmZvcm1hdGlvblxuICAgICAgLy8gb24gZXZlbnRzIG9uIGNoaWxkIGVsZW1lbnRzLCBub3QgdGhlIGRvY3VtZW50ICh3aGljaCB3ZSd2ZSBhdHRhY2hlZCB0aGlzIGhhbmRsZXIgdG8pLlxuXG4gICAgICBpZiAoX3RoaXMuY29udHJvbFJlZiAmJiAhX3RoaXMuY29udHJvbFJlZi5jb250YWlucyhldmVudC50YXJnZXQpICYmIF90aGlzLm1lbnVMaXN0UmVmICYmICFfdGhpcy5tZW51TGlzdFJlZi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIF90aGlzLmJsdXJJbnB1dCgpO1xuICAgICAgfSAvLyByZXNldCBtb3ZlIHZhcnNcblxuXG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gMDtcbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbnRyb2xUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtY2hhbmdlJ1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uTWVudU9wZW4oKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25JbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNTZWFyY2hhYmxlID0gX3RoaXMkcHJvcHM1LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM1LmlzTXVsdGk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlzTXVsdGk6IGlzTXVsdGlcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNGb2N1c2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLm9wZW5BZnRlckZvY3VzIHx8IF90aGlzLnByb3BzLm9wZW5NZW51T25Gb2N1cykge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25JbnB1dEJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5tZW51TGlzdFJlZiAmJiBfdGhpcy5tZW51TGlzdFJlZi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBfdGhpcy5pbnB1dFJlZi5mb2N1cygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ2lucHV0LWJsdXInXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk9wdGlvbkhvdmVyID0gZnVuY3Rpb24gKGZvY3VzZWRPcHRpb24pIHtcbiAgICAgIGlmIChfdGhpcy5ibG9ja09wdGlvbkhvdmVyIHx8IF90aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gPT09IGZvY3VzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb25cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGhpZGVTZWxlY3RlZE9wdGlvbnMgPSBfdGhpcyRwcm9wczYuaGlkZVNlbGVjdGVkT3B0aW9ucyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM2LmlzTXVsdGk7XG4gICAgICBpZiAoaGlkZVNlbGVjdGVkT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICAgIHJldHVybiBoaWRlU2VsZWN0ZWRPcHRpb25zO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM3LmlzTXVsdGksXG4gICAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlID0gX3RoaXMkcHJvcHM3LmJhY2tzcGFjZVJlbW92ZXNWYWx1ZSxcbiAgICAgICAgICBlc2NhcGVDbGVhcnNWYWx1ZSA9IF90aGlzJHByb3BzNy5lc2NhcGVDbGVhcnNWYWx1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM3LmlucHV0VmFsdWUsXG4gICAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczcuaXNDbGVhcmFibGUsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzNy5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczcubWVudUlzT3BlbixcbiAgICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wczcub25LZXlEb3duLFxuICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZSA9IF90aGlzJHByb3BzNy50YWJTZWxlY3RzVmFsdWUsXG4gICAgICAgICAgb3Blbk1lbnVPbkZvY3VzID0gX3RoaXMkcHJvcHM3Lm9wZW5NZW51T25Gb2N1cztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGUyLmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUyLmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlMi5zZWxlY3RWYWx1ZTtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XG5cbiAgICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uS2V5RG93bihldmVudCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQmxvY2sgb3B0aW9uIGhvdmVyIGV2ZW50cyB3aGVuIHRoZSB1c2VyIGhhcyBqdXN0IHByZXNzZWQgYSBrZXlcblxuXG4gICAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgncHJldmlvdXMnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGlmICghaXNNdWx0aSB8fCBpbnB1dFZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c1ZhbHVlKCduZXh0Jyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZm9jdXNlZFZhbHVlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVWYWx1ZShmb2N1c2VkVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWJhY2tzcGFjZVJlbW92ZXNWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgICBfdGhpcy5wb3BWYWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsZWFyYWJsZSkge1xuICAgICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSB8fCAhbWVudUlzT3BlbiB8fCAhdGFiU2VsZWN0c1ZhbHVlIHx8ICFmb2N1c2VkT3B0aW9uIHx8IC8vIGRvbid0IGNhcHR1cmUgdGhlIGV2ZW50IGlmIHRoZSBtZW51IG9wZW5zIG9uIGZvY3VzIGFuZCB0aGUgZm9jdXNlZFxuICAgICAgICAgIC8vIG9wdGlvbiBpcyBhbHJlYWR5IHNlbGVjdGVkOyBpdCBicmVha3MgdGhlIGZsb3cgb2YgbmF2aWdhdGlvblxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyAmJiBfdGhpcy5pc09wdGlvblNlbGVjdGVkKGZvY3VzZWRPcHRpb24sIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjI5KSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgdGhlIGtleWRvd24gZXZlbnQgZnJvbSBhbiBJbnB1dCBNZXRob2QgRWRpdG9yKElNRSlcbiAgICAgICAgICAgIC8vIHJlZi4gaHR0cHM6Ly93d3cudzMub3JnL1RSL3VpZXZlbnRzLyNkZXRlcm1pbmUta2V5ZG93bi1rZXl1cC1rZXlDb2RlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnbWVudS1jbG9zZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAvLyBzcGFjZVxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2Rvd24nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdldXAnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdlZG93bicpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignZmlyc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignbGFzdCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkTWVudU9wdGlvbnMgPSBmdW5jdGlvbiAocHJvcHMsIHNlbGVjdFZhbHVlKSB7XG4gICAgICB2YXIgX3Byb3BzJGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHMkaW5wdXRWYWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkaW5wdXRWYWx1ZSxcbiAgICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcblxuICAgICAgdmFyIHRvT3B0aW9uID0gZnVuY3Rpb24gdG9PcHRpb24ob3B0aW9uLCBpZCkge1xuICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IF90aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG5cbiAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBfdGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuXG4gICAgICAgIHZhciBsYWJlbCA9IF90aGlzLmdldE9wdGlvbkxhYmVsKG9wdGlvbik7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcblxuICAgICAgICBpZiAoX3RoaXMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucygpICYmIGlzU2VsZWN0ZWQgfHwgIV90aGlzLmZpbHRlck9wdGlvbih7XG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkYXRhOiBvcHRpb25cbiAgICAgICAgfSwgaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb25Ib3ZlciA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm9uT3B0aW9uSG92ZXIob3B0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU2VsZWN0ID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcHRpb25JZCA9IF90aGlzLmdldEVsZW1lbnRJZCgnb3B0aW9uJykgKyBcIi1cIiArIGlkO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiBvcHRpb25JZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0LFxuICAgICAgICAgICAgb25Nb3VzZU1vdmU6IG9uSG92ZXIsXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcjogb25Ib3ZlcixcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogb3B0aW9uLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICAgICAgICBrZXk6IG9wdGlvbklkLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB0eXBlOiAnb3B0aW9uJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBvcHRpb25zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucykge1xuICAgICAgICAgIC8vIFRPRE8gbmVlZHMgYSB0aWRpZXIgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICBpZiAoIV90aGlzLmhhc0dyb3VwcykgX3RoaXMuaGFzR3JvdXBzID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgaXRlbXMgPSBpdGVtLm9wdGlvbnM7XG4gICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbXMubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHRvT3B0aW9uKGNoaWxkLCBpdGVtSW5kZXggKyBcIi1cIiArIGkpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbikgYWNjLmZvY3VzYWJsZS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGdyb3VwSWQgPSBfdGhpcy5nZXRFbGVtZW50SWQoJ2dyb3VwJykgKyBcIi1cIiArIGl0ZW1JbmRleDtcbiAgICAgICAgICAgIGFjYy5yZW5kZXIucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgICAgICAgIGtleTogZ3JvdXBJZCxcbiAgICAgICAgICAgICAgZGF0YTogaXRlbSxcbiAgICAgICAgICAgICAgb3B0aW9uczogY2hpbGRyZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3B0aW9uID0gdG9PcHRpb24oaXRlbSwgXCJcIiArIGl0ZW1JbmRleCk7XG5cbiAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICBhY2MucmVuZGVyLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgIGFjYy5mb2N1c2FibGUucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge1xuICAgICAgICByZW5kZXI6IFtdLFxuICAgICAgICBmb2N1c2FibGU6IFtdXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIF92YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICBfdGhpcy5jYWNoZUNvbXBvbmVudHMgPSBtZW1vaXplT25lKF90aGlzLmNhY2hlQ29tcG9uZW50cywgZXhwb3J0ZWRFcXVhbCkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG5cbiAgICBfdGhpcy5jYWNoZUNvbXBvbmVudHMoX3Byb3BzLmNvbXBvbmVudHMpO1xuXG4gICAgX3RoaXMuaW5zdGFuY2VQcmVmaXggPSAncmVhY3Qtc2VsZWN0LScgKyAoX3RoaXMucHJvcHMuaW5zdGFuY2VJZCB8fCArK2luc3RhbmNlSWQpO1xuXG4gICAgdmFyIF9zZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUoX3ZhbHVlKTtcblxuICAgIF90aGlzLmJ1aWxkTWVudU9wdGlvbnMgPSBtZW1vaXplT25lKF90aGlzLmJ1aWxkTWVudU9wdGlvbnMsIGZ1bmN0aW9uIChuZXdBcmdzLCBsYXN0QXJncykge1xuICAgICAgdmFyIF9yZWY2ID0gbmV3QXJncyxcbiAgICAgICAgICBuZXdQcm9wcyA9IF9yZWY2WzBdLFxuICAgICAgICAgIG5ld1NlbGVjdFZhbHVlID0gX3JlZjZbMV07XG4gICAgICB2YXIgX3JlZjcgPSBsYXN0QXJncyxcbiAgICAgICAgICBsYXN0UHJvcHMgPSBfcmVmN1swXSxcbiAgICAgICAgICBsYXN0U2VsZWN0VmFsdWUgPSBfcmVmN1sxXTtcbiAgICAgIHJldHVybiBleHBvcnRlZEVxdWFsKG5ld1NlbGVjdFZhbHVlLCBsYXN0U2VsZWN0VmFsdWUpICYmIGV4cG9ydGVkRXF1YWwobmV3UHJvcHMuaW5wdXRWYWx1ZSwgbGFzdFByb3BzLmlucHV0VmFsdWUpICYmIGV4cG9ydGVkRXF1YWwobmV3UHJvcHMub3B0aW9ucywgbGFzdFByb3BzLm9wdGlvbnMpO1xuICAgIH0pLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuXG4gICAgdmFyIF9tZW51T3B0aW9ucyA9IF9wcm9wcy5tZW51SXNPcGVuID8gX3RoaXMuYnVpbGRNZW51T3B0aW9ucyhfcHJvcHMsIF9zZWxlY3RWYWx1ZSkgOiB7XG4gICAgICByZW5kZXI6IFtdLFxuICAgICAgZm9jdXNhYmxlOiBbXVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZS5tZW51T3B0aW9ucyA9IF9tZW51T3B0aW9ucztcbiAgICBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSA9IF9zZWxlY3RWYWx1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VsZWN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgLy8gTGlzdGVuIHRvIGFsbCBzY3JvbGwgZXZlbnRzLCBhbmQgZmlsdGVyIHRoZW0gb3V0IGluc2lkZSBvZiAnb25TY3JvbGwnXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzOC5vcHRpb25zLFxuICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzOC52YWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzOC5tZW51SXNPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM4LmlucHV0VmFsdWU7IC8vIHJlLWNhY2hlIGN1c3RvbSBjb21wb25lbnRzXG5cbiAgICB0aGlzLmNhY2hlQ29tcG9uZW50cyhuZXh0UHJvcHMuY29tcG9uZW50cyk7IC8vIHJlYnVpbGQgdGhlIG1lbnUgb3B0aW9uc1xuXG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdmFsdWUgfHwgbmV4dFByb3BzLm9wdGlvbnMgIT09IG9wdGlvbnMgfHwgbmV4dFByb3BzLm1lbnVJc09wZW4gIT09IG1lbnVJc09wZW4gfHwgbmV4dFByb3BzLmlucHV0VmFsdWUgIT09IGlucHV0VmFsdWUpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUobmV4dFByb3BzLnZhbHVlKTtcbiAgICAgIHZhciBtZW51T3B0aW9ucyA9IG5leHRQcm9wcy5tZW51SXNPcGVuID8gdGhpcy5idWlsZE1lbnVPcHRpb25zKG5leHRQcm9wcywgc2VsZWN0VmFsdWUpIDoge1xuICAgICAgICByZW5kZXI6IFtdLFxuICAgICAgICBmb2N1c2FibGU6IFtdXG4gICAgICB9O1xuICAgICAgdmFyIGZvY3VzZWRWYWx1ZSA9IHRoaXMuZ2V0TmV4dEZvY3VzZWRWYWx1ZShzZWxlY3RWYWx1ZSk7XG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuZ2V0TmV4dEZvY3VzZWRPcHRpb24obWVudU9wdGlvbnMuZm9jdXNhYmxlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZW51T3B0aW9uczogbWVudU9wdGlvbnMsXG4gICAgICAgIHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWVcbiAgICAgIH0pO1xuICAgIH0gLy8gc29tZSB1cGRhdGVzIHNob3VsZCB0b2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2aXNpYmlsaXR5XG5cblxuICAgIGlmICh0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGVcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIHRoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM5LmlzRGlzYWJsZWQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczkubWVudUlzT3BlbjtcbiAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICBpZiAoIC8vIGVuc3VyZSBmb2N1cyBpcyByZXN0b3JlZCBjb3JyZWN0bHkgd2hlbiB0aGUgY29udHJvbCBiZWNvbWVzIGVuYWJsZWRcbiAgICBpc0ZvY3VzZWQgJiYgIWlzRGlzYWJsZWQgJiYgcHJldlByb3BzLmlzRGlzYWJsZWQgfHwgLy8gZW5zdXJlIGZvY3VzIGlzIG9uIHRoZSBJbnB1dCB3aGVuIHRoZSBtZW51IG9wZW5zXG4gICAgaXNGb2N1c2VkICYmIG1lbnVJc09wZW4gJiYgIXByZXZQcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9IC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuXG5cbiAgICBpZiAodGhpcy5tZW51TGlzdFJlZiAmJiB0aGlzLmZvY3VzZWRPcHRpb25SZWYgJiYgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSkge1xuICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmdUb1RvdWNoKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIENvbnN1bWVyIEhhbmRsZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBfcHJvdG8ub25NZW51T3BlbiA9IGZ1bmN0aW9uIG9uTWVudU9wZW4oKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1lbnVPcGVuKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uTWVudUNsb3NlID0gZnVuY3Rpb24gb25NZW51Q2xvc2UoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczEwLmlzU2VhcmNoYWJsZSxcbiAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMTAuaXNNdWx0aTtcbiAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgIGV2ZW50OiAnaW5wdXQnLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSxcbiAgICAgICAgaXNNdWx0aTogaXNNdWx0aVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgYWN0aW9uOiAnbWVudS1jbG9zZSdcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO1xuXG4gIF9wcm90by5mb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmJsdXJJbnB1dCA9IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICB0aGlzLmlucHV0UmVmLmJsdXIoKTtcbiAgfSAvLyBhbGlhc2VkIGZvciBjb25zdW1lcnNcbiAgO1xuXG4gIF9wcm90by5vcGVuTWVudSA9IGZ1bmN0aW9uIG9wZW5NZW51KGZvY3VzT3B0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTMuc2VsZWN0VmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlMy5pc0ZvY3VzZWQ7XG4gICAgdmFyIG1lbnVPcHRpb25zID0gdGhpcy5idWlsZE1lbnVPcHRpb25zKHRoaXMucHJvcHMsIHNlbGVjdFZhbHVlKTtcbiAgICB2YXIgaXNNdWx0aSA9IHRoaXMucHJvcHMuaXNNdWx0aTtcbiAgICB2YXIgb3BlbkF0SW5kZXggPSBmb2N1c09wdGlvbiA9PT0gJ2ZpcnN0JyA/IDAgOiBtZW51T3B0aW9ucy5mb2N1c2FibGUubGVuZ3RoIC0gMTtcblxuICAgIGlmICghaXNNdWx0aSkge1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBtZW51T3B0aW9ucy5mb2N1c2FibGUuaW5kZXhPZihzZWxlY3RWYWx1ZVswXSk7XG5cbiAgICAgIGlmIChzZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgb3BlbkF0SW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgfVxuICAgIH0gLy8gb25seSBzY3JvbGwgaWYgdGhlIG1lbnUgaXNuJ3QgYWxyZWFkeSBvcGVuXG5cblxuICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSAhKGlzRm9jdXNlZCAmJiB0aGlzLm1lbnVMaXN0UmVmKTtcbiAgICB0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVudU9wdGlvbnM6IG1lbnVPcHRpb25zLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgZm9jdXNlZE9wdGlvbjogbWVudU9wdGlvbnMuZm9jdXNhYmxlW29wZW5BdEluZGV4XVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5vbk1lbnVPcGVuKCk7XG5cbiAgICAgIF90aGlzMi5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgIGV2ZW50OiAnbWVudSdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mb2N1c1ZhbHVlID0gZnVuY3Rpb24gZm9jdXNWYWx1ZShkaXJlY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczExLmlzTXVsdGksXG4gICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzMTEuaXNTZWFyY2hhYmxlO1xuICAgIHZhciBfdGhpcyRzdGF0ZTQgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNC5zZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU0LmZvY3VzZWRWYWx1ZTsgLy8gT25seSBtdWx0aXNlbGVjdHMgc3VwcG9ydCB2YWx1ZSBmb2N1c2luZ1xuXG4gICAgaWYgKCFpc011bHRpKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1c2VkT3B0aW9uOiBudWxsXG4gICAgfSk7XG4gICAgdmFyIGZvY3VzZWRJbmRleCA9IHNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgIGlmICghZm9jdXNlZFZhbHVlKSB7XG4gICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICBldmVudDogJ3ZhbHVlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGxhc3RJbmRleCA9IHNlbGVjdFZhbHVlLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5leHRGb2N1cyA9IC0xO1xuICAgIGlmICghc2VsZWN0VmFsdWUubGVuZ3RoKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgLy8gZG9uJ3QgY3ljbGUgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZFxuICAgICAgICAgIG5leHRGb2N1cyA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgZm9jdXNlZCwgZm9jdXMgdGhlIGxhc3QgdmFsdWUgZmlyc3RcbiAgICAgICAgICBuZXh0Rm9jdXMgPSBsYXN0SW5kZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA+IC0xICYmIGZvY3VzZWRJbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAobmV4dEZvY3VzID09PSAtMSkge1xuICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgIGV2ZW50OiAnaW5wdXQnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsXG4gICAgICAgICAgaXNNdWx0aTogaXNNdWx0aVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0SXNIaWRkZW46IG5leHRGb2N1cyAhPT0gLTEsXG4gICAgICBmb2N1c2VkVmFsdWU6IHNlbGVjdFZhbHVlW25leHRGb2N1c11cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZm9jdXNPcHRpb24gPSBmdW5jdGlvbiBmb2N1c09wdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdmaXJzdCc7XG4gICAgfVxuXG4gICAgdmFyIHBhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcbiAgICB2YXIgX3RoaXMkc3RhdGU1ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlNS5mb2N1c2VkT3B0aW9uLFxuICAgICAgICBtZW51T3B0aW9ucyA9IF90aGlzJHN0YXRlNS5tZW51T3B0aW9ucztcbiAgICB2YXIgb3B0aW9ucyA9IG1lbnVPcHRpb25zLmZvY3VzYWJsZTtcbiAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgdmFyIG5leHRGb2N1cyA9IDA7IC8vIGhhbmRsZXMgJ2ZpcnN0J1xuXG4gICAgdmFyIGZvY3VzZWRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKTtcblxuICAgIGlmICghZm9jdXNlZE9wdGlvbikge1xuICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICdtZW51J1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ID4gMCA/IGZvY3VzZWRJbmRleCAtIDEgOiBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgbmV4dEZvY3VzID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdldXAnKSB7XG4gICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSBwYWdlU2l6ZTtcbiAgICAgIGlmIChuZXh0Rm9jdXMgPCAwKSBuZXh0Rm9jdXMgPSAwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZWRvd24nKSB7XG4gICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyBwYWdlU2l6ZTtcbiAgICAgIGlmIChuZXh0Rm9jdXMgPiBvcHRpb25zLmxlbmd0aCAtIDEpIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xhc3QnKSB7XG4gICAgICBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1c2VkT3B0aW9uOiBvcHRpb25zW25leHRGb2N1c10sXG4gICAgICBmb2N1c2VkVmFsdWU6IG51bGxcbiAgICB9KTtcbiAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgIGV2ZW50OiAnbWVudScsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uc1tuZXh0Rm9jdXNdKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBHZXR0ZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBfcHJvdG8uZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgICAvLyBVc2UgdGhlIGRlZmF1bHQgdGhlbWUgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbWl6YXRpb25zLlxuICAgIGlmICghdGhpcy5wcm9wcy50aGVtZSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgICB9IC8vIElmIHRoZSB0aGVtZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSB0aGUgZnVuY3Rpb25cbiAgICAvLyBrbm93cyBob3cgdG8gbWVyZ2UgdGhlIHBhc3NlZC1pbiBkZWZhdWx0IHRoZW1lIHdpdGhcbiAgICAvLyBpdHMgb3duIG1vZGlmaWNhdGlvbnMuXG5cblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGhlbWUoZGVmYXVsdFRoZW1lKTtcbiAgICB9IC8vIE90aGVyd2lzZSwgaWYgYSBwbGFpbiB0aGVtZSBvYmplY3Qgd2FzIHBhc3NlZCBpbixcbiAgICAvLyBvdmVybGF5IGl0IHdpdGggdGhlIGRlZmF1bHQgdGhlbWUuXG5cblxuICAgIHJldHVybiBfZXh0ZW5kcyQ0KHt9LCBkZWZhdWx0VGhlbWUsIHRoaXMucHJvcHMudGhlbWUpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb21tb25Qcm9wcyA9IGZ1bmN0aW9uIGdldENvbW1vblByb3BzKCkge1xuICAgIHZhciBjbGVhclZhbHVlID0gdGhpcy5jbGVhclZhbHVlLFxuICAgICAgICBnZXRTdHlsZXMgPSB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgc2V0VmFsdWUgPSB0aGlzLnNldFZhbHVlLFxuICAgICAgICBzZWxlY3RPcHRpb24gPSB0aGlzLnNlbGVjdE9wdGlvbixcbiAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWVQcmVmaXggPSBwcm9wcy5jbGFzc05hbWVQcmVmaXgsXG4gICAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgIHZhciBoYXNWYWx1ZSA9IHRoaXMuaGFzVmFsdWUoKTtcblxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlO1xuICAgIH07XG5cbiAgICB2YXIgY3ggPSBjbGFzc05hbWVzLmJpbmQobnVsbCwgY2xhc3NOYW1lUHJlZml4KTtcbiAgICByZXR1cm4ge1xuICAgICAgY3g6IGN4LFxuICAgICAgY2xlYXJWYWx1ZTogY2xlYXJWYWx1ZSxcbiAgICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgICAgZ2V0VmFsdWU6IGdldFZhbHVlLFxuICAgICAgaGFzVmFsdWU6IGhhc1ZhbHVlLFxuICAgICAgaXNNdWx0aTogaXNNdWx0aSxcbiAgICAgIGlzUnRsOiBpc1J0bCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBzZWxlY3RPcHRpb246IHNlbGVjdE9wdGlvbixcbiAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcbiAgICAgIHNlbGVjdFByb3BzOiBwcm9wcyxcbiAgICAgIHRoZW1lOiB0aGlzLmdldFRoZW1lKClcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXROZXh0Rm9jdXNlZFZhbHVlID0gZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRWYWx1ZShuZXh0U2VsZWN0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSkge1xuICAgICAgdGhpcy5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHN0YXRlNiA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNi5mb2N1c2VkVmFsdWUsXG4gICAgICAgIGxhc3RTZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNi5zZWxlY3RWYWx1ZTtcbiAgICB2YXIgbGFzdEZvY3VzZWRJbmRleCA9IGxhc3RTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgICBpZiAobGFzdEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICB2YXIgbmV4dEZvY3VzZWRJbmRleCA9IG5leHRTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgLy8gdGhlIGZvY3VzZWQgdmFsdWUgaXMgc3RpbGwgaW4gdGhlIHNlbGVjdFZhbHVlLCByZXR1cm4gaXRcbiAgICAgICAgcmV0dXJuIGZvY3VzZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gdGhlIGZvY3VzZWRWYWx1ZSBpcyBub3QgcHJlc2VudCBpbiB0aGUgbmV4dCBzZWxlY3RWYWx1ZSBhcnJheSBieVxuICAgICAgICAvLyByZWZlcmVuY2UsIHNvIHJldHVybiB0aGUgbmV3IHZhbHVlIGF0IHRoZSBzYW1lIGluZGV4XG4gICAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmdldE5leHRGb2N1c2VkT3B0aW9uID0gZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRPcHRpb24ob3B0aW9ucykge1xuICAgIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgICByZXR1cm4gbGFzdEZvY3VzZWRPcHRpb24gJiYgb3B0aW9ucy5pbmRleE9mKGxhc3RGb2N1c2VkT3B0aW9uKSA+IC0xID8gbGFzdEZvY3VzZWRPcHRpb24gOiBvcHRpb25zWzBdO1xuICB9O1xuXG4gIF9wcm90by5oYXNWYWx1ZSA9IGZ1bmN0aW9uIGhhc1ZhbHVlKCkge1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgcmV0dXJuIHNlbGVjdFZhbHVlLmxlbmd0aCA+IDA7XG4gIH07XG5cbiAgX3Byb3RvLmhhc09wdGlvbnMgPSBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGUubWVudU9wdGlvbnMucmVuZGVyLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uY291bnRPcHRpb25zID0gZnVuY3Rpb24gY291bnRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1lbnVPcHRpb25zLmZvY3VzYWJsZS5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmlzQ2xlYXJhYmxlID0gZnVuY3Rpb24gaXNDbGVhcmFibGUoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0NsZWFyYWJsZSA9IF90aGlzJHByb3BzMTIuaXNDbGVhcmFibGUsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEyLmlzTXVsdGk7IC8vIHNpbmdsZSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIE5PVCBjbGVhcmFibGVcbiAgICAvLyBtdWx0aSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIGNsZWFyYWJsZVxuXG4gICAgaWYgKGlzQ2xlYXJhYmxlID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgfTtcblxuICBfcHJvdG8uaXNPcHRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy5pc09wdGlvbkRpc2FibGVkID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIDogZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmlzT3B0aW9uU2VsZWN0ZWQgPSBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChzZWxlY3RWYWx1ZS5pbmRleE9mKG9wdGlvbikgPiAtMSkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuaXNPcHRpb25TZWxlY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgY2FuZGlkYXRlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgIHJldHVybiBzZWxlY3RWYWx1ZS5zb21lKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLmdldE9wdGlvblZhbHVlKGkpID09PSBjYW5kaWRhdGU7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbHRlck9wdGlvbiA9IGZ1bmN0aW9uIGZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24gPyB0aGlzLnByb3BzLmZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIDogdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiBmb3JtYXRPcHRpb25MYWJlbChkYXRhLCBjb250ZXh0KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmZvcm1hdE9wdGlvbkxhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbChkYXRhLCB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgIHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0R3JvdXBMYWJlbCA9IGZ1bmN0aW9uIGZvcm1hdEdyb3VwTGFiZWwoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE1vdXNlIEhhbmRsZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBfcHJvdG8uc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbiA9IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbiA9IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIHRoaXMub25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFRvdWNoIEhhbmRsZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBfcHJvdG8uc3RhcnRMaXN0ZW5pbmdUb1RvdWNoID0gZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zdG9wTGlzdGVuaW5nVG9Ub3VjaCA9IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSZW5kZXJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIF9wcm90by5jb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2UgPSBmdW5jdGlvbiBjb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2UoKSB7XG4gICAgdmFyIF90aGlzJHN0YXRlNyA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGFyaWFMaXZlQ29udGV4dCA9IF90aGlzJHN0YXRlNy5hcmlhTGl2ZUNvbnRleHQsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU3LnNlbGVjdFZhbHVlLFxuICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTcuZm9jdXNlZFZhbHVlLFxuICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGU3LmZvY3VzZWRPcHRpb247XG4gICAgdmFyIF90aGlzJHByb3BzMTMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvcHRpb25zID0gX3RoaXMkcHJvcHMxMy5vcHRpb25zLFxuICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHMxMy5tZW51SXNPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMxMy5pbnB1dFZhbHVlLFxuICAgICAgICBzY3JlZW5SZWFkZXJTdGF0dXMgPSBfdGhpcyRwcm9wczEzLnNjcmVlblJlYWRlclN0YXR1czsgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSBpbiB0aGUgc2VsZWN0LlxuXG4gICAgdmFyIGZvY3VzZWRWYWx1ZU1zZyA9IGZvY3VzZWRWYWx1ZSA/IHZhbHVlRm9jdXNBcmlhTWVzc2FnZSh7XG4gICAgICBmb2N1c2VkVmFsdWU6IGZvY3VzZWRWYWx1ZSxcbiAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG4gICAgfSkgOiAnJzsgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24gaW4gdGhlIHNlbGVjdC5cblxuICAgIHZhciBmb2N1c2VkT3B0aW9uTXNnID0gZm9jdXNlZE9wdGlvbiAmJiBtZW51SXNPcGVuID8gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZSh7XG4gICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgZ2V0T3B0aW9uTGFiZWw6IHRoaXMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSkgOiAnJzsgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBzZXQgb2YgZm9jdXNhYmxlIHJlc3VsdHMgYW5kIGN1cnJlbnQgc2VhcmNodGVybS9pbnB1dHZhbHVlLlxuXG4gICAgdmFyIHJlc3VsdHNNc2cgPSByZXN1bHRzQXJpYU1lc3NhZ2Uoe1xuICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgIHNjcmVlblJlYWRlck1lc3NhZ2U6IHNjcmVlblJlYWRlclN0YXR1cyh7XG4gICAgICAgIGNvdW50OiB0aGlzLmNvdW50T3B0aW9ucygpXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c2VkVmFsdWVNc2cgKyBcIiBcIiArIGZvY3VzZWRPcHRpb25Nc2cgKyBcIiBcIiArIHJlc3VsdHNNc2cgKyBcIiBcIiArIGFyaWFMaXZlQ29udGV4dDtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVySW5wdXQgPSBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMxNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE0LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzMTQuaXNTZWFyY2hhYmxlLFxuICAgICAgICBpbnB1dElkID0gX3RoaXMkcHJvcHMxNC5pbnB1dElkLFxuICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMxNC5pbnB1dFZhbHVlLFxuICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzMTQudGFiSW5kZXg7XG4gICAgdmFyIElucHV0ID0gdGhpcy5jb21wb25lbnRzLklucHV0O1xuICAgIHZhciBpbnB1dElzSGlkZGVuID0gdGhpcy5zdGF0ZS5pbnB1dElzSGlkZGVuO1xuICAgIHZhciBpZCA9IGlucHV0SWQgfHwgdGhpcy5nZXRFbGVtZW50SWQoJ2lucHV0Jyk7IC8vIGFyaWEgYXR0cmlidXRlcyBtYWtlcyB0aGUgSlNYIFwibm9pc3lcIiwgc2VwYXJhdGVkIGZvciBjbGFyaXR5XG5cbiAgICB2YXIgYXJpYUF0dHJpYnV0ZXMgPSB7XG4gICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXVxuICAgIH07XG5cbiAgICBpZiAoIWlzU2VhcmNoYWJsZSkge1xuICAgICAgLy8gdXNlIGEgZHVtbXkgaW5wdXQgdG8gbWFpbnRhaW4gZm9jdXMvYmx1ciBmdW5jdGlvbmFsaXR5XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEdW1teUlucHV0LCBfZXh0ZW5kcyQ0KHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLFxuICAgICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzLFxuICAgICAgICBjeCA9IF90aGlzJGNvbW1vblByb3BzLmN4LFxuICAgICAgICB0aGVtZSA9IF90aGlzJGNvbW1vblByb3BzLnRoZW1lLFxuICAgICAgICBzZWxlY3RQcm9wcyA9IF90aGlzJGNvbW1vblByb3BzLnNlbGVjdFByb3BzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfZXh0ZW5kcyQ0KHtcbiAgICAgIGF1dG9DYXBpdGFsaXplOiBcIm5vbmVcIixcbiAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgIGF1dG9Db3JyZWN0OiBcIm9mZlwiLFxuICAgICAgY3g6IGN4LFxuICAgICAgZ2V0U3R5bGVzOiB0aGlzLmdldFN0eWxlcyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzSGlkZGVuOiBpbnB1dElzSGlkZGVuLFxuICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wcyxcbiAgICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgdmFsdWU6IGlucHV0VmFsdWVcbiAgICB9LCBhcmlhQXR0cmlidXRlcykpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUgPSBmdW5jdGlvbiByZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgTXVsdGlWYWx1ZSA9IF90aGlzJGNvbXBvbmVudHMuTXVsdGlWYWx1ZSxcbiAgICAgICAgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IF90aGlzJGNvbXBvbmVudHMuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgTXVsdGlWYWx1ZUxhYmVsID0gX3RoaXMkY29tcG9uZW50cy5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgIE11bHRpVmFsdWVSZW1vdmUgPSBfdGhpcyRjb21wb25lbnRzLk11bHRpVmFsdWVSZW1vdmUsXG4gICAgICAgIFNpbmdsZVZhbHVlID0gX3RoaXMkY29tcG9uZW50cy5TaW5nbGVWYWx1ZSxcbiAgICAgICAgUGxhY2Vob2xkZXIgPSBfdGhpcyRjb21wb25lbnRzLlBsYWNlaG9sZGVyO1xuICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgdmFyIF90aGlzJHByb3BzMTUgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfdGhpcyRwcm9wczE1LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTUuaXNEaXNhYmxlZCxcbiAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMTUuaXNNdWx0aSxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTUuaW5wdXRWYWx1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczE1LnBsYWNlaG9sZGVyO1xuICAgIHZhciBfdGhpcyRzdGF0ZTggPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlOC5zZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU4LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGU4LmlzRm9jdXNlZDtcblxuICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpIHx8ICFjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUpIHtcbiAgICAgIHJldHVybiBpbnB1dFZhbHVlID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgdmFyIHNlbGVjdFZhbHVlcyA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpbmRleCkge1xuICAgICAgICB2YXIgaXNPcHRpb25Gb2N1c2VkID0gb3B0ID09PSBmb2N1c2VkVmFsdWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE11bHRpVmFsdWUsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICAgICAgTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICAgIFJlbW92ZTogTXVsdGlWYWx1ZVJlbW92ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc09wdGlvbkZvY3VzZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBrZXk6IF90aGlzNC5nZXRPcHRpb25WYWx1ZShvcHQpLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICByZW1vdmVQcm9wczoge1xuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiBvcHRcbiAgICAgICAgfSksIF90aGlzNC5mb3JtYXRPcHRpb25MYWJlbChvcHQsICd2YWx1ZScpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlcztcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNpbmdsZVZhbHVlID0gc2VsZWN0VmFsdWVbMF07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlVmFsdWUsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBkYXRhOiBzaW5nbGVWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICB9KSwgdGhpcy5mb3JtYXRPcHRpb25MYWJlbChzaW5nbGVWYWx1ZSwgJ3ZhbHVlJykpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIHJlbmRlckNsZWFySW5kaWNhdG9yKCkge1xuICAgIHZhciBDbGVhckluZGljYXRvciA9IHRoaXMuY29tcG9uZW50cy5DbGVhckluZGljYXRvcjtcbiAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgIHZhciBfdGhpcyRwcm9wczE2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTYuaXNEaXNhYmxlZCxcbiAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxNi5pc0xvYWRpbmc7XG4gICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG4gICAgaWYgKCF0aGlzLmlzQ2xlYXJhYmxlKCkgfHwgIUNsZWFySW5kaWNhdG9yIHx8IGlzRGlzYWJsZWQgfHwgIXRoaXMuaGFzVmFsdWUoKSB8fCBpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgb25Nb3VzZURvd246IHRoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bixcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25DbGVhckluZGljYXRvclRvdWNoRW5kLFxuICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDbGVhckluZGljYXRvciwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSB7XG4gICAgdmFyIExvYWRpbmdJbmRpY2F0b3IgPSB0aGlzLmNvbXBvbmVudHMuTG9hZGluZ0luZGljYXRvcjtcbiAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgIHZhciBfdGhpcyRwcm9wczE3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTcuaXNEaXNhYmxlZCxcbiAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxNy5pc0xvYWRpbmc7XG4gICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgIGlmICghTG9hZGluZ0luZGljYXRvciB8fCAhaXNMb2FkaW5nKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0luZGljYXRvciwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckluZGljYXRvclNlcGFyYXRvciA9IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvclNlcGFyYXRvcigpIHtcbiAgICB2YXIgX3RoaXMkY29tcG9uZW50czIgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgIERyb3Bkb3duSW5kaWNhdG9yID0gX3RoaXMkY29tcG9uZW50czIuRHJvcGRvd25JbmRpY2F0b3IsXG4gICAgICAgIEluZGljYXRvclNlcGFyYXRvciA9IF90aGlzJGNvbXBvbmVudHMyLkluZGljYXRvclNlcGFyYXRvcjsgLy8gc2VwYXJhdG9yIGRvZXNuJ3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBkcm9wZG93biBpbmRpY2F0b3JcblxuICAgIGlmICghRHJvcGRvd25JbmRpY2F0b3IgfHwgIUluZGljYXRvclNlcGFyYXRvcikgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yU2VwYXJhdG9yLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkge1xuICAgIHZhciBEcm9wZG93bkluZGljYXRvciA9IHRoaXMuY29tcG9uZW50cy5Ecm9wZG93bkluZGljYXRvcjtcbiAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICBvblRvdWNoRW5kOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JUb3VjaEVuZCxcbiAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25JbmRpY2F0b3IsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJNZW51ID0gZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRjb21wb25lbnRzMyA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgR3JvdXAgPSBfdGhpcyRjb21wb25lbnRzMy5Hcm91cCxcbiAgICAgICAgR3JvdXBIZWFkaW5nID0gX3RoaXMkY29tcG9uZW50czMuR3JvdXBIZWFkaW5nLFxuICAgICAgICBNZW51ID0gX3RoaXMkY29tcG9uZW50czMuTWVudSxcbiAgICAgICAgTWVudUxpc3QgPSBfdGhpcyRjb21wb25lbnRzMy5NZW51TGlzdCxcbiAgICAgICAgTWVudVBvcnRhbCA9IF90aGlzJGNvbXBvbmVudHMzLk1lbnVQb3J0YWwsXG4gICAgICAgIExvYWRpbmdNZXNzYWdlID0gX3RoaXMkY29tcG9uZW50czMuTG9hZGluZ01lc3NhZ2UsXG4gICAgICAgIE5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRjb21wb25lbnRzMy5Ob09wdGlvbnNNZXNzYWdlLFxuICAgICAgICBPcHRpb24gPSBfdGhpcyRjb21wb25lbnRzMy5PcHRpb247XG4gICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICB2YXIgX3RoaXMkc3RhdGU5ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlOS5mb2N1c2VkT3B0aW9uLFxuICAgICAgICBtZW51T3B0aW9ucyA9IF90aGlzJHN0YXRlOS5tZW51T3B0aW9ucztcbiAgICB2YXIgX3RoaXMkcHJvcHMxOCA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsID0gX3RoaXMkcHJvcHMxOC5jYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTguaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxOC5pc0xvYWRpbmcsXG4gICAgICAgIGxvYWRpbmdNZXNzYWdlID0gX3RoaXMkcHJvcHMxOC5sb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgbWluTWVudUhlaWdodCA9IF90aGlzJHByb3BzMTgubWluTWVudUhlaWdodCxcbiAgICAgICAgbWF4TWVudUhlaWdodCA9IF90aGlzJHByb3BzMTgubWF4TWVudUhlaWdodCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMTgubWVudUlzT3BlbixcbiAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzMTgubWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uID0gX3RoaXMkcHJvcHMxOC5tZW51UG9zaXRpb24sXG4gICAgICAgIG1lbnVQb3J0YWxUYXJnZXQgPSBfdGhpcyRwcm9wczE4Lm1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgIG1lbnVTaG91bGRCbG9ja1Njcm9sbCA9IF90aGlzJHByb3BzMTgubWVudVNob3VsZEJsb2NrU2Nyb2xsLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wczE4Lm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyxcbiAgICAgICAgbm9PcHRpb25zTWVzc2FnZSA9IF90aGlzJHByb3BzMTgubm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgb25NZW51U2Nyb2xsVG9Ub3AgPSBfdGhpcyRwcm9wczE4Lm9uTWVudVNjcm9sbFRvVG9wLFxuICAgICAgICBvbk1lbnVTY3JvbGxUb0JvdHRvbSA9IF90aGlzJHByb3BzMTgub25NZW51U2Nyb2xsVG9Cb3R0b207XG4gICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm4gbnVsbDsgLy8gVE9ETzogSW50ZXJuYWwgT3B0aW9uIFR5cGUgaGVyZVxuXG4gICAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcykge1xuICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlLCB0aGUgbWVudSBvcHRpb25zIGluIHN0YXRlIGFyZW4ndCBjaGFuZ2VkIHdoZW4gdGhlXG4gICAgICAvLyBmb2N1c2VkIG9wdGlvbiBjaGFuZ2VzIHNvIHdlIGNhbGN1bGF0ZSBhZGRpdGlvbmFsIHByb3BzIGJhc2VkIG9uIHRoYXRcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSBmb2N1c2VkT3B0aW9uID09PSBwcm9wcy5kYXRhO1xuICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpc0ZvY3VzZWQgPyBfdGhpczUuZ2V0Rm9jdXNlZE9wdGlvblJlZiA6IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIHByb3BzLCB7XG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSwgX3RoaXM1LmZvcm1hdE9wdGlvbkxhYmVsKHByb3BzLmRhdGEsICdtZW51JykpO1xuICAgIH07XG5cbiAgICB2YXIgbWVudVVJO1xuXG4gICAgaWYgKHRoaXMuaGFzT3B0aW9ucygpKSB7XG4gICAgICBtZW51VUkgPSBtZW51T3B0aW9ucy5yZW5kZXIubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgZ3JvdXAgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQyKGl0ZW0sIFtcInR5cGVcIl0pO1xuXG4gICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IGl0ZW0ua2V5ICsgXCItaGVhZGluZ1wiO1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdyb3VwLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywgZ3JvdXAsIHtcbiAgICAgICAgICAgIEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgICAgICAgICAgIGhlYWRpbmdQcm9wczoge1xuICAgICAgICAgICAgICBpZDogaGVhZGluZ0lkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWw6IF90aGlzNS5mb3JtYXRHcm91cExhYmVsKGl0ZW0uZGF0YSlcbiAgICAgICAgICB9KSwgaXRlbS5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKG9wdGlvbik7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ29wdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTG9hZGluZykge1xuICAgICAgdmFyIG1lc3NhZ2UgPSBsb2FkaW5nTWVzc2FnZSh7XG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0pO1xuICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgbWVudVVJID0gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nTWVzc2FnZSwgY29tbW9uUHJvcHMsIG1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX21lc3NhZ2UgPSBub09wdGlvbnNNZXNzYWdlKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfbWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICBtZW51VUkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE5vT3B0aW9uc01lc3NhZ2UsIGNvbW1vblByb3BzLCBfbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdmFyIG1lbnVQbGFjZW1lbnRQcm9wcyA9IHtcbiAgICAgIG1pbk1lbnVIZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICBtYXhNZW51SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXdcbiAgICB9O1xuICAgIHZhciBtZW51RWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudVBsYWNlciwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcyksIGZ1bmN0aW9uIChfcmVmOCkge1xuICAgICAgdmFyIHJlZiA9IF9yZWY4LnJlZixcbiAgICAgICAgICBfcmVmOCRwbGFjZXJQcm9wcyA9IF9yZWY4LnBsYWNlclByb3BzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF9yZWY4JHBsYWNlclByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmOCRwbGFjZXJQcm9wcy5tYXhIZWlnaHQ7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzLCB7XG4gICAgICAgIGlubmVyUmVmOiByZWYsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBvbk1vdXNlRG93bjogX3RoaXM1Lm9uTWVudU1vdXNlRG93bixcbiAgICAgICAgICBvbk1vdXNlTW92ZTogX3RoaXM1Lm9uTWVudU1vdXNlTW92ZVxuICAgICAgICB9LFxuICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbENhcHRvclN3aXRjaCwge1xuICAgICAgICBpc0VuYWJsZWQ6IGNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICBvblRvcEFycml2ZTogb25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgIG9uQm90dG9tQXJyaXZlOiBvbk1lbnVTY3JvbGxUb0JvdHRvbVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxCbG9jaywge1xuICAgICAgICBpc0VuYWJsZWQ6IG1lbnVTaG91bGRCbG9ja1Njcm9sbFxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IF90aGlzNS5nZXRNZW51TGlzdFJlZixcbiAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICB9KSwgbWVudVVJKSkpKTtcbiAgICB9KTsgLy8gcG9zaXRpb25pbmcgYmVoYXZpb3VyIGlzIGFsbW9zdCBpZGVudGljYWwgZm9yIHBvcnRhbGxlZCBhbmQgZml4ZWQsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBzYW1lIGNvbXBvbmVudC4gdGhlIGFjdHVhbCBwb3J0YWxsaW5nIGxvZ2ljIGlzIGZvcmtlZFxuICAgIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IGJhc2VkIG9uIGBtZW51UG9zaXRpb25gXG5cbiAgICByZXR1cm4gbWVudVBvcnRhbFRhcmdldCB8fCBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQb3J0YWwsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBhcHBlbmRUbzogbWVudVBvcnRhbFRhcmdldCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiB0aGlzLmNvbnRyb2xSZWYsXG4gICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb25cbiAgICB9KSwgbWVudUVsZW1lbnQpIDogbWVudUVsZW1lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckZvcm1GaWVsZCA9IGZ1bmN0aW9uIHJlbmRlckZvcm1GaWVsZCgpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wczE5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGVsaW1pdGVyID0gX3RoaXMkcHJvcHMxOS5kZWxpbWl0ZXIsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE5LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczE5LmlzTXVsdGksXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczE5Lm5hbWU7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICBpZiAoIW5hbWUgfHwgaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgIGlmIChkZWxpbWl0ZXIpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM2LmdldE9wdGlvblZhbHVlKG9wdCk7XG4gICAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHNlbGVjdFZhbHVlLmxlbmd0aCA+IDAgPyBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAga2V5OiBcImktXCIgKyBpLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3RoaXM2LmdldE9wdGlvblZhbHVlKG9wdClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogXCJoaWRkZW5cIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgaW5wdXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3ZhbHVlMiA9IHNlbGVjdFZhbHVlWzBdID8gdGhpcy5nZXRPcHRpb25WYWx1ZShzZWxlY3RWYWx1ZVswXSkgOiAnJztcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgIHZhbHVlOiBfdmFsdWUyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckxpdmVSZWdpb24gPSBmdW5jdGlvbiByZW5kZXJMaXZlUmVnaW9uKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEExMXlUZXh0LCB7XG4gICAgICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgICAgaWQ6IFwiYXJpYS1zZWxlY3Rpb24tZXZlbnRcIlxuICAgIH0sIFwiXFx4QTBcIiwgdGhpcy5zdGF0ZS5hcmlhTGl2ZVNlbGVjdGlvbiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgIGlkOiBcImFyaWEtY29udGV4dFwiXG4gICAgfSwgXCJcXHhBMFwiLCB0aGlzLmNvbnN0cnVjdEFyaWFMaXZlTWVzc2FnZSgpKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkY29tcG9uZW50czQgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgIENvbnRyb2wgPSBfdGhpcyRjb21wb25lbnRzNC5Db250cm9sLFxuICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyID0gX3RoaXMkY29tcG9uZW50czQuSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgICAgICAgU2VsZWN0Q29udGFpbmVyID0gX3RoaXMkY29tcG9uZW50czQuU2VsZWN0Q29udGFpbmVyLFxuICAgICAgICBWYWx1ZUNvbnRhaW5lciA9IF90aGlzJGNvbXBvbmVudHM0LlZhbHVlQ29udGFpbmVyO1xuICAgIHZhciBfdGhpcyRwcm9wczIwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyMC5jbGFzc05hbWUsXG4gICAgICAgIGlkID0gX3RoaXMkcHJvcHMyMC5pZCxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMjAuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMjAubWVudUlzT3BlbjtcbiAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyA9IHRoaXMuZ2V0Q29tbW9uUHJvcHMoKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RDb250YWluZXIsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duXG4gICAgICB9LFxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgfSksIHRoaXMucmVuZGVyTGl2ZVJlZ2lvbigpLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRyb2wsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBpbm5lclJlZjogdGhpcy5nZXRDb250cm9sUmVmLFxuICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNvbnRyb2xNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Db250cm9sVG91Y2hFbmRcbiAgICAgIH0sXG4gICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsdWVDb250YWluZXIsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgfSksIHRoaXMucmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCksIHRoaXMucmVuZGVySW5wdXQoKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yc0NvbnRhaW5lciwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICB9KSwgdGhpcy5yZW5kZXJDbGVhckluZGljYXRvcigpLCB0aGlzLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSwgdGhpcy5yZW5kZXJEcm9wZG93bkluZGljYXRvcigpKSksIHRoaXMucmVuZGVyTWVudSgpLCB0aGlzLnJlbmRlckZvcm1GaWVsZCgpKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0O1xufShDb21wb25lbnQpO1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBTZWxlY3QgYXMgUywgZGVmYXVsdFRoZW1lIGFzIGEsIGNyZWF0ZUZpbHRlciBhcyBjLCBkZWZhdWx0UHJvcHMgYXMgZCwgbWVyZ2VTdHlsZXMgYXMgbSB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMsIENsYXNzTmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZyBhcyBnZXRCb3VuZGluZ0NsaWVudE9iaiwgYSBhcyBnZXRTY3JvbGxQYXJlbnQsIGIgYXMgZ2V0U2Nyb2xsVG9wLCBjIGFzIGFuaW1hdGVkU2Nyb2xsVG8sIHMgYXMgc2Nyb2xsVG8gfSBmcm9tICcuL3V0aWxzLTA2YjBkNWE0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCBfY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgQXV0b3NpemVJbnB1dCBmcm9tICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuZnVuY3Rpb24gZ2V0TWVudVBsYWNlbWVudChfcmVmKSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmLm1heEhlaWdodCxcbiAgICAgIG1lbnVFbCA9IF9yZWYubWVudUVsLFxuICAgICAgbWluSGVpZ2h0ID0gX3JlZi5taW5IZWlnaHQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgIHNob3VsZFNjcm9sbCA9IF9yZWYuc2hvdWxkU2Nyb2xsLFxuICAgICAgaXNGaXhlZFBvc2l0aW9uID0gX3JlZi5pc0ZpeGVkUG9zaXRpb24sXG4gICAgICB0aGVtZSA9IF9yZWYudGhlbWU7XG4gIHZhciBzcGFjaW5nID0gdGhlbWUuc3BhY2luZztcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChtZW51RWwpO1xuICB2YXIgZGVmYXVsdFN0YXRlID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgfTsgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiBkZWZhdWx0IHN0YXRlXG5cbiAgaWYgKCFtZW51RWwgfHwgIW1lbnVFbC5vZmZzZXRQYXJlbnQpIHJldHVybiBkZWZhdWx0U3RhdGU7IC8vIHdlIGNhbid0IHRydXN0IGBzY3JvbGxQYXJlbnQuc2Nyb2xsSGVpZ2h0YCAtLT4gaXQgbWF5IGluY3JlYXNlIHdoZW5cbiAgLy8gdGhlIG1lbnUgaXMgcmVuZGVyZWRcblxuICB2YXIgX3Njcm9sbFBhcmVudCRnZXRCb3VuID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3Njcm9sbFBhcmVudCRnZXRCb3VuLmhlaWdodDtcblxuICB2YXIgX21lbnVFbCRnZXRCb3VuZGluZ0NsID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgbWVudUJvdHRvbSA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5ib3R0b20sXG4gICAgICBtZW51SGVpZ2h0ID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmhlaWdodCxcbiAgICAgIG1lbnVUb3AgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wudG9wO1xuXG4gIHZhciBfbWVudUVsJG9mZnNldFBhcmVudCQgPSBtZW51RWwub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyVG9wID0gX21lbnVFbCRvZmZzZXRQYXJlbnQkLnRvcDtcblxuICB2YXIgdmlld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbFRvcChzY3JvbGxQYXJlbnQpO1xuICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpbkJvdHRvbSwgMTApO1xuICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpblRvcCwgMTApO1xuICB2YXIgdmlld1NwYWNlQWJvdmUgPSBjb250YWluZXJUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciB2aWV3U3BhY2VCZWxvdyA9IHZpZXdIZWlnaHQgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VBYm92ZSA9IHZpZXdTcGFjZUFib3ZlICsgc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VCZWxvdyA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxEb3duID0gbWVudUJvdHRvbSAtIHZpZXdIZWlnaHQgKyBzY3JvbGxUb3AgKyBtYXJnaW5Cb3R0b207XG4gIHZhciBzY3JvbGxVcCA9IHNjcm9sbFRvcCArIG1lbnVUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciBzY3JvbGxEdXJhdGlvbiA9IDE2MDtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuXG5cbiAgICAgIGlmIChzY3JvbGxTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcblxuXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUJlbG93ID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQmVsb3cgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9IC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG5cblxuICAgICAgICB2YXIgY29uc3RyYWluZWRIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbSA6IHNjcm9sbFNwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b207XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDQuIEZvcmtlZCBiZXZpb3VyIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGJlbG93XG4gICAgICAvLyBBVVRPOiBmbGlwIHRoZSBtZW51LCByZW5kZXIgYWJvdmVcblxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYXV0bycgfHwgaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIGJlIGNvbnN0cmFpbmVkIGFmdGVyIGZsaXBwaW5nXG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHZhciBzcGFjZUFib3ZlID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgOiBzY3JvbGxTcGFjZUFib3ZlO1xuXG4gICAgICAgIGlmIChzcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodCA9IE1hdGgubWluKHNwYWNlQWJvdmUgLSBtYXJnaW5Cb3R0b20gLSBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsIG1heEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gQk9UVE9NOiBhbGxvdyBicm93c2VyIHRvIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSBhbmQgaW1tZWRpYXRlbHkgc2V0IHNjcm9sbFxuXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93bik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvcCc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuXG5cbiAgICAgIGlmIChzY3JvbGxTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG5cblxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IG1heEhlaWdodDsgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cblxuICAgICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIC0gbWFyZ2luVG9wIDogc2Nyb2xsU3BhY2VBYm92ZSAtIG1hcmdpblRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodDJcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gNC4gbm90IGVub3VnaCBzcGFjZSwgdGhlIGJyb3dzZXIgV0lMTCBOT1QgaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIHdoZW5cbiAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50IHJlbmRlcmVkIGFib3ZlIHRoZSB2aWV3cG9ydCAob25seSBiZWxvdykuXG4gICAgICAvLyBGbGlwIHRoZSBtZW51LCByZW5kZXIgYmVsb3dcblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCBwcm92aWRlZCBcXFwiXCIgKyBwbGFjZW1lbnQgKyBcIlxcXCIuXCIpO1xuICB9IC8vIGZ1bGZpbCBjb250cmFjdCB3aXRoIGZsb3c6IGltcGxpY2l0IHJldHVybiB2YWx1ZSBvZiB1bmRlZmluZWRcblxuXG4gIHJldHVybiBkZWZhdWx0U3RhdGU7XG59IC8vIE1lbnUgQ29tcG9uZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSB7XG4gIHZhciBwbGFjZW1lbnRUb0NTU1Byb3AgPSB7XG4gICAgYm90dG9tOiAndG9wJyxcbiAgICB0b3A6ICdib3R0b20nXG4gIH07XG4gIHJldHVybiBwbGFjZW1lbnQgPyBwbGFjZW1lbnRUb0NTU1Byb3BbcGxhY2VtZW50XSA6ICdib3R0b20nO1xufVxuXG52YXIgY29lcmNlUGxhY2VtZW50ID0gZnVuY3Rpb24gY29lcmNlUGxhY2VtZW50KHApIHtcbiAgcmV0dXJuIHAgPT09ICdhdXRvJyA/ICdib3R0b20nIDogcDtcbn07XG5cbnZhciBtZW51Q1NTID0gZnVuY3Rpb24gbWVudUNTUyhfcmVmMikge1xuICB2YXIgX3JlZjM7XG5cbiAgdmFyIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIF9yZWYyJHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBzcGFjaW5nID0gX3JlZjIkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9yZWYzID0ge1xuICAgIGxhYmVsOiAnbWVudSdcbiAgfSwgX3JlZjNbYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KV0gPSAnMTAwJScsIF9yZWYzLmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5uZXV0cmFsMCwgX3JlZjMuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzLCBfcmVmMy5ib3hTaGFkb3cgPSAnMCAwIDAgMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpLCAwIDRweCAxMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpJywgX3JlZjMubWFyZ2luQm90dG9tID0gc3BhY2luZy5tZW51R3V0dGVyLCBfcmVmMy5tYXJnaW5Ub3AgPSBzcGFjaW5nLm1lbnVHdXR0ZXIsIF9yZWYzLnBvc2l0aW9uID0gJ2Fic29sdXRlJywgX3JlZjMud2lkdGggPSAnMTAwJScsIF9yZWYzLnpJbmRleCA9IDEsIF9yZWYzO1xufTsgLy8gTk9URTogaW50ZXJuYWwgb25seVxuXG52YXIgTWVudVBsYWNlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShNZW51UGxhY2VyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW51UGxhY2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbWF4SGVpZ2h0OiBfdGhpcy5wcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLmdldFBsYWNlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcbiAgICAgIHZhciBnZXRQb3J0YWxQbGFjZW1lbnQgPSBfdGhpcy5jb250ZXh0LmdldFBvcnRhbFBsYWNlbWVudDtcbiAgICAgIGlmICghcmVmKSByZXR1cm47IC8vIERPIE5PVCBzY3JvbGwgaWYgcG9zaXRpb24gaXMgZml4ZWRcblxuICAgICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgJiYgIWlzRml4ZWRQb3NpdGlvbjtcbiAgICAgIHZhciBzdGF0ZSA9IGdldE1lbnVQbGFjZW1lbnQoe1xuICAgICAgICBtYXhIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVFbDogcmVmLFxuICAgICAgICBtaW5IZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIHBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgc2hvdWxkU2Nyb2xsOiBzaG91bGRTY3JvbGwsXG4gICAgICAgIGlzRml4ZWRQb3NpdGlvbjogaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH0pO1xuICAgICAgaWYgKGdldFBvcnRhbFBsYWNlbWVudCkgZ2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRVcGRhdGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudVBsYWNlbWVudCA9IF90aGlzLnByb3BzLm1lbnVQbGFjZW1lbnQ7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3RoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIG1heEhlaWdodDogX3RoaXMuc3RhdGUubWF4SGVpZ2h0XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1lbnVQbGFjZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgcmVmOiB0aGlzLmdldFBsYWNlbWVudCxcbiAgICAgIHBsYWNlclByb3BzOiB0aGlzLmdldFVwZGF0ZWRQcm9wcygpXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1lbnVQbGFjZXI7XG59KENvbXBvbmVudCk7XG5NZW51UGxhY2VyLmNvbnRleHRUeXBlcyA9IHtcbiAgZ2V0UG9ydGFsUGxhY2VtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIE1lbnUgPSBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ21lbnUnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBtZW51OiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzLCB7XG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSwgY2hpbGRyZW4pO1xufTtcbi8vIE1lbnUgTGlzdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBtZW51TGlzdENTUyA9IGZ1bmN0aW9uIG1lbnVMaXN0Q1NTKF9yZWY0KSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmNC5tYXhIZWlnaHQsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY0LnRoZW1lLnNwYWNpbmcuYmFzZVVuaXQ7XG4gIHJldHVybiB7XG4gICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgcGFkZGluZ0JvdHRvbTogYmFzZVVuaXQsXG4gICAgcGFkZGluZ1RvcDogYmFzZVVuaXQsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLy8gcmVxdWlyZWQgZm9yIG9mZnNldFtIZWlnaHQsIFRvcF0gPiBrZXlib2FyZCBzY3JvbGxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJ1xuICB9O1xufTtcbnZhciBNZW51TGlzdCA9IGZ1bmN0aW9uIE1lbnVMaXN0KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZjtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ21lbnVMaXN0JywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbGlzdCc6IHRydWUsXG4gICAgICAnbWVudS1saXN0LS1pcy1tdWx0aSc6IGlzTXVsdGlcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgY2hpbGRyZW4pO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IE5vdGljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbm90aWNlQ1NTID0gZnVuY3Rpb24gbm90aWNlQ1NTKF9yZWY1KSB7XG4gIHZhciBfcmVmNSR0aGVtZSA9IF9yZWY1LnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMiArIFwicHggXCIgKyBiYXNlVW5pdCAqIDMgKyBcInB4XCIsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9O1xufTtcblxudmFyIG5vT3B0aW9uc01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgbG9hZGluZ01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgTm9PcHRpb25zTWVzc2FnZSA9IGZ1bmN0aW9uIE5vT3B0aW9uc01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdub09wdGlvbnNNZXNzYWdlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICdtZW51LW5vdGljZS0tbm8tb3B0aW9ucyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuTm9PcHRpb25zTWVzc2FnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAnTm8gb3B0aW9ucydcbn07XG52YXIgTG9hZGluZ01lc3NhZ2UgPSBmdW5jdGlvbiBMb2FkaW5nTWVzc2FnZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2xvYWRpbmdNZXNzYWdlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICdtZW51LW5vdGljZS0tbG9hZGluZyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuTG9hZGluZ01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY2KSB7XG4gIHZhciByZWN0ID0gX3JlZjYucmVjdCxcbiAgICAgIG9mZnNldCA9IF9yZWY2Lm9mZnNldCxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjYucG9zaXRpb247XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICB0b3A6IG9mZnNldCxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICB6SW5kZXg6IDFcbiAgfTtcbn07XG52YXIgTWVudVBvcnRhbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWVudVBvcnRhbCwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIE1lbnVQb3J0YWwoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIF90aGlzMiA9IF9Db21wb25lbnQyLmNhbGwuYXBwbHkoX0NvbXBvbmVudDIsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzMi5nZXRQb3J0YWxQbGFjZW1lbnQgPSBmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfcmVmNy5wbGFjZW1lbnQ7XG4gICAgICB2YXIgaW5pdGlhbFBsYWNlbWVudCA9IGNvZXJjZVBsYWNlbWVudChfdGhpczIucHJvcHMubWVudVBsYWNlbWVudCk7IC8vIGF2b2lkIHJlLXJlbmRlcnMgaWYgdGhlIHBsYWNlbWVudCBoYXMgbm90IGNoYW5nZWRcblxuICAgICAgaWYgKHBsYWNlbWVudCAhPT0gaW5pdGlhbFBsYWNlbWVudCkge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBNZW51UG9ydGFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UG9ydGFsUGxhY2VtZW50OiB0aGlzLmdldFBvcnRhbFBsYWNlbWVudFxuICAgIH07XG4gIH0gLy8gY2FsbGJhY2sgZm9yIG9jY2Fzc2lvbnMgd2hlcmUgdGhlIG1lbnUgbXVzdCBcImZsaXBcIlxuICA7XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFwcGVuZFRvID0gX3RoaXMkcHJvcHMyLmFwcGVuZFRvLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgY29udHJvbEVsZW1lbnQgPSBfdGhpcyRwcm9wczIuY29udHJvbEVsZW1lbnQsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczIubWVudVBsYWNlbWVudCxcbiAgICAgICAgcG9zaXRpb24gPSBfdGhpcyRwcm9wczIubWVudVBvc2l0aW9uLFxuICAgICAgICBnZXRTdHlsZXMgPSBfdGhpcyRwcm9wczIuZ2V0U3R5bGVzO1xuICAgIHZhciBpc0ZpeGVkID0gcG9zaXRpb24gPT09ICdmaXhlZCc7IC8vIGJhaWwgZWFybHkgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlbid0IHByZXNlbnRcblxuICAgIGlmICghYXBwZW5kVG8gJiYgIWlzRml4ZWQgfHwgIWNvbnRyb2xFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcGxhY2VtZW50ID0gdGhpcy5zdGF0ZS5wbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpO1xuICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRPYmooY29udHJvbEVsZW1lbnQpO1xuICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9IGlzRml4ZWQgPyAwIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBvZmZzZXQgPSByZWN0W3BsYWNlbWVudF0gKyBzY3JvbGxEaXN0YW5jZTtcbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIHJlY3Q6IHJlY3RcbiAgICB9OyAvLyBzYW1lIHdyYXBwZXIgZWxlbWVudCB3aGV0aGVyIGZpeGVkIG9yIHBvcnRhbGxlZFxuXG4gICAgdmFyIG1lbnVXcmFwcGVyID0ganN4KFwiZGl2XCIsIHtcbiAgICAgIGNzczogZ2V0U3R5bGVzKCdtZW51UG9ydGFsJywgc3RhdGUpXG4gICAgfSwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBhcHBlbmRUbyA/IGNyZWF0ZVBvcnRhbChtZW51V3JhcHBlciwgYXBwZW5kVG8pIDogbWVudVdyYXBwZXI7XG4gIH07XG5cbiAgcmV0dXJuIE1lbnVQb3J0YWw7XG59KENvbXBvbmVudCk7XG5NZW51UG9ydGFsLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBnZXRQb3J0YWxQbGFjZW1lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIga2V5TGlzdCA9IE9iamVjdC5rZXlzO1xudmFyIGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIC8vIGZhc3QtZGVlcC1lcXVhbCBpbmRleC5qcyAyLjAuMVxuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIHZhciBhcnJBID0gaXNBcnJheShhKSxcbiAgICAgICAgYXJyQiA9IGlzQXJyYXkoYiksXG4gICAgICAgIGksXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAga2V5O1xuXG4gICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHAsXG4gICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcbiAgICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcbiAgICAvLyBDdXN0b20gaGFuZGxpbmcgZm9yIFJlYWN0XG5cblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyLlxuICAgICAgICAvLyAgX293bmVyIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICAgICAgLy8gYW5kIGlzIG5vdCBuZWVkZWQgd2hlbiBjb21wYXJpbmcgdGhlIGFjdHVhbCBlbGVtZW50cyAoYW5kIG5vdCB0aGVpciBvd25lcnMpXG4gICAgICAgIC8vIC4kJHR5cGVvZiBhbmQgLl9zdG9yZSBvbiBqdXN0IHJlYXNvbmFibGUgbWFya2VycyBvZiBhIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG4gICAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufSAvLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cblxuZnVuY3Rpb24gZXhwb3J0ZWRFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiByZWFjdC1mYXN0LWNvbXBhcmUgZG9lcyBub3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuJywgZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG5cblxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDEoKSB7IF9leHRlbmRzJDEgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IF9yZWYuaXNSdGw7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250YWluZXInLFxuICAgIGRpcmVjdGlvbjogaXNSdGwgPyAncnRsJyA6IG51bGwsXG4gICAgcG9pbnRlckV2ZW50czogaXNEaXNhYmxlZCA/ICdub25lJyA6IG51bGwsXG4gICAgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDEoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdjb250YWluZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnLS1pcy1ydGwnOiBpc1J0bFxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmFsdWUgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIHZhbHVlQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gdmFsdWVDb250YWluZXJDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgcGFkZGluZzogc3BhY2luZy5iYXNlVW5pdCAvIDIgKyBcInB4IFwiICsgc3BhY2luZy5iYXNlVW5pdCAqIDIgKyBcInB4XCIsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH07XG59O1xudmFyIFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gVmFsdWVDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBoYXNWYWx1ZSA9IHByb3BzLmhhc1ZhbHVlO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygndmFsdWVDb250YWluZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAndmFsdWUtY29udGFpbmVyJzogdHJ1ZSxcbiAgICAgICd2YWx1ZS1jb250YWluZXItLWlzLW11bHRpJzogaXNNdWx0aSxcbiAgICAgICd2YWx1ZS1jb250YWluZXItLWhhcy12YWx1ZSc6IGhhc1ZhbHVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEluZGljYXRvciBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvcnNDb250YWluZXJDU1MoKSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhTaHJpbms6IDBcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yc0NvbnRhaW5lciA9IGZ1bmN0aW9uIEluZGljYXRvcnNDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5kaWNhdG9yc0NvbnRhaW5lcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcnM6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2Uoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gc3RyaW5ncy5yYXcgPSByYXc7IHJldHVybiBzdHJpbmdzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDIoKSB7IF9leHRlbmRzJDIgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjE5YnFoMnJcIixcbiAgc3R5bGVzOiBcImRpc3BsYXk6aW5saW5lLWJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjE7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MDtcIlxufSA6IHtcbiAgbmFtZTogXCIxOWJxaDJyXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjA7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmEwSkpJaXdpWm1sc1pTSTZJbWx1WkdsallYUnZjbk11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJBWm14dmQxeHVMeW9xSUVCcWMzZ2dhbk40SUNvdlhHNXBiWEJ2Y25RZ2V5QjBlWEJsSUU1dlpHVWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dzSUd0bGVXWnlZVzFsY3lCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDJOdmNtVW5PMXh1WEc1cGJYQnZjblFnZEhsd1pTQjdJRU52YlcxdmJsQnliM0J6TENCVWFHVnRaU0I5SUdaeWIyMGdKeTR1TDNSNWNHVnpKenRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QkVjbTl3Wkc5M2JpQW1JRU5zWldGeUlFbGpiMjV6WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVkyOXVjM1FnVTNabklEMGdLSHNnYzJsNlpTd2dMaTR1Y0hKdmNITWdmVG9nZXlCemFYcGxPaUJ1ZFcxaVpYSWdmU2tnUFQ0Z0tGeHVJQ0E4YzNablhHNGdJQ0FnYUdWcFoyaDBQWHR6YVhwbGZWeHVJQ0FnSUhkcFpIUm9QWHR6YVhwbGZWeHVJQ0FnSUhacFpYZENiM2c5WENJd0lEQWdNakFnTWpCY0lseHVJQ0FnSUdGeWFXRXRhR2xrWkdWdVBWd2lkSEoxWlZ3aVhHNGdJQ0FnWm05amRYTmhZbXhsUFZ3aVptRnNjMlZjSWx4dUlDQWdJR056Y3oxN2UxeHVJQ0FnSUNBZ1pHbHpjR3hoZVRvZ0oybHViR2x1WlMxaWJHOWpheWNzWEc0Z0lDQWdJQ0JtYVd4c09pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUd4cGJtVklaV2xuYUhRNklERXNYRzRnSUNBZ0lDQnpkSEp2YTJVNklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnYzNSeWIydGxWMmxrZEdnNklEQXNYRzRnSUNBZ2ZYMWNiaUFnSUNCN0xpNHVjSEp2Y0hOOVhHNGdJQzgrWEc0cE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1EzSnZjM05KWTI5dUlEMGdLSEJ5YjNCek9pQmhibmtwSUQwK0lDaGNiaUFnUEZOMlp5QnphWHBsUFhzeU1IMGdleTR1TG5CeWIzQnpmVDVjYmlBZ0lDQThjR0YwYUNCa1BWd2lUVEUwTGpNME9DQXhOQzQ0TkRsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREJzTFRJdU5qVXhMVE11TURNd0xUSXVOalV4SURNdU1ESTVZeTB3TGpRMk9TQXdMalEyT1MweExqSXlPU0F3TGpRMk9TMHhMalk1TnlBd0xUQXVORFk1TFRBdU5EWTVMVEF1TkRZNUxURXVNakk1SURBdE1TNDJPVGRzTWk0M05UZ3RNeTR4TlMweUxqYzFPUzB6TGpFMU1tTXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWpnZ01DMHhMalk1TjNNeExqSXlPQzB3TGpRMk9TQXhMalk1TnlBd2JESXVOalV5SURNdU1ETXhJREl1TmpVeExUTXVNRE14WXpBdU5EWTVMVEF1TkRZNUlERXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnpNQzQwTmprZ01TNHlNamtnTUNBeExqWTVOMnd0TWk0M05UZ2dNeTR4TlRJZ01pNDNOVGdnTXk0eE5XTXdMalEyT1NBd0xqUTJPU0F3TGpRMk9TQXhMakl5T1NBd0lERXVOams0ZWx3aUlDOCtYRzRnSUR3dlUzWm5QbHh1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFYjNkdVEyaGxkbkp2YmlBOUlDaHdjbTl3Y3pvZ1lXNTVLU0E5UGlBb1hHNGdJRHhUZG1jZ2MybDZaVDE3TWpCOUlIc3VMaTV3Y205d2MzMCtYRzRnSUNBZ1BIQmhkR2dnWkQxY0lrMDBMalV4TmlBM0xqVTBPR013TGpRek5pMHdMalEwTmlBeExqQTBNeTB3TGpRNE1TQXhMalUzTmlBd2JETXVPVEE0SURNdU56UTNJRE11T1RBNExUTXVOelEzWXpBdU5UTXpMVEF1TkRneElERXVNVFF4TFRBdU5EUTJJREV1TlRjMElEQWdNQzQwTXpZZ01DNDBORFVnTUM0ME1EZ2dNUzR4T1RjZ01DQXhMall4TlMwd0xqUXdOaUF3TGpReE9DMDBMalk1TlNBMExqVXdNaTAwTGpZNU5TQTBMalV3TWkwd0xqSXhOeUF3TGpJeU15MHdMalV3TWlBd0xqTXpOUzB3TGpjNE55QXdMak16TlhNdE1DNDFOeTB3TGpFeE1pMHdMamM0T1Mwd0xqTXpOV013SURBdE5DNHlPRGN0TkM0d09EUXROQzQyT1RVdE5DNDFNREp6TFRBdU5ETTJMVEV1TVRjZ01DMHhMall4TlhwY0lpQXZQbHh1SUNBOEwxTjJaejVjYmlrN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnUkhKdmNHUnZkMjRnSmlCRGJHVmhjaUJDZFhSMGIyNXpYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1Wlhod2IzSjBJSFI1Y0dVZ1NXNWthV05oZEc5eVVISnZjSE1nUFNCRGIyMXRiMjVRY205d2N5QW1JSHRjYmlBZ0x5b3FJRlJvWlNCamFHbHNaSEpsYmlCMGJ5QmlaU0J5Wlc1a1pYSmxaQ0JwYm5OcFpHVWdkR2hsSUdsdVpHbGpZWFJ2Y2k0Z0tpOWNiaUFnWTJocGJHUnlaVzQ2SUU1dlpHVXNYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dZVzU1TEZ4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdUxGeHVJQ0F2S2lvZ1YyaGxkR2hsY2lCMGFHVWdkR1Y0ZENCcGN5QnlhV2RvZENCMGJ5QnNaV1owSUNvdlhHNGdJR2x6VW5Sc09pQmliMjlzWldGdUxGeHVmVHRjYmx4dVkyOXVjM1FnWW1GelpVTlRVeUE5SUNoN1hHNGdJR2x6Um05amRYTmxaQ3hjYmlBZ2RHaGxiV1U2SUh0Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnWTI5c2IzSnpMRnh1SUNCOUxGeHVmVG9nU1c1a2FXTmhkRzl5VUhKdmNITXBJRDArSUNoN1hHNGdJR3hoWW1Wc09pQW5hVzVrYVdOaGRHOXlRMjl1ZEdGcGJtVnlKeXhjYmlBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0JrYVhOd2JHRjVPaUFuWm14bGVDY3NYRzRnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmx4dUlDQW5PbWh2ZG1WeUp6b2dlMXh1SUNBZ0lHTnZiRzl5T2lCcGMwWnZZM1Z6WldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRnd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3ME1DeGNiaUFnZlN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaSEp2Y0dSdmQyNUpibVJwWTJGMGIzSkRVMU1nUFNCaVlYTmxRMU5UTzF4dVpYaHdiM0owSUdOdmJuTjBJRVJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyUnliM0JrYjNkdVNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5aSEp2Y0dSdmQyNHRhVzVrYVdOaGRHOXlKem9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ0FwZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFJHOTNia05vWlhaeWIyNGdMejU5WEc0Z0lDQWdQQzlrYVhZK1hHNGdJQ2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyTnNaV0Z5U1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBblkyeGxZWEl0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNBcGZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThRM0p2YzNOSlkyOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCVFpYQmhjbUYwYjNKY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNTBlWEJsSUZObGNHRnlZWFJ2Y2xOMFlYUmxJRDBnZXlCcGMwUnBjMkZpYkdWa09pQmliMjlzWldGdUlIMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBibVJwWTJGMGIzSlRaWEJoY21GMGIzSkRVMU1nUFNBb2UxeHVJQ0JwYzBScGMyRmliR1ZrTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUhOd1lXTnBibWM2SUhzZ1ltRnpaVlZ1YVhRZ2ZTeGNiaUFnSUNCamIyeHZjbk1zWEc0Z0lIMHNYRzU5T2lCRGIyMXRiMjVRY205d2N5QW1JRk5sY0dGeVlYUnZjbE4wWVhSbEtTQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0ozTjBjbVYwWTJnbkxGeHVJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR2x6UkdsellXSnNaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiREV3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdiV0Z5WjJsdVFtOTBkRzl0T2lCaVlYTmxWVzVwZENBcUlESXNYRzRnSUcxaGNtZHBibFJ2Y0RvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCM2FXUjBhRG9nTVN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnNZWE56VG1GdFpTd2dZM2dzSUdkbGRGTjBlV3hsY3l3Z2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvZXlBbmFXNWthV05oZEc5eUxYTmxjR0Z5WVhSdmNpYzZJSFJ5ZFdVZ2ZTd2dZMnhoYzNOT1lXMWxLWDFjYmlBZ0lDQXZQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5Qk1iMkZrYVc1blhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTWdQU0JyWlhsbWNtRnRaWE5nWEc0Z0lEQWxMQ0E0TUNVc0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd095QjlYRzRnSURRd0pTQjdJRzl3WVdOcGRIazZJREU3SUgxY2JtQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNiMkZrYVc1blNXNWthV05oZEc5eVExTlRJRDBnS0h0Y2JpQWdhWE5HYjJOMWMyVmtMRnh1SUNCemFYcGxMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJR052Ykc5eWN5eGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUgwc1hHNTlPaUI3WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJpeGNiaUFnYzJsNlpUb2diblZ0WW1WeUxGeHVJQ0IwYUdWdFpUb2dWR2hsYldVc1hHNTlLU0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MRnh1SUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3cyTUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTWpBc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnY0dGa1pHbHVaem9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IwY21GdWMybDBhVzl1T2lBblkyOXNiM0lnTVRVd2JYTW5MRnh1SUNCaGJHbG5ibE5sYkdZNklDZGpaVzUwWlhJbkxGeHVJQ0JtYjI1MFUybDZaVG9nYzJsNlpTeGNiaUFnYkdsdVpVaGxhV2RvZERvZ01TeGNiaUFnYldGeVoybHVVbWxuYUhRNklITnBlbVVzWEc0Z0lIUmxlSFJCYkdsbmJqb2dKMk5sYm5SbGNpY3NYRzRnSUhabGNuUnBZMkZzUVd4cFoyNDZJQ2R0YVdSa2JHVW5MRnh1ZlNrN1hHNWNiblI1Y0dVZ1JHOTBVSEp2Y0hNZ1BTQjdJR1JsYkdGNU9pQnVkVzFpWlhJc0lHOW1abk5sZERvZ1ltOXZiR1ZoYmlCOU8xeHVZMjl1YzNRZ1RHOWhaR2x1WjBSdmRDQTlJQ2g3SUdSbGJHRjVMQ0J2Wm1aelpYUWdmVG9nUkc5MFVISnZjSE1wSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR0Z1YVcxaGRHbHZiam9nWUNSN2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTjlJREZ6SUdWaGMyVXRhVzR0YjNWMElDUjdaR1ZzWVhsOWJYTWdhVzVtYVc1cGRHVTdZQ3hjYmlBZ0lDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCaWIzSmtaWEpTWVdScGRYTTZJQ2N4WlcwbkxGeHVJQ0FnSUNBZ1pHbHpjR3hoZVRvZ0oybHViR2x1WlMxaWJHOWpheWNzWEc0Z0lDQWdJQ0J0WVhKbmFXNU1aV1owT2lCdlptWnpaWFFnUHlBbk1XVnRKeUE2SUc1MWJHd3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0IwZVhCbElFeHZZV1JwYm1kSlkyOXVVSEp2Y0hNZ1BTQjdYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dZVzU1TEZ4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdUxGeHVJQ0F2S2lvZ1YyaGxkR2hsY2lCMGFHVWdkR1Y0ZENCcGN5QnlhV2RvZENCMGJ5QnNaV1owSUNvdlhHNGdJR2x6VW5Sc09pQmliMjlzWldGdUxGeHVmU0FtSUVOdmJXMXZibEJ5YjNCeklDWWdlMXh1SUNBZ0lDOHFLaUJUWlhRZ2MybDZaU0J2WmlCMGFHVWdZMjl1ZEdGcGJtVnlMaUFxTDF4dUlDQWdJSE5wZW1VNklHNTFiV0psY2l4Y2JpQWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQk1iMkZrYVc1blNXNWthV05oZEc5eUlEMGdLSEJ5YjNCek9pQk1iMkZrYVc1blNXTnZibEJ5YjNCektTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCekxDQnBjMUowYkNCOUlEMGdjSEp2Y0hNN1hHNWNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0Nkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBbmJHOWhaR2x1WnkxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVmNiaUFnSUNBZ0lDbDlYRzRnSUNBZ1BseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6QjlJRzltWm5ObGREMTdhWE5TZEd4OUlDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNVFl3ZlNCdlptWnpaWFFnTHo1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzek1qQjlJRzltWm5ObGREMTdJV2x6VW5Sc2ZTQXZQbHh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JreHZZV1JwYm1kSmJtUnBZMkYwYjNJdVpHVm1ZWFZzZEZCeWIzQnpJRDBnZXlCemFYcGxPaUEwSUgwN1hHNGlYWDA9ICovXCJcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInNpemVcIl0pO1xuXG4gIHJldHVybiBqc3goXCJzdmdcIiwgX2V4dGVuZHMkMih7XG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIHdpZHRoOiBzaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICBjc3M6IF9yZWYyXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyQyKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiXG4gIH0pKTtcbn07XG52YXIgRG93bkNoZXZyb24gPSBmdW5jdGlvbiBEb3duQ2hldnJvbihwcm9wcykge1xuICByZXR1cm4ganN4KFN2ZywgX2V4dGVuZHMkMih7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIlxuICB9KSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBiYXNlQ1NTID0gZnVuY3Rpb24gYmFzZUNTUyhfcmVmMykge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkLFxuICAgICAgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjMkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwXG4gICAgfVxuICB9O1xufTtcblxudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIERyb3Bkb3duSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDIoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSksIGNoaWxkcmVuIHx8IGpzeChEb3duQ2hldnJvbiwgbnVsbCkpO1xufTtcbnZhciBjbGVhckluZGljYXRvckNTUyA9IGJhc2VDU1M7XG52YXIgQ2xlYXJJbmRpY2F0b3IgPSBmdW5jdGlvbiBDbGVhckluZGljYXRvcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyQyKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCBudWxsKSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MoX3JlZjQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmNC5pc0Rpc2FibGVkLFxuICAgICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY0JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgd2lkdGg6IDFcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yU2VwYXJhdG9yID0gZnVuY3Rpb24gSW5kaWNhdG9yU2VwYXJhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzJDIoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5kaWNhdG9yU2VwYXJhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXMoX3RlbXBsYXRlT2JqZWN0KCkpO1xudmFyIGxvYWRpbmdJbmRpY2F0b3JDU1MgPSBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yQ1NTKF9yZWY1KSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmNS5pc0ZvY3VzZWQsXG4gICAgICBzaXplID0gX3JlZjUuc2l6ZSxcbiAgICAgIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnMsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY1JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQ7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IHNpemUsXG4gICAgbGluZUhlaWdodDogMSxcbiAgICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gIH07XG59O1xuXG52YXIgTG9hZGluZ0RvdCA9IGZ1bmN0aW9uIExvYWRpbmdEb3QoX3JlZjYpIHtcbiAgdmFyIGRlbGF5ID0gX3JlZjYuZGVsYXksXG4gICAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6XG4gICAgLyojX19QVVJFX18qL1xuICAgIF9jc3Moe1xuICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nRG90QW5pbWF0aW9ucyArIFwiIDFzIGVhc2UtaW4tb3V0IFwiICsgZGVsYXkgKyBcIm1zIGluZmluaXRlO1wiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogbnVsbCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCYzB4Sklpd2labWxzWlNJNkltbHVaR2xqWVhSdmNuTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkFabXh2ZDF4dUx5b3FJRUJxYzNnZ2FuTjRJQ292WEc1cGJYQnZjblFnZXlCMGVYQmxJRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMMk52Y21Vbk8xeHVYRzVwYlhCdmNuUWdkSGx3WlNCN0lFTnZiVzF2YmxCeWIzQnpMQ0JVYUdWdFpTQjlJR1p5YjIwZ0p5NHVMM1I1Y0dWekp6dGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCRWNtOXdaRzkzYmlBbUlFTnNaV0Z5SUVsamIyNXpYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1WTI5dWMzUWdVM1puSUQwZ0tIc2djMmw2WlN3Z0xpNHVjSEp2Y0hNZ2ZUb2dleUJ6YVhwbE9pQnVkVzFpWlhJZ2ZTa2dQVDRnS0Z4dUlDQThjM1puWEc0Z0lDQWdhR1ZwWjJoMFBYdHphWHBsZlZ4dUlDQWdJSGRwWkhSb1BYdHphWHBsZlZ4dUlDQWdJSFpwWlhkQ2IzZzlYQ0l3SURBZ01qQWdNakJjSWx4dUlDQWdJR0Z5YVdFdGFHbGtaR1Z1UFZ3aWRISjFaVndpWEc0Z0lDQWdabTlqZFhOaFlteGxQVndpWm1Gc2MyVmNJbHh1SUNBZ0lHTnpjejE3ZTF4dUlDQWdJQ0FnWkdsemNHeGhlVG9nSjJsdWJHbHVaUzFpYkc5amF5Y3NYRzRnSUNBZ0lDQm1hV3hzT2lBblkzVnljbVZ1ZEVOdmJHOXlKeXhjYmlBZ0lDQWdJR3hwYm1WSVpXbG5hSFE2SURFc1hHNGdJQ0FnSUNCemRISnZhMlU2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdjM1J5YjJ0bFYybGtkR2c2SURBc1hHNGdJQ0FnZlgxY2JpQWdJQ0I3TGk0dWNISnZjSE45WEc0Z0lDOCtYRzRwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnUTNKdmMzTkpZMjl1SUQwZ0tIQnliM0J6T2lCaGJua3BJRDArSUNoY2JpQWdQRk4yWnlCemFYcGxQWHN5TUgwZ2V5NHVMbkJ5YjNCemZUNWNiaUFnSUNBOGNHRjBhQ0JrUFZ3aVRURTBMak0wT0NBeE5DNDRORGxqTFRBdU5EWTVJREF1TkRZNUxURXVNakk1SURBdU5EWTVMVEV1TmprM0lEQnNMVEl1TmpVeExUTXVNRE13TFRJdU5qVXhJRE11TURJNVl5MHdMalEyT1NBd0xqUTJPUzB4TGpJeU9TQXdMalEyT1MweExqWTVOeUF3TFRBdU5EWTVMVEF1TkRZNUxUQXVORFk1TFRFdU1qSTVJREF0TVM0Mk9UZHNNaTQzTlRndE15NHhOUzB5TGpjMU9TMHpMakUxTW1NdE1DNDBOamt0TUM0ME5qa3RNQzQwTmprdE1TNHlNamdnTUMweExqWTVOM014TGpJeU9DMHdMalEyT1NBeExqWTVOeUF3YkRJdU5qVXlJRE11TURNeElESXVOalV4TFRNdU1ETXhZekF1TkRZNUxUQXVORFk1SURFdU1qSTRMVEF1TkRZNUlERXVOamszSURCek1DNDBOamtnTVM0eU1qa2dNQ0F4TGpZNU4yd3RNaTQzTlRnZ015NHhOVElnTWk0M05UZ2dNeTR4TldNd0xqUTJPU0F3TGpRMk9TQXdMalEyT1NBeExqSXlPU0F3SURFdU5qazRlbHdpSUM4K1hHNGdJRHd2VTNablBseHVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQkViM2R1UTJobGRuSnZiaUE5SUNod2NtOXdjem9nWVc1NUtTQTlQaUFvWEc0Z0lEeFRkbWNnYzJsNlpUMTdNakI5SUhzdUxpNXdjbTl3YzMwK1hHNGdJQ0FnUEhCaGRHZ2daRDFjSWswMExqVXhOaUEzTGpVME9HTXdMalF6Tmkwd0xqUTBOaUF4TGpBME15MHdMalE0TVNBeExqVTNOaUF3YkRNdU9UQTRJRE11TnpRM0lETXVPVEE0TFRNdU56UTNZekF1TlRNekxUQXVORGd4SURFdU1UUXhMVEF1TkRRMklERXVOVGMwSURBZ01DNDBNellnTUM0ME5EVWdNQzQwTURnZ01TNHhPVGNnTUNBeExqWXhOUzB3TGpRd05pQXdMalF4T0MwMExqWTVOU0EwTGpVd01pMDBMalk1TlNBMExqVXdNaTB3TGpJeE55QXdMakl5TXkwd0xqVXdNaUF3TGpNek5TMHdMamM0TnlBd0xqTXpOWE10TUM0MU55MHdMakV4TWkwd0xqYzRPUzB3TGpNek5XTXdJREF0TkM0eU9EY3ROQzR3T0RRdE5DNDJPVFV0TkM0MU1ESnpMVEF1TkRNMkxURXVNVGNnTUMweExqWXhOWHBjSWlBdlBseHVJQ0E4TDFOMlp6NWNiaWs3WEc1Y2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dUx5OGdSSEp2Y0dSdmQyNGdKaUJEYkdWaGNpQkNkWFIwYjI1elhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVaWGh3YjNKMElIUjVjR1VnU1c1a2FXTmhkRzl5VUhKdmNITWdQU0JEYjIxdGIyNVFjbTl3Y3lBbUlIdGNiaUFnTHlvcUlGUm9aU0JqYUdsc1pISmxiaUIwYnlCaVpTQnlaVzVrWlhKbFpDQnBibk5wWkdVZ2RHaGxJR2x1WkdsallYUnZjaTRnS2k5Y2JpQWdZMmhwYkdSeVpXNDZJRTV2WkdVc1hHNGdJQzhxS2lCUWNtOXdjeUIwYUdGMElIZHBiR3dnWW1VZ2NHRnpjMlZrSUc5dUlIUnZJSFJvWlNCamFHbHNaSEpsYmk0Z0tpOWNiaUFnYVc1dVpYSlFjbTl3Y3pvZ1lXNTVMRnh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TEZ4dUlDQXZLaW9nVjJobGRHaGxjaUIwYUdVZ2RHVjRkQ0JwY3lCeWFXZG9kQ0IwYnlCc1pXWjBJQ292WEc0Z0lHbHpVblJzT2lCaWIyOXNaV0Z1TEZ4dWZUdGNibHh1WTI5dWMzUWdZbUZ6WlVOVFV5QTlJQ2g3WEc0Z0lHbHpSbTlqZFhObFpDeGNiaUFnZEdobGJXVTZJSHRjYmlBZ0lDQnpjR0ZqYVc1bk9pQjdJR0poYzJWVmJtbDBJSDBzWEc0Z0lDQWdZMjlzYjNKekxGeHVJQ0I5TEZ4dWZUb2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJQ2g3WEc0Z0lHeGhZbVZzT2lBbmFXNWthV05oZEc5eVEyOXVkR0ZwYm1WeUp5eGNiaUFnWTI5c2IzSTZJR2x6Um05amRYTmxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNOakFnT2lCamIyeHZjbk11Ym1WMWRISmhiREl3TEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSEJoWkdScGJtYzZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdkSEpoYm5OcGRHbHZiam9nSjJOdmJHOXlJREUxTUcxekp5eGNibHh1SUNBbk9taHZkbVZ5SnpvZ2UxeHVJQ0FnSUdOdmJHOXlPaUJwYzBadlkzVnpaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiRGd3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3cwTUN4Y2JpQWdmU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pISnZjR1J2ZDI1SmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFUnliM0JrYjNkdVNXNWthV05oZEc5eUlEMGdLSEJ5YjNCek9pQkpibVJwWTJGMGIzSlFjbTl3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOb2FXeGtjbVZ1TENCamJHRnpjMDVoYldVc0lHTjRMQ0JuWlhSVGRIbHNaWE1zSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUNBZ1kzTnpQWHRuWlhSVGRIbHNaWE1vSjJSeWIzQmtiM2R1U1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBblpISnZjR1J2ZDI0dGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdZMnhoYzNOT1lXMWxYRzRnSUNBZ0lDQXBmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4Ukc5M2JrTm9aWFp5YjI0Z0x6NTlYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4bFlYSkpibVJwWTJGMGIzSkRVMU1nUFNCaVlYTmxRMU5UTzF4dVpYaHdiM0owSUdOdmJuTjBJRU5zWldGeVNXNWthV05oZEc5eUlEMGdLSEJ5YjNCek9pQkpibVJwWTJGMGIzSlFjbTl3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOb2FXeGtjbVZ1TENCamJHRnpjMDVoYldVc0lHTjRMQ0JuWlhSVGRIbHNaWE1zSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUNBZ1kzTnpQWHRuWlhSVGRIbHNaWE1vSjJOc1pXRnlTVzVrYVdOaGRHOXlKeXdnY0hKdmNITXBmVnh1SUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHRqZUNoY2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FuWTJ4bFlYSXRhVzVrYVdOaGRHOXlKem9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ0FwZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1MGVYQmxJRk5sY0dGeVlYUnZjbE4wWVhSbElEMGdleUJwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1SUgwN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNKRFUxTWdQU0FvZTF4dUlDQnBjMFJwYzJGaWJHVmtMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJSE53WVdOcGJtYzZJSHNnWW1GelpWVnVhWFFnZlN4Y2JpQWdJQ0JqYjJ4dmNuTXNYRzRnSUgwc1hHNTlPaUJEYjIxdGIyNVFjbTl3Y3lBbUlGTmxjR0Z5WVhSdmNsTjBZWFJsS1NBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2ljc1hHNGdJR0ZzYVdkdVUyVnNaam9nSjNOMGNtVjBZMmduTEZ4dUlDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklHbHpSR2x6WVdKc1pXUWdQeUJqYjJ4dmNuTXVibVYxZEhKaGJERXdJRG9nWTI5c2IzSnpMbTVsZFhSeVlXd3lNQ3hjYmlBZ2JXRnlaMmx1UW05MGRHOXRPaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJRzFoY21kcGJsUnZjRG9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IzYVdSMGFEb2dNU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1NXNWthV05oZEc5eVUyVndZWEpoZEc5eUlEMGdLSEJ5YjNCek9pQkpibVJwWTJGMGIzSlFjbTl3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOc1lYTnpUbUZ0WlN3Z1kzZ3NJR2RsZEZOMGVXeGxjeXdnYVc1dVpYSlFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BITndZVzVjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUNBZ1kzTnpQWHRuWlhSVGRIbHNaWE1vSjJsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2ljc0lIQnliM0J6S1gxY2JpQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN1kzZ29leUFuYVc1a2FXTmhkRzl5TFhObGNHRnlZWFJ2Y2ljNklIUnlkV1VnZlN3Z1kyeGhjM05PWVcxbEtYMWNiaUFnSUNBdlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCTWIyRmthVzVuWEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVkyOXVjM1FnYkc5aFpHbHVaMFJ2ZEVGdWFXMWhkR2x2Ym5NZ1BTQnJaWGxtY21GdFpYTmdYRzRnSURBbExDQTRNQ1VzSURFd01DVWdleUJ2Y0dGamFYUjVPaUF3T3lCOVhHNGdJRFF3SlNCN0lHOXdZV05wZEhrNklERTdJSDFjYm1BN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2IyRmthVzVuU1c1a2FXTmhkRzl5UTFOVElEMGdLSHRjYmlBZ2FYTkdiMk4xYzJWa0xGeHVJQ0J6YVhwbExGeHVJQ0IwYUdWdFpUb2dlMXh1SUNBZ0lHTnZiRzl5Y3l4Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJSDBzWEc1OU9pQjdYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYml4Y2JpQWdjMmw2WlRvZ2JuVnRZbVZ5TEZ4dUlDQjBhR1Z0WlRvZ1ZHaGxiV1VzWEc1OUtTQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oyeHZZV1JwYm1kSmJtUnBZMkYwYjNJbkxGeHVJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzJNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lHUnBjM0JzWVhrNklDZG1iR1Y0Snl4Y2JpQWdjR0ZrWkdsdVp6b2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQjBjbUZ1YzJsMGFXOXVPaUFuWTI5c2IzSWdNVFV3YlhNbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkalpXNTBaWEluTEZ4dUlDQm1iMjUwVTJsNlpUb2djMmw2WlN4Y2JpQWdiR2x1WlVobGFXZG9kRG9nTVN4Y2JpQWdiV0Z5WjJsdVVtbG5hSFE2SUhOcGVtVXNYRzRnSUhSbGVIUkJiR2xuYmpvZ0oyTmxiblJsY2ljc1hHNGdJSFpsY25ScFkyRnNRV3hwWjI0NklDZHRhV1JrYkdVbkxGeHVmU2s3WEc1Y2JuUjVjR1VnUkc5MFVISnZjSE1nUFNCN0lHUmxiR0Y1T2lCdWRXMWlaWElzSUc5bVpuTmxkRG9nWW05dmJHVmhiaUI5TzF4dVkyOXVjM1FnVEc5aFpHbHVaMFJ2ZENBOUlDaDdJR1JsYkdGNUxDQnZabVp6WlhRZ2ZUb2dSRzkwVUhKdmNITXBJRDArSUNoY2JpQWdQSE53WVc1Y2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHRnVhVzFoZEdsdmJqb2dZQ1I3Ykc5aFpHbHVaMFJ2ZEVGdWFXMWhkR2x2Ym5OOUlERnpJR1ZoYzJVdGFXNHRiM1YwSUNSN1pHVnNZWGw5YlhNZ2FXNW1hVzVwZEdVN1lDeGNiaUFnSUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ0oyTjFjbkpsYm5SRGIyeHZjaWNzWEc0Z0lDQWdJQ0JpYjNKa1pYSlNZV1JwZFhNNklDY3haVzBuTEZ4dUlDQWdJQ0FnWkdsemNHeGhlVG9nSjJsdWJHbHVaUzFpYkc5amF5Y3NYRzRnSUNBZ0lDQnRZWEpuYVc1TVpXWjBPaUJ2Wm1aelpYUWdQeUFuTVdWdEp5QTZJRzUxYkd3c1hHNGdJQ0FnSUNCb1pXbG5hSFE2SUNjeFpXMG5MRnh1SUNBZ0lDQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0ozUnZjQ2NzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekZsYlNjc1hHNGdJQ0FnZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQjBlWEJsSUV4dllXUnBibWRKWTI5dVVISnZjSE1nUFNCN1hHNGdJQzhxS2lCUWNtOXdjeUIwYUdGMElIZHBiR3dnWW1VZ2NHRnpjMlZrSUc5dUlIUnZJSFJvWlNCamFHbHNaSEpsYmk0Z0tpOWNiaUFnYVc1dVpYSlFjbTl3Y3pvZ1lXNTVMRnh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TEZ4dUlDQXZLaW9nVjJobGRHaGxjaUIwYUdVZ2RHVjRkQ0JwY3lCeWFXZG9kQ0IwYnlCc1pXWjBJQ292WEc0Z0lHbHpVblJzT2lCaWIyOXNaV0Z1TEZ4dWZTQW1JRU52YlcxdmJsQnliM0J6SUNZZ2UxeHVJQ0FnSUM4cUtpQlRaWFFnYzJsNlpTQnZaaUIwYUdVZ1kyOXVkR0ZwYm1WeUxpQXFMMXh1SUNBZ0lITnBlbVU2SUc1MWJXSmxjaXhjYmlBZ2ZUdGNibVY0Y0c5eWRDQmpiMjV6ZENCTWIyRmthVzVuU1c1a2FXTmhkRzl5SUQwZ0tIQnliM0J6T2lCTWIyRmthVzVuU1dOdmJsQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJ4aGMzTk9ZVzFsTENCamVDd2daMlYwVTNSNWJHVnpMQ0JwYm01bGNsQnliM0J6TENCcGMxSjBiQ0I5SUQwZ2NISnZjSE03WEc1Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOFpHbDJYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0FnSUdOemN6MTdaMlYwVTNSNWJHVnpLQ2RzYjJGa2FXNW5TVzVrYVdOaGRHOXlKeXdnY0hKdmNITXBmVnh1SUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHRqZUNoY2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FuYkc5aFpHbHVaeTFwYm1ScFkyRjBiM0luT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamJHRnpjMDVoYldWY2JpQWdJQ0FnSUNsOVhHNGdJQ0FnUGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpCOUlHOW1abk5sZEQxN2FYTlNkR3g5SUM4K1hHNGdJQ0FnSUNBOFRHOWhaR2x1WjBSdmRDQmtaV3hoZVQxN01UWXdmU0J2Wm1aelpYUWdMejVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN6TWpCOUlHOW1abk5sZEQxN0lXbHpVblJzZlNBdlBseHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmt4dllXUnBibWRKYm1ScFkyRjBiM0l1WkdWbVlYVnNkRkJ5YjNCeklEMGdleUJ6YVhwbE9pQTBJSDA3WEc0aVhYMD0gKi9cIilcbiAgfSk7XG59O1xuXG52YXIgTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGw7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMkMih7fSwgaW5uZXJQcm9wcywge1xuICAgIGNzczogZ2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDAsXG4gICAgb2Zmc2V0OiBpc1J0bFxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMTYwLFxuICAgIG9mZnNldDogdHJ1ZVxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMzIwLFxuICAgIG9mZnNldDogIWlzUnRsXG4gIH0pKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogNFxufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkMygpIHsgX2V4dGVuZHMkMyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBjc3MgPSBmdW5jdGlvbiBjc3MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRyb2wnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNSA6IGNvbG9ycy5uZXV0cmFsMCxcbiAgICBib3JkZXJDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm94U2hhZG93OiBpc0ZvY3VzZWQgPyBcIjAgMCAwIDFweCBcIiArIGNvbG9ycy5wcmltYXJ5IDogbnVsbCxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbkhlaWdodDogc3BhY2luZy5jb250cm9sSGVpZ2h0LFxuICAgIG91dGxpbmU6ICcwICFpbXBvcnRhbnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMTAwbXMnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwzMFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBDb250cm9sID0gZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDMoe1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY3NzOiBnZXRTdHlsZXMoJ2NvbnRyb2wnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBjb250cm9sOiB0cnVlLFxuICAgICAgJ2NvbnRyb2wtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICdjb250cm9sLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgJ2NvbnRyb2wtLW1lbnUtaXMtb3Blbic6IG1lbnVJc09wZW5cbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQxKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMkNCgpIHsgX2V4dGVuZHMkNCA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBncm91cENTUyA9IGZ1bmN0aW9uIGdyb3VwQ1NTKF9yZWYpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAqIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAqIDJcbiAgfTtcbn07XG5cbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIEhlYWRpbmcgPSBwcm9wcy5IZWFkaW5nLFxuICAgICAgaGVhZGluZ1Byb3BzID0gcHJvcHMuaGVhZGluZ1Byb3BzLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnZ3JvdXAnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBncm91cDogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwganN4KEhlYWRpbmcsIF9leHRlbmRzJDQoe30sIGhlYWRpbmdQcm9wcywge1xuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wcyxcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgY3g6IGN4XG4gIH0pLCBsYWJlbCksIGpzeChcImRpdlwiLCBudWxsLCBjaGlsZHJlbikpO1xufTtcblxudmFyIGdyb3VwSGVhZGluZ0NTUyA9IGZ1bmN0aW9uIGdyb3VwSGVhZGluZ0NTUyhfcmVmMikge1xuICB2YXIgc3BhY2luZyA9IF9yZWYyLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdncm91cCcsXG4gICAgY29sb3I6ICcjOTk5JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnNzUlJyxcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICBtYXJnaW5Cb3R0b206ICcwLjI1ZW0nLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH07XG59O1xudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzLFxuICAgICAgY2xlYW5Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJDEocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcImN4XCIsIFwiZ2V0U3R5bGVzXCIsIFwidGhlbWVcIiwgXCJzZWxlY3RQcm9wc1wiXSk7XG5cbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyQ0KHtcbiAgICBjc3M6IGdldFN0eWxlcygnZ3JvdXBIZWFkaW5nJywgX2V4dGVuZHMkNCh7XG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9LCBjbGVhblByb3BzKSksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnZ3JvdXAtaGVhZGluZyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGNsZWFuUHJvcHMpKTtcbn07XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDUoKSB7IF9leHRlbmRzJDUgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJDIoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIGlucHV0Q1NTID0gZnVuY3Rpb24gaW5wdXRDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgdmlzaWJpbGl0eTogaXNEaXNhYmxlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwXG4gIH07XG59O1xuXG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2lucHV0JyxcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfTtcbn07XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KF9yZWYyKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBjeCA9IF9yZWYyLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gX3JlZjIuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmMi5pbm5lclJlZixcbiAgICAgIGlzSGlkZGVuID0gX3JlZjIuaXNIaWRkZW4sXG4gICAgICBpc0Rpc2FibGVkID0gX3JlZjIuaXNEaXNhYmxlZCxcbiAgICAgIHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IF9yZWYyLnNlbGVjdFByb3BzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQyKF9yZWYyLCBbXCJjbGFzc05hbWVcIiwgXCJjeFwiLCBcImdldFN0eWxlc1wiLCBcImlubmVyUmVmXCIsIFwiaXNIaWRkZW5cIiwgXCJpc0Rpc2FibGVkXCIsIFwidGhlbWVcIiwgXCJzZWxlY3RQcm9wc1wiXSk7XG5cbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2lucHV0JywgX2V4dGVuZHMkNSh7XG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9LCBwcm9wcykpXG4gIH0sIGpzeChBdXRvc2l6ZUlucHV0LCBfZXh0ZW5kcyQ1KHtcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGlucHV0OiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICBpbnB1dFJlZjogaW5uZXJSZWYsXG4gICAgaW5wdXRTdHlsZTogaW5wdXRTdHlsZShpc0hpZGRlbiksXG4gICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgfSwgcHJvcHMpKSk7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyQ2KCkgeyBfZXh0ZW5kcyQ2ID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDYuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxudmFyIG11bHRpVmFsdWVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlQ1NTKF9yZWYpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdtdWx0aVZhbHVlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5uZXV0cmFsMTAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtYXJnaW46IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1pbldpZHRoOiAwIC8vIHJlc29sdmVzIGZsZXgvdGV4dC1vdmVyZmxvdyBidWdcblxuICB9O1xufTtcbnZhciBtdWx0aVZhbHVlTGFiZWxDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlTGFiZWxDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYyJHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnMsXG4gICAgICBjcm9wV2l0aEVsbGlwc2lzID0gX3JlZjIuY3JvcFdpdGhFbGxpcHNpcztcbiAgcmV0dXJuIHtcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODAsXG4gICAgZm9udFNpemU6ICc4NSUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAzLFxuICAgIHBhZGRpbmdMZWZ0OiA2LFxuICAgIHRleHRPdmVyZmxvdzogY3JvcFdpdGhFbGxpcHNpcyA/ICdlbGxpcHNpcycgOiBudWxsLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH07XG59O1xudmFyIG11bHRpVmFsdWVSZW1vdmVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlUmVtb3ZlQ1NTKF9yZWYzKSB7XG4gIHZhciBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYzJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmMyR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnMsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQ7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkICYmIGNvbG9ycy5kYW5nZXJMaWdodCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYW5nZXJMaWdodCxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZGFuZ2VyXG4gICAgfVxuICB9O1xufTtcbnZhciBNdWx0aVZhbHVlR2VuZXJpYyA9IGZ1bmN0aW9uIE11bHRpVmFsdWVHZW5lcmljKF9yZWY0KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgICAgaW5uZXJQcm9wcyA9IF9yZWY0LmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgaW5uZXJQcm9wcywgY2hpbGRyZW4pO1xufTtcbnZhciBNdWx0aVZhbHVlQ29udGFpbmVyID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG52YXIgTXVsdGlWYWx1ZUxhYmVsID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG5mdW5jdGlvbiBNdWx0aVZhbHVlUmVtb3ZlKF9yZWY1KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY1LmNoaWxkcmVuLFxuICAgICAgaW5uZXJQcm9wcyA9IF9yZWY1LmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgaW5uZXJQcm9wcywgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwge1xuICAgIHNpemU6IDE0XG4gIH0pKTtcbn1cblxudmFyIE11bHRpVmFsdWUgPSBmdW5jdGlvbiBNdWx0aVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgcmVtb3ZlUHJvcHMgPSBwcm9wcy5yZW1vdmVQcm9wcyxcbiAgICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG4gIHZhciBDb250YWluZXIgPSBjb21wb25lbnRzLkNvbnRhaW5lcixcbiAgICAgIExhYmVsID0gY29tcG9uZW50cy5MYWJlbCxcbiAgICAgIFJlbW92ZSA9IGNvbXBvbmVudHMuUmVtb3ZlO1xuICByZXR1cm4ganN4KENsYXNzTmFtZXMsIG51bGwsIGZ1bmN0aW9uIChfcmVmNikge1xuICAgIHZhciBjc3MgPSBfcmVmNi5jc3MsXG4gICAgICAgIGVtb3Rpb25DeCA9IF9yZWY2LmN4O1xuICAgIHJldHVybiBqc3goQ29udGFpbmVyLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczogX2V4dGVuZHMkNih7fSwgaW5uZXJQcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZSc6IHRydWUsXG4gICAgICAgICAgJ211bHRpLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0pLFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSwganN4KExhYmVsLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlTGFiZWwnLCBwcm9wcykpLCBjeCh7XG4gICAgICAgICAgJ211bHRpLXZhbHVlX19sYWJlbCc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0sXG4gICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICB9LCBjaGlsZHJlbiksIGpzeChSZW1vdmUsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbm5lclByb3BzOiBfZXh0ZW5kcyQ2KHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZVJlbW92ZScsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWVfX3JlbW92ZSc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0sIHJlbW92ZVByb3BzKSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0pKTtcbiAgfSk7XG59O1xuXG5NdWx0aVZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3JvcFdpdGhFbGxpcHNpczogdHJ1ZVxufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkNygpIHsgX2V4dGVuZHMkNyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQ3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBvcHRpb25DU1MgPSBmdW5jdGlvbiBvcHRpb25DU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnb3B0aW9uJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5MjUgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwyMCA6IGlzU2VsZWN0ZWQgPyBjb2xvcnMubmV1dHJhbDAgOiAnaW5oZXJpdCcsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIHBhZGRpbmc6IHNwYWNpbmcuYmFzZVVuaXQgKiAyICsgXCJweCBcIiArIHNwYWNpbmcuYmFzZVVuaXQgKiAzICsgXCJweFwiLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiAoaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLnByaW1hcnk1MClcbiAgICB9XG4gIH07XG59O1xuXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gT3B0aW9uKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMkNyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ29wdGlvbicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIG9wdGlvbjogdHJ1ZSxcbiAgICAgICdvcHRpb24tLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICdvcHRpb24tLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgICAnb3B0aW9uLS1pcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWRcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDgoKSB7IF9leHRlbmRzJDggPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkOC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgcGxhY2Vob2xkZXJDU1MgPSBmdW5jdGlvbiBwbGFjZWhvbGRlckNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw1MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICB9O1xufTtcblxudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMkOCh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3BsYWNlaG9sZGVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgcGxhY2Vob2xkZXI6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyQ5KCkgeyBfZXh0ZW5kcyQ5ID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxudmFyIGNzcyQxID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3NpbmdsZVZhbHVlJyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNDAgOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXhXaWR0aDogXCJjYWxjKDEwMCUgLSBcIiArIHNwYWNpbmcuYmFzZVVuaXQgKiAyICsgXCJweClcIixcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIFNpbmdsZVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMkOSh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3NpbmdsZVZhbHVlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ3NpbmdsZS12YWx1ZSc6IHRydWUsXG4gICAgICAnc2luZ2xlLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyRhKCkgeyBfZXh0ZW5kcyRhID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxudmFyIGNvbXBvbmVudHMgPSB7XG4gIENsZWFySW5kaWNhdG9yOiBDbGVhckluZGljYXRvcixcbiAgQ29udHJvbDogQ29udHJvbCxcbiAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duSW5kaWNhdG9yLFxuICBEb3duQ2hldnJvbjogRG93bkNoZXZyb24sXG4gIENyb3NzSWNvbjogQ3Jvc3NJY29uLFxuICBHcm91cDogR3JvdXAsXG4gIEdyb3VwSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICBJbmRpY2F0b3JzQ29udGFpbmVyOiBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICBJbmRpY2F0b3JTZXBhcmF0b3I6IEluZGljYXRvclNlcGFyYXRvcixcbiAgSW5wdXQ6IElucHV0LFxuICBMb2FkaW5nSW5kaWNhdG9yOiBMb2FkaW5nSW5kaWNhdG9yLFxuICBNZW51OiBNZW51LFxuICBNZW51TGlzdDogTWVudUxpc3QsXG4gIE1lbnVQb3J0YWw6IE1lbnVQb3J0YWwsXG4gIExvYWRpbmdNZXNzYWdlOiBMb2FkaW5nTWVzc2FnZSxcbiAgTm9PcHRpb25zTWVzc2FnZTogTm9PcHRpb25zTWVzc2FnZSxcbiAgTXVsdGlWYWx1ZTogTXVsdGlWYWx1ZSxcbiAgTXVsdGlWYWx1ZUNvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgTXVsdGlWYWx1ZUxhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gIE11bHRpVmFsdWVSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmUsXG4gIE9wdGlvbjogT3B0aW9uLFxuICBQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gIFNlbGVjdENvbnRhaW5lcjogU2VsZWN0Q29udGFpbmVyLFxuICBTaW5nbGVWYWx1ZTogU2luZ2xlVmFsdWUsXG4gIFZhbHVlQ29udGFpbmVyOiBWYWx1ZUNvbnRhaW5lclxufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50cyA9IGZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRzKHByb3BzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyRhKHt9LCBjb21wb25lbnRzLCBwcm9wcy5jb21wb25lbnRzKTtcbn07XG5cbmV4cG9ydCB7IE1lbnVQbGFjZXIgYXMgTSwgY29udGFpbmVyQ1NTIGFzIGEsIGNzcyBhcyBiLCBjbGVhckluZGljYXRvckNTUyBhcyBjLCBkcm9wZG93bkluZGljYXRvckNTUyBhcyBkLCBncm91cEhlYWRpbmdDU1MgYXMgZSwgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTIGFzIGYsIGdyb3VwQ1NTIGFzIGcsIGlucHV0Q1NTIGFzIGgsIGluZGljYXRvcnNDb250YWluZXJDU1MgYXMgaSwgbG9hZGluZ01lc3NhZ2VDU1MgYXMgaiwgbWVudUxpc3RDU1MgYXMgaywgbG9hZGluZ0luZGljYXRvckNTUyBhcyBsLCBtZW51Q1NTIGFzIG0sIG1lbnVQb3J0YWxDU1MgYXMgbiwgbXVsdGlWYWx1ZUNTUyBhcyBvLCBtdWx0aVZhbHVlTGFiZWxDU1MgYXMgcCwgbXVsdGlWYWx1ZVJlbW92ZUNTUyBhcyBxLCBub09wdGlvbnNNZXNzYWdlQ1NTIGFzIHIsIG9wdGlvbkNTUyBhcyBzLCBwbGFjZWhvbGRlckNTUyBhcyB0LCBjc3MkMSBhcyB1LCB2YWx1ZUNvbnRhaW5lckNTUyBhcyB2LCBkZWZhdWx0Q29tcG9uZW50cyBhcyB3LCBleHBvcnRlZEVxdWFsIGFzIHgsIGNvbXBvbmVudHMgYXMgeSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCAncmVhY3QtZG9tJztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vdXRpbHMtMDZiMGQ1YTQuYnJvd3Nlci5lc20uanMnO1xuZXhwb3J0IHsgeSBhcyBjb21wb25lbnRzIH0gZnJvbSAnLi9pbmRleC00MzIyYzBlZC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNlbGVjdCB9IGZyb20gJy4vU2VsZWN0LTlmZGI4Y2QwLmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IGMgYXMgY3JlYXRlRmlsdGVyLCBhIGFzIGRlZmF1bHRUaGVtZSwgbSBhcyBtZXJnZVN0eWxlcyB9IGZyb20gJy4vU2VsZWN0LTlmZGI4Y2QwLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCAncmVhY3QtaW5wdXQtYXV0b3NpemUnO1xuaW1wb3J0IHsgbSBhcyBtYW5hZ2VTdGF0ZSB9IGZyb20gJy4vc3RhdGVNYW5hZ2VyLTA0ZjczNGEyLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTm9uY2VQcm92aWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOb25jZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOb25jZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiAobm9uY2UpIHtcbiAgICAgIHJldHVybiBjcmVhdGVDYWNoZSh7XG4gICAgICAgIG5vbmNlOiBub25jZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSA9IG1lbW9pemVPbmUoX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTm9uY2VQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZW1vdGlvbkNhY2hlID0gdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUodGhpcy5wcm9wcy5ub25jZSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FjaGVQcm92aWRlciwge1xuICAgICAgdmFsdWU6IGVtb3Rpb25DYWNoZVxuICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBOb25jZVByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG52YXIgaW5kZXggPSBtYW5hZ2VTdGF0ZShTZWxlY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbmV4cG9ydCB7IE5vbmNlUHJvdmlkZXIgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0SW5wdXRWYWx1ZTogJycsXG4gIGRlZmF1bHRNZW51SXNPcGVuOiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsXG59O1xuXG52YXIgbWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFN0YXRlTWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTdGF0ZU1hbmFnZXIoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuc2VsZWN0ID0gdm9pZCAwO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLmlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLmlucHV0VmFsdWUgOiBfdGhpcy5wcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbjogX3RoaXMucHJvcHMubWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMubWVudUlzT3BlbiA6IF90aGlzLnByb3BzLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICB2YWx1ZTogX3RoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLnZhbHVlIDogX3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25DaGFuZ2UnLCB2YWx1ZSwgYWN0aW9uTWV0YSk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgICAgLy8gVE9ETzogZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3ZSBhbGxvdyB0aGUgcHJvcCB0byByZXR1cm4gYSBuZXdcbiAgICAgICAgLy8gdmFsdWUsIGJ1dCBub3cgaW5wdXRWYWx1ZSBpcyBhIGNvbnRyb2xsYWJsZSBwcm9wIHdlIHByb2JhYmx5IHNob3VsZG4ndFxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5jYWxsUHJvcCgnb25JbnB1dENoYW5nZScsIHZhbHVlLCBhY3Rpb25NZXRhKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogbmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1lbnVPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25NZW51T3BlbicpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZW51SXNPcGVuOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25NZW51Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNhbGxQcm9wKCdvbk1lbnVDbG9zZScpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gU3RhdGVNYW5hZ2VyLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmJsdXIgPSBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgdGhpcy5zZWxlY3QuYmx1cigpO1xuICAgIH0gLy8gRklYTUU6IHVudHlwZWQgZmxvdyBjb2RlLCByZXR1cm4gYW55XG4gICAgO1xuXG4gICAgX3Byb3RvLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wc1trZXldIDogdGhpcy5zdGF0ZVtrZXldO1xuICAgIH0gLy8gRklYTUU6IHVudHlwZWQgZmxvdyBjb2RlLCByZXR1cm4gYW55XG4gICAgO1xuXG4gICAgX3Byb3RvLmNhbGxQcm9wID0gZnVuY3Rpb24gY2FsbFByb3AobmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzID0gdGhpcy5wcm9wcylbbmFtZV0uYXBwbHkoX3RoaXMkcHJvcHMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMyLmRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgICAgIGRlZmF1bHRNZW51SXNPcGVuID0gX3RoaXMkcHJvcHMyLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IF90aGlzJHByb3BzMi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImRlZmF1bHRJbnB1dFZhbHVlXCIsIFwiZGVmYXVsdE1lbnVJc09wZW5cIiwgXCJkZWZhdWx0VmFsdWVcIl0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgX3RoaXMyLnNlbGVjdCA9IF9yZWY7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0VmFsdWU6IHRoaXMuZ2V0UHJvcCgnaW5wdXRWYWx1ZScpLFxuICAgICAgICBtZW51SXNPcGVuOiB0aGlzLmdldFByb3AoJ21lbnVJc09wZW4nKSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgIG9uSW5wdXRDaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSxcbiAgICAgICAgb25NZW51Q2xvc2U6IHRoaXMub25NZW51Q2xvc2UsXG4gICAgICAgIG9uTWVudU9wZW46IHRoaXMub25NZW51T3BlbixcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0UHJvcCgndmFsdWUnKVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3RhdGVNYW5hZ2VyO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMsIF90ZW1wO1xufTtcblxuZXhwb3J0IHsgbWFuYWdlU3RhdGUgYXMgbSB9O1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOTyBPUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbi8vIENsYXNzIE5hbWUgUHJlZml4ZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgY29tcG9uZW50IHN0YXRlIGZvciBzdHlsaW5nIHdpdGggY2xhc3MgbmFtZXMuXG5cbiBFeHBlY3RzIGFuIGFycmF5IG9mIHN0cmluZ3MgT1IgYSBzdHJpbmcvb2JqZWN0IHBhaXI6XG4gLSBjbGFzc05hbWUoWydjb21wJywgJ2NvbXAtYXJnJywgJ2NvbXAtYXJnLTInXSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLWFyZyByZWFjdC1zZWxlY3RfX2NvbXAtYXJnLTInXG4gLSBjbGFzc05hbWUoJ2NvbXAnLCB7IHNvbWU6IHRydWUsIHN0YXRlOiBmYWxzZSB9KVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtLXNvbWUnXG4qL1xuXG5mdW5jdGlvbiBhcHBseVByZWZpeFRvTmFtZShwcmVmaXgsIG5hbWUpIHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfSBlbHNlIGlmIChuYW1lWzBdID09PSAnLScpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgbmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ19fJyArIG5hbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lcyhwcmVmaXgsIHN0YXRlLCBjbGFzc05hbWUpIHtcbiAgdmFyIGFyciA9IFtjbGFzc05hbWVdO1xuXG4gIGlmIChzdGF0ZSAmJiBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHN0YXRlW2tleV0pIHtcbiAgICAgICAgYXJyLnB1c2goXCJcIiArIGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwga2V5KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpKS50cmltKCk7XG4gIH0pLmpvaW4oJyAnKTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBWYWx1ZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhblZhbHVlID0gZnVuY3Rpb24gY2xlYW5WYWx1ZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSByZXR1cm4gW3ZhbHVlXTtcbiAgcmV0dXJuIFtdO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIYW5kbGUgSW5wdXQgQ2hhbmdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSkge1xuICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiBuZXdWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dFZhbHVlO1xufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNjcm9sbCBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIHdpbmRvd10uaW5kZXhPZihlbCkgPiAtMTtcbn0gLy8gTm9ybWFsaXplZCBTY3JvbGwgVG9wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIGVsLnNjcm9sbFRvcDtcbn1cbmZ1bmN0aW9uIHNjcm9sbFRvKGVsLCB0b3ApIHtcbiAgLy8gd2l0aCBhIHNjcm9sbCBkaXN0YW5jZSwgd2UgcGVyZm9ybSBzY3JvbGwgb24gdGhlIGVsZW1lbnRcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsLnNjcm9sbFRvcCA9IHRvcDtcbn0gLy8gR2V0IFNjcm9sbCBQYXJlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgZXhjbHVkZVN0YXRpY1BhcmVudCA9IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICB2YXIgb3ZlcmZsb3dSeCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBzdWNrIGl0LCBmbG93Li4uXG5cbiAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gZG9jRWw7XG5cbiAgZm9yICh2YXIgcGFyZW50ID0gZWxlbWVudDsgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7KSB7XG4gICAgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG5cbiAgICBpZiAoZXhjbHVkZVN0YXRpY1BhcmVudCAmJiBzdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1J4LnRlc3Qoc3R5bGUub3ZlcmZsb3cgKyBzdHlsZS5vdmVyZmxvd1kgKyBzdHlsZS5vdmVyZmxvd1gpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb2NFbDtcbn0gLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5cbmZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlZFNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHtcbiAgICBkdXJhdGlvbiA9IDIwMDtcbiAgfVxuXG4gIGlmIChjYWxsYmFjayA9PT0gdm9pZCAwKSB7XG4gICAgY2FsbGJhY2sgPSBub29wO1xuICB9XG5cbiAgdmFyIHN0YXJ0ID0gZ2V0U2Nyb2xsVG9wKGVsZW1lbnQpO1xuICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgdmFyIGluY3JlbWVudCA9IDEwO1xuICB2YXIgY3VycmVudFRpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKSB7XG4gICAgY3VycmVudFRpbWUgKz0gaW5jcmVtZW50O1xuICAgIHZhciB2YWwgPSBlYXNlT3V0Q3ViaWMoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcbiAgICBzY3JvbGxUbyhlbGVtZW50LCB2YWwpO1xuXG4gICAgaWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVTY3JvbGwoKTtcbn0gLy8gU2Nyb2xsIEludG8gVmlld1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG1lbnVFbCwgZm9jdXNlZEVsKSB7XG4gIHZhciBtZW51UmVjdCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgb3ZlclNjcm9sbCA9IGZvY3VzZWRFbC5vZmZzZXRIZWlnaHQgLyAzO1xuXG4gIGlmIChmb2N1c2VkUmVjdC5ib3R0b20gKyBvdmVyU2Nyb2xsID4gbWVudVJlY3QuYm90dG9tKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1pbihmb2N1c2VkRWwub2Zmc2V0VG9wICsgZm9jdXNlZEVsLmNsaWVudEhlaWdodCAtIG1lbnVFbC5vZmZzZXRIZWlnaHQgKyBvdmVyU2Nyb2xsLCBtZW51RWwuc2Nyb2xsSGVpZ2h0KSk7XG4gIH0gZWxzZSBpZiAoZm9jdXNlZFJlY3QudG9wIC0gb3ZlclNjcm9sbCA8IG1lbnVSZWN0LnRvcCkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5tYXgoZm9jdXNlZEVsLm9mZnNldFRvcCAtIG92ZXJTY3JvbGwsIDApKTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdldCBib3VuZGluZyBjbGllbnQgb2JqZWN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNhbm5vdCBnZXQga2V5cyB1c2luZyBhcnJheSBub3RhdGlvbiB3aXRoIERPTVJlY3RcblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRPYmooZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LndpZHRoXG4gIH07XG59XG4vLyBUb3VjaCBDYXBhYmlsaXR5IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNUb3VjaENhcGFibGUoKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vYmlsZSBEZXZpY2UgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFNjcm9sbFBhcmVudCBhcyBhLCBnZXRTY3JvbGxUb3AgYXMgYiwgYW5pbWF0ZWRTY3JvbGxUbyBhcyBjLCBpc01vYmlsZURldmljZSBhcyBkLCBjbGVhblZhbHVlIGFzIGUsIHNjcm9sbEludG9WaWV3IGFzIGYsIGdldEJvdW5kaW5nQ2xpZW50T2JqIGFzIGcsIGNsYXNzTmFtZXMgYXMgaCwgaXNUb3VjaENhcGFibGUgYXMgaSwgaXNEb2N1bWVudEVsZW1lbnQgYXMgaiwgaGFuZGxlSW5wdXRDaGFuZ2UgYXMgaywgbm9vcCBhcyBuLCBzY3JvbGxUbyBhcyBzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9