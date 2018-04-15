'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SvgIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _camelCase = require('camel-case');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var walkChildren = function walkChildren(children) {
    return children.map(function (child, idx) {
        var name = child.name,
            attribsMap = child.attribs,
            _child$children = child.children,
            gchildren = _child$children === undefined ? null : _child$children;

        //fill, stroke

        var attribs = Object.keys(attribsMap).filter(function (key) {
            return key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none';
        }).reduce(function (partial, key) {

            partial[(0, _camelCase2.default)(key)] = attribsMap[key];
            return partial;
        }, {});
        //special case, it has fill and stroke at the same time
        var merge = {};
        if (attribsMap.fill === 'none' && attribsMap.stroke) {
            merge = { fill: 'none', stroke: 'currentColor' };
        }
        return (0, _react.createElement)(name, _extends({ key: idx }, attribs, merge), gchildren === null ? gchildren : walkChildren(gchildren));
    });
};

var SvgIcon = exports.SvgIcon = function SvgIcon(props) {
    var size = props.size;
    var _props$icon = props.icon,
        children = _props$icon.children,
        viewBox = _props$icon.viewBox;

    return _react2.default.createElement(
        'svg',
        { fill: 'currentColor', style: { display: 'inline-block', verticalAlign: 'middle' }, height: size, width: size, viewBox: viewBox },
        walkChildren(children)
    );
};

SvgIcon.defaultProps = {
    size: '16'
};

SvgIcon.propTypes = {
    icon: _propTypes2.default.object.isRequired,
    size: _propTypes2.default.number
};

exports.default = SvgIcon;