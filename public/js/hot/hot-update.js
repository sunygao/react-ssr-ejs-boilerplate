webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(26);

var _redux = __webpack_require__(11);

var _Grid = __webpack_require__(146);

var _Grid2 = _interopRequireDefault(_Grid);

var _CV = __webpack_require__(159);

var _CV2 = _interopRequireDefault(_CV);

var _all = __webpack_require__(147);

var _actions = __webpack_require__(148);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// Utils


// Actions


//for testing only
var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

        _this.rafUpdate = function () {
            if (_this.scrollTicker) {
                _this.scrollTicker = false;
                _this.setScroll(false);
            }

            window.requestAnimationFrame(_this.rafUpdate);
        };

        _this.setScroll = function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            _CV2.default.scroll.y = scrollTop;
        };

        _this.scrollTimer = null;
        _this.scrollTicker = false;
        _this._bindEvents();
        return _this;
    }

    _createClass(Layout, [{
        key: 'showGrid',
        value: function showGrid() {
            if (typeof window === 'undefined') return false;
            return (0, _all.getParameterByName)('grid') === 'true';
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this2 = this;

            if (typeof window === 'undefined') return;
            var actions = this.props.actions;

            window.addEventListener('orientationchange', function () {
                return actions.resize(window);
            }, false);
            window.addEventListener('resize', function () {
                return actions.resize(window);
            }, false);

            window.addEventListener('scroll', function (e) {
                _this2.scrollTicker = true;

                if (_this2.scrollTimer) {
                    clearTimeout(_this2.scrollTimer);
                    _this2.scrollTimer = null;
                }
            }, false);

            window.requestAnimationFrame(this.rafUpdate);
        }
    }, {
        key: 'render',
        value: function render() {
            // const {children, browser, showGrid, location} = this.props;
            var children = this.props.children;

            return _react2.default.createElement('div', null, _react2.default.createElement(_Grid2.default, { show: this.showGrid() }), children);
        }
    }]);

    return Layout;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(_actions.viewActions, dispatch)
    };
};

Layout = (0, _reactRedux.connect)(null, mapDispatchToProps)(Layout);
exports.default = Layout;

/***/ })

})
//# sourceMappingURL=hot-update.js.map