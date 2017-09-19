'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactCodeSplitting = require('react-code-splitting');var _reactCodeSplitting2 = _interopRequireDefault(_reactCodeSplitting);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Route = require('found/lib/Route');var _Route2 = _interopRequireDefault(_Route);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const LogoutScreen = props =>
_react2.default.createElement(_reactCodeSplitting2.default, { load: Promise.resolve().then(() => require('./components/LogoutScreen')), componentProps: props });

const NewUserScreen = props =>
_react2.default.createElement(_reactCodeSplitting2.default, { load: Promise.resolve().then(() => require('./components/NewUserScreen')), componentProps: props });exports.default =



_react2.default.createElement(_Route2.default, { key: 'user', path: 'user' },
  _react2.default.createElement(_Route2.default, { path: 'new', Component: NewUserScreen }),
  _react2.default.createElement(_Route2.default, { path: 'logout', Component: LogoutScreen }));
//# sourceMappingURL=routeAppFrameAccountManagement.js.map