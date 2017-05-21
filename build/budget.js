webpackJsonp([0],{

/***/ "../node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/Balance/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".app-components-Balance-style-balanceRowContainer {\n  display: flex;\n  justify-content: center;\n  margin: 3em 0 2em 0;\n  height: 90px;\n}\n\n.app-components-Balance-style-balanceRow {\n  display: flex;\n  padding: 0 1em;\n  border: 1px solid #b1b1b1;\n  border-radius: 6px;\n  background-color: #f0f0f0;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceWrapper {\n  display: flex;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceSymbol {\n  align-self: center;\n  padding-bottom: 1.2em;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceItem {\n  flex: 1;\n  padding: 0.5em 0;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceItem .app-components-Balance-style-balanceAmount {\n  display: inline-block;\n  padding: 1em;\n  margin: 0.5em;\n  border: 1px solid #b1b1b1;\n  border-radius: 6px;\n  background-color: white;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceItem .app-components-Balance-style-balanceAmount.app-components-Balance-style-neg {\n  color: #eb2a2a;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceItem .app-components-Balance-style-balanceAmount.app-components-Balance-style-pos {\n  color: #189c2d;\n}\n\n.app-components-Balance-style-balanceRow .app-components-Balance-style-balanceItem .app-components-Balance-style-balanceTitle {\n  text-align: center;\n}\n", ""]);

// exports
exports.locals = {
	"balanceRowContainer": "app-components-Balance-style-balanceRowContainer",
	"balanceRow": "app-components-Balance-style-balanceRow",
	"balanceWrapper": "app-components-Balance-style-balanceWrapper",
	"balanceSymbol": "app-components-Balance-style-balanceSymbol",
	"balanceItem": "app-components-Balance-style-balanceItem",
	"balanceAmount": "app-components-Balance-style-balanceAmount",
	"neg": "app-components-Balance-style-neg",
	"pos": "app-components-Balance-style-pos",
	"balanceTitle": "app-components-Balance-style-balanceTitle"
};

/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/BudgetGrid/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".app-components-BudgetGrid-style-budgetGrid {\n  display: flex;\n  flex-flow: column;\n  flex: 1;\n  border: 1px solid #b1b1b1;\n  border-collapse: collapse;\n  font-size: 0.8em;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tr {\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n  height: inherit;\n  padding: 8px;\n}\n\n.app-components-BudgetGrid-style-budgetGrid th, .app-components-BudgetGrid-style-budgetGrid td {\n  text-align: left;\n  overflow: hidden;\n}\n\n.app-components-BudgetGrid-style-budgetGrid th:last-child, .app-components-BudgetGrid-style-budgetGrid td:last-child {\n  text-align: right;\n}\n\n.app-components-BudgetGrid-style-budgetGrid th:nth-child(1), .app-components-BudgetGrid-style-budgetGrid th:nth-child(3), .app-components-BudgetGrid-style-budgetGrid td:nth-child(1), .app-components-BudgetGrid-style-budgetGrid td:nth-child(3) {\n  flex: 1;\n  min-width: 120px;\n}\n\n.app-components-BudgetGrid-style-budgetGrid th:nth-child(2), .app-components-BudgetGrid-style-budgetGrid td:nth-child(2) {\n  flex: 3;\n}\n\n.app-components-BudgetGrid-style-budgetGrid thead, .app-components-BudgetGrid-style-budgetGrid tfoot {\n  background-color: #f0f0f0;\n}\n\n.app-components-BudgetGrid-style-budgetGrid thead {\n  border-bottom: 1px solid #b1b1b1;\n}\n\n.app-components-BudgetGrid-style-budgetGrid thead th:last-child {\n  padding-right: 3.5em;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tbody {\n  overflow-y: scroll;\n  display: block;\n  flex: 1;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tbody tr {\n  border-bottom: 1px solid #dadada;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tbody td {\n  vertical-align: top;\n  padding-left: 2em;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tbody td.app-components-BudgetGrid-style-neg {\n  color: #eb2a2a;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tbody td.app-components-BudgetGrid-style-pos {\n  color: #189c2d;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tbody td:last-child {\n  padding-right: 2.5em;\n}\n\n.app-components-BudgetGrid-style-budgetGrid tfoot {\n  height: 40px;\n  border-top: 1px solid #b1b1b1;\n}\n", ""]);

// exports
exports.locals = {
	"budgetGrid": "app-components-BudgetGrid-style-budgetGrid",
	"neg": "app-components-BudgetGrid-style-neg",
	"pos": "app-components-BudgetGrid-style-pos"
};

/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/EntryFormRow/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".app-components-EntryFormRow-style-entryFormRow {\n  padding: 2px !important;\n}\n\n.app-components-EntryFormRow-style-entryFormRow td {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.app-components-EntryFormRow-style-entryFormRow td input, .app-components-EntryFormRow-style-entryFormRow td select {\n  flex: 1;\n  min-width: 50px;\n  height: 100%;\n  font-size: 1.1em;\n  padding: .5em .6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.16);\n  border-radius: 4px;\n  vertical-align: middle;\n  box-sizing: border-box;\n}\n\n.app-components-EntryFormRow-style-entryFormRow td input[type=number]::-webkit-inner-spin-button,\n.app-components-EntryFormRow-style-entryFormRow td input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.app-components-EntryFormRow-style-entryFormRow td button {\n  color: #fff;\n  margin-left: 5px;\n  text-transform: uppercase;\n  background: #1cb841;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: .5em 1em;\n  text-decoration: none;\n  border: transparent;\n}\n", ""]);

// exports
exports.locals = {
	"entryFormRow": "app-components-EntryFormRow-style-entryFormRow"
};

/***/ }),

/***/ "../node_modules/query-string/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__("../node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__("../node_modules/object-assign/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ "../node_modules/react-metismenu/lib/actions/content.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var updateContent = exports.updateContent = function updateContent(reduxUid, content) {
  return {
    type: 'UPDATE_CONTENT',
    reduxUid: reduxUid,
    content: content
  };
};

var changeSubMenuVisibility = exports.changeSubMenuVisibility = function changeSubMenuVisibility(reduxUid, id, trace, subMenuVisibility) {
  return {
    type: 'CHANGE_SUBMENU_VISIBILITY',
    reduxUid: reduxUid,
    id: id,
    trace: trace,
    subMenuVisibility: subMenuVisibility
  };
};

var changeActiveLinkId = exports.changeActiveLinkId = function changeActiveLinkId(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'id',
    value: value
  };
};
var changeActiveLinkTo = exports.changeActiveLinkTo = function changeActiveLinkTo(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'to',
    value: value
  };
};
var changeActiveLinkLabel = exports.changeActiveLinkLabel = function changeActiveLinkLabel(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'label',
    value: value
  };
};
var changeActiveLinkFromLocation = exports.changeActiveLinkFromLocation = function changeActiveLinkFromLocation(reduxUid) {
  return {
    type: 'CHANGE_ACTIVE_LINK_FROM_LOCATION',
    reduxUid: reduxUid
  };
};

/***/ }),

/***/ "../node_modules/react-metismenu/lib/actions/emitters.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitSelected = exports.emitSelected = function emitSelected(reduxUid, e) {
  return {
    type: 'EMIT_SELECTED',
    reduxUid: reduxUid,
    event: e
  };
};

var updateListener = exports.updateListener = function updateListener(reduxUid, listener) {
  return {
    type: 'UPDATE_LISTENER',
    reduxUid: reduxUid,
    listener: listener
  };
};

exports.default = true;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/components/Container.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * src/components/Container.jsx
                                                                                                                                                                                                                                                                   * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                   * Date: 16.09.2016
                                                                                                                                                                                                                                                                   */

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Item = __webpack_require__("../node_modules/react-metismenu/lib/containers/Item.js");

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref, _ref2) {
  var items = _ref.items,
      visible = _ref.visible,
      itemId = _ref.itemId,
      reduxStoreName = _ref.reduxStoreName,
      reduxUid = _ref.reduxUid;
  var classStore = _ref2.classStore;
  return _react2.default.createElement(
    'ul',
    {
      className: (0, _classnames2.default)(typeof classStore.classContainer === 'function' ? classStore.classContainer({ itemId: itemId, visible: visible, items: items }) : classStore.classContainer, visible && classStore.classContainerVisible)
    },
    items.map(function (item, i) {
      return _react2.default.createElement(_Item2.default, _extends({ key: item.id || '_' + i, reduxStoreName: reduxStoreName, reduxUid: reduxUid }, item));
    })
  );
};

Container.defaultProps = {
  itemId: null,
  visible: false
};

Container.propTypes = {
  itemId: _react.PropTypes.number,
  items: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  visible: _react.PropTypes.bool,
  reduxStoreName: _react.PropTypes.string.isRequired,
  reduxUid: _react.PropTypes.number.isRequired
};

Container.contextTypes = {
  classStore: _react.PropTypes.object.isRequired
};

exports.default = Container;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/components/DefaultLink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/components/DefaultLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

var DefaultLink = function DefaultLink(_ref) {
  var className = _ref.className,
      classNameActive = _ref.classNameActive,
      classNameHasActiveChild = _ref.classNameHasActiveChild,
      active = _ref.active,
      hasActiveChild = _ref.hasActiveChild,
      to = _ref.to,
      externalLink = _ref.externalLink,
      hasSubMenu = _ref.hasSubMenu,
      toggleSubMenu = _ref.toggleSubMenu,
      activateMe = _ref.activateMe,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    {
      className: (0, _classnames2.default)(className, active && classNameActive, hasActiveChild && classNameHasActiveChild),
      href: to,
      onClick: hasSubMenu ? toggleSubMenu : activateMe,
      target: externalLink ? '_blank' : undefined
    },
    children
  );
};

DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null
};

DefaultLink.propTypes = {
  className: _react.PropTypes.string.isRequired,
  classNameActive: _react.PropTypes.string.isRequired,
  classNameHasActiveChild: _react.PropTypes.string.isRequired,
  active: _react.PropTypes.bool.isRequired,
  hasActiveChild: _react.PropTypes.bool.isRequired,
  to: _react.PropTypes.string.isRequired,
  externalLink: _react.PropTypes.bool,
  hasSubMenu: _react.PropTypes.bool.isRequired,
  toggleSubMenu: _react.PropTypes.func,
  activateMe: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array]).isRequired
};

exports.default = DefaultLink;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/components/Item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Container = __webpack_require__("../node_modules/react-metismenu/lib/containers/Container.js");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref, _ref2) {
  var id = _ref.id,
      icon = _ref.icon,
      label = _ref.label,
      to = _ref.to,
      externalLink = _ref.externalLink,
      hasSubMenu = _ref.hasSubMenu,
      active = _ref.active,
      hasActiveChild = _ref.hasActiveChild,
      subMenuVisibility = _ref.subMenuVisibility,
      toggleSubMenu = _ref.toggleSubMenu,
      activateMe = _ref.activateMe,
      reduxStoreName = _ref.reduxStoreName,
      reduxUid = _ref.reduxUid;
  var classStore = _ref2.classStore,
      LinkComponent = _ref2.LinkComponent;
  return _react2.default.createElement(
    'li',
    {
      className: (0, _classnames2.default)(classStore.classItem, active && classStore.classItemActive, hasActiveChild && classStore.classItemHasActiveChild, hasSubMenu && subMenuVisibility && classStore.classItemHasVisibleChild)
    },
    _react2.default.createElement(
      LinkComponent,
      {
        className: classStore.classLink,
        classNameActive: classStore.classLinkActive,
        classNameHasActiveChild: classStore.classLinkHasActiveChild,
        active: active,
        hasActiveChild: hasActiveChild,
        id: id,
        to: to,
        label: label,
        externalLink: externalLink,
        hasSubMenu: hasSubMenu,
        toggleSubMenu: toggleSubMenu,
        activateMe: activateMe
      },
      _react2.default.createElement('i', { className: (0, _classnames2.default)(classStore.classIcon, classStore.iconNamePrefix + icon) }),
      label,
      hasSubMenu && _react2.default.createElement('i', {
        className: (0, _classnames2.default)(classStore.classStateIcon, classStore.iconNamePrefix + (subMenuVisibility ? classStore.iconNameStateVisible : classStore.iconNameStateHidden))
      })
    ),
    hasSubMenu && _react2.default.createElement(_Container2.default, {
      itemId: id,
      visible: subMenuVisibility,
      reduxStoreName: reduxStoreName,
      reduxUid: reduxUid
    })
  );
}; /**
    * src/components/Container.jsx
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 16.09.2016
    */

Item.defaultProps = {
  icon: '',
  label: '',
  to: null,
  externalLink: false,
  toggleSubMenu: null
};

