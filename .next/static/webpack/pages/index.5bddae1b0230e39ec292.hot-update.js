"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/utils/Airtable.js":
/*!*************************************!*\
  !*** ./pages/api/utils/Airtable.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "table": function() { return /* binding */ table; },
/* harmony export */   "minifyRecords": function() { return /* binding */ minifyRecords; },
/* harmony export */   "getMinifiedRecords": function() { return /* binding */ getMinifiedRecords; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

var base = new Airtable({
  apiKey: 'keymNWnyBGQJTRYMU'
}).base('appMcrLQfAF4Fz9Kq');
var table = base('waitlist');

var minifyRecords = function minifyRecords(record) {
  return record.map(function (record) {
    return getMinifiedRecords(record);
  });
};

var getMinifiedRecords = function getMinifiedRecords(record) {
  if (!record.fields.verified) {
    record.fields.verified = false;
  }

  return {
    id: record.id,
    fields: record.fields
  };
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWJkZGFlMWIwMjMwZTM5ZWMyOTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQXhCOztBQUNBLElBQU1DLElBQUksR0FBRyxJQUFJRixRQUFKLENBQWE7QUFBQ0csRUFBQUEsTUFBTSxFQUFFO0FBQVQsQ0FBYixFQUE0Q0QsSUFBNUMsQ0FBaUQsbUJBQWpELENBQWI7QUFFQSxJQUFNRSxLQUFLLEdBQUdGLElBQUksQ0FBQyxVQUFELENBQWxCOztBQUdBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDLFNBQU9BLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNELE1BQUQ7QUFBQSxXQUFZRSxrQkFBa0IsQ0FBQ0YsTUFBRCxDQUE5QjtBQUFBLEdBQVgsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDRixNQUFELEVBQVk7QUFDckMsTUFBRyxDQUFDQSxNQUFNLENBQUNHLE1BQVAsQ0FBY0MsUUFBbEIsRUFBNEI7QUFDMUJKLElBQUFBLE1BQU0sQ0FBQ0csTUFBUCxDQUFjQyxRQUFkLEdBQXlCLEtBQXpCO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMQyxJQUFBQSxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0ssRUFETjtBQUVMRixJQUFBQSxNQUFNLEVBQUVILE1BQU0sQ0FBQ0c7QUFGVixHQUFQO0FBSUQsQ0FSRDs7QUFVQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvdXRpbHMvQWlydGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG5jb25zdCBiYXNlID0gbmV3IEFpcnRhYmxlKHthcGlLZXk6ICdrZXltTldueUJHUUpUUllNVSd9KS5iYXNlKCdhcHBNY3JMUWZBRjRGejlLcScpO1xyXG5cclxuY29uc3QgdGFibGUgPSBiYXNlKCd3YWl0bGlzdCcpO1xyXG5cclxuXHJcbmNvbnN0IG1pbmlmeVJlY29yZHMgPSAocmVjb3JkKSA9PiB7XHJcbiAgcmV0dXJuIHJlY29yZC5tYXAoKHJlY29yZCkgPT4gZ2V0TWluaWZpZWRSZWNvcmRzKHJlY29yZCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWluaWZpZWRSZWNvcmRzID0gKHJlY29yZCkgPT4ge1xyXG4gIGlmKCFyZWNvcmQuZmllbGRzLnZlcmlmaWVkKSB7XHJcbiAgICByZWNvcmQuZmllbGRzLnZlcmlmaWVkID0gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpZDogcmVjb3JkLmlkLFxyXG4gICAgZmllbGRzOiByZWNvcmQuZmllbGRzLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7dGFibGUsIG1pbmlmeVJlY29yZHMsIGdldE1pbmlmaWVkUmVjb3Jkc307Il0sIm5hbWVzIjpbIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJ0YWJsZSIsIm1pbmlmeVJlY29yZHMiLCJyZWNvcmQiLCJtYXAiLCJnZXRNaW5pZmllZFJlY29yZHMiLCJmaWVsZHMiLCJ2ZXJpZmllZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==