'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(props) {
    return _react2.default.createElement(_styled2.default, props);
};

Title.propTypes = {
    theme: _propTypes.object,
    children: _propTypes.node
};

Title.defaultProps = {
    children: 'My title',
    theme: {
        color: 'tomato'
    }
};

exports.default = Title;