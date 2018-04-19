'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InstallPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _icomoon = require('../icomoon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconRed64 = (0, _.withBaseIcon)({ size: 64, style: { color: '#E53935' } });
var IconPink32 = (0, _.withBaseIcon)({ size: 32, style: { color: '#EC407A' } });
var IconBrown16 = (0, _.withBaseIcon)({ size: 16, style: { color: '#795548' } });

var Section = function Section(props) {
    return _react2.default.createElement(
        'div',
        { className: 'section-container' },
        props.children
    );
};
var Sep = function Sep() {
    return _react2.default.createElement('span', { style: { paddingRight: 4 } });
};
var InlineBlk = function InlineBlk(props) {
    return _react2.default.createElement(
        'div',
        { style: _extends({ paddingRight: 6, display: 'inline-block' }, props.style) },
        props.children
    );
};

var MyButton = (0, _.horizontalCenter)(function (props) {
    return _react2.default.createElement(
        'button',
        null,
        props.children
    );
});

var InstallPage = exports.InstallPage = function InstallPage() {
    return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
            'div',
            { style: { paddingTop: 20 } },
            _react2.default.createElement(
                'h3',
                null,
                'Install'
            ),
            _react2.default.createElement(
                'div',
                { style: { width: '60%', margin: 'auto' } },
                _react2.default.createElement(
                    'pre',
                    { className: 'prettyprint' },
                    '\n                        npm install --save-dev react-icons-kit\n            '
                )
            ),
            _react2.default.createElement(
                'h3',
                null,
                'Basic Usage'
            ),
            _react2.default.createElement(
                Section,
                null,
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%' } },
                    _react2.default.createElement(
                        'pre',
                        { className: 'prettyprint lang-javascript' },
                        '\n    import Icon from \'react-icons-kit\';\n\n    //import icons\n\n    import { home } from \'react-icons-kit/icomoon\';\n                \n    <Icon icon={home}/>\n    <Icon size={32} icon={home}/>\n    <Icon size={64} icon={home}/>\n                '
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%', margin: 'auto' } },
                    _react2.default.createElement(
                        InlineBlk,
                        null,
                        _react2.default.createElement(_2.default, { icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 32, icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 64, icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null)
                    ),
                    _react2.default.createElement(
                        InlineBlk,
                        null,
                        _react2.default.createElement(_2.default, { icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 32, icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 64, icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null)
                    ),
                    _react2.default.createElement(
                        InlineBlk,
                        null,
                        _react2.default.createElement(_2.default, { icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 32, icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 64, icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null)
                    )
                )
            ),
            _react2.default.createElement(
                'h3',
                null,
                'Horizontal Centering'
            ),
            _react2.default.createElement(
                Section,
                null,
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%' } },
                    _react2.default.createElement(
                        'pre',
                        { className: 'prettyprint lang-javascript' },
                        '\n    //use the higher order component horizontalCenter which\n    //takes a component that accepts a list of children. It will\n    //auto align the child items using flex.\n\n    import { horizontalCenter } from \'react-icons-kit\';\n    const MyButton = \n        horizontalCenter(\n            props => <button>{props.children}</button>\n        );\n    <MyButton><IconBrown16 icon={home3}/> Press Me </MyButton>\n    \n                '
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%', margin: 'auto' } },
                    _react2.default.createElement(
                        MyButton,
                        null,
                        _react2.default.createElement(IconBrown16, { icon: _icomoon.home3 }),
                        ' Home 1 '
                    ),
                    _react2.default.createElement(
                        MyButton,
                        null,
                        _react2.default.createElement(IconBrown16, { icon: _icomoon.home2 }),
                        ' Home 2 '
                    )
                )
            ),
            _react2.default.createElement(
                'h3',
                null,
                ' Changing Colors '
            ),
            _react2.default.createElement(
                Section,
                null,
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%' } },
                    _react2.default.createElement(
                        'pre',
                        { className: 'prettyprint lang-javascript' },
                        '\n    \n    //by default it will take color of container\n                \n    <div style={{ color: \'orange\' }}>\n        <Icon icon={home}/></div>\n        <Icon size={32} icon={home}/>\n        <Icon size={64} icon={home}/>\n    </div>\n                '
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%', margin: 'auto' } },
                    _react2.default.createElement(
                        InlineBlk,
                        { style: { color: '#1E88E5' } },
                        _react2.default.createElement(_2.default, { icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 32, icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 64, icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null)
                    ),
                    _react2.default.createElement(
                        InlineBlk,
                        { style: { color: '#009688' } },
                        _react2.default.createElement(_2.default, { icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 32, icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 64, icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null)
                    ),
                    _react2.default.createElement(
                        InlineBlk,
                        { style: { color: '#F4511E' } },
                        _react2.default.createElement(_2.default, { icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 32, icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(_2.default, { size: 64, icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null)
                    )
                )
            ),
            _react2.default.createElement(
                'h3',
                null,
                'Compose'
            ),
            _react2.default.createElement(
                Section,
                null,
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%' } },
                    _react2.default.createElement(
                        'pre',
                        { className: 'prettyprint lang-javascript' },
                        '\n\n    import { withBaseIcon } from \'react-icons-kit\';\n    import { home } from \'react-icons-kit/icomoon\';\n    import { home2 } from \'react-icons-kit/icomoon\';\n    import { home3 } from \'react-icons-kit/icomoon\';\n    \n    //you can compose icon to prevent repetitive \n    //args like size and color\n\n    const IconRed64 = \n        withBaseIcon({ size: 32, style: {color: \'##E53935\'}});\n                \n    <IconRed64 icon={home}/>\n    <IconRed64 icon={home2}/>\n    <IconRed64 icon={home3}/>\n                '
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '40%', margin: 'auto' } },
                    _react2.default.createElement(
                        InlineBlk,
                        null,
                        _react2.default.createElement(IconRed64, { icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(IconRed64, { icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(IconRed64, { icon: _icomoon.home }),
                        _react2.default.createElement(Sep, null)
                    ),
                    _react2.default.createElement(
                        InlineBlk,
                        null,
                        _react2.default.createElement(IconPink32, { icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(IconPink32, { icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(IconPink32, { icon: _icomoon.home2 }),
                        _react2.default.createElement(Sep, null)
                    ),
                    _react2.default.createElement(
                        InlineBlk,
                        null,
                        _react2.default.createElement(IconBrown16, { icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(IconBrown16, { icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null),
                        _react2.default.createElement(IconBrown16, { icon: _icomoon.home3 }),
                        _react2.default.createElement(Sep, null)
                    )
                )
            )
        )
    );
};

exports.default = InstallPage;