Item.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array, _react.PropTypes.string]),
  to: _react.PropTypes.string,
  externalLink: _react.PropTypes.bool,
  hasSubMenu: _react.PropTypes.bool.isRequired,
  active: _react.PropTypes.bool.isRequired,
  hasActiveChild: _react.PropTypes.bool.isRequired,
  subMenuVisibility: _react.PropTypes.bool.isRequired,
  toggleSubMenu: _react.PropTypes.func,
  activateMe: _react.PropTypes.func.isRequired,
  reduxStoreName: _react.PropTypes.string.isRequired,
  reduxUid: _react.PropTypes.number.isRequired
};

Item.contextTypes = {
  classStore: _react.PropTypes.object.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired
};

exports.default = Item;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/components/MetisMenu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("../node_modules/redux/es/index.js");

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _simpleAjax = __webpack_require__("../node_modules/simple-ajax/index.js");

var _simpleAjax2 = _interopRequireDefault(_simpleAjax);

var _Container = __webpack_require__("../node_modules/react-metismenu/lib/containers/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _DefaultLink = __webpack_require__("../node_modules/react-metismenu/lib/components/DefaultLink.js");

var _DefaultLink2 = _interopRequireDefault(_DefaultLink);

var _internal = __webpack_require__("../node_modules/react-metismenu/lib/reducers/internal.js");

var _internal2 = _interopRequireDefault(_internal);

var _content = __webpack_require__("../node_modules/react-metismenu/lib/actions/content.js");

var _emitters = __webpack_require__("../node_modules/react-metismenu/lib/actions/emitters.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/components/MetisMenu.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16.09.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint react/forbid-prop-types: [ "error", { forbid: [ "any", "array" ] } ] */

var lastReduxUid = -1;

var MetisMenu = function (_React$Component) {
  _inherits(MetisMenu, _React$Component);

  function MetisMenu(props) {
    _classCallCheck(this, MetisMenu);

    var _this = _possibleConstructorReturn(this, (MetisMenu.__proto__ || Object.getPrototypeOf(MetisMenu)).call(this, props));

    lastReduxUid += 1;
    _this.reduxUid = lastReduxUid;
    _this.useExternalReduxStore = props.useExternalReduxStore;
    _this.reduxStoreName = props.reduxStoreName;
    if (_this.useExternalReduxStore) {
      _this.store = _this.useExternalReduxStore;
    } else {
      _this.store = (0, _redux.createStore)(_internal2.default);
    }

    if (props.onSelected) {
      _this.store.dispatch((0, _emitters.updateListener)(_this.reduxUid, props.onSelected));
    }

    _this.LinkComponent = props.LinkComponent;

    if (props.content) {
      _this.updateContent(props.content);
      _this.updateActiveLink(props);
    } else if (props.ajax) {
      _this.updateRemoteContent(props);
    }

    _this.classStore = {
      classMainWrapper: (0, _classnames2.default)({ metismenu: !props.noBuiltInClassNames }, props.className),
      classContainer: typeof props.classNameContainer === 'function' ? props.classNameContainer : (0, _classnames2.default)({ 'metismenu-container': !props.noBuiltInClassNames }, props.classNameContainer),
      classContainerVisible: (0, _classnames2.default)({ visible: !props.noBuiltInClassNames }, props.classNameContainerVisible),
      classItem: (0, _classnames2.default)({ 'metismenu-item': !props.noBuiltInClassNames }, props.classNameItem),
      classLink: (0, _classnames2.default)({ 'metismenu-link': !props.noBuiltInClassNames }, props.classNameLink),
      classItemActive: props.classNameItemActive,
      classItemHasActiveChild: props.classNameItemHasActiveChild,
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      classLinkActive: (0, _classnames2.default)({ active: !props.noBuiltInClassNames }, props.classNameLinkActive),
      classLinkHasActiveChild: (0, _classnames2.default)({ 'has-active-child': !props.noBuiltInClassNames }, props.classNameLinkHasActiveChild),
      classIcon: (0, _classnames2.default)({ 'metismenu-icon': !props.noBuiltInClassNames }, props.classNameIcon),
      classStateIcon: (0, _classnames2.default)({ 'metismenu-state-icon': !props.noBuiltInClassNames }, props.classNameStateIcon),

      iconNamePrefix: props.iconNamePrefix,
      iconNameStateHidden: props.iconNameStateHidden,
      iconNameStateVisible: props.iconNameStateVisible
    };
    return _this;
  }

  _createClass(MetisMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        classStore: this.classStore,
        LinkComponent: this.LinkComponent
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.content !== nextProps.content) {
        this.updateContent(nextProps.content);
      }

      if (this.props.ajax !== nextProps.ajax) {
        this.updateRemoteContent(nextProps);
      } else {
        this.updateActiveLink(nextProps);
      }
    }
  }, {
    key: 'changeActiveLinkId',
    value: function changeActiveLinkId(value) {
      this.store.dispatch((0, _content.changeActiveLinkId)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkTo',
    value: function changeActiveLinkTo(value) {
      this.store.dispatch((0, _content.changeActiveLinkTo)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkLabel',
    value: function changeActiveLinkLabel(value) {
      this.store.dispatch((0, _content.changeActiveLinkLabel)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkFromLocation',
    value: function changeActiveLinkFromLocation() {
      this.store.dispatch((0, _content.changeActiveLinkFromLocation)(this.reduxUid));
    }
  }, {
    key: 'updateActiveLink',
    value: function updateActiveLink(props) {
      if (props.activeLinkId) this.changeActiveLinkId(props.activeLinkId);else if (props.activeLinkTo) this.changeActiveLinkTo(props.activeLinkTo);else if (props.activeLinkLabel) this.changeActiveLinkLabel(props.activeLinkLabel);else if (props.activeLinkFromLocation) this.changeActiveLinkFromLocation();
    }
  }, {
    key: 'updateRemoteContent',
    value: function updateRemoteContent(props) {
      var _this2 = this;

      var ajax = new _simpleAjax2.default(props.ajax);
      ajax.on('success', function (event) {
        var content = void 0;
        var responseText = event.target.responseText;
        try {
          content = JSON.parse(responseText);
        } catch (e) {
          throw new Error('MetisMenu: Ajax response expected to be json, but got; ' + responseText);
        }
        _this2.updateContent(content);
        _this2.updateActiveLink(props);
      });
      ajax.send();
    }
  }, {
    key: 'updateContent',
    value: function updateContent(content) {
      this.store.dispatch((0, _content.updateContent)(this.reduxUid, content));
    }
  }, {
    key: 'render',
    value: function render() {
      var mainWrapper = _react2.default.createElement(
        'div',
        { className: this.classStore.classMainWrapper },
        _react2.default.createElement(_Container2.default, {
          reduxStoreName: this.reduxStoreName,
          reduxUid: this.reduxUid
        })
      );

      if (this.useExternalReduxStore) {
        return mainWrapper;
      }

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        mainWrapper
      );
    }
  }]);

  return MetisMenu;
}(_react2.default.Component);

MetisMenu.defaultProps = {
  content: [],
  ajax: null,
  LinkComponent: _DefaultLink2.default,
  noBuiltInClassNames: false,
  className: null,
  classNameContainer: null,
  classNameContainerVisible: null,
  classNameItem: null,
  classNameItemActive: null,
  classNameItemHasActiveChild: null,
  classNameItemHasVisibleChild: null,
  classNameLink: null,
  classNameLinkActive: null,
  classNameLinkHasActiveChild: null,
  classNameIcon: null,
  classNameStateIcon: null,
  iconNamePrefix: 'fa fa-',
  iconNameStateHidden: 'caret-left',
  iconNameStateVisible: 'caret-left rotate-minus-90',
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: 'metisMenuStore'
};

MetisMenu.propTypes = {
  content: _react.PropTypes.arrayOf(_react.PropTypes.object),
  ajax: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),

  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),

  noBuiltInClassNames: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  classNameContainer: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  classNameContainerVisible: _react.PropTypes.string,
  classNameItem: _react.PropTypes.string,
  classNameItemActive: _react.PropTypes.string,
  classNameItemHasActiveChild: _react.PropTypes.string,
  classNameItemHasVisibleChild: _react.PropTypes.string,
  classNameLink: _react.PropTypes.string,
  classNameLinkActive: _react.PropTypes.string,
  classNameLinkHasActiveChild: _react.PropTypes.string,
  classNameIcon: _react.PropTypes.string,
  classNameStateIcon: _react.PropTypes.string,
  iconNamePrefix: _react.PropTypes.string,
  iconNameStateHidden: _react.PropTypes.string,
  iconNameStateVisible: _react.PropTypes.string,

  /* activeLinkId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  activeLinkTo: PropTypes.string,
  activeLinkLabel: PropTypes.string,
  activeLinkFromLocation: PropTypes.bool,*/

  onSelected: _react.PropTypes.func,
  useExternalReduxStore: _react.PropTypes.object,
  reduxStoreName: _react.PropTypes.string
};

MetisMenu.childContextTypes = {
  classStore: _react.PropTypes.object.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired
};

exports.default = MetisMenu;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/containers/Container.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _Container = __webpack_require__("../node_modules/react-metismenu/lib/components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapStateToProps = function mapStateToProps(store, ownProps) {
  return {
    items: store[ownProps.reduxStoreName].content[ownProps.reduxUid].filter(function (item) {
      return item.parentId === ownProps.itemId;
    })
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Container2.default);

/***/ }),

/***/ "../node_modules/react-metismenu/lib/containers/Item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _content = __webpack_require__("../node_modules/react-metismenu/lib/actions/content.js");

var _emitters = __webpack_require__("../node_modules/react-metismenu/lib/actions/emitters.js");

var _Item = __webpack_require__("../node_modules/react-metismenu/lib/components/Item.js");

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleSubMenu: function toggleSubMenu(e) {
      if (!ownProps.hasSubMenu) return;
      e.preventDefault();
      dispatch((0, _content.changeSubMenuVisibility)(ownProps.reduxUid, ownProps.id, ownProps.trace, !ownProps.subMenuVisibility));
    },
    activateMe: function activateMe(e) {
      dispatch((0, _emitters.emitSelected)(ownProps.reduxUid, e));
      if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
        dispatch((0, _content.changeActiveLinkId)(ownProps.reduxUid, ownProps.id));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Item2.default);

/***/ }),

/***/ "../node_modules/react-metismenu/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MetisMenu = __webpack_require__("../node_modules/react-metismenu/lib/components/MetisMenu.js");

var _MetisMenu2 = _interopRequireDefault(_MetisMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MetisMenu2.default; /**
                                        * src/main.js
                                        * Author: H.Alper Tuna <halpertuna@gmail.com>
                                        * Date: 16.09.2016
                                        */

/***/ }),

/***/ "../node_modules/react-metismenu/lib/reducers/content.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _content = __webpack_require__("../node_modules/react-metismenu/lib/actions/content.js");

var _flattenContent = __webpack_require__("../node_modules/react-metismenu/lib/reducers/flattenContent.js");

var _flattenContent2 = _interopRequireDefault(_flattenContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file reducers/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

/* eslint-env browser */

var item = function item(state, action) {
  switch (action.type) {
    case 'CHANGE_SUBMENU_VISIBILITY':
      {
        return Object.assign({}, state, {
          subMenuVisibility: state.id === action.id ? action.subMenuVisibility : action.trace.indexOf(state.id) !== -1
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        return Object.assign({}, state, {
          active: state.id === action.id,
          hasActiveChild: action.trace.indexOf(state.id) !== -1
        });
      }
    default:
      {
        return state;
      }
  }
};

var findItem = function findItem(content, value, prop) {
  return content.find(function (i) {
    return i[prop] === value;
  });
};

var content = function content() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'UPDATE_CONTENT':
      {
        return (0, _flattenContent2.default)(action.content);
      }
    case 'CHANGE_SUBMENU_VISIBILITY':
      {
        return state.map(function (i) {
          return item(i, action);
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        var activeItem = void 0;
        if (action.type === 'CHANGE_ACTIVE_LINK_FROM_LOCATION') {
          var locationSets = [window.location.pathname + window.location.search, // /path?search
          window.location.hash, // #hash
          window.location.pathname + window.location.search + window.location.hash];
          activeItem = state.find(function (i) {
            return locationSets.indexOf(i.to) !== -1;
          });
        } else {
          activeItem = findItem(state, action.value, action.propName);
        }

        // If metismenu user tries to activate non-exist item
        if (!activeItem) return state;

        var _activeItem = activeItem,
            id = _activeItem.id,
            parentId = _activeItem.parentId,
            trace = _activeItem.trace;

        var stage = state.map(function (i) {
          return item(i, Object.assign({ id: id, trace: trace }, action));
        });

        // Trace also keeps parentId nonetheless it doesn't matter
        return content(stage, (0, _content.changeSubMenuVisibility)(action.reduxUid, parentId, trace, true));
      }
    default:
      {
        return state;
      }
  }
};

var multiContent = function multiContent() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (typeof action.reduxUid === 'undefined') return state;

  var reduxUid = action.reduxUid;
  var newState = Object.assign({}, state);
  newState[reduxUid] = content(state[reduxUid], action);
  return newState;
};

exports.default = multiContent;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/reducers/emitters.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file reducers/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitters = function emitters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'EMIT_SELECTED':
      {
        if (state.emitSelected) {
          state.emitSelected(action.event);
        }
        return state;
      }
    case 'UPDATE_LISTENER':
      {
        return Object.assign({}, state, {
          emitSelected: action.listener
        });
      }
    default:
      {
        return state;
      }
  }
};

