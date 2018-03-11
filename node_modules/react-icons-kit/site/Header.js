'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header() {
    return _react2.default.createElement(
        'div',
        { className: 'title container' },
        _react2.default.createElement(
            'div',
            { style: { height: '100%', fontSize: 18, display: 'flex', justifyContent: 'space-between' } },
            _react2.default.createElement(
                'div',
                { style: { lineHeight: '48px' } },
                'React Icons Kit'
            ),
            _react2.default.createElement(
                'div',
                { style: { lineHeight: '48px' } },
                _react2.default.createElement(
                    'span',
                    { style: { paddingRight: 4 } },
                    _react2.default.createElement(
                        'a',
                        { className: 'github-button', href: 'https://github.com/wmira/react-icons-kit/fork', 'data-icon': 'octicon-repo-forked', 'aria-label': 'Fork wmira/react-icons-kit on GitHub' },
                        'Fork'
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'github-button', href: 'https://github.com/wmira/react-icons-kit', 'data-icon': 'octicon-star', 'data-count-href': '/wmira/react-icons-kit/stargazers', 'data-count-api': '/repos/wmira/reacticons#stargazers_count', 'data-count-aria-label': '# stargazers on GitHub', 'aria-label': 'Star wmira/react-icons-kit on GitHub' },
                    'Star'
                )
            )
        )
    );
};

exports.default = Header;