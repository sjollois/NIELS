'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Icons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMPORTS = {
    icomoon: { module: '../icomoon', title: 'IcoMoon' },
    md: { module: '../fa', title: 'Material Design' },
    fa: { module: '../md', title: 'FontAwesome' },
    iconic: { module: '../iconic', title: 'Ionic' },
    entypo: { module: '../entypo', title: 'Entypo' },
    metrize: { module: '../metrize', title: 'Metrize' },
    ikons: { module: '../ikons', title: 'Ikons' },
    linea: { module: '../ikons', title: 'Linea' },
    ionicons: { module: '../ionicons', title: 'Ionics' },
    oct: { module: '../oct', title: 'Octicons' },
    typicons: { module: '../typicons', title: 'Typicons' }
};

var ICONSET = Object.keys(IMPORTS);

var IconContainer = function IconContainer(props) {
    return _react2.default.createElement(
        'div',
        { className: 'icon-container ' + (props.selected === props.iconName ? 'icon-container-selected' : ''),
            'data-icon': props.iconName, onClick: props.onIconClicked },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Icon2.default, { size: 32, icon: props.iconData })
        ),
        _react2.default.createElement(
            'div',
            { style: { paddingTop: 4, fontSize: 10 } },
            props.iconName
        )
    );
};

var Icons = exports.Icons = function (_React$Component) {
    _inherits(Icons, _React$Component);

    function Icons(props) {
        _classCallCheck(this, Icons);

        var _this = _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).call(this, props));

        _this.onIconClicked = function (e) {
            var target = e.target;
            var iconset = _this.state.iconset;

            var icon = null;
            var currentTarget = target;
            while (!icon) {
                icon = currentTarget.getAttribute('data-icon');
                if (!icon) {
                    currentTarget = currentTarget.parentElement;
                }
            }
            if (iconset[icon]) {
                _this.setState({ icon: icon });
            }
        };

        _this.onSetChanged = function (e) {
            var target = e.target;


            _this.setState({ set: target.value }, function () {
                _this.loadIcon(_this.state.set);
            });
        };

        _this.icomoon = function () {
            return import('../icomoon');
        };

        _this.md = function () {
            return import('../md'); //handcranked ftw!
        };

        _this.fa = function () {
            return import('../fa'); //handcranked ftw!
        };

        _this.iconic = function () {
            return import('../iconic'); //handcranked ftw!
        };

        _this.entypo = function () {
            return import('../entypo'); //handcranked ftw!
        };

        _this.metrize = function () {
            return import('../metrize'); //handcranked ftw!
        };

        _this.ikons = function () {
            return import('../ikons'); //handcranked ftw!
        };

        _this.linea = function () {
            return import('../linea'); //handcranked ftw!
        };

        _this.ionicons = function () {
            return import('../ionicons'); //handcranked ftw!
        };

        _this.oct = function () {
            return import('../oct'); //handcranked ftw!
        };

        _this.typicons = function () {
            return import('../typicons'); //handcranked ftw!
        };

        _this.loadIcon = function (set) {

            var importData = IMPORTS[set];
            _this[set]().then(function (data) {

                _this.setState({ iconset: data, icon: Object.keys(data)[0] });
            });
        };

        _this.state = { set: 'icomoon', icon: 'home', iconset: null };

        return _this;
    }

    _createClass(Icons, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadIcon(this.state.set);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { background: '#FFF', position: 'fixed', width: '100%' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Icons'
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20 } },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'pre',
                                    { className: 'prettyprint lang-javascript' },
                                    '\n    import Icon from \'react-icons-kit\';\n    import { ' + this.state.icon + ' } from \'react-icons-kit/' + this.state.set + '/' + this.state.icon + '\';       \n\n    <Icon icon={' + this.state.icon + '} />;                            \n                                '
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'select',
                                    { style: { padding: 6, background: '#FFF' }, value: this.state.set, onChange: this.onSetChanged },
                                    ICONSET.map(function (key) {
                                        return _react2.default.createElement(
                                            'option',
                                            { key: key, value: key },
                                            IMPORTS[key].title
                                        );
                                    })
                                )
                            )
                        )
                    )
                ),
                this.state.iconset ? _react2.default.createElement(
                    'div',
                    { className: 'container', style: { paddingTop: 220, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' } },
                    Object.keys(this.state.iconset).map(function (icon) {
                        return _react2.default.createElement(IconContainer, { onIconClicked: _this2.onIconClicked,
                            selected: _this2.state.icon, key: icon, iconData: _this2.state.iconset[icon], iconName: icon });
                    })
                ) : _react2.default.createElement(
                    'div',
                    null,
                    'Please Wait...'
                )
            );
        }
    }]);

    return Icons;
}(_react2.default.Component);

exports.default = Icons;