var multiEmitters = function multiEmitters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (typeof action.reduxUid === 'undefined') return state;

  var reduxUid = action.reduxUid;
  var newState = Object.assign({}, state);
  newState[reduxUid] = emitters(state[reduxUid], action);
  return newState;
};

exports.default = multiEmitters;

/***/ }),

/***/ "../node_modules/react-metismenu/lib/reducers/flattenContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * src/reducers/flattenContent.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

/* eslint no-param-reassign: ["error", { "props": false }] */

var uid = void 0;
var flattenLevel = function flattenLevel(content, parentId) {
  var flatContent = [];
  content.forEach(function (item) {
    var id = item.id || uid;
    uid += 1;

    flatContent.push({
      id: id,
      parentId: item.parentId || parentId,
      icon: item.icon,
      label: item.label,
      to: item.to,
      externalLink: item.externalLink,
      active: false,
      hasActiveChild: false,
      subMenuVisibility: false
    });
    if (typeof item.content !== 'undefined') {
      flatContent = [].concat(_toConsumableArray(flatContent), _toConsumableArray(flattenLevel(item.content, id)));
    }
  });
  return flatContent;
};

var trace = void 0;
var mapTrace = function mapTrace(content, parentId) {
  var subItems = content.filter(function (item) {
    return item.parentId === parentId;
  });
  subItems.forEach(function (item) {
    item.trace = [].concat(_toConsumableArray(trace));
    trace.push(item.id);
    item.hasSubMenu = mapTrace(content, item.id);
    if (item.hasSubMenu) {
      item.to = '#';
    }
    trace.pop();
  });
  return subItems.length > 0;
};

exports.default = function (content) {
  uid = 1;
  trace = [];
  var flatContent = flattenLevel(content);
  mapTrace(flatContent);
  return flatContent;
};

/***/ }),

/***/ "../node_modules/react-metismenu/lib/reducers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("../node_modules/redux/es/index.js");

var _content = __webpack_require__("../node_modules/react-metismenu/lib/reducers/content.js");

var _content2 = _interopRequireDefault(_content);

var _emitters = __webpack_require__("../node_modules/react-metismenu/lib/reducers/emitters.js");

var _emitters2 = _interopRequireDefault(_emitters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  content: _content2.default,
  emitters: _emitters2.default
}); /**
     * src/reducers/index.js
     * Author: H.Alper Tuna <halpertuna@gmail.com>
     * Date: 16.09.2016
     */

/* eslint-env browser */

/***/ }),

/***/ "../node_modules/react-metismenu/lib/reducers/internal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("../node_modules/redux/es/index.js");

var _index = __webpack_require__("../node_modules/react-metismenu/lib/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file src/reducers/internal.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 03.02.2017
 */

/* eslint-env browser */

exports.default = (0, _redux.combineReducers)({
  metisMenuStore: _index2.default
});

/***/ }),

/***/ "../node_modules/reselect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      lastResult = func.apply(undefined, args);
    }
    lastArgs = args;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "../node_modules/simple-ajax/index.js":
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__("../node_modules/events/events.js").EventEmitter,
    queryString = __webpack_require__("../node_modules/query-string/index.js");

function tryParseJson(data){
    try{
        return JSON.parse(data);
    }catch(error){
        return error;
    }
}

function timeout(){
   this.request.abort();
   this.emit('timeout');
}

function Ajax(settings){
    var queryStringData,
        ajax = this;

    if(typeof settings === 'string'){
        settings = {
            url: settings
        };
    }

    if(typeof settings !== 'object'){
        settings = {};
    }

    ajax.settings = settings;
    ajax.request = new XMLHttpRequest();
    ajax.settings.method = ajax.settings.method || 'get';

    if(ajax.settings.cors && !'withCredentials' in ajax.request){
        if (typeof XDomainRequest !== 'undefined') {
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            ajax.request = new XDomainRequest();
        } else {
            // Otherwise, CORS is not supported by the browser.
            ajax.emit('error', new Error('Cors is not supported by this browser'));
        }
    }

    if(ajax.settings.cache === false){
        ajax.settings.data = ajax.settings.data || {};
        ajax.settings.data._ = new Date().getTime();
    }

    if(ajax.settings.method.toLowerCase() === 'get' && typeof ajax.settings.data === 'object'){
        var urlParts = ajax.settings.url.split('?');

        queryStringData = queryString.parse(urlParts[1]);

        for(var key in ajax.settings.data){
            queryStringData[key] = ajax.settings.data[key];
        }

        var parsedQueryStringData = queryString.stringify(queryStringData);

        ajax.settings.url = urlParts[0] + (parsedQueryStringData ? '?' + parsedQueryStringData : '');
        ajax.settings.data = null;
    }

    ajax.request.addEventListener('progress', function(event){
        ajax.emit('progress', event);
    }, false);

    ajax.request.addEventListener('load', function(event){
        var data = event.target.responseText;

        if(ajax.settings.dataType && ajax.settings.dataType.toLowerCase() === 'json'){
            if(data === ''){
                data = undefined;
            }else{
                data = tryParseJson(data);
                if(data instanceof Error){
                    ajax.emit('error', event, data);
                    return;
                }
            }
        }

        if(event.target.status >= 400){
            ajax.emit('error', event, data);
        } else {
            ajax.emit('success', event, data);
        }

    }, false);

    ajax.request.addEventListener('error', function(event){
        ajax.emit('error', event);
    }, false);

    ajax.request.addEventListener('abort', function(event){
        ajax.emit('error', event, new Error('Connection Aborted'));
        ajax.emit('abort', event);
    }, false);

    ajax.request.addEventListener('loadend', function(event){
        clearTimeout(ajax._requestTimeout);
        ajax.emit('complete', event);
    }, false);

    ajax.request.open(ajax.settings.method || 'get', ajax.settings.url, true);

    if(ajax.settings.cors && 'withCredentials' in ajax.request) {
        ajax.request.withCredentials = !!settings.withCredentials;
    }

    // Set default headers
    if(ajax.settings.contentType !== false){
        ajax.request.setRequestHeader('Content-Type', ajax.settings.contentType || 'application/json; charset=utf-8');
    }
    if(ajax.settings.requestedWith !== false) {
        ajax.request.setRequestHeader('X-Requested-With', ajax.settings.requestedWith || 'XMLHttpRequest');
    }
    if(ajax.settings.auth){
        ajax.request.setRequestHeader('Authorization', ajax.settings.auth);
    }

    // Set custom headers
    for(var headerKey in ajax.settings.headers){
        ajax.request.setRequestHeader(headerKey, ajax.settings.headers[headerKey]);
    }

    if(ajax.settings.processData !== false && ajax.settings.dataType === 'json'){
        ajax.settings.data = JSON.stringify(ajax.settings.data);
    }
}

Ajax.prototype = Object.create(EventEmitter.prototype);

Ajax.prototype.send = function(){
    var ajax = this;

    ajax._requestTimeout = setTimeout(
        function(){
            timeout.apply(ajax, []);
        },
        ajax.settings.timeout || 120000
    );

    ajax.request.send(ajax.settings.data && ajax.settings.data);
};

module.exports = Ajax;


/***/ }),

/***/ "../node_modules/strict-uri-encode/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./components/Balance/BalancePrefix.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./components/Balance/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BalancePrefix = function BalancePrefix(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'div',
    { className: _style2.default.balanceSymbol },
    text
  );
};

BalancePrefix.propTypes = {
  text: _react.PropTypes.string.isRequired
};

var _default = BalancePrefix;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BalancePrefix, 'BalancePrefix', 'C:/Github/iPos/app/components/Balance/BalancePrefix.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/Balance/BalancePrefix.js');
}();

;

/***/ }),

/***/ "./components/Balance/BalanceRow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./components/Balance/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Balance = function Balance(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _style2.default.balanceRowContainer },
    _react2.default.createElement(
      'div',
      { className: _style2.default.balanceRow },
      children
    )
  );
};

Balance.propTypes = {
  children: _react.PropTypes.node.isRequired
};

var _default = Balance;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Balance, 'Balance', 'C:/Github/iPos/app/components/Balance/BalanceRow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/Balance/BalanceRow.js');
}();

;

/***/ }),

/***/ "./components/Balance/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./components/Balance/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Balance = function Balance(_ref) {
  var title = _ref.title,
      amount = _ref.amount,
      colorize = _ref.colorize;

  var amountCls = colorize && (amount.isNegative ? _style2.default.neg : _style2.default.pos);

  return _react2.default.createElement(
    'div',
    { className: _style2.default.balanceWrapper },
    _react2.default.createElement(
      'div',
      { className: _style2.default.balanceItem },
      _react2.default.createElement(
        'div',
        { className: _style2.default.balanceAmount + ' ' + amountCls },
        amount.text
      ),
      _react2.default.createElement(
        'div',
        { className: _style2.default.balanceTitle },
        title
      )
    )
  );
};

Balance.propTypes = {
  title: _react.PropTypes.string.isRequired,
  amount: _react.PropTypes.object.isRequired,
  colorize: _react.PropTypes.bool
};

Balance.defaultProps = {
  colorize: true
};

var _default = Balance;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Balance, 'Balance', 'C:/Github/iPos/app/components/Balance/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/Balance/index.js');
}();

;

/***/ }),

/***/ "./components/Balance/style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/Balance/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/Balance/style.scss", function() {
			var newContent = __webpack_require__("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/Balance/style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/BudgetGrid/BudgetGridRow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _formatAmount = __webpack_require__("./utils/formatAmount.js");

var _formatAmount2 = _interopRequireDefault(_formatAmount);

var _style = __webpack_require__("./components/BudgetGrid/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BudgetGridRow = function BudgetGridRow(props) {
  var transaction = props.transaction,
      categories = props.categories;

  var amount = (0, _formatAmount2.default)(transaction.value);
  var amountCls = amount.isNegative ? _style2.default.neg : _style2.default.pos;

  return _react2.default.createElement(
    'tr',
    { key: transaction.id },
    _react2.default.createElement(
      'td',
      null,
      categories[transaction.categoryId]
    ),
    _react2.default.createElement(
      'td',
      null,
      transaction.description
    ),
    _react2.default.createElement(
      'td',
      { className: amountCls },
      amount.text
    )
  );
};
BudgetGridRow.propTypes = {
  transaction: _react.PropTypes.object.isRequired,
  categories: _react.PropTypes.object.isRequired
};

var _default = BudgetGridRow;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BudgetGridRow, 'BudgetGridRow', 'C:/Github/iPos/app/components/BudgetGrid/BudgetGridRow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/BudgetGrid/BudgetGridRow.js');
}();

;

/***/ }),

/***/ "./components/BudgetGrid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _transactions = __webpack_require__("./selectors/transactions.js");

var _categories = __webpack_require__("./selectors/categories.js");

var _EntryFormRow = __webpack_require__("./components/EntryFormRow/index.js");

var _EntryFormRow2 = _interopRequireDefault(_EntryFormRow);

var _BudgetGridRow = __webpack_require__("./components/BudgetGrid/BudgetGridRow.js");

var _BudgetGridRow2 = _interopRequireDefault(_BudgetGridRow);

var _style = __webpack_require__("./components/BudgetGrid/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BudgetGrid = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    transactions: (0, _transactions.getTransactions)(state),
    categories: (0, _categories.getCategories)(state)
  };
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(BudgetGrid, _Component);

  function BudgetGrid() {
    _classCallCheck(this, BudgetGrid);

    return _possibleConstructorReturn(this, (BudgetGrid.__proto__ || Object.getPrototypeOf(BudgetGrid)).apply(this, arguments));
  }

  _createClass(BudgetGrid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          transactions = _props.transactions,
          categories = _props.categories;


      return _react2.default.createElement(
        'table',
        { className: _style2.default.budgetGrid },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Category'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Description'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Amount'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          transactions.map(function (transaction) {
            return _react2.default.createElement(_BudgetGridRow2.default, { key: transaction.id, transaction: transaction, categories: categories });
          })
        ),
        _react2.default.createElement(
          'tfoot',
          null,
          _react2.default.createElement(_EntryFormRow2.default, null)
        )
      );
    }
  }]);

  return BudgetGrid;
}(_react.Component), _class2.propTypes = {
  transactions: _react.PropTypes.array,
  categories: _react.PropTypes.object
}, _class2.defaultProps = {
  transactions: [],
  categories: {}
}, _temp)) || _class);
var _default = BudgetGrid;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BudgetGrid, 'BudgetGrid', 'C:/Github/iPos/app/components/BudgetGrid/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/BudgetGrid/index.js');
}();

