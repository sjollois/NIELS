'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReactIconsKitSite = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _InstallPage = require('./InstallPage');

var _InstallPage2 = _interopRequireDefault(_InstallPage);

var _Icons = require('./Icons');

var _Icons2 = _interopRequireDefault(_Icons);

require('./ReacticonsSite.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactIconsKitSite = exports.ReactIconsKitSite = function (_React$Component) {
    _inherits(ReactIconsKitSite, _React$Component);

    function ReactIconsKitSite(props) {
        _classCallCheck(this, ReactIconsKitSite);

        var _this = _possibleConstructorReturn(this, (ReactIconsKitSite.__proto__ || Object.getPrototypeOf(ReactIconsKitSite)).call(this, props));

        _this.onNavigationChange = function (page) {
            _this.setState({ active: page });
        };

        _this.state = { active: 'install' };
        return _this;
    }

    _createClass(ReactIconsKitSite, [{
        key: 'render',
        value: function render() {
            var active = this.state.active;

            return _react2.default.createElement(
                'div',
                { style: { marginTop: 72, background: '#2196F3' } },
                _react2.default.createElement(
                    'div',
                    { className: 'header-container' },
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(_Navigation2.default, { onNavigationChange: this.onNavigationChange })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'body-container' },
                    active === 'install' ? _react2.default.createElement(_InstallPage2.default, null) : null,
                    active === 'icons' ? _react2.default.createElement(_Icons2.default, null) : null
                )
            );
        }
    }]);

    return ReactIconsKitSite;
}(_react2.default.Component);