'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _AppBar = require('material-ui/AppBar');var _AppBar2 = _interopRequireDefault(_AppBar);
var _IconButton = require('material-ui/IconButton');var _IconButton2 = _interopRequireDefault(_IconButton);
var _Menu = require('material-ui-icons/Menu');var _Menu2 = _interopRequireDefault(_Menu);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');
var _styles = require('material-ui/styles');
var _Toolbar = require('material-ui/Toolbar');var _Toolbar2 = _interopRequireDefault(_Toolbar);
var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _NavBarLoginButton = require('../../urb-account-management-webapp/components/NavBarLoginButton');var _NavBarLoginButton2 = _interopRequireDefault(_NavBarLoginButton);

var _AppDrawer = require('./AppDrawer');var _AppDrawer2 = _interopRequireDefault(_AppDrawer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box' },

    '*, *:before, *:after': {
      boxSizing: 'inherit' },

    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale' // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto' } },


  appFrame: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%' },

  grow: {
    flex: '1 1 auto' },

  title: {
    marginLeft: 24,
    flex: '0 1 auto' },

  appBar: {
    transition: theme.transitions.create('width') },

  // appBarHome: {
  //   backgroundColor: 'transparent',
  //   boxShadow: 'none',
  // },
  [theme.breakpoints.up('lg')]: {
    drawer: {
      width: '250px' },

    appBarShift: {
      width: 'calc(100% - 250px)' },

    navIconHide: {
      display: 'none' } } });




class AppFrame extends _react.Component {
  constructor(props, context) {
    super(props, context);this.




    handleDrawerClose = () => {
      this.setState({ drawerOpen: false });
    };this.

    handleDrawerToggle = () => {
      this.setState({ drawerOpen: !this.state.drawerOpen });
    };this.state = { drawerOpen: false };}

  render() {
    const { children, classes, Viewer } = this.props;

    let drawerDocked = false;

    let appBarClassName = classes.appBar;
    let navIconClassName = classes.icon;

    if (drawerDocked) {
      navIconClassName += ` ${classes.navIconHide}`;
      appBarClassName += ` ${classes.appBarShift}`;
    } else {
      appBarClassName += ` ${classes.appBarHome}`;
    }

    const title = 'Hello World';

    return (
      _react2.default.createElement('div', { className: classes.appFrame },
        _react2.default.createElement(_AppBar2.default, { className: appBarClassName },
          _react2.default.createElement(_Toolbar2.default, null,
            _react2.default.createElement(_IconButton2.default, {
                color: 'contrast',
                onClick: this.handleDrawerToggle,
                className: navIconClassName },

              _react2.default.createElement(_Menu2.default, null)),

            title !== null &&
            _react2.default.createElement(_Typography2.default, {
                className: classes.title,
                type: 'title',
                color: 'inherit',
                noWrap: true },

              title),


            _react2.default.createElement('div', { className: classes.grow }),
            _react2.default.createElement(_NavBarLoginButton2.default, { Viewer: Viewer }))),


        _react2.default.createElement(_AppDrawer2.default, {
          className: classes.drawer,
          docked: drawerDocked,
          onRequestClose: this.handleDrawerClose,
          open: drawerDocked || this.state.drawerOpen }),

        children));


  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(AppFrame), { Viewer: function () {return require('./__generated__/AppFrame_Viewer.graphql');} });
//# sourceMappingURL=AppFrame.js.map