;

/***/ }),

/***/ "./components/BudgetGrid/style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/BudgetGrid/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/BudgetGrid/style.scss", function() {
			var newContent = __webpack_require__("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/BudgetGrid/style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/EntryFormRow/DataSelector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataSelector;

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataSelector(props) {
  var data = props.data;


  return _react2.default.createElement(
    'select',
    { name: props.name, value: props.value, onChange: props.onChange },
    Object.keys(data).map(function (id) {
      return _react2.default.createElement(
        'option',
        { key: id, value: id },
        data[id]
      );
    })
  );
}

DataSelector.propTypes = {
  name: _react.PropTypes.string,
  value: _react.PropTypes.string.isRequired,
  data: _react.PropTypes.object.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

DataSelector.defaultProps = {
  name: ''
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DataSelector, 'DataSelector', 'C:/Github/iPos/app/components/EntryFormRow/DataSelector.js');
}();

;

/***/ }),

/***/ "./components/EntryFormRow/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _categories = __webpack_require__("./selectors/categories.js");

var _transactions = __webpack_require__("./modules/transactions.js");

var _DataSelector = __webpack_require__("./components/EntryFormRow/DataSelector.js");

var _DataSelector2 = _interopRequireDefault(_DataSelector);

var _style = __webpack_require__("./components/EntryFormRow/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntryFormRow = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    defaultCategoryId: (0, _categories.getDefaultCategoryId)(),
    categories: (0, _categories.getCategories)(state)
  };
}, {
  addTransaction: _transactions.actions.addTransaction
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(EntryFormRow, _Component);

  function EntryFormRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EntryFormRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EntryFormRow.__proto__ || Object.getPrototypeOf(EntryFormRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      categoryId: _this.props.defaultCategoryId,
      description: '',
      value: ''
    }, _this.handleFieldChange = function () {
      var _this2;

      return (_this2 = _this).__handleFieldChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleKeyUp = function () {
      var _this3;

      return (_this3 = _this).__handleKeyUp__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleAddButtonClick = function () {
      var _this4;

      return (_this4 = _this).__handleAddButtonClick__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleValueRefUpdate = function () {
      var _this5;

      return (_this5 = _this).__handleValueRefUpdate__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.addEntry = function () {
      var _this6;

      return (_this6 = _this).__addEntry__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EntryFormRow, [{
    key: '__handleFieldChange__REACT_HOT_LOADER__',
    value: function __handleFieldChange__REACT_HOT_LOADER__() {
      return this.__handleFieldChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleFieldChange__REACT_HOT_LOADER__',
    value: function __handleFieldChange__REACT_HOT_LOADER__() {
      return this.__handleFieldChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleFieldChange__REACT_HOT_LOADER__',
    value: function __handleFieldChange__REACT_HOT_LOADER__() {
      return this.__handleFieldChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleFieldChange__REACT_HOT_LOADER__',
    value: function __handleFieldChange__REACT_HOT_LOADER__(e) {
      return this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__() {
      return this.__handleKeyUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__() {
      return this.__handleKeyUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__() {
      return this.__handleKeyUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(e) {
      return e.keyCode === 13 && this.addEntry();
    }
  }, {
    key: '__handleAddButtonClick__REACT_HOT_LOADER__',
    value: function __handleAddButtonClick__REACT_HOT_LOADER__() {
      return this.__handleAddButtonClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleAddButtonClick__REACT_HOT_LOADER__',
    value: function __handleAddButtonClick__REACT_HOT_LOADER__() {
      return this.__handleAddButtonClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleAddButtonClick__REACT_HOT_LOADER__',
    value: function __handleAddButtonClick__REACT_HOT_LOADER__() {
      return this.__handleAddButtonClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleAddButtonClick__REACT_HOT_LOADER__',
    value: function __handleAddButtonClick__REACT_HOT_LOADER__() {
      return this.addEntry();
    }
  }, {
    key: '__handleValueRefUpdate__REACT_HOT_LOADER__',
    value: function __handleValueRefUpdate__REACT_HOT_LOADER__() {
      return this.__handleValueRefUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleValueRefUpdate__REACT_HOT_LOADER__',
    value: function __handleValueRefUpdate__REACT_HOT_LOADER__() {
      return this.__handleValueRefUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleValueRefUpdate__REACT_HOT_LOADER__',
    value: function __handleValueRefUpdate__REACT_HOT_LOADER__() {
      return this.__handleValueRefUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleValueRefUpdate__REACT_HOT_LOADER__',
    value: function __handleValueRefUpdate__REACT_HOT_LOADER__(ref) {
      this.valueRef = ref;
    }
  }, {
    key: '__addEntry__REACT_HOT_LOADER__',
    value: function __addEntry__REACT_HOT_LOADER__() {
      return this.__addEntry__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addEntry__REACT_HOT_LOADER__',
    value: function __addEntry__REACT_HOT_LOADER__() {
      return this.__addEntry__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addEntry__REACT_HOT_LOADER__',
    value: function __addEntry__REACT_HOT_LOADER__() {
      return this.__addEntry__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addEntry__REACT_HOT_LOADER__',
    value: function __addEntry__REACT_HOT_LOADER__() {
      var _state = this.state,
          categoryId = _state.categoryId,
          description = _state.description,
          value = _state.value;

      // do nothing if there's no value added

      if (value) {
        this.props.addTransaction({ categoryId: categoryId, description: description, value: value });

        // keep the chosen category but clear everything else
        this.setState({
          description: '',
          value: ''
        });
      }

      this.valueRef.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        { className: _style2.default.entryFormRow },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_DataSelector2.default, {
            name: 'categoryId',
            value: this.state.categoryId,
            data: this.props.categories,
            onChange: this.handleFieldChange
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            name: 'description',
            value: this.state.description,
            onChange: this.handleFieldChange,
            onKeyUp: this.handleKeyUp,
            placeholder: 'Description'
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('input', {
            type: 'number',
            name: 'value',
            value: this.state.value,
            ref: this.handleValueRefUpdate,
            onChange: this.handleFieldChange,
            onKeyUp: this.handleKeyUp,
            placeholder: 'Value',
            className: _style2.default.amountField
          }),
          _react2.default.createElement(
            'button',
            { onClick: this.handleAddButtonClick },
            'Add'
          )
        )
      );
    }
  }]);

  return EntryFormRow;
}(_react.Component), _class2.propTypes = {
  defaultCategoryId: _react.PropTypes.string.isRequired,
  categories: _react.PropTypes.object.isRequired,
  addTransaction: _react.PropTypes.func.isRequired
}, _temp2)) || _class);
var _default = EntryFormRow;
exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EntryFormRow, 'EntryFormRow', 'C:/Github/iPos/app/components/EntryFormRow/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/EntryFormRow/index.js');
}();

;

/***/ }),

/***/ "./components/EntryFormRow/style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/EntryFormRow/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/EntryFormRow/style.scss", function() {
			var newContent = __webpack_require__("../node_modules/css-loader/index.js?{\"module\":true,\"localIdentName\":\"[path][name]-[local]\"}!../node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":false,\"includePaths\":[\"C:/Github/iPos/app\"]}!./components/EntryFormRow/style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/PosMain/CheckoutCart/CheckoutCartItemComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckoutCartItemComponent = function (_Component) {
    _inherits(CheckoutCartItemComponent, _Component);

    function CheckoutCartItemComponent(props, context) {
        _classCallCheck(this, CheckoutCartItemComponent);

        //local state for each transaction item;
        var _this = _possibleConstructorReturn(this, (CheckoutCartItemComponent.__proto__ || Object.getPrototypeOf(CheckoutCartItemComponent)).call(this, props, context));

        _this.onAddMenuItem = function () {
            return _this.__onAddMenuItem__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onRemoveMenuItem = function () {
            return _this.__onRemoveMenuItem__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.updateTransaction = function () {
            return _this.__updateTransaction__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            transactionId: 0,
            itemQuantity: 0,
            itemName: '',
            itemPrice: 0.00
        };

        return _this;
    }

    _createClass(CheckoutCartItemComponent, [{
        key: '__onAddMenuItem__REACT_HOT_LOADER__',
        value: function __onAddMenuItem__REACT_HOT_LOADER__() {
            return this.__onAddMenuItem__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onAddMenuItem__REACT_HOT_LOADER__',
        value: function __onAddMenuItem__REACT_HOT_LOADER__(transactionId) {
            console.log(">>> adding item and priting state ");
            console.log(this.state);

            var itemQuantity = this.state.itemQuantity + 1;
            this.setState({
                itemQuantity: itemQuantity
            });

            //update the reducer store;
            this.updateTransaction(itemQuantity);
        }
    }, {
        key: '__onRemoveMenuItem__REACT_HOT_LOADER__',
        value: function __onRemoveMenuItem__REACT_HOT_LOADER__() {
            return this.__onRemoveMenuItem__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onRemoveMenuItem__REACT_HOT_LOADER__',
        value: function __onRemoveMenuItem__REACT_HOT_LOADER__(transactionId) {
            console.log(">>> removing item and priting state ");
            console.log(this.state);

            var itemQuantity = this.state.itemQuantity - 1;
            this.setState({
                itemQuantity: itemQuantity
            });
        }
    }, {
        key: '__updateTransaction__REACT_HOT_LOADER__',
        value: function __updateTransaction__REACT_HOT_LOADER__() {
            return this.__updateTransaction__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__updateTransaction__REACT_HOT_LOADER__',
        value: function __updateTransaction__REACT_HOT_LOADER__(itemQuantity) {
            var transactionItem = {
                transactionId: this.state.transactionId,
                menuPrice: this.state.itemPrice,
                quantity: itemQuantity,
                menuName: this.state.itemName
            };

            this.props.onTransactionUpdate(transactionItem);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var transactionId = this.props.transactionId;
            var itemPrice = this.props.itemPrice;
            var itemQuantity = this.props.itemQuantity;
            var itemName = this.props.itemName;

            this.setState({
                transactionId: transactionId,
                itemPrice: itemPrice,
                itemQuantity: itemQuantity,
                itemName: itemName
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // let transactionId = nextProps.transactionId;
            // let itemPrice = nextProps.itemPrice;
            // let itemQuantity = nextProps.itemQuantity;
            // let itemName = nextProps.itemName;

            //  this.setState({
            //     transactionId: transactionId,
            //     itemPrice: itemPrice,
            //     itemQuantity: itemQuantity,
            //     itemName: itemName
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                itemName = _props.itemName,
                itemQuantity = _props.itemQuantity,
                itemPrice = _props.itemPrice,
                transactionId = _props.transactionId,
                onTransactionUpdate = _props.onTransactionUpdate;


            var formattedName = transactionId + '. ' + itemName;
            var price = '$' + this.state.itemPrice;
            var totalAmount = '$' + this.state.itemPrice * this.state.itemQuantity + '.00';

            var itemQuantityrowSeperate = { marginTop: "6px" };
            var itemNamePaddingLeft = { paddingLeft: "0px" };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-6 text-left' },
                            _react2.default.createElement(
                                'span',
                                null,
                                transactionId,
                                '. ',
                                itemName
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-lg-6 text-right' },
                            _react2.default.createElement(
                                'span',
                                null,
                                price
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-1' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Qty'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-1' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-xs', onClick: this.onAddMenuItem },
                                _react2.default.createElement('span', { className: 'fa fa-plus-square fa-1x' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-1' },
                            _react2.default.createElement(
                                'i',
                                { className: 'fa fa-1x' },
                                this.state.itemQuantity,
                                ' '
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-1' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-xs', onClick: this.onRemoveMenuItem },
                                _react2.default.createElement('span', { className: 'fa fa-minus-square fa-1x' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: ' text-right' },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    'i',
                                    null,
                                    'Amount ',
                                    totalAmount
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CheckoutCartItemComponent;
}(_react.Component);

CheckoutCartItemComponent.propTypes = {
    itemName: _react.PropTypes.string,
    itemQuantity: _react.PropTypes.number,
    itemPrice: _react.PropTypes.number,
    transactionId: _react.PropTypes.number,
    onTransactionUpdate: _react.PropTypes.func
};

var _default = CheckoutCartItemComponent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CheckoutCartItemComponent, 'CheckoutCartItemComponent', 'C:/Github/iPos/app/components/PosMain/CheckoutCart/CheckoutCartItemComponent.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/PosMain/CheckoutCart/CheckoutCartItemComponent.js');
}();

;

/***/ }),

/***/ "./components/PosMain/Custom/CustomLinkComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomLinkComponent = function (_Component) {
    _inherits(CustomLinkComponent, _Component);

    function CustomLinkComponent() {
        _classCallCheck(this, CustomLinkComponent);

        var _this = _possibleConstructorReturn(this, (CustomLinkComponent.__proto__ || Object.getPrototypeOf(CustomLinkComponent)).call(this));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(CustomLinkComponent, [{
        key: "onClick",
        value: function onClick(e) {
            if (this.props.hasSubMenu) this.props.toggleSubMenu(e);else {
                console.log(">>> e is  ");
                console.log(e);
                this.props.onMenuClick(e);
                //   this.props.activateMe({
                //     newLocation: this.props.to,
                //     selectedMenuLabel: this.props.label,
                //   });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "button",
                { className: "metismenu-link", onClick: this.onClick },
                this.props.children
            );
        }
    }]);

    return CustomLinkComponent;
}(_react.Component);

CustomLinkComponent.prototype = {
    onMenuClick: _react.PropTypes.func
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CustomLinkComponent, "CustomLinkComponent", "C:/Github/iPos/app/components/PosMain/Custom/CustomLinkComponent.js");
}();

;

/***/ }),

/***/ "./components/PosMain/MainCheckoutComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _CheckoutCartItemComponent = __webpack_require__("./components/PosMain/CheckoutCart/CheckoutCartItemComponent.js");

var _CheckoutCartItemComponent2 = _interopRequireDefault(_CheckoutCartItemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainCheckoutComponent = function (_Component) {
    _inherits(MainCheckoutComponent, _Component);

    function MainCheckoutComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MainCheckoutComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainCheckoutComponent.__proto__ || Object.getPrototypeOf(MainCheckoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnTransactionUpdate = function () {
            var _this2;

            return (_this2 = _this).__handleOnTransactionUpdate__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.createTransactionList = function () {
            var _this3;

            return (_this3 = _this).__createTransactionList__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MainCheckoutComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}

        /**Update nesteed checkout transaction item quantity */

    }, {
        key: '__handleOnTransactionUpdate__REACT_HOT_LOADER__',
        value: function __handleOnTransactionUpdate__REACT_HOT_LOADER__() {
            return this.__handleOnTransactionUpdate__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__handleOnTransactionUpdate__REACT_HOT_LOADER__',
        value: function __handleOnTransactionUpdate__REACT_HOT_LOADER__(transactionItem) {
            if (this.props.onTransactionUpdate) {
                this.props.onTransactionUpdate(transactionItem);
            }
        }
    }, {
        key: '__createTransactionList__REACT_HOT_LOADER__',
        value: function __createTransactionList__REACT_HOT_LOADER__() {
            return this.__createTransactionList__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__createTransactionList__REACT_HOT_LOADER__',
        value: function __createTransactionList__REACT_HOT_LOADER__(transactionItem) {
            var menuName = transactionItem.menuName;
            var price = transactionItem.menuPrice;
            var quantity = transactionItem.quantity;
            var transactionId = transactionItem.transactionId;

            return _react2.default.createElement(_CheckoutCartItemComponent2.default, { key: "transactionId_" + transactionId,
                itemName: menuName,
                itemPrice: price,
                itemQuantity: quantity,
                transactionId: transactionId,
                onTransactionUpdate: this.handleOnTransactionUpdate
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                transactions = _props.transactions,
                onTransactionUpdate = _props.onTransactionUpdate;


            return _react2.default.createElement(
                'div',
                { className: 'chat-panel panel panel-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'panel-heading' },
                    _react2.default.createElement('i', { className: 'fa fa-shopping-cart' }),
                    ' Shopping cart'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'list-group' },
                        transactions.length > 0 && transactions.map(function (e) {
                            return _this4.createTransactionList(e);
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-footer' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'btn btn-default btn-block' },
                        'Check out'
                    )
                )
            );
        }
    }]);

    return MainCheckoutComponent;
}(_react.Component);

MainCheckoutComponent.propTypes = {
    transactions: _react.PropTypes.array,
    onTransactionUpdate: _react.PropTypes.func
};

var _default = MainCheckoutComponent;
exports.default = _default;

/*
<CheckoutCartItemComponent 
                            itemName = {"Fruit salad"}
                            itemPrice = {"10.00"}
                            itemQuantity = {5}
                            itemNumber = {1}
                        />
                        <CheckoutCartItemComponent 
                            itemName = {"Cucumber salad"}
                            itemPrice = {"10.00"}
                            itemQuantity = {3}
                            itemNumber = {2}
                        />
                        <CheckoutCartItemComponent 
                            itemName = {"Tomato salad"}
                            itemPrice = {"10.00"}
                            itemQuantity = {9}
                            itemNumber = {3}
                        />*/

;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MainCheckoutComponent, 'MainCheckoutComponent', 'C:/Github/iPos/app/components/PosMain/MainCheckoutComponent.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/PosMain/MainCheckoutComponent.js');
}();

;

/***/ }),

/***/ "./components/PosMain/MainDetailComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _MainCheckoutComponent = __webpack_require__("./components/PosMain/MainCheckoutComponent.js");

var _MainCheckoutComponent2 = _interopRequireDefault(_MainCheckoutComponent);

var _MenuItemComponent = __webpack_require__("./components/PosMain/MenuItems/MenuItemComponent.js");

var _MenuItemComponent2 = _interopRequireDefault(_MenuItemComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainDetailComponent = function (_Component) {
    _inherits(MainDetailComponent, _Component);

    function MainDetailComponent(props) {
        _classCallCheck(this, MainDetailComponent);

        //this.handleOnAddItem = this.handleOnAddItem.bind(this);
        var _this = _possibleConstructorReturn(this, (MainDetailComponent.__proto__ || Object.getPrototypeOf(MainDetailComponent)).call(this, props));

        _this.handleOnTransactionUpdate = function () {
            return _this.__handleOnTransactionUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        return _this;
    }
    /**Update checkout transaction item quantity */


    _createClass(MainDetailComponent, [{
        key: '__handleOnTransactionUpdate__REACT_HOT_LOADER__',
        value: function __handleOnTransactionUpdate__REACT_HOT_LOADER__() {
            return this.__handleOnTransactionUpdate__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__handleOnTransactionUpdate__REACT_HOT_LOADER__',
        value: function __handleOnTransactionUpdate__REACT_HOT_LOADER__(transactionItem) {
            if (this.props.onTransactionUpdate) {
                this.props.onTransactionUpdate(transactionItem);
            }
        }
    }, {
        key: 'createGroupedArray',
        value: function createGroupedArray(arr, chunkSize) {
            var groups = [],
                i;
            for (i = 0; i < arr.length; i += chunkSize) {
                groups.push(arr.slice(i, i + chunkSize));
            }
            return groups;
        }
    }, {
        key: 'createMenuComponent',
        value: function createMenuComponent(menuText, index) {
            return _react2.default.createElement(
                'div',
                { key: index, className: 'col-lg-3 col-md-6' },
                _react2.default.createElement(_MenuItemComponent2.default, { LinkText: 'Add to cart',
                    MenuText: menuText,
                    MenuIconClass: 'fa fa-compass fa-5x',
                    MenuColorClass: 'panel-primary' })
            );
        }
    }, {
        key: 'createMenuDetailComponent',
        value: function createMenuDetailComponent(menuObject) {
            var _this2 = this;

            var menuArrayObject = this.createGroupedArray(menuObject.Items, 4);
            var menuDetailReactElement = menuArrayObject.map(function (itemSubArray, index) {
                return _react2.default.createElement(
                    'div',
                    { key: 'menuItemKey' + index, className: 'row' },
                    itemSubArray.map(function (item, index) {
                        return _this2.createMenuComponent(item.itemName, index);
                    })
                );
            });
            return menuDetailReactElement;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                menuObject = _props.menuObject,
                transactions = _props.transactions,
                onTransactionUpdate = _props.onTransactionUpdate;

            var createMenuDetailComponent = this.createMenuDetailComponent(menuObject);

            return _react2.default.createElement(
                'div',
                { id: 'page-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-8 col-md-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            createMenuDetailComponent
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-4 col-md-6' },
                        _react2.default.createElement(_MainCheckoutComponent2.default, { transactions: transactions,
                            onTransactionUpdate: this.handleOnTransactionUpdate })
                    )
                )
            );
        }
    }]);

    return MainDetailComponent;
}(_react.Component);

MainDetailComponent.propTypes = {
    menuObject: _react.PropTypes.object,
    transactions: _react.PropTypes.array,
    onTransactionUpdate: _react.PropTypes.func
};

var _default = MainDetailComponent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MainDetailComponent, 'MainDetailComponent', 'C:/Github/iPos/app/components/PosMain/MainDetailComponent.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/PosMain/MainDetailComponent.js');
}();

;

/***/ }),

/***/ "./components/PosMain/MainHeaderComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainHeaderComponent = function (_Component) {
    _inherits(MainHeaderComponent, _Component);

    function MainHeaderComponent() {
        _classCallCheck(this, MainHeaderComponent);

        return _possibleConstructorReturn(this, (MainHeaderComponent.__proto__ || Object.getPrototypeOf(MainHeaderComponent)).apply(this, arguments));
    }

    _createClass(MainHeaderComponent, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "ul",
                    { className: "nav navbar-top-links navbar-right" },
                    _react2.default.createElement(
                        "li",
                        { className: "dropdown" },
                        _react2.default.createElement(
                            "a",
                            { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                            _react2.default.createElement("i", { className: "fa fa-envelope fa-fw" }),
                            " ",
                            _react2.default.createElement("i", { className: "fa fa-caret-down" })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "dropdown-menu dropdown-messages" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "John Smith"
                                        ),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted" },
                                            _react2.default.createElement(
                                                "em",
                                                null,
                                                "Yesterday"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "John Smith"
                                        ),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted" },
                                            _react2.default.createElement(
                                                "em",
                                                null,
                                                "Yesterday"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "John Smith"
                                        ),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted" },
                                            _react2.default.createElement(
                                                "em",
                                                null,
                                                "Yesterday"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { className: "text-center", href: "#" },
                                    _react2.default.createElement(
                                        "strong",
                                        null,
                                        "Read All Messages"
                                    ),
                                    _react2.default.createElement("i", { className: "fa fa-angle-right" })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "dropdown" },
                        _react2.default.createElement(
                            "a",
                            { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                            _react2.default.createElement("i", { className: "fa fa-tasks fa-fw" }),
                            " ",
                            _react2.default.createElement("i", { className: "fa fa-caret-down" })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "dropdown-menu dropdown-tasks" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "strong",
                                                null,
                                                "Task 1"
                                            ),
                                            _react2.default.createElement(
                                                "span",
                                                { className: "pull-right text-muted" },
                                                "40% Complete"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "progress progress-striped active" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "progress-bar progress-bar-success", role: "progressbar", "aria-valuenow": "40", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: "40%" } },
                                                _react2.default.createElement(
                                                    "span",
                                                    { className: "sr-only" },
                                                    "40% Complete (success)"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "strong",
                                                null,
                                                "Task 2"
                                            ),
                                            _react2.default.createElement(
                                                "span",
                                                { className: "pull-right text-muted" },
                                                "20% Complete"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "progress progress-striped active" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "progress-bar progress-bar-info", role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: "20%" } },
                                                _react2.default.createElement(
                                                    "span",
                                                    { className: "sr-only" },
                                                    "20% Complete"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "strong",
                                                null,
                                                "Task 3"
                                            ),
                                            _react2.default.createElement(
                                                "span",
                                                { className: "pull-right text-muted" },
                                                "60% Complete"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "progress progress-striped active" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "progress-bar progress-bar-warning", role: "progressbar", "aria-valuenow": "60", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: "60%" } },
                                                _react2.default.createElement(
                                                    "span",
                                                    { className: "sr-only" },
                                                    "60% Complete (warning)"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            _react2.default.createElement(
                                                "strong",
                                                null,
                                                "Task 4"
                                            ),
                                            _react2.default.createElement(
                                                "span",
                                                { className: "pull-right text-muted" },
                                                "80% Complete"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "progress progress-striped active" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "progress-bar progress-bar-danger", role: "progressbar", "aria-valuenow": "80", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: "80%" } },
                                                _react2.default.createElement(
                                                    "span",
                                                    { className: "sr-only" },
                                                    "80% Complete (danger)"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { className: "text-center", href: "#" },
                                    _react2.default.createElement(
                                        "strong",
                                        null,
                                        "See All Tasks"
                                    ),
                                    _react2.default.createElement("i", { className: "fa fa-angle-right" })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "dropdown" },
                        _react2.default.createElement(
                            "a",
                            { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                            _react2.default.createElement("i", { className: "fa fa-bell fa-fw" }),
                            " ",
                            _react2.default.createElement("i", { className: "fa fa-caret-down" })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "dropdown-menu dropdown-alerts" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement("i", { className: "fa fa-comment fa-fw" }),
                                        " New Comment",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted small" },
                                            "4 minutes ago"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement("i", { className: "fa fa-twitter fa-fw" }),
                                        " 3 New Followers",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted small" },
                                            "12 minutes ago"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement("i", { className: "fa fa-envelope fa-fw" }),
                                        " Message Sent",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted small" },
                                            "4 minutes ago"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement("i", { className: "fa fa-tasks fa-fw" }),
                                        " New Task",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted small" },
                                            "4 minutes ago"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement("i", { className: "fa fa-upload fa-fw" }),
                                        " Server Rebooted",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pull-right text-muted small" },
                                            "4 minutes ago"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { className: "text-center", href: "#" },
                                    _react2.default.createElement(
                                        "strong",
                                        null,
                                        "See All Alerts"
                                    ),
                                    _react2.default.createElement("i", { className: "fa fa-angle-right" })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "dropdown" },
                        _react2.default.createElement(
                            "a",
                            { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                            _react2.default.createElement("i", { className: "fa fa-user fa-fw" }),
                            " ",
                            _react2.default.createElement("i", { className: "fa fa-caret-down" })
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "dropdown-menu dropdown-user" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement("i", { className: "fa fa-user fa-fw" }),
                                    " User Profile"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement("i", { className: "fa fa-gear fa-fw" }),
                                    " Settings"
                                )
                            ),
                            _react2.default.createElement("li", { className: "divider" }),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "login.html" },
                                    _react2.default.createElement("i", { className: "fa fa-sign-out fa-fw" }),
                                    " Logout"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MainHeaderComponent;
}(_react.Component);

MainHeaderComponent.propTypes = {};

var _default = MainHeaderComponent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MainHeaderComponent, "MainHeaderComponent", "C:/Github/iPos/app/components/PosMain/MainHeaderComponent.js");

    __REACT_HOT_LOADER__.register(_default, "default", "C:/Github/iPos/app/components/PosMain/MainHeaderComponent.js");
}();

;

/***/ }),

/***/ "./components/PosMain/MainSideBarComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("../node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMetismenu = __webpack_require__("../node_modules/react-metismenu/lib/index.js");

var _reactMetismenu2 = _interopRequireDefault(_reactMetismenu);

var _CustomLinkComponent = __webpack_require__("./components/PosMain/Custom/CustomLinkComponent.js");

var _CustomLinkComponent2 = _interopRequireDefault(_CustomLinkComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainSideBarComponent = function (_Component) {
    _inherits(MainSideBarComponent, _Component);

    function MainSideBarComponent() {
        _classCallCheck(this, MainSideBarComponent);

        var _this = _possibleConstructorReturn(this, (MainSideBarComponent.__proto__ || Object.getPrototypeOf(MainSideBarComponent)).call(this));

        _this.createFruitMenuObject = function () {
            return _this.__createFruitMenuObject__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.createVegeMenuObject = function () {
            return _this.__createVegeMenuObject__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_this);
        return _this;
    }

    _createClass(MainSideBarComponent, [{
        key: '__createFruitMenuObject__REACT_HOT_LOADER__',
        value: function __createFruitMenuObject__REACT_HOT_LOADER__() {
            return this.__createFruitMenuObject__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__createFruitMenuObject__REACT_HOT_LOADER__',
        value: function __createFruitMenuObject__REACT_HOT_LOADER__() {
            var menuObject = {
                Name: "FruitSalad",
                Items: [{
                    itemName: "Fruit salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Cucumber salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Rose apple salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Pawpaw salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Cucumber salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Rose apple salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Pawpaw salad",
                    itemPrice: "$10.00"
                }]
            };
            return menuObject;
        }
    }, {
        key: '__createVegeMenuObject__REACT_HOT_LOADER__',
        value: function __createVegeMenuObject__REACT_HOT_LOADER__() {
            return this.__createVegeMenuObject__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__createVegeMenuObject__REACT_HOT_LOADER__',
        value: function __createVegeMenuObject__REACT_HOT_LOADER__() {
            var menuObject = {
                Name: "VegeSalad",
                Items: [{
                    itemName: "Vege salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Vege salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Veg salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Veg salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Veg salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Veg salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Veg salad",
                    itemPrice: "$10.00"
                }]
            };
            return menuObject;
        }
    }, {
        key: 'handleMenuItemClick',
        value: function handleMenuItemClick(e) {
            var menuType = e.target.text;
            var menuObject = menuType == "Fruit salad" ? this.createFruitMenuObject() : this.createVegeMenuObject();
            this.props.onMenuClick(menuObject);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var content = [{
                icon: 'table', /*icon class name */
                label: 'Fruit salad',
                to: '#a-link',
                Id: "fruitsalad",
                name: "fuits"
            }, {
                icon: 'table',
                label: 'Vegetables',
                content: [{
                    icon: 'icon-class-name',
                    label: 'Leafy vegetables',
                    to: '#another-link',
                    Id: "leafyveges",
                    name: "veges"
                }]
            }];
            var _props = this.props,
                isMobile = _props.isMobile,
                toggleSideNav = _props.toggleSideNav;

            console.log(">>> renering mobile version " + isMobile);
            var navBarCollapse = 'sidebar-nav navbar-collapse ' + (isMobile ? 'collapse' : '');
            var navBarOpened = toggleSideNav ? navBarCollapse + " in" : navBarCollapse;
            var ariaExpanded = toggleSideNav ? "true" : "false";
            var divStyle = toggleSideNav ? {} : { height: '1px' };

            return _react2.default.createElement(
                'div',
                { className: 'navbar-default sidebar', role: 'navigation' },
                _react2.default.createElement(
                    'div',
                    { className: navBarOpened, 'aria-expanded': ariaExpanded, style: divStyle },
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav', id: 'side-menu' },
                        _react2.default.createElement(
                            'li',
                            { className: 'sidebar-search' },
                            _react2.default.createElement(
                                'div',
                                { className: 'input-group custom-search-form' },
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search...' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'input-group-btn' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn btn-default', type: 'button' },
                                        _react2.default.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_reactMetismenu2.default, { content: content, onSelected: function onSelected(e) {
                                _this2.handleMenuItemClick(e);
                            }, activeLinkFromLocation: true })
                    )
                )
            );
        }
    }]);

    return MainSideBarComponent;
}(_react.Component);

MainSideBarComponent.propTypes = {
    onMenuClick: _react.PropTypes.func,
    isMobile: _react.PropTypes.bool,
    toggleSideNav: _react.PropTypes.bool
};

var _default = MainSideBarComponent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MainSideBarComponent, 'MainSideBarComponent', 'C:/Github/iPos/app/components/PosMain/MainSideBarComponent.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/PosMain/MainSideBarComponent.js');
}();

;

/***/ }),

/***/ "./components/PosMain/MenuItems/MenuItemComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItemComponent = function (_Component) {
    _inherits(MenuItemComponent, _Component);

    function MenuItemComponent() {
        _classCallCheck(this, MenuItemComponent);

        return _possibleConstructorReturn(this, (MenuItemComponent.__proto__ || Object.getPrototypeOf(MenuItemComponent)).apply(this, arguments));
    }

    _createClass(MenuItemComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                LinkText = _props.LinkText,
                MenuText = _props.MenuText,
                MenuColorClass = _props.MenuColorClass,
                MenuIconClass = _props.MenuIconClass;


            var navStyleMargin = { marginBottom: '0px' };
            var panelClass = 'panel ' + MenuColorClass;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: panelClass },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-heading' },
                        _react2.default.createElement(
                            'div',
                            { className: 'text-center' },
                            MenuText
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-12 text-center' },
                                _react2.default.createElement('i', { className: MenuIconClass })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'panel-footer' },
                            _react2.default.createElement(
                                'span',
                                { className: 'pull-left' },
                                LinkText
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'pull-right' },
                                _react2.default.createElement(
                                    'i',
                                    null,
                                    _react2.default.createElement(
                                        'em',
                                        null,
                                        '$10.00'
                                    )
                                )
                            ),
                            _react2.default.createElement('div', { className: 'clearfix' })
                        )
                    )
                )
            );
        }
    }]);

    return MenuItemComponent;
}(_react.Component);

MenuItemComponent.propTypes = {
    LinkText: _react.PropTypes.string,
    MenuText: _react.PropTypes.string,
    MenuColorClass: _react.PropTypes.string,
    MenuIconClass: _react.PropTypes.string

};

var _default = MenuItemComponent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MenuItemComponent, 'MenuItemComponent', 'C:/Github/iPos/app/components/PosMain/MenuItems/MenuItemComponent.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/PosMain/MenuItems/MenuItemComponent.js');
}();

;

/***/ }),

