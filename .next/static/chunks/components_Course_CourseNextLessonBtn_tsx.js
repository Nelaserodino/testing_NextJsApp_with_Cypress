"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Course_CourseNextLessonBtn_tsx"],{

/***/ "./components/Course/CourseNextLessonBtn.tsx":
/*!***************************************************!*\
  !*** ./components/Course/CourseNextLessonBtn.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseNextLessonBtn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_machineUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/machineUtils */ \"./utils/machineUtils.ts\");\n\n\n\nfunction CourseNextLessonBtn(param) {\n    var lessons = param.lessons, progressService = param.progressService, course = param.course;\n    var incompleLessons = lessons.map(function(lesson) {\n        if (!(0,_utils_machineUtils__WEBPACK_IMPORTED_MODULE_2__.isLessonCompleted)(progressService, \"\".concat(course, \"/\").concat(lesson.slug))) {\n            return lesson.slug;\n        }\n    }).filter(function(lesson) {\n        return lesson !== undefined;\n    });\n    var buttonText = function() {\n        if (!incompleLessons.length) {\n            return \"Course Completed\";\n        }\n        if (incompleLessons.length === lessons.length) {\n            return \"Start Course\";\n        } else {\n            return \"Next Lesson\";\n        }\n    };\n    var buttonURL = function() {\n        if (!incompleLessons.length) {\n            return \"/\";\n        } else {\n            return \"\".concat(course, \"/\").concat(incompleLessons[0]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: buttonURL(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                \"data-test\": \"next-lesson-button\",\n                className: \"mx-auto max-w-xl flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10\",\n                children: buttonText()\n            }, void 0, false, {\n                fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Course/CourseNextLessonBtn.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Course/CourseNextLessonBtn.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nela/Desktop/Cypress/Testing_first_app/components/Course/CourseNextLessonBtn.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c = CourseNextLessonBtn;\nvar _c;\n$RefreshReg$(_c, \"CourseNextLessonBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdXJzZS9Db3Vyc2VOZXh0TGVzc29uQnRuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNnQztBQUU3QyxTQUFTRSxtQkFBbUIsQ0FBQyxLQUkzQyxFQUFFO1FBSERDLE9BQU8sR0FEbUMsS0FJM0MsQ0FIQ0EsT0FBTyxFQUNQQyxlQUFlLEdBRjJCLEtBSTNDLENBRkNBLGVBQWUsRUFDZkMsTUFBTSxHQUhvQyxLQUkzQyxDQURDQSxNQUFNO0lBRU4sSUFBTUMsZUFBZSxHQUFHSCxPQUFPLENBQzVCSSxHQUFHLENBQUMsU0FBQ0MsTUFBTSxFQUFLO1FBQ2YsSUFBSSxDQUFDUCxzRUFBaUIsQ0FBQ0csZUFBZSxFQUFFLEVBQUMsQ0FBWUksTUFBVyxDQUFyQkgsTUFBTSxFQUFDLEdBQUMsQ0FBYyxRQUFaRyxNQUFNLENBQUNDLElBQUksQ0FBRSxDQUFDLEVBQUU7WUFDbkUsT0FBT0QsTUFBTSxDQUFDQyxJQUFJO1FBQ3BCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FDREMsTUFBTSxDQUFDLFNBQUNGLE1BQU07ZUFBS0EsTUFBTSxLQUFLRyxTQUFTO0tBQUEsQ0FBQztJQUUzQyxJQUFNQyxVQUFVLEdBQUcsV0FBTTtRQUN2QixJQUFJLENBQUNOLGVBQWUsQ0FBQ08sTUFBTSxFQUFFO1lBQzNCLE9BQU8sa0JBQWtCO1FBQzNCLENBQUM7UUFFRCxJQUFJUCxlQUFlLENBQUNPLE1BQU0sS0FBS1YsT0FBTyxDQUFDVSxNQUFNLEVBQUU7WUFDN0MsT0FBTyxjQUFjO1FBQ3ZCLE9BQU87WUFDTCxPQUFPLGFBQWE7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFNQyxTQUFTLEdBQUcsV0FBTTtRQUN0QixJQUFJLENBQUNSLGVBQWUsQ0FBQ08sTUFBTSxFQUFFO1lBQzNCLE9BQU8sR0FBRztRQUNaLE9BQU87WUFDTCxPQUFPLEVBQUMsQ0FBWVAsTUFBa0IsQ0FBNUJELE1BQU0sRUFBQyxHQUFDLENBQXFCLFFBQW5CQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUU7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFRCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsT0FBTztrQkFDcEIsNEVBQUNoQixrREFBSTtZQUFDaUIsSUFBSSxFQUFFSCxTQUFTLEVBQUU7c0JBQ3JCLDRFQUFDSSxHQUFDO2dCQUNBQyxXQUFTLEVBQUMsb0JBQW9CO2dCQUM5QkgsU0FBUyxFQUFDLG1LQUFtSzswQkFFNUtKLFVBQVUsRUFBRTs7Ozs7b0JBQ1g7Ozs7O2dCQUNDOzs7OztZQUNILENBQ1A7QUFDSCxDQUFDO0FBN0N1QlYsS0FBQUEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ291cnNlL0NvdXJzZU5leHRMZXNzb25CdG4udHN4P2VjNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBpc0xlc3NvbkNvbXBsZXRlZCB9IGZyb20gXCIuLi8uLi91dGlscy9tYWNoaW5lVXRpbHNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VOZXh0TGVzc29uQnRuKHtcbiAgbGVzc29ucyxcbiAgcHJvZ3Jlc3NTZXJ2aWNlLFxuICBjb3Vyc2UsXG59KSB7XG4gIGNvbnN0IGluY29tcGxlTGVzc29ucyA9IGxlc3NvbnNcbiAgICAubWFwKChsZXNzb24pID0+IHtcbiAgICAgIGlmICghaXNMZXNzb25Db21wbGV0ZWQocHJvZ3Jlc3NTZXJ2aWNlLCBgJHtjb3Vyc2V9LyR7bGVzc29uLnNsdWd9YCkpIHtcbiAgICAgICAgcmV0dXJuIGxlc3Nvbi5zbHVnXG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKChsZXNzb24pID0+IGxlc3NvbiAhPT0gdW5kZWZpbmVkKVxuXG4gIGNvbnN0IGJ1dHRvblRleHQgPSAoKSA9PiB7XG4gICAgaWYgKCFpbmNvbXBsZUxlc3NvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gXCJDb3Vyc2UgQ29tcGxldGVkXCJcbiAgICB9XG5cbiAgICBpZiAoaW5jb21wbGVMZXNzb25zLmxlbmd0aCA9PT0gbGVzc29ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBcIlN0YXJ0IENvdXJzZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIk5leHQgTGVzc29uXCJcbiAgICB9XG4gIH1cblxuICBjb25zdCBidXR0b25VUkwgPSAoKSA9PiB7XG4gICAgaWYgKCFpbmNvbXBsZUxlc3NvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gXCIvXCJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke2NvdXJzZX0vJHtpbmNvbXBsZUxlc3NvbnNbMF19YFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yMFwiPlxuICAgICAgPExpbmsgaHJlZj17YnV0dG9uVVJMKCl9PlxuICAgICAgICA8YVxuICAgICAgICAgIGRhdGEtdGVzdD1cIm5leHQtbGVzc29uLWJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC04IHB5LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCBtZDpweS00IG1kOnRleHQtbGcgbWQ6cHgtMTBcIlxuICAgICAgICA+XG4gICAgICAgICAge2J1dHRvblRleHQoKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiTGluayIsImlzTGVzc29uQ29tcGxldGVkIiwiQ291cnNlTmV4dExlc3NvbkJ0biIsImxlc3NvbnMiLCJwcm9ncmVzc1NlcnZpY2UiLCJjb3Vyc2UiLCJpbmNvbXBsZUxlc3NvbnMiLCJtYXAiLCJsZXNzb24iLCJzbHVnIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiYnV0dG9uVGV4dCIsImxlbmd0aCIsImJ1dHRvblVSTCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwiZGF0YS10ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Course/CourseNextLessonBtn.tsx\n"));

/***/ })

}]);