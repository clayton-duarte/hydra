'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nfont-family: monospace;\nfont-weight: normal;\ntext-align: center;\nfont-size: 2rem;\ncolor: ', ';\n'], ['\nfont-family: monospace;\nfont-weight: normal;\ntext-align: center;\nfont-size: 2rem;\ncolor: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.h1(_templateObject, function (props) {
  return props.theme.color;
});