/***/ "./components/PosMain/PosHomeLayout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _MainHeaderComponent = __webpack_require__("./components/PosMain/MainHeaderComponent.js");

var _MainHeaderComponent2 = _interopRequireDefault(_MainHeaderComponent);

var _MainDetailComponent = __webpack_require__("./components/PosMain/MainDetailComponent.js");

var _MainDetailComponent2 = _interopRequireDefault(_MainDetailComponent);

var _MainSideBarComponent = __webpack_require__("./components/PosMain/MainSideBarComponent.js");

var _MainSideBarComponent2 = _interopRequireDefault(_MainSideBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import NavigationMenu from 'components/PosMain/NavigationMenu';

var PosHomeLayout = function (_Component) {
    _inherits(PosHomeLayout, _Component);

    function PosHomeLayout(props) {
        _classCallCheck(this, PosHomeLayout);

        var _this = _possibleConstructorReturn(this, (PosHomeLayout.__proto__ || Object.getPrototypeOf(PosHomeLayout)).call(this, props));

        _this.handleOnToggleClick = function () {
            return _this.__handleOnToggleClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.handleOnTransactionUpdate = function () {
            return _this.__handleOnTransactionUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.handleOnMenuItemAdd = function () {
            return _this.__handleOnMenuItemAdd__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.createMenuObject = function () {
            return _this.__createMenuObject__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        return _this;
    }

    _createClass(PosHomeLayout, [{
        key: '__handleOnToggleClick__REACT_HOT_LOADER__',


        /**Update checkout transaction item quantity */
        value: function __handleOnToggleClick__REACT_HOT_LOADER__() {
            return this.__handleOnToggleClick__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__handleOnToggleClick__REACT_HOT_LOADER__',
        value: function __handleOnToggleClick__REACT_HOT_LOADER__() {
            this.props.onToggleSideNavClick();
        }
    }, {
        key: '__handleOnTransactionUpdate__REACT_HOT_LOADER__',


        /*Add menu item to checkout component */
        value: function __handleOnTransactionUpdate__REACT_HOT_LOADER__() {
            return this.__handleOnTransactionUpdate__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__handleOnTransactionUpdate__REACT_HOT_LOADER__',
        value: function __handleOnTransactionUpdate__REACT_HOT_LOADER__(transactionItem) {
            if (this.props.onTransactionUpdate) {
                this.props.onTransactionUpdate(transactionItem);
            }
        }
    }, {
        key: '__handleOnMenuItemAdd__REACT_HOT_LOADER__',
        value: function __handleOnMenuItemAdd__REACT_HOT_LOADER__() {
            return this.__handleOnMenuItemAdd__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__handleOnMenuItemAdd__REACT_HOT_LOADER__',
        value: function __handleOnMenuItemAdd__REACT_HOT_LOADER__() {
            if (this.props.onTransactionUpdate) {
                this.props.onTransactionUpdate();
            }
        }
    }, {
        key: '__createMenuObject__REACT_HOT_LOADER__',
        value: function __createMenuObject__REACT_HOT_LOADER__() {
            return this.__createMenuObject__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__createMenuObject__REACT_HOT_LOADER__',
        value: function __createMenuObject__REACT_HOT_LOADER__(menu) {
            var menuObject = {
                Name: "FruitSalad",
                Items: [{
                    itemName: "Fruit salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Cucumber salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Rose apple salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Pawpaw salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Cucumber salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Rose apple salad",
                    itemPrice: "$10.00"
                }, {
                    itemName: "Pawpaw salad",
                    itemPrice: "$10.00"
                }]
            };

            if (menu && menu.Items && menu.Items.length > 0) return menu;

            return menuObject;
        }
    }, {
        key: 'render',
        value: function render() {
            var navStyleMargin = { marginBottom: '0px' };
            var _props = this.props,
                menuObject = _props.menuObject,
                onMenuClick = _props.onMenuClick,
                transactions = _props.transactions,
                onTransactionUpdate = _props.onTransactionUpdate,
                isMobile = _props.isMobile,
                toggleSideNav = _props.toggleSideNav;


            var menuItemObject = this.createMenuObject(menuObject);
            console.log(">>> printing pos home layout");

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-static-top', role: 'navigation', style: navStyleMargin },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', onClick: this.handleOnToggleClick,
                                className: 'navbar-toggle',
                                'data-toggle': 'collapse',
                                'data-target': '.navbar-collapse' },
                            _react2.default.createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand', href: 'index.html' },
                            'Pos v2.0'
                        )
                    ),
                    _react2.default.createElement(_MainHeaderComponent2.default, null),
                    _react2.default.createElement(_MainSideBarComponent2.default, { onMenuClick: onMenuClick })
                ),
                _react2.default.createElement(_MainDetailComponent2.default, {
                    menuObject: menuItemObject,
                    transactions: transactions,
                    onTransactionUpdate: this.handleOnTransactionUpdate })
            );
        }
    }]);

    return PosHomeLayout;
}(_react.Component);

PosHomeLayout.propTypes = {
    menuObject: _react.PropTypes.object,
    onMenuClick: _react.PropTypes.func,
    transactions: _react.PropTypes.array,
    onTransactionUpdate: _react.PropTypes.func,
    isMobile: _react.PropTypes.bool,
    toggleSideNav: _react.PropTypes.bool,
    onToggleSideNavClick: _react.PropTypes.func
};

var _default = PosHomeLayout;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(PosHomeLayout, 'PosHomeLayout', 'C:/Github/iPos/app/components/PosMain/PosHomeLayout.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/components/PosMain/PosHomeLayout.js');
}();

;

/***/ }),

/***/ "./containers/Balance/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _transactions = __webpack_require__("./selectors/transactions.js");

var _Balance = __webpack_require__("./components/Balance/index.js");

var _Balance2 = _interopRequireDefault(_Balance);

var _BalancePrefix = __webpack_require__("./components/Balance/BalancePrefix.js");

var _BalancePrefix2 = _interopRequireDefault(_BalancePrefix);

var _BalanceRow = __webpack_require__("./components/Balance/BalanceRow.js");

var _BalanceRow2 = _interopRequireDefault(_BalanceRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Balance = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    balance: (0, _transactions.getFormattedBalance)(state),
    inflow: (0, _transactions.getFormattedInflowBalance)(state),
    outflow: (0, _transactions.getFormattedOutflowBalance)(state)
  };
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Balance, _Component);

  function Balance() {
    _classCallCheck(this, Balance);

    return _possibleConstructorReturn(this, (Balance.__proto__ || Object.getPrototypeOf(Balance)).apply(this, arguments));
  }

  _createClass(Balance, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inflow = _props.inflow,
          outflow = _props.outflow,
          balance = _props.balance;


      return _react2.default.createElement(
        _BalanceRow2.default,
        null,
        _react2.default.createElement(_Balance2.default, { amount: inflow, title: 'Total Inflow' }),
        _react2.default.createElement(_BalancePrefix2.default, { text: '-' }),
        _react2.default.createElement(_Balance2.default, { amount: outflow, title: 'Total Outflow' }),
        _react2.default.createElement(_BalancePrefix2.default, { text: '=' }),
        _react2.default.createElement(_Balance2.default, { amount: balance, title: 'Working Balance', colorize: false })
      );
    }
  }]);

  return Balance;
}(_react.Component), _class2.propTypes = {
  balance: _react.PropTypes.object.isRequired,
  inflow: _react.PropTypes.object.isRequired,
  outflow: _react.PropTypes.object.isRequired
}, _temp)) || _class);
var _default = Balance;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Balance, 'Balance', 'C:/Github/iPos/app/containers/Balance/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/containers/Balance/index.js');
}();

