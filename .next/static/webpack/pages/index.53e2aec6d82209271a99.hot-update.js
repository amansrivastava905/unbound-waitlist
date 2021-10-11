"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Modal.js":
/*!***********************************!*\
  !*** ./pages/components/Modal.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _api_newRegistration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/newRegistration */ "./pages/api/newRegistration.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\harsh\\Desktop\\All Desktop items\\web Dev\\waitlist-unbound\\unbound-waitlist\\pages\\components\\Modal.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7;








var Modal = function Modal(_ref) {
  _s();

  var visible = _ref.visible;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState2 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      submitted = _React$useState2[0],
      setSubmitted = _React$useState2[1];

  var emailHandler = function emailHandler(e) {
    setEmail(e.target.value);
    console.log(email);
  };

  var submitEmail = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      return C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(email == "")) {
                _context.next = 4;
                break;
              }

              alert("Email feild is empty");
              _context.next = 7;
              break;

            case 4:
              setSubmitted(true);
              _context.next = 7;
              return (0,_api_newRegistration__WEBPACK_IMPORTED_MODULE_5__.EmailSubmit)(email);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitEmail(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
      isSubmitted: submitted,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Heading, {
          children: "Join the waitlist."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Message, {
          isSubmitted: submitted,
          children: "Thankyou! we will meet soon..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Form, {
          isSubmitted: submitted,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Input, {
            placeholder: "email",
            onChange: emailHandler,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Button, {
            className: "waitlist-btn",
            onClick: function onClick() {
              submitEmail();
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: "m-7",
              children: "Join"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this) : ""
  }, void 0, false);
};

_s(Modal, "WOUunRVvClvSUt2+ZfC5ERptgSA=");

_c = Modal;
/* harmony default export */ __webpack_exports__["default"] = (Modal);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject || (_templateObject = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(255, 255, 255, 0.95);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"])));
_c2 = Wrapper;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject2 || (_templateObject2 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  border: 3px solid #050b7d;\n  border-radius: 5px;\n  padding: 50px 20px;\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
_c3 = Container;
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.h1(_templateObject3 || (_templateObject3 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  text-align: center;\n  color: #050b7d;\n  font-size: 36px;\n  font-weight: bold;\n  padding-bottom: 20px;\n"])));
_c4 = Heading;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject4 || (_templateObject4 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  display: ", ";\n"])), function (props) {
  return props.isSubmitted ? "none" : "block";
});
_c5 = Form;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.input(_templateObject5 || (_templateObject5 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  outline: none;\n  border: 3px solid #050b7d;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 5px 10px;\n  margin-bottom: 20px;\n"])));
_c6 = Input;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.button(_templateObject6 || (_templateObject6 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 100%;\n"])));
_c7 = Button;
var Message = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.h2(_templateObject7 || (_templateObject7 = (0,C_Users_harsh_Desktop_All_Desktop_items_web_Dev_waitlist_unbound_unbound_waitlist_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n  /* display:block; */\n  display: ", ";\n"])), function (props) {
  return props.isSubmitted ? "block" : "none";
});
_c8 = Message;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Modal");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "Container");
$RefreshReg$(_c4, "Heading");
$RefreshReg$(_c5, "Form");
$RefreshReg$(_c6, "Input");
$RefreshReg$(_c7, "Button");
$RefreshReg$(_c8, "Message");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTNlMmFlYzZkODIyMDkyNzFhOTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUM3QixrQkFBMEJKLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9LLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLHdCQUFrQ1AscURBQUEsQ0FBZSxLQUFmLENBQWxDO0FBQUE7QUFBQSxNQUFPUSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkosSUFBQUEsUUFBUSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFaO0FBQ0QsR0FIRDs7QUFJQSxNQUFNVSxXQUFXO0FBQUEsMFpBQUcsaUJBQU9MLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNkTCxLQUFLLElBQUksRUFESztBQUFBO0FBQUE7QUFBQTs7QUFFaEJXLGNBQUFBLEtBQUssQ0FBQyxzQkFBRCxDQUFMO0FBRmdCO0FBQUE7O0FBQUE7QUFJaEJSLGNBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFKZ0I7QUFBQSxxQkFLVk4saUVBQVcsQ0FBQ0csS0FBRCxDQUxEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhVLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBU0Esc0JBQ0U7QUFBQSxjQUNHWCxPQUFPLGdCQUNOLDhEQUFDLE9BQUQ7QUFBUyxpQkFBVyxFQUFFRyxTQUF0QjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQ7QUFBQSxnQ0FDRSw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsT0FBRDtBQUFTLHFCQUFXLEVBQUVBLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0UsOERBQUMsSUFBRDtBQUFNLHFCQUFXLEVBQUVBLFNBQW5CO0FBQUEsa0NBQ0UsOERBQUMsS0FBRDtBQUFPLHVCQUFXLEVBQUMsT0FBbkI7QUFBMkIsb0JBQVEsRUFBRUUsWUFBckM7QUFBbUQsb0JBQVE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLE1BQUQ7QUFDRSxxQkFBUyxFQUFDLGNBRFo7QUFFRSxtQkFBTyxFQUFFLG1CQUFNO0FBQ2JNLGNBQUFBLFdBQVc7QUFDWixhQUpIO0FBQUEsbUNBTUU7QUFBTSx1QkFBUyxFQUFDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURNLEdBcUJOO0FBdEJKLG1CQURGO0FBMkJELENBNUNEOztHQUFNWjs7S0FBQUE7QUE4Q04sK0RBQWVBLEtBQWY7QUFFQSxJQUFNYyxPQUFPLEdBQUdoQiwwREFBSCxnZEFBYjtNQUFNZ0I7QUFhTixJQUFNRSxTQUFTLEdBQUdsQiwwREFBSCxrYUFBZjtNQUFNa0I7QUFTTixJQUFNQyxPQUFPLEdBQUduQix5REFBSCx5V0FBYjtNQUFNbUI7QUFRTixJQUFNRSxJQUFJLEdBQUdyQiwwREFBSCxnWEFLRyxVQUFDc0IsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsV0FBTixHQUFvQixNQUFwQixHQUE2QixPQUF6QztBQUFBLENBTEgsQ0FBVjtNQUFNRjtBQVFOLElBQU1HLEtBQUssR0FBR3hCLDREQUFILHFZQUFYO01BQU13QjtBQVFOLElBQU1FLE1BQU0sR0FBRzFCLDZEQUFILDRRQUFaO01BQU0wQjtBQUdOLElBQU1FLE9BQU8sR0FBRzVCLHlEQUFILGtXQUtBLFVBQUNzQixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLE9BQXBCLEdBQThCLE1BQTFDO0FBQUEsQ0FMQSxDQUFiO01BQU1LIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEVtYWlsU3VibWl0IH0gZnJvbSBcIi4uL2FwaS9uZXdSZWdpc3RyYXRpb25cIjtcclxuXHJcbmNvbnN0IE1vZGFsID0gKHsgdmlzaWJsZSB9KSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBlbWFpbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gIH07XHJcbiAgY29uc3Qgc3VibWl0RW1haWwgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgaWYgKGVtYWlsID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJFbWFpbCBmZWlsZCBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTsgXHJcbiAgICAgIGF3YWl0IEVtYWlsU3VibWl0KGVtYWlsKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Zpc2libGUgPyAoXHJcbiAgICAgICAgPFdyYXBwZXIgaXNTdWJtaXR0ZWQ9e3N1Ym1pdHRlZH0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZGluZz5Kb2luIHRoZSB3YWl0bGlzdC48L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGlzU3VibWl0dGVkPXtzdWJtaXR0ZWR9PlxyXG4gICAgICAgICAgICAgIFRoYW5reW91ISB3ZSB3aWxsIG1lZXQgc29vbi4uLlxyXG4gICAgICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgICAgIDxGb3JtIGlzU3VibWl0dGVkPXtzdWJtaXR0ZWR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImVtYWlsXCIgb25DaGFuZ2U9e2VtYWlsSGFuZGxlcn0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3YWl0bGlzdC1idG5cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXRFbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTdcIj5Kb2luPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwNTBiN2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDUwcHggMjBweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgxYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzA1MGI3ZDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzU3VibWl0dGVkID8gXCJub25lXCIgOiBcImJsb2NrXCIpfTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzA1MGI3ZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcbmNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuaDJgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvKiBkaXNwbGF5OmJsb2NrOyAqL1xyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNTdWJtaXR0ZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkVtYWlsU3VibWl0IiwiTW9kYWwiLCJ2aXNpYmxlIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImVtYWlsSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRFbWFpbCIsImFsZXJ0IiwiV3JhcHBlciIsImRpdiIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJoMSIsIkZvcm0iLCJwcm9wcyIsImlzU3VibWl0dGVkIiwiSW5wdXQiLCJpbnB1dCIsIkJ1dHRvbiIsImJ1dHRvbiIsIk1lc3NhZ2UiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=