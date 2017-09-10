Object.defineProperty(exports,"__esModule",{value:true});

var _reactCodeSplitting=require('react-code-splitting');var _reactCodeSplitting2=_interopRequireDefault(_reactCodeSplitting);
var _reactRelay=require('react-relay');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var EnsayoInPaceEditList=function EnsayoInPaceEditList(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{
load:Promise.resolve().then(function(){return require('./components/EnsayoInPaceEditList');}),
componentProps:props}));};


var EnsayoInPaceEditScreen=function EnsayoInPaceEditScreen(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{
load:Promise.resolve().then(function(){return require('./components/EnsayoInPaceEditScreen');}),
componentProps:props}));};


var EnsayoPublicList=function EnsayoPublicList(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{
load:Promise.resolve().then(function(){return require('./components/EnsayoPublicList');}),
componentProps:props}));};


var EnsayoPublicItem=function EnsayoPublicItem(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{
load:Promise.resolve().then(function(){return require('./components/EnsayoPublicItem');}),
componentProps:props}));};exports.default=




_react2.default.createElement(_Route2.default,{key:'ensayo',path:'ensayo'},
_react2.default.createElement(_Route2.default,{
path:'/',
Component:EnsayoPublicList,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoPublicList_Query.graphql');}}),







_react2.default.createElement(_Route2.default,{path:'item'},
_react2.default.createElement(_Route2.default,{
path:':id',
Component:EnsayoPublicItem,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoPublicItem_Query.graphql');}})),








_react2.default.createElement(_Route2.default,{
path:'in-place-edit',
Component:EnsayoInPaceEditScreen,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:EnsayoInPaceEditList,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoInPaceEditList_Query.graphql');}})));
//# sourceMappingURL=routeAppFrameEnsayo.js.map