;

/***/ }),

/***/ "./containers/Budget/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _transactions = __webpack_require__("./modules/transactions.js");

var _transactions2 = _interopRequireDefault(_transactions);

var _categories = __webpack_require__("./modules/categories.js");

var _categories2 = _interopRequireDefault(_categories);

var _store = __webpack_require__("./store/index.js");

var _BudgetGrid = __webpack_require__("./components/BudgetGrid/index.js");

var _BudgetGrid2 = _interopRequireDefault(_BudgetGrid);

var _Balance = __webpack_require__("./containers/Balance/index.js");

var _Balance2 = _interopRequireDefault(_Balance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// inject reducers that might not have been originally there
(0, _store.injectAsyncReducers)({
  transactions: _transactions2.default,
  categories: _categories2.default
});

var BudgetContainer = function BudgetContainer() {
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_BudgetGrid2.default, null),
    _react2.default.createElement(_Balance2.default, null)
  );
};

var _default = BudgetContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BudgetContainer, 'BudgetContainer', 'C:/Github/iPos/app/containers/Budget/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/containers/Budget/index.js');
}();

;

/***/ }),

/***/ "./containers/Pos/PosContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("../node_modules/redux/es/index.js");

var _posActions = __webpack_require__("./containers/Pos/actions/pos-actions.js");

