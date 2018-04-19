'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PAGES = {
    install: { title: 'Install and Usage' },
    icons: { title: ' Icons ' }
};

var NavItem = function NavItem(props) {
    var active = props.active,
        page = props.page;

    var isActive = active === page;
    var color = isActive ? '#FFF' : '#D5D5D6';
    var style = isActive ? { color: color } : {};
    return _react2.default.createElement(
        'div',
        { className: 'navigation-item', style: style, onClick: props.onClick, 'data-page': page },
        _react2.default.createElement(
            'div',
            { 'data-page': page },
            PAGES[props.page].title
        ),
        isActive ? _react2.default.createElement('div', { className: 'navigation-active-indicator' }) : null
    );
};

NavItem.propTypes = {
    active: _propTypes2.default.string,
    page: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};

var Navigation = exports.Navigation = function (_React$Component) {
    _inherits(Navigation, _React$Component);

    function Navigation(props) {
        _classCallCheck(this, Navigation);

        var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

        _this.state = { active: 'install', pages: PAGES };

        _this.onPageClicked = function (e) {
            var target = e.target;

            var page = target.getAttribute('data-page');
            _this.setState({ active: page });
            _this.props.onNavigationChange(page);
        };

        _this.mapPages = function (page) {
            var active = _this.state.active;


            return _react2.default.createElement(NavItem, { key: page, page: page, active: _this.state.active, onClick: _this.onPageClicked });
        };

        return _this;
    }

    _createClass(Navigation, [{
        key: 'render',
        value: function render() {
            var pages = this.state.pages;

            return _react2.default.createElement(
                'div',
                { className: 'navigation container' },
                _react2.default.createElement(
                    'div',
                    { className: 'navigation-items' },
                    Object.keys(pages).map(this.mapPages)
                )
            );
        }
    }]);

    return Navigation;
}(_react2.default.Component);

Navigation.propTypes = {
    onNavigationChange: _propTypes2.default.func
};
exports.default = Navigation;