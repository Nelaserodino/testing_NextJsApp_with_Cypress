"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Lesson_SkipChallenge_tsx"],{

/***/ "./components/Lesson/SkipChallenge.tsx":
/*!*********************************************!*\
  !*** ./components/Lesson/SkipChallenge.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LessonChallenge; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xstate/react */ \"./node_modules/@xstate/react/es/index.js\");\n\n\nvar _s = $RefreshSig$();\n\nfunction LessonChallenge(param) {\n    var progressService = param.progressService;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_xstate_react__WEBPACK_IMPORTED_MODULE_2__.useActor)(progressService), 2), progressSend = ref[1];\n    var handleInputChange = function(event) {\n        var target = event.target;\n        var value = target.type === \"checkbox\" ? target.checked : target.value;\n        progressSend({\n            type: \"DISABLE_CHALLENGES\",\n            value: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Lesson/SkipChallenge.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center my-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        \"data-test\": \"skip-challenge-input\",\n                        name: \"answer\",\n                        type: \"checkbox\",\n                        className: \"focus:ring-blue-500 text-blue-600 border-gray-300 rounded h-4 w-4\",\n                        checked: progressService.state.context.disableChallenges,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Lesson/SkipChallenge.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"ml-4 leading-6 text-gray-300\",\n                        children: \"Disable questions on upcoming lessons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Lesson/SkipChallenge.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Lesson/SkipChallenge.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LessonChallenge, \"2nbJamBC9qzfLw9C/ck6+6aQJng=\", false, function() {\n    return [\n        _xstate_react__WEBPACK_IMPORTED_MODULE_2__.useActor\n    ];\n});\n_c = LessonChallenge;\nvar _c;\n$RefreshReg$(_c, \"LessonChallenge\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xlc3Nvbi9Ta2lwQ2hhbGxlbmdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBd0M7QUFFekIsU0FBU0MsZUFBZSxDQUFDLEtBQW1CLEVBQUU7UUFBckIsZUFBaUIsR0FBakIsS0FBbUIsQ0FBakJDLGVBQWU7O0lBQ3ZELElBQXlCRixHQUF5QixvRkFBekJBLHVEQUFRLENBQUNFLGVBQWUsQ0FBQyxNQUF6Q0MsWUFBWSxHQUFJSCxHQUF5QixHQUE3QjtJQUVyQixJQUFNSSxpQkFBaUIsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDbkMsSUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQU07UUFDM0IsSUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLElBQUksS0FBSyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csT0FBTyxHQUFHSCxNQUFNLENBQUNDLEtBQUs7UUFFeEVKLFlBQVksQ0FBQztZQUNYSyxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCRCxLQUFLLEVBQUxBLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ0csSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHVDQUF1Qzs7a0NBQ3BELDhEQUFDQyxPQUFLO3dCQUNKQyxXQUFTLEVBQUMsc0JBQXNCO3dCQUNoQ0MsSUFBSSxFQUFDLFFBQVE7d0JBQ2JQLElBQUksRUFBQyxVQUFVO3dCQUNmSSxTQUFTLEVBQUMsbUVBQW1FO3dCQUM3RUgsT0FBTyxFQUFFUCxlQUFlLENBQUNjLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxpQkFBaUI7d0JBQ3hEQyxRQUFRLEVBQUVmLGlCQUFpQjs7Ozs7NEJBQzNCO2tDQUNGLDhEQUFDZ0IsT0FBSzt3QkFBQ1IsU0FBUyxFQUFDLDhCQUE4QjtrQ0FBQyx1Q0FFaEQ7Ozs7OzRCQUFROzs7Ozs7b0JBQ0o7O29CQUNMLENBQ0o7QUFDSCxDQUFDO0dBL0J1QlgsZUFBZTs7UUFDWkQsbURBQVE7OztBQURYQyxLQUFBQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGVzc29uL1NraXBDaGFsbGVuZ2UudHN4PzBkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWN0b3IgfSBmcm9tIFwiQHhzdGF0ZS9yZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlc3NvbkNoYWxsZW5nZSh7IHByb2dyZXNzU2VydmljZSB9KSB7XG4gIGNvbnN0IFssIHByb2dyZXNzU2VuZF0gPSB1c2VBY3Rvcihwcm9ncmVzc1NlcnZpY2UpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZVxuXG4gICAgcHJvZ3Jlc3NTZW5kKHtcbiAgICAgIHR5cGU6IFwiRElTQUJMRV9DSEFMTEVOR0VTXCIsXG4gICAgICB2YWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTZcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgZGF0YS10ZXN0PVwic2tpcC1jaGFsbGVuZ2UtaW5wdXRcIlxuICAgICAgICAgIG5hbWU9XCJhbnN3ZXJcIlxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy1ibHVlLTUwMCB0ZXh0LWJsdWUtNjAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGgtNCB3LTRcIlxuICAgICAgICAgIGNoZWNrZWQ9e3Byb2dyZXNzU2VydmljZS5zdGF0ZS5jb250ZXh0LmRpc2FibGVDaGFsbGVuZ2VzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTQgbGVhZGluZy02IHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICBEaXNhYmxlIHF1ZXN0aW9ucyBvbiB1cGNvbWluZyBsZXNzb25zXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUFjdG9yIiwiTGVzc29uQ2hhbGxlbmdlIiwicHJvZ3Jlc3NTZXJ2aWNlIiwicHJvZ3Jlc3NTZW5kIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJociIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwiZGF0YS10ZXN0IiwibmFtZSIsInN0YXRlIiwiY29udGV4dCIsImRpc2FibGVDaGFsbGVuZ2VzIiwib25DaGFuZ2UiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Lesson/SkipChallenge.tsx\n"));

/***/ })

}]);