var _posActions2 = _interopRequireDefault(_posActions);

var _PosHomeLayout = __webpack_require__("./components/PosMain/PosHomeLayout.js");

var _PosHomeLayout2 = _interopRequireDefault(_PosHomeLayout);

var _transactionActions = __webpack_require__("./containers/Transactions/actions/transaction-actions.js");

var TransactionActions = _interopRequireWildcard(_transactionActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PosContainer = function (_Component) {
  _inherits(PosContainer, _Component);

  function PosContainer(props) {
    _classCallCheck(this, PosContainer);

    var _this = _possibleConstructorReturn(this, (PosContainer.__proto__ || Object.getPrototypeOf(PosContainer)).call(this, props));

    _this.handleUpdateTransactionItem = function () {
      return _this.__handleUpdateTransactionItem__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleWindowSizeChange = function () {
      return _this.__handleWindowSizeChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleOnToggleSideNavClick = function () {
      return _this.__handleOnToggleSideNavClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleOnClickMenuItem = function () {
      return _this.__handleOnClickMenuItem__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    var dummyObject = {};
    _this.state = {
      menuObject: dummyObject,
      width: window.innerWidth, /**decide mobile width */
      toggleSideNav: false
    };

    //setup bindings;
    //this.handleUpdateTransactionItem = this.handleUpdateTransactionItem.bind(this);
    _this.handleOnToggleSideNavClick = _this.handleOnToggleSideNavClick.bind(_this);
    //this.handleOnClickMenuItem = this.handleOnClickMenuItem.bind(this);
    return _this;
  }

  _createClass(PosContainer, [{
    key: '__handleUpdateTransactionItem__REACT_HOT_LOADER__',
    value: function __handleUpdateTransactionItem__REACT_HOT_LOADER__() {
      return this.__handleUpdateTransactionItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleUpdateTransactionItem__REACT_HOT_LOADER__',
    value: function __handleUpdateTransactionItem__REACT_HOT_LOADER__(transactionItem) {
      console.log(">>> updating transaction item");
      console.log(transactionItem);
      this.props.transactionActions.updateTransaction(transactionItem);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.transactionActions.getTransactions();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  }, {
    key: '__handleWindowSizeChange__REACT_HOT_LOADER__',
    value: function __handleWindowSizeChange__REACT_HOT_LOADER__() {
      return this.__handleWindowSizeChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleWindowSizeChange__REACT_HOT_LOADER__',
    value: function __handleWindowSizeChange__REACT_HOT_LOADER__() {
      this.setState({ width: window.innerWidth });
    }
  }, {
    key: '__handleOnToggleSideNavClick__REACT_HOT_LOADER__',
    value: function __handleOnToggleSideNavClick__REACT_HOT_LOADER__() {
      return this.__handleOnToggleSideNavClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOnToggleSideNavClick__REACT_HOT_LOADER__',
    value: function __handleOnToggleSideNavClick__REACT_HOT_LOADER__() {
      console.log(">>> handleOnToggleSideNavClick");
      this.setState({ toggleSideNav: !this.state.toggleSideNav });
    }
  }, {
    key: '__handleOnClickMenuItem__REACT_HOT_LOADER__',
    value: function __handleOnClickMenuItem__REACT_HOT_LOADER__() {
      return this.__handleOnClickMenuItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOnClickMenuItem__REACT_HOT_LOADER__',
    value: function __handleOnClickMenuItem__REACT_HOT_LOADER__(menu) {
      console.log(">>>>>> menu item click");
      console.log(menu);
      this.setState({ menuObject: menu });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          isLoading = _props.isLoading,
          transactions = _props.transactions;

      console.log(">>> pringint menu items");
      console.log(menuItems);
      var _state = this.state,
          width = _state.width,
          toggleSideNav = _state.toggleSideNav;

      var isMobile = width <= 768;

      return _react2.default.createElement(
        'div',
        { className: 'container-wrapper' },
        _react2.default.createElement(_PosHomeLayout2.default, { menuObject: this.state.menuObject,
          onMenuClick: this.handleOnClickMenuItem,
          transactions: transactions,
          onTransactionUpdate: this.handleUpdateTransactionItem,
          isMobile: isMobile,
          toggleSideNav: this.state.toggleSideNav
        })
      );
    }
  }]);

  return PosContainer;
}(_react.Component);

PosContainer.propTypes = {
  menuItems: _react.PropTypes.object,
  isLoading: _react.PropTypes.bool,
  transactions: _react.PropTypes.array

};

function mapState(state) {
  return {
    menuItems: state.PosReducer.menuItems,
    isLoading: state.PosReducer.isLoading,
    transactions: state.TransactionReducer.transactions
  };
}

function mapDispatch(dispatch) {
  return {
    transactionActions: (0, _redux.bindActionCreators)(TransactionActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(PosContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PosContainer, 'PosContainer', 'C:/Github/iPos/app/containers/Pos/PosContainer.js');

  __REACT_HOT_LOADER__.register(mapState, 'mapState', 'C:/Github/iPos/app/containers/Pos/PosContainer.js');

  __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', 'C:/Github/iPos/app/containers/Pos/PosContainer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/containers/Pos/PosContainer.js');
}();

;

/***/ }),

/***/ "./containers/Pos/actions/pos-actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getmenuitems = getmenuitems;

var _posActionTypes = __webpack_require__("./containers/Pos/actions/pos-action-types.js");

var _stubdata = __webpack_require__("./containers/Pos/stubdata/stubdata.js");

function submitMenuItems() {
    return {
        menuItems: {},
        type: _posActionTypes.SUBMIT_LOADMENUITEMS
    };
}

function finishLoadMenuItems(menuItems) {
    return {
        menuItems: menuItems,
        type: _posActionTypes.FINISH_LOADMENUITEMS
    };
}

function getmenuitems() {
    return function (dispatch, getState) {
        dispatch(submitMenuItems());
        dispatch(finishLoadMenuItems());
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(submitMenuItems, 'submitMenuItems', 'C:/Github/iPos/app/containers/Pos/actions/pos-actions.js');

    __REACT_HOT_LOADER__.register(finishLoadMenuItems, 'finishLoadMenuItems', 'C:/Github/iPos/app/containers/Pos/actions/pos-actions.js');

    __REACT_HOT_LOADER__.register(getmenuitems, 'getmenuitems', 'C:/Github/iPos/app/containers/Pos/actions/pos-actions.js');
}();

;

/***/ }),

/***/ "./containers/Transactions/TransactionContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("../node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("../node_modules/redux/es/index.js");

var _posActions = __webpack_require__("./containers/Pos/actions/pos-actions.js");

var _posActions2 = _interopRequireDefault(_posActions);

var _PosHomeLayout = __webpack_require__("./components/PosMain/PosHomeLayout.js");

var _PosHomeLayout2 = _interopRequireDefault(_PosHomeLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransactionContainer = function (_Component) {
  _inherits(TransactionContainer, _Component);

  function TransactionContainer() {
    _classCallCheck(this, TransactionContainer);

    return _possibleConstructorReturn(this, (TransactionContainer.__proto__ || Object.getPrototypeOf(TransactionContainer)).apply(this, arguments));
  }

  _createClass(TransactionContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          isLoading = _props.isLoading;

      console.log(">>> pringint menu items");
      console.log(menuItems);

      return _react2.default.createElement(
        'div',
        { className: 'container-wrapper' },
        'hello'
      );
    }
  }]);

  return TransactionContainer;
}(_react.Component);

TransactionContainer.propTypes = {
  transactions: _react.PropTypes.array
};

function mapState(state) {
  return {
    tranactions: state.TranactionReducer.transactions
    // isLoading: state.PosReducer.isLoading,
  };
}

function mapDispatch(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(TransactionContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TransactionContainer, 'TransactionContainer', 'C:/Github/iPos/app/containers/Transactions/TransactionContainer.js');

  __REACT_HOT_LOADER__.register(mapState, 'mapState', 'C:/Github/iPos/app/containers/Transactions/TransactionContainer.js');

  __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', 'C:/Github/iPos/app/containers/Transactions/TransactionContainer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Github/iPos/app/containers/Transactions/TransactionContainer.js');
}();

;

/***/ }),

/***/ "./containers/Transactions/actions/transaction-actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactions = getTransactions;
exports.updateTransaction = updateTransaction;

var _transactionActionTypes = __webpack_require__("./containers/Transactions/actions/transaction-action-types.js");

function submitGetTransactions() {
    return {
        transactions: [],
        type: _transactionActionTypes.SUBMIT_GET_TRANSACTIONS
    };
}

function finishGetTransactions() {
    return {
        transactions: [],
        type: _transactionActionTypes.FINISH_GET_TRANSACTIONS
    };
}

/*Update transactions */
function submitUpdateTransaction(transactionItem) {
    return {
        transactionItem: transactionItem,
        type: _transactionActionTypes.SUBMIT_UPDATE_TRANSACTIONS
    };
}

/*Update transactions */
function finishUpdateTransaction(transactionItem) {
    return {
        transactionItem: transactionItem,
        type: _transactionActionTypes.FINISH_UPDATE_TRANSACTIONS
    };
}

function getTransactions() {
    return function (dispatch, getState) {
        dispatch(submitGetTransactions());
        dispatch(finishGetTransactions());
    };
}

function updateTransaction(transactionItem) {
    return function (dispatch, getState) {
        dispatch(submitUpdateTransaction(transactionItem));
        dispatch(finishUpdateTransaction(transactionItem));
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(submitGetTransactions, 'submitGetTransactions', 'C:/Github/iPos/app/containers/Transactions/actions/transaction-actions.js');

    __REACT_HOT_LOADER__.register(finishGetTransactions, 'finishGetTransactions', 'C:/Github/iPos/app/containers/Transactions/actions/transaction-actions.js');

    __REACT_HOT_LOADER__.register(submitUpdateTransaction, 'submitUpdateTransaction', 'C:/Github/iPos/app/containers/Transactions/actions/transaction-actions.js');

    __REACT_HOT_LOADER__.register(finishUpdateTransaction, 'finishUpdateTransaction', 'C:/Github/iPos/app/containers/Transactions/actions/transaction-actions.js');

    __REACT_HOT_LOADER__.register(getTransactions, 'getTransactions', 'C:/Github/iPos/app/containers/Transactions/actions/transaction-actions.js');

    __REACT_HOT_LOADER__.register(updateTransaction, 'updateTransaction', 'C:/Github/iPos/app/containers/Transactions/actions/transaction-actions.js');
}();

;

/***/ }),

/***/ "./modules/categories.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = categoriesReducer;

var _defaults = __webpack_require__("./modules/defaults.js");

/**
 * Action Constansts
 */

/**
 * Actions
 */

/**
 * Reducer
 */
function categoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaults.categoriesById;

  return state;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(categoriesReducer, 'categoriesReducer', 'C:/Github/iPos/app/modules/categories.js');
}();

;

/***/ }),

/***/ "./modules/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var categoriesById = exports.categoriesById = {
  1: 'Groceries',
  2: 'School',
  3: 'Entertainment',
  4: 'Utensils',
  5: 'Kids',
  6: 'Travel',
  7: 'Commute',
  8: 'Insurance',
  9: 'Clothing',
  10: 'Car',
  11: 'Taxes',
  12: 'Health',
  13: 'Home',
  14: 'Beauty',
  15: 'Income',
  16: 'Misc',
  17: 'Gifting'
};

var inflowCategories = exports.inflowCategories = [15];

var defaultTransactions = exports.defaultTransactions = [{
  id: 1,
  description: "Trader Joe's food",
  value: -423.34,
  categoryId: 1
}, {
  id: 2,
  description: 'Gas',
  value: -764.73,
  categoryId: 6
}, {
  id: 3,
  description: 'Ebay sale - guitar',
  value: 1102.00,
  categoryId: 15
}, {
  id: 4,
  description: 'Milk & Eggs for the pancake party with neighbors',
  value: -2300,
  categoryId: 3
}, {
  id: 5,
  description: 'The usual weekly run',
  value: -1100,
  categoryId: 16
}, {
  id: 6,
  description: 'Paycheck',
  value: 5700,
  categoryId: 15
}];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(categoriesById, 'categoriesById', 'C:/Github/iPos/app/modules/defaults.js');

  __REACT_HOT_LOADER__.register(inflowCategories, 'inflowCategories', 'C:/Github/iPos/app/modules/defaults.js');

  __REACT_HOT_LOADER__.register(defaultTransactions, 'defaultTransactions', 'C:/Github/iPos/app/modules/defaults.js');
}();

;

/***/ }),

/***/ "./modules/transactions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = undefined;
exports.default = transactionsReducer;

var _defaults = __webpack_require__("./modules/defaults.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Action Constants
 */
var ADD_TRANSACTION = 'budget/transaction/ADD';
var DELETE_TRANSACTION = 'budget/transaction/DELETE';

/**
 * Helpers
 */
function getNextTransactionID(state) {
  return state.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

// Add a new transaction.
function normalizeTransaction(state, _ref) {
  var categoryId = _ref.categoryId,
      description = _ref.description,
      value = _ref.value;

  var categoryNumId = parseInt(categoryId, 10);
  var realValue = _defaults.inflowCategories.includes(categoryNumId) ? Math.abs(value) : Math.abs(value) * -1;

  return {
    id: getNextTransactionID(state),
    categoryId: categoryNumId,
    description: description,
    value: realValue
  };
}

/**
 * Actions
 */
var actions = exports.actions = {
  addTransaction: function addTransaction(transaction) {
    return function (dispatch, getState) {
      return dispatch({
        type: ADD_TRANSACTION,
        transaction: normalizeTransaction(getState().transactions, transaction)
      });
    };
  },

  deleteTransaction: function deleteTransaction(id) {
    return {
      type: DELETE_TRANSACTION,
      id: id
    };
  }
};

/**
 * Reducer
 */
function transactionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaults.defaultTransactions;
  var action = arguments[1];

  var newState = void 0;

  switch (action.type) {
    case ADD_TRANSACTION:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.transaction));

    case DELETE_TRANSACTION:
      newState = state.filter(function (todo) {
        return todo.id !== action.id;
      });
      return newState;

    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ADD_TRANSACTION, 'ADD_TRANSACTION', 'C:/Github/iPos/app/modules/transactions.js');

  __REACT_HOT_LOADER__.register(DELETE_TRANSACTION, 'DELETE_TRANSACTION', 'C:/Github/iPos/app/modules/transactions.js');

  __REACT_HOT_LOADER__.register(getNextTransactionID, 'getNextTransactionID', 'C:/Github/iPos/app/modules/transactions.js');

  __REACT_HOT_LOADER__.register(normalizeTransaction, 'normalizeTransaction', 'C:/Github/iPos/app/modules/transactions.js');

  __REACT_HOT_LOADER__.register(actions, 'actions', 'C:/Github/iPos/app/modules/transactions.js');

  __REACT_HOT_LOADER__.register(transactionsReducer, 'transactionsReducer', 'C:/Github/iPos/app/modules/transactions.js');
}();

;

/***/ }),

/***/ "./selectors/categories.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_CATEGORY_ID = '16';

var getCategories = exports.getCategories = function getCategories(state) {
  return state.categories || [];
};

var getDefaultCategoryId = exports.getDefaultCategoryId = function getDefaultCategoryId() {
  return DEFAULT_CATEGORY_ID;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DEFAULT_CATEGORY_ID, 'DEFAULT_CATEGORY_ID', 'C:/Github/iPos/app/selectors/categories.js');

  __REACT_HOT_LOADER__.register(getCategories, 'getCategories', 'C:/Github/iPos/app/selectors/categories.js');

  __REACT_HOT_LOADER__.register(getDefaultCategoryId, 'getDefaultCategoryId', 'C:/Github/iPos/app/selectors/categories.js');
}();

;

/***/ }),

/***/ "./selectors/transactions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInflowByCategoryName = exports.getOutflowByCategoryName = exports.getFormattedOutflowBalance = exports.getFormattedInflowBalance = exports.getFormattedBalance = exports.getOutflowBalance = exports.getInflowBalance = exports.getTransactions = exports.sortTransactions = undefined;

var _reselect = __webpack_require__("../node_modules/reselect/lib/index.js");

var _formatAmount = __webpack_require__("./utils/formatAmount.js");

var _formatAmount2 = _interopRequireDefault(_formatAmount);

var _categories = __webpack_require__("./selectors/categories.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function totalTransactions(transactions) {
  return transactions.reduce(function (total, item) {
    return total + parseFloat(item.value);
  }, 0);
}

function summarizeTransactions(transactions) {
  return transactions.reduce(function (summary, _ref) {
    var categoryId = _ref.categoryId,
        value = _ref.value;

    var sum = summary.find(function (item) {
      return item.categoryId === categoryId;
    }) || summary[summary.push({ categoryId: categoryId, value: 0 }) - 1];

    sum.value += Math.abs(value);
    return summary;
  }, []);
}

var sortTransactions = exports.sortTransactions = function sortTransactions(transactions) {
  var unsorted = [].concat(_toConsumableArray(transactions));
  return unsorted.sort(function (a, b) {
    return a.value < b.value;
  });
};

var applyCategoryName = function applyCategoryName(transactions, categories) {
  return transactions.map(function (transaction) {
    transaction.category = categories[transaction.categoryId];
    return transaction;
  });
};

var getTransactions = exports.getTransactions = function getTransactions(state) {
  return state.transactions || [];
};

var getInflowTransactions = (0, _reselect.createSelector)([getTransactions], function (transactions) {
  return transactions.filter(function (item) {
    return item.value > 0;
  });
});

var getOutflowTransactions = (0, _reselect.createSelector)([getTransactions], function (transactions) {
  return transactions.filter(function (item) {
    return item.value < 0;
  });
});

var getBalance = (0, _reselect.createSelector)([getTransactions], function (transactions) {
  return totalTransactions(transactions);
});

var getInflowBalance = exports.getInflowBalance = (0, _reselect.createSelector)([getInflowTransactions], function (transactions) {
  return totalTransactions(transactions);
});

var getOutflowBalance = exports.getOutflowBalance = (0, _reselect.createSelector)([getOutflowTransactions], function (transactions) {
  return totalTransactions(transactions);
});

var getFormattedBalance = exports.getFormattedBalance = (0, _reselect.createSelector)([getBalance], function (amount) {
  return (0, _formatAmount2.default)(amount, false);
});

var getFormattedInflowBalance = exports.getFormattedInflowBalance = (0, _reselect.createSelector)([getInflowBalance], function (amount) {
  return (0, _formatAmount2.default)(amount, false);
});

var getFormattedOutflowBalance = exports.getFormattedOutflowBalance = (0, _reselect.createSelector)([getOutflowBalance], function (amount) {
  return (0, _formatAmount2.default)(amount, false);
});

var getOutflowByCategory = (0, _reselect.createSelector)([getOutflowTransactions], function (transactions) {
  return summarizeTransactions(transactions);
});

var getInflowByCategory = (0, _reselect.createSelector)([getInflowTransactions], function (transactions) {
  return summarizeTransactions(transactions);
});

var getOutflowByCategoryName = exports.getOutflowByCategoryName = (0, _reselect.createSelector)(getOutflowByCategory, _categories.getCategories, function (trans, cat) {
  return applyCategoryName(trans, cat);
});

var getInflowByCategoryName = exports.getInflowByCategoryName = (0, _reselect.createSelector)(getInflowByCategory, _categories.getCategories, function (trans, cat) {
  return applyCategoryName(trans, cat);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(totalTransactions, 'totalTransactions', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(summarizeTransactions, 'summarizeTransactions', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(sortTransactions, 'sortTransactions', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(applyCategoryName, 'applyCategoryName', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getTransactions, 'getTransactions', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getInflowTransactions, 'getInflowTransactions', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getOutflowTransactions, 'getOutflowTransactions', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getBalance, 'getBalance', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getInflowBalance, 'getInflowBalance', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getOutflowBalance, 'getOutflowBalance', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getFormattedBalance, 'getFormattedBalance', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getFormattedInflowBalance, 'getFormattedInflowBalance', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getFormattedOutflowBalance, 'getFormattedOutflowBalance', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getOutflowByCategory, 'getOutflowByCategory', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getInflowByCategory, 'getInflowByCategory', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getOutflowByCategoryName, 'getOutflowByCategoryName', 'C:/Github/iPos/app/selectors/transactions.js');

  __REACT_HOT_LOADER__.register(getInflowByCategoryName, 'getInflowByCategoryName', 'C:/Github/iPos/app/selectors/transactions.js');
}();

;

/***/ }),

/***/ "./utils/formatAmount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatAmount;
function formatAmount(amount) {
  var showSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var isNegative = amount < 0;
  var formatValue = Math.abs(amount).toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD'
  });

  return {
    text: '' + (isNegative && showSign ? '-' : '') + formatValue,
    isNegative: isNegative
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(formatAmount, 'formatAmount', 'C:/Github/iPos/app/utils/formatAmount.js');
}();

;

/***/ })

});
//# sourceMappingURL=budget.js.map