/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (isMobile);

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
document.querySelector('.wrapper').classList.add('loaded');

function ibg() {
  var ibgs = document.querySelectorAll('.ibg');
  ibgs.forEach(function (value) {
    if (value.querySelector('img')) {
      value.style.cssText = "background-image: url(".concat(value.querySelector('img').getAttribute('src'), ")");
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ibg);

/***/ }),

/***/ "./src/js/basic/webp.js":
/*!******************************!*\
  !*** ./src/js/basic/webp.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/ibg */ "./src/js/basic/ibg.js");
/* harmony import */ var _basic_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/webp */ "./src/js/basic/webp.js");
/* harmony import */ var _basic_webp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_basic_webp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_sections_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sections/header */ "./src/js/modules/sections/header.js");
/* harmony import */ var _modules_spoiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/spoiler */ "./src/js/modules/spoiler.js");
/* harmony import */ var _modules_sections_short_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sections/short_nav */ "./src/js/modules/sections/short_nav.js");
/* harmony import */ var _modules_conections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/conections */ "./src/js/modules/conections.js");
/* harmony import */ var _modules_checkNumInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkNumInputs */ "./src/js/modules/checkNumInputs.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/tab */ "./src/js/modules/tab.js");
/* harmony import */ var _modules_showMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/showMore */ "./src/js/modules/showMore.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_setPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/setPage */ "./src/js/modules/setPage.js");
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/up */ "./src/js/modules/up.js");
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_up__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_checkMobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/checkMobile */ "./src/js/modules/checkMobile.js");

 // import './basic/dynamic_adaptive';
















window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  Object(_modules_checkMobile__WEBPACK_IMPORTED_MODULE_15__["default"])();
  Object(_basic_ibg__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sections_header__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__burger', '.header__menu', '.header__item a');
  Object(_modules_conections__WEBPACK_IMPORTED_MODULE_5__["default"])('.header__contacts a');
  Object(_modules_conections__WEBPACK_IMPORTED_MODULE_5__["default"])('.footer__phone_tel a');
  Object(_modules_spoiler__WEBPACK_IMPORTED_MODULE_3__["default"])('.about__body', '.about__body .about__text', 500);
  Object(_modules_spoiler__WEBPACK_IMPORTED_MODULE_3__["default"])('.answears__body', '.answears__body .answears__text', 767);
  Object(_modules_sections_short_nav__WEBPACK_IMPORTED_MODULE_4__["default"])('.short-nav__column');
  Object(_modules_sections_short_nav__WEBPACK_IMPORTED_MODULE_4__["default"])('.info__text a');
  Object(_modules_setPage__WEBPACK_IMPORTED_MODULE_13__["default"])('.header__item a');
  Object(_modules_setPage__WEBPACK_IMPORTED_MODULE_13__["default"])('.short-nav__btn a');
  Object(_modules_checkNumInputs__WEBPACK_IMPORTED_MODULE_6__["default"])('._no-symbol');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_7__["default"])('._no-num');
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_8__["default"])('[name="phone"]');
  Object(_modules_tab__WEBPACK_IMPORTED_MODULE_9__["default"])('.tab', '.tab__item', '.accessories__slide', '[data-tab]', 'active', 'block', 'flex');
  Object(_modules_tab__WEBPACK_IMPORTED_MODULE_9__["default"])('.tab', '.tab__item', '.galary__slide', null, 'active', 'block');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_11__["default"])('.galary__slide-wrapper', '.modal__wrapper', '.overlay', '.modal__close img', '.modal__more', '.modal__info', '.galary__btn');
  Object(_modules_showMore__WEBPACK_IMPORTED_MODULE_10__["default"])('.galary__slide', '[data-section]', '.galary__slide-wrapper', '.galary__item', 9, 'Завантажити більше');
  Object(_modules_showMore__WEBPACK_IMPORTED_MODULE_10__["default"])('.accessories__slide', '[data-section]', '.accessories__slide-wrapper', '.accessories__slide-wrapper a', 9, 'Завантажити більше');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_12__["default"])('.tab__wrapper', '.tab__item', '.tab__arrow_left', '.tab__arrow_right');
  Object(_basic_ibg__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/checkMobile.js":
/*!***************************************!*\
  !*** ./src/js/modules/checkMobile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");


var checkerMobile = function checkerMobile() {
  if (_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
    document.body.classList.add('_mobile');
  } else {
    document.body.classList.remove('_mobile');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (checkerMobile);

/***/ }),

/***/ "./src/js/modules/checkNumInputs.js":
/*!******************************************!*\
  !*** ./src/js/modules/checkNumInputs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var checkNumInput = function checkNumInput(selector) {
  var numInputs = document.querySelectorAll(selector);
  numInputs.forEach(function (item) {
    item.addEventListener('input', function () {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkNumInput);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var checkTextInputs = function checkTextInputs(selector) {
  var txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(function (input) {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/conections.js":
/*!**************************************!*\
  !*** ./src/js/modules/conections.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");


var conection = function conection(contacts) {
  var tels = document.querySelectorAll(contacts);

  if (_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
    var phone = "tel:+";
    conetions(tels, phone);
  } else {
    var viber = "viber://chat?number=+";
    conetions(tels, viber);
  }

  function conetions(phones, type) {
    phones.forEach(function (tel) {
      if (tel.dataset.tel === 'true') {
        var number = tel.textContent.replace(/\D/g, '');
        tel.setAttribute('href', "".concat(type).concat(number));
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (conection);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mask = function mask(selector) {
  var setCursorPointer = function setCursorPointer(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    var matrix = '+38 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPointer(this.value.length, this);
    }
  }

  var inputs = document.querySelectorAll(selector);
  inputs.forEach(function (input) {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/ibg */ "./src/js/basic/ibg.js");



var modal = function modal(galary__wrapper, modal__wrapper, modal__overlay, modal__close, modal__more, modal__info) {
  var overlay = document.querySelector(modal__overlay),
      close = document.querySelector(modal__close),
      more = document.querySelector(modal__more),
      info = document.querySelector(modal__info),
      triggers = document.querySelectorAll(galary__wrapper),
      //? - 4 контейрена для елементів
  modal = document.querySelector(modal__wrapper); //? - обготка модального вікна для передчі данних

  var wrapperId = null;
  var itemIndex = null;
  var length = null;
  var leftArrow = document.querySelector('.modal__arrow-left'),
      rightArrow = document.querySelector('.modal__arrow-right');
  var clicked = false;

  try {
    var closeModal = function closeModal() {
      overlay.classList.add('animated', 'fadeOut');
      setTimeout(function () {
        overlay.style.display = 'none';
        document.body.style.overflow = "auto";
        document.body.style.marginRight = "0px";
      }, 700);
    };

    var openModal = function openModal(target) {
      if (!target.classList.contains('galary__item')) {
        containModalMobile(target);
      } else {
        containModalDesk(target);
      }

      activateModal();
    };

    var containModalMobile = function containModalMobile(target) {
      var targetWrapper = target.closest('.galary__slide-wrapper');
      var targetItem = target.closest('.galary__item');
      wrapperId = targetWrapper.getAttribute('id');
      itemIndex = Number(targetItem.getAttribute('data-count'));
      changeItem(wrapperId, itemIndex);
    };

    var containModalDesk = function containModalDesk(target) {
      wrapperId = target.parentNode.getAttribute('id');
      itemIndex = Number(target.getAttribute('data-count'));
      changeItem(wrapperId, itemIndex);
    };

    var inputModalData = function inputModalData(_ref, modal) {
      var src = _ref.src,
          source = _ref.source,
          count = _ref.count,
          section = _ref.section;
      modal.querySelector('.modal__img source').setAttribute('srcset', "".concat(source));
      modal.querySelector('.modal__img source').setAttribute('type', "image/webp");
      modal.querySelector('.modal__img img').setAttribute('src', "".concat(src));
      Object(_basic_ibg__WEBPACK_IMPORTED_MODULE_1__["default"])();
      modal.querySelector('.modal__section').textContent = section;
      modal.querySelector('.modal__count').textContent = count;
    };

    var getItemData = function getItemData(item) {
      var img = item.querySelector('.galary__img img').getAttribute('src'),
          source = item.querySelector('.galary__img source').getAttribute('srcset'),
          count = item.querySelector('.galary__counter').textContent,
          section = item.parentNode.previousElementSibling.textContent,
          data = {};
      var newPath = makeNewPath(img, source, '.jpg', '.webp');
      data.src = newPath.img;
      data.source = newPath.source;
      data.count = count;
      data.section = section;
      return data;
    };

    var makeNewPath = function makeNewPath(img, source, typeImg, typeSource) {
      var newSrc = "".concat(img.substr(0, +img.lastIndexOf('-min'))).concat(typeImg);
      var newSource = "".concat(source.substr(0, +source.lastIndexOf('-min'))).concat(typeSource);
      return {
        img: newSrc,
        source: newSource
      };
    };

    var activateModal = function activateModal() {
      overlay.classList.remove('animated', 'fadeOut');
      overlay.classList.add('animated', 'fadeIn');
      overlay.style.display = 'block';
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "".concat(scroll, "px");
    };

    var calcScroll = function calcScroll() {
      var div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    };

    var changeItem = function changeItem(id, index) {
      length = $("#".concat(id, " .galary__item")).length - 1;

      if (index > length) {
        itemIndex = 0;
      } else if (index < 0) {
        itemIndex = length;
      }

      index = itemIndex;
      $("#".concat(id, " .galary__item")).each(function (i, item) {
        if (i === index) {
          var itemData = getItemData(item);
          inputModalData(itemData, modal);
        }
      });
    };

    var scroll = calcScroll();
    triggers.forEach(function (trigger) {
      if (_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
        $(trigger).on('click', '.galary__img', function (e) {
          e.preventDefault();
          openModal(e.target);
        });
      } else {
        $(trigger).on('click', '.galary__item', function (e) {
          e.preventDefault();
          openModal(e.target);
        });
      }
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target === close) {
        closeModal();
      }

      ;
    });
    more.addEventListener('click', function (e) {
      e.preventDefault();

      if (!clicked) {
        more.classList.add('active');
        info.classList.add('active');
        clicked = true;
      } else {
        more.classList.remove('active');
        info.classList.remove('active');
        clicked = false;
      }
    });
    leftArrow.addEventListener('click', function () {
      itemIndex--;
      changeItem(wrapperId, itemIndex);
    });
    rightArrow.addEventListener('click', function () {
      itemIndex++;
      changeItem(wrapperId, itemIndex);
    });
  } catch (error) {}
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/sections/header.js":
/*!*******************************************!*\
  !*** ./src/js/modules/sections/header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var header = function header(header_burger, header_menu, header__items) {
  var burger = document.querySelector(header_burger),
      menu = document.querySelector(header_menu),
      items = document.querySelectorAll(header__items);
  burger.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      menu.classList.remove('active');
      document.body.classList.remove('lock');
    } else {
      burger.classList.add('active');
      menu.classList.add('active');
      document.body.classList.add('lock');
    }
  });
  itemActivity(items);

  function itemActivity(elements) {
    var navigation = window.location.pathname;
    var der = navigation.substring(navigation.length, navigation.lastIndexOf('/') + 1);
    elements.forEach(function (element) {
      if (der === element.dataset.path) {
        elements.forEach(function (element) {
          element.classList.remove('active');
        });
        element.classList.add('active');
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/js/modules/sections/short_nav.js":
/*!**********************************************!*\
  !*** ./src/js/modules/sections/short_nav.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var navigation = function navigation(columns) {
  var wrapper = document.querySelectorAll(columns);
  wrapper.forEach(function (item) {
    item.addEventListener('click', function (e) {
      setSection(item);
      item.querySelector('a').click();
    });
  });

  function setSection(item) {
    console.log(item);
    var section = item.dataset.nav;
    var page = item.dataset.page;
    localStorage.setItem('page', page);

    if (page === 'galary') {
      localStorage.setItem('galary-tab-section', section);
    } else {
      localStorage.setItem('accessories-tab-section', section);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./src/js/modules/setPage.js":
/*!***********************************!*\
  !*** ./src/js/modules/setPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setpage = function setpage(trig) {
  var triggers = document.querySelectorAll(trig);
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      var page = trigger.dataset.page;
      localStorage.setItem('page', page);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setpage);

/***/ }),

/***/ "./src/js/modules/showMore.js":
/*!************************************!*\
  !*** ./src/js/modules/showMore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/ibg */ "./src/js/basic/ibg.js");
/* harmony import */ var _lib_fslightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fslightbox */ "./src/lib/fslightbox.js");




var showMore = function showMore() {
  var btn__trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var tab__slides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var container = arguments.length > 2 ? arguments[2] : undefined;
  var item = arguments.length > 3 ? arguments[3] : undefined;
  var range = arguments.length > 4 ? arguments[4] : undefined;
  var msg = arguments.length > 5 ? arguments[5] : undefined;
  var triggers = document.querySelectorAll(btn__trigger),
      slides = document.querySelectorAll(tab__slides);

  if (triggers.length !== 0) {
    var createItem = function createItem(response, wrap, visible_count) {
      response.forEach(function (_ref, i) {
        var src = _ref.src,
            srcset = _ref.srcset,
            counter = _ref.counter;
        var item = document.createElement('div');
        item.classList.add('galary__item');
        item.setAttribute('data-count', i);

        if (i > visible_count) {
          item.classList.add('hide');
        }

        item.innerHTML = "\n            <div class=\"galary__img\">\n              <picture>\n                <source srcset=\"".concat(srcset, "\" type=\"image/webp\">\n                <img src=\"").concat(src, "\" alt=\"\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457\">\n              </picture>\n            </div>\n            <div class=\"galary__counter\">").concat(counter, "</div>\n          ");
        wrap.appendChild(item);
      });
    };

    var createAccessoriesItem = function createAccessoriesItem(response, wrap, visible_count, key) {
      response.forEach(function (_ref2, i) {
        var src = _ref2.src,
            srcset = _ref2.srcset,
            data = _ref2.data,
            counter = _ref2.counter;
        var item = document.createElement('div');
        item.classList.add('accessories__item', 'accessories__item-art');

        if (wrap.classList.contains('accessories__slide-wrapper-art')) {
          item.innerHTML = "\n              <div class=\"accessories__img accessories__img-art\">\n                <picture>\n                  <source srcset=\"".concat(srcset, "\" type=\"image/webp\">\n                  <img src=\"").concat(src, "\" alt=\"\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457\" data-fancy=\"").concat(data, "\">\n                </picture>\n              </div>\n              <div class=\"accessories__counter\">").concat(counter, "</div>\n            ");
        } else {
          item.innerHTML = "\n            <div class=\"accessories__img\">\n              <picture>\n                <source srcset=\"".concat(srcset, "\" type=\"image/webp\">\n                <img src=\"").concat(src, "\" alt=\"\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457\" data-fancy=\"").concat(data, "\">\n              </picture>\n            </div>\n            <div class=\"accessories__counter\">").concat(counter, "</div>\n          ");
        }

        wrap.appendChild(addLightBox(key, item, i, visible_count));
        refreshFsLightbox();
      });
    };

    var addLightBox = function addLightBox(key, item, i, visible) {
      var href = item.querySelector('img').getAttribute('data-fancy');
      var a = document.createElement('a');

      if (i > visible) {
        a.classList.add('hide');
      }

      a.setAttribute('data-fslightbox', "".concat(key));
      a.setAttribute('href', "".concat(href));
      a.appendChild(item);
      return a;
    };

    var switchSection = function switchSection(res, wrap, section, range) {
      switch (section) {
        case 'single':
          createItem(res.single, wrap, range);
          createMoreBtn(msg, range, wrap, res.single.length);
          break;

        case 'double':
          createItem(res["double"], wrap, range);
          createMoreBtn(msg, range, wrap, res["double"].length);
          break;

        case 'triple':
          createItem(res.triple, wrap, range);
          createMoreBtn(msg, range, wrap, res.triple.length);
          break;

        case 'child':
          createItem(res.child, wrap, range);
          createMoreBtn(msg, range, wrap, res.child.length);
          break;

        case 'art':
          createAccessoriesItem(res.art, wrap, range, 'art');
          createMoreBtn(msg, range, wrap, res.art.length);
          break;

        case 'vase':
          createAccessoriesItem(res.vase, wrap, range, 'vase');
          createMoreBtn(msg, range, wrap, res.vase.length);
          break;

        case 'bronse':
          createAccessoriesItem(res.bronse, wrap, range, 'bronse');
          createMoreBtn(msg, range, wrap, res.bronse.length);
          break;

        case 'inscriptions':
          createAccessoriesItem(res.inscriptions, wrap, range, 'inscription');
          createMoreBtn(msg, range, wrap, res.inscriptions.length);
          break;

        case 'granit':
          createAccessoriesItem(res.granit, wrap, range, 'granit');
          createMoreBtn(msg, range, wrap, res.granit.length);
          break;

        default:
          break;
      }
    };

    var createMoreBtn = function createMoreBtn(msg, range, wrap, length) {
      if (length >= range) {
        var btn = document.createElement('div'),
            span = document.createElement('span');
        span.textContent = msg;
        btn.classList.add('button', 'galary__btn');
        btn.appendChild(span);
        wrap.parentNode.appendChild(btn);
      }
    };

    slides.forEach(function (slide) {
      var wrap = slide.querySelector(container);
      var section = slide.dataset.section;
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('./db.json').then(function (res) {
        switchSection(res, wrap, section, range);
        Object(_basic_ibg__WEBPACK_IMPORTED_MODULE_1__["default"])();
      })["catch"](function (err) {
        return console.log(err);
      });
    });
    triggers.forEach(function (trigger) {
      $(trigger).on('click', '.galary__btn', function (e) {
        e.preventDefault();

        if (e.target.classList.contains('galary__btn') || e.target.parentNode.classList.contains('galary__btn')) {
          var clicked;

          if (!e.target.classList.contains('galary__btn')) {
            clicked = e.target.parentNode;
          } else {
            clicked = e.target;
          }

          var wrapper = clicked.previousElementSibling;
          var items = wrapper.querySelectorAll(item);
          items.forEach(function (item) {
            item.classList.remove('hide');
            item.classList.add('animated', 'fadeIn');
          });
          this.remove();
        }
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showMore);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tabSlider = function tabSlider(tab__wrapper, tab__slides, arrows__left, arrows__right) {
  try {
    var plusSlide = function plusSlide(n) {
      showSlides(slideIndex += n);
    };

    var showSlides = function showSlides() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (document.body.clientWidth <= 900 && document.body.clientWidth > 768) {
        if (n >= slides.length - 1) {
          slideIndex = 1;
        } else if (n <= 0 || n > 1) {
          slideIndex = slides.length;
        }

        slides.forEach(function (slide) {
          slide.style.display = 'block';
        });
        slides[slideIndex - 1].style.display = 'none';
      }

      if (document.body.clientWidth <= 768 && document.body.clientWidth > 490) {
        if (n > slides.length) {
          slideIndex = 2;
        } else if (n < 2) {
          slideIndex = slides.length;
        }

        slides.forEach(function (slide) {
          slide.style.display = 'block';
        });
        slides[slideIndex - 1].style.display = 'none';
        slides[slideIndex - 2].style.display = 'none';
      }

      if (document.body.clientWidth <= 490) {
        if (n >= slides.length + 1) {
          slideIndex = 1;
        } else if (n <= 0) {
          slideIndex = slides.length;
        }

        slides.forEach(function (slide) {
          slide.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block'; // slides[slideIndex - 1].click();
      }
    };

    var activateTabSlider = function activateTabSlider() {
      if (document.body.clientWidth <= 900) {
        if (document.body.clientWidth < 490) {
          slideIndex = 1;
        } else {
          slideIndex = 4;
        }

        showSlides();
        wrapper.style.cssText = "\n            justify-content: space-around;\n          ";
      }
    };

    var wrapper = document.querySelector(tab__wrapper),
        slides = document.querySelectorAll(tab__slides),
        arrL = document.querySelector(arrows__left),
        arrR = document.querySelector(arrows__right);
    var slideIndex = 0;
    activateTabSlider();

    try {
      window.addEventListener('orientationchange', function () {
        if (document.body.clientWidth <= 900) {
          activateTabSlider();
        } else {
          wrapper.style.cssText = "\n            justify-content: space-between;\n          ";
          slides.forEach(function (slide) {
            slide.style.display = 'block';
          });
        }
      });
    } catch (error) {
      console.log(error);
    }

    arrL.addEventListener('click', function () {
      if (document.body.clientWidth <= 768 && document.body.clientWidth > 490) {
        plusSlide(-2);
      } else {
        plusSlide(-1);
      }
    });
    arrR.addEventListener('click', function () {
      if (document.body.clientWidth <= 768 && document.body.clientWidth > 490) {
        plusSlide(2);
      } else {
        plusSlide(1);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tabSlider);

/***/ }),

/***/ "./src/js/modules/spoiler.js":
/*!***********************************!*\
  !*** ./src/js/modules/spoiler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


var spoiler = function spoiler(body, text_container, range) {
  var containers = document.querySelectorAll(text_container);
  var wrappers = document.querySelectorAll(body);

  if (wrappers[0]) {
    var styleChange = function styleChange(container, wrapper) {
      try {
        if (document.body.clientWidth <= range) {
          wrapper.dataset.changed = 'true';

          var nodes = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(container.children);

          nodes.forEach(function (p) {
            if (p.dataset.hide === 'true') {
              p.classList.add('no-display', 'animated');
            }
          });
          createArrow(wrapper);
        }
      } catch (error) {}
    };

    var arrowClick = function arrowClick() {
      var arrows = document.querySelectorAll('.arrow-wrapper');
      var img = document.querySelectorAll('.arrow-img');
      arrows.forEach(function (arrow, i) {
        arrow.addEventListener('click', function (e) {
          e.preventDefault();

          try {
            if (img[i].classList.contains('rotate')) {
              img[i].classList.remove('rotate');
              containers[i].querySelectorAll('[data-hide]').forEach(function (p) {
                p.classList.remove('fadeIn');
                p.classList.add('fadeOut');
                setTimeout(function () {
                  p.classList.add('no-display');
                }, 600);
              });
            } else {
              img[i].classList.add('rotate');
              containers[i].querySelectorAll('[data-hide]').forEach(function (p) {
                p.classList.remove('fadeOut', 'no-display');
                p.classList.add('fadeIn');
              });
            }
          } catch (error) {}
        });
      });
    };

    var clearStyle = function clearStyle(wrapper, container) {
      wrapper.querySelector('.arrow-wrapper').remove();
      container.querySelectorAll('[data-hide]').forEach(function (p) {
        p.classList.remove('no-display', 'animated', 'fadeIn', 'fadeOut');
      });
      wrapper.dataset.changed = 'false';
    };

    var createArrow = function createArrow(wrapper) {
      var div = document.createElement('div');
      div.classList.add('arrow-wrapper');
      var img = document.createElement('img');
      img.classList.add('arrow-img');
      makeStyle(div, img);
      img.setAttribute('src', 'icons/arrow_b.svg');
      img.setAttribute('alt', 'arrow-bottom');
      div.appendChild(img);
      wrapper.appendChild(div);
    };

    var makeStyle = function makeStyle(div, img) {
      div.style.cssText = "\n        width: 22px;\n        height: 9px;\n        margin: 12px auto 8px auto;\n      ";
      img.style.cssText = "\n        width: 100%;\n        transition: 0.5s transform ease;\n      ";
    };

    window.addEventListener('orientationchange', function () {
      window.addEventListener('resize', function () {
        try {
          wrappers.forEach(function (wrapper, i) {
            if (wrapper.dataset.changed === 'true') {
              clearStyle(wrapper, containers[i]);
            }

            styleChange(containers[i], wrapper);

            if (wrappers.length - 1 === i) {
              arrowClick();
            }
          });
        } catch (error) {}
      });
    });
    wrappers.forEach(function (wrapper, i) {
      styleChange(containers[i], wrapper);

      if (wrappers.length - 1 === i) {
        arrowClick();
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (spoiler);

/***/ }),

/***/ "./src/js/modules/tab.js":
/*!*******************************!*\
  !*** ./src/js/modules/tab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tab = function tab(headerSelector, tabSelector) {
  var contentSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var secondSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var activeClass = arguments.length > 4 ? arguments[4] : undefined;
  var display = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'block';
  var secondDisplay = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'block';

  try {
    var header = document.querySelector(headerSelector),
        _tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        secondConent = document.querySelectorAll(secondSelector);

    if (content[0]) {
      var hideTabContent = function hideTabContent() {
        content.forEach(function (item) {
          item.style.display = "none";
          item.classList.remove('animated', 'fadeIn');
        });

        if (secondConent) {
          secondConent.forEach(function (secCont) {
            secCont.style.display = 'none';
            secCont.classList.remove('animated', 'fadeIn');
          });
        }

        if (_tab) {
          _tab.forEach(function (item) {
            item.classList.remove(activeClass);
          });
        }
      };

      var showDefaultTabContent = function showDefaultTabContent() {
        var page = localStorage.getItem('page');

        switch (page) {
          case 'galary':
            setItem('galary-tab-section');
            break;

          case 'accessories':
            setItem('accessories-tab-section');
            break;

          case 'default':
            localStorage.setItem('galary-tab-section', 'single');
            localStorage.setItem('accessories-tab-section', 'art');
            setItem('galary-tab-section');
            setItem('accessories-tab-section');
        }

        if (!page) {
          localStorage.setItem('galary-tab-section', 'single');
          localStorage.setItem('accessories-tab-section', 'art');
          setItem('galary-tab-section');
          setItem('accessories-tab-section');
        }
      };

      var setItem = function setItem(key) {
        var navigate = localStorage.getItem(key);

        _tab.forEach(function (item, i) {
          if (navigate === item.dataset.nav) {
            // hideTabContent();
            _tab[i].click(); // showTabContent(i);

          }
        });
      };

      var showTabContent = function showTabContent() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        console.trace();
        content[i].style.display = display;
        content[i].classList.add('animated', 'fadeIn');

        _tab[i].classList.add(activeClass);

        if (secondConent[i]) {
          secondConent[i].style.display = secondDisplay;
          secondConent[i].classList.add('animated', 'fadeIn');
        }
      };

      header.addEventListener('click', function (e) {
        console.trace();
        var target = e.target;

        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
          _tab.forEach(function (item, i) {
            if (target == item || target.parentNode == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
      hideTabContent();
      showDefaultTabContent();
    }
  } catch (error) {}
};

/* harmony default export */ __webpack_exports__["default"] = (tab);

/***/ }),

/***/ "./src/js/modules/up.js":
/*!******************************!*\
  !*** ./src/js/modules/up.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 500 && $(this).width() >= 1050) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
$("a[href='#up']").on('click', function (e) {
  e.preventDefault();

  var _href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(_href).offset().top + "px"
  });
  return false;
});

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function postData(_x, _x2) {
  return _postData.apply(this, arguments);
}

function _postData() {
  _postData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(api, formData) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(api), {
              method: 'POST',
              body: formData
            });

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.text();

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postData.apply(this, arguments);
}

var getResource = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            res = _context.sent;

            if (res.ok) {
              _context.next = 5;
              break;
            }

            throw new Error("Couldn't fetch ".concat(url, ", status: ").concat(res.status));

          case 5:
            _context.next = 7;
            return res.json();

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getResource(_x3) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/lib/fslightbox.js":
/*!*******************************!*\
  !*** ./src/lib/fslightbox.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

!function (e, t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) && "object" == ( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module))) module.exports = t();else if ("function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) define([], t);else {
    var n = t();

    for (var o in n) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) ? exports : e)[o] = n[o];
    }
  }
}(window, function () {
  return function (e) {
    var t = {};

    function n(o) {
      if (t[o]) return t[o].exports;
      var i = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(o, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var o,
        i = "fslightbox-",
        r = "".concat(i, "styles"),
        s = "".concat(i, "cursor-grabbing"),
        a = "".concat(i, "full-dimension"),
        c = "".concat(i, "flex-centered"),
        l = "".concat(i, "open"),
        u = "".concat(i, "transform-transition"),
        d = "".concat(i, "absoluted"),
        p = "".concat(i, "slide-btn"),
        f = "".concat(p, "-container"),
        h = "".concat(i, "fade-in"),
        m = "".concat(i, "fade-out"),
        g = h + "-strong",
        v = m + "-strong",
        b = "".concat(i, "opacity-"),
        x = "".concat(b, "1"),
        y = "".concat(i, "source");

    function S(e) {
      return (S = "function" == typeof Symbol && "symbol" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) ? function (e) {
        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);
      })(e);
    }

    "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));

    function w(e) {
      var t,
          n = e.props,
          o = 0,
          i = {};
      this.getSourceTypeFromLocalStorageByUrl = function (e) {
        return t[e] ? t[e] : r(e);
      }, this.handleReceivedSourceTypeForUrl = function (e, n) {
        !1 === i[n] && (o--, "invalid" !== e ? i[n] = e : delete i[n], 0 === o && (!function (e, t) {
          for (var n in t) {
            e[n] = t[n];
          }
        }(t, i), localStorage.setItem("fslightbox-types", JSON.stringify(t))));
      };

      var r = function r(e) {
        o++, i[e] = !1;
      };

      n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () {}, this.handleReceivedSourceTypeForUrl = function () {}) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = r);
    }

    function L(e, t, n, o) {
      var i = e.data,
          r = e.elements.sources,
          s = n / o,
          a = 0;

      this.adjustSize = function () {
        if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
        a = o > i.maxSourceHeight ? i.maxSourceHeight : o, c();
      };

      var c = function c() {
        r[t].style.width = a * s + "px", r[t].style.height = a + "px";
      };
    }

    function C(e, t) {
      var n = this,
          o = e.collections.sourceSizers,
          i = e.elements,
          r = i.sourceAnimationWrappers,
          s = i.sourceMainWrappers,
          a = i.sources,
          c = e.resolve;

      function l(e, n) {
        o[t] = c(L, [t, e, n]), o[t].adjustSize();
      }

      this.runActions = function (e, o) {
        a[t].classList.add(x), r[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n.runActions = l;
      };
    }

    function F(e, t) {
      var n,
          o = this,
          i = e.elements.sources,
          r = e.props,
          s = (0, e.resolve)(C, [t]);
      this.handleImageLoad = function (e) {
        var t = e.target,
            n = t.naturalWidth,
            o = t.naturalHeight;
        s.runActions(n, o);
      }, this.handleVideoLoad = function (e) {
        var t = e.target,
            o = t.videoWidth,
            i = t.videoHeight;
        n = !0, s.runActions(o, i);
      }, this.handleNotMetaDatedVideoLoad = function () {
        n || o.handleYoutubeLoad();
      }, this.handleYoutubeLoad = function () {
        var e = 1920,
            t = 1080;
        r.maxYoutubeDimensions && (e = r.maxYoutubeDimensions.width, t = r.maxYoutubeDimensions.height), s.runActions(e, t);
      }, this.handleCustomLoad = function () {
        setTimeout(function () {
          var e = i[t];
          s.runActions(e.offsetWidth, e.offsetHeight);
        });
      };
    }

    function A(e, t, n) {
      var o = e.elements.sources,
          i = e.props.customClasses,
          r = i[t] ? i[t] : "";
      o[t].className = n + " " + r;
    }

    function E(e, t) {
      var n = e.elements.sources,
          o = e.props.customAttributes;

      for (var i in o[t]) {
        n[t].setAttribute(i, o[t][i]);
      }
    }

    function I(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          r = o.sourceAnimationWrappers,
          s = e.props.sources;
      i[t] = document.createElement("img"), A(e, t, y), i[t].src = s[t], i[t].onload = n[t].handleImageLoad, E(e, t), r[t].appendChild(i[t]);
    }

    function T(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          r = o.sourceAnimationWrappers,
          s = e.props,
          a = s.sources,
          c = s.videosPosters;
      i[t] = document.createElement("video"), A(e, t, y), i[t].src = a[t], i[t].onloadedmetadata = function (e) {
        n[t].handleVideoLoad(e);
      }, i[t].controls = !0, E(e, t), c[t] && (i[t].poster = c[t]);
      var l = document.createElement("source");
      l.src = a[t], i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t]);
    }

    function W(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          s = o.sourceAnimationWrappers,
          a = e.props.sources;
      r[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(i, "youtube-iframe")), r[t].src = "https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]), r[t].allowFullscreen = !0, E(e, t), s[t].appendChild(r[t]), n[t].handleYoutubeLoad();
    }

    function N(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          r = o.sourceAnimationWrappers,
          s = e.props.sources;
      i[t] = s[t], A(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), n[t].handleCustomLoad();
    }

    function z(e, t) {
      var n = e.elements,
          o = n.sources,
          r = n.sourceAnimationWrappers,
          s = n.sourceMainWrappers;
      e.props.sources;
      o[t] = document.createElement("div"), o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c), o[t].innerHTML = "Invalid source", r[t].classList.add(g), r[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild);
    }

    function M(e) {
      var t = e.collections,
          n = t.sourceLoadHandlers,
          o = t.sourcesRenderFunctions,
          i = e.core.sourceDisplayFacade,
          r = e.resolve;

      this.runActionsForSourceTypeAndIndex = function (t, s) {
        var a;

        switch ("invalid" !== t && (n[s] = r(F, [s])), t) {
          case "image":
            a = I;
            break;

          case "video":
            a = T;
            break;

          case "youtube":
            a = W;
            break;

          case "custom":
            a = N;
            break;

          default:
            a = z;
        }

        o[s] = function () {
          return a(e, s);
        }, i.displaySourcesWhichShouldBeDisplayed();
      };
    }

    function H() {
      var e,
          t,
          n,
          o = {
        isUrlYoutubeOne: function isUrlYoutubeOne(e) {
          var t = document.createElement("a");
          return t.href = e, "www.youtube.com" === t.hostname;
        },
        getTypeFromResponseContentType: function getTypeFromResponseContentType(e) {
          return e.slice(0, e.indexOf("/"));
        }
      };

      function i() {
        if (4 !== n.readyState) {
          if (2 === n.readyState) {
            var e;

            switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
              case "image":
                e = "image";
                break;

              case "video":
                e = "video";
                break;

              default:
                e = "invalid";
            }

            n.onreadystatechange = null, n.abort(), t(e);
          }
        } else t("invalid");
      }

      this.setUrlToCheck = function (t) {
        e = t;
      }, this.getSourceType = function (r) {
        if (o.isUrlYoutubeOne(e)) return r("youtube");
        t = r, (n = new XMLHttpRequest()).onreadystatechange = i, n.open("GET", e, !0), n.send();
      };
    }

    function k(e, t, n) {
      var o = e.props,
          i = o.types,
          r = o.type,
          s = o.sources,
          a = e.resolve;
      this.getTypeSetByClientForIndex = function (e) {
        var t;
        return i && i[e] ? t = i[e] : r && (t = r), t;
      }, this.retrieveTypeWithXhrForIndex = function (e) {
        var o = a(H);
        o.setUrlToCheck(s[e]), o.getSourceType(function (o) {
          t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
        });
      };
    }

    function O(e, t) {
      var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
          o = e.elements,
          i = o.sourceWrappersContainer,
          r = o.sourceMainWrappers;
      r[t] = document.createElement("div"), r[t].className = "".concat(d, " ").concat(a, " ").concat(c), r[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
      var s = r[t].firstChild;
      n[t] = function () {
        r[t].contains(s) && r[t].removeChild(s);
      }, i.appendChild(r[t]), function (e, t) {
        var n = e.elements,
            o = n.sourceMainWrappers,
            i = n.sourceAnimationWrappers;
        i[t] = document.createElement("div"), o[t].appendChild(i[t]);
      }(e, t);
    }

    function R(e, t, n, o) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
      var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r;
    }

    function D(e, t) {
      var n = document.createElement("div");
      return n.className = "".concat(i, "toolbar-button ").concat(c), n.title = t, e.appendChild(n), n;
    }

    function j(e, t) {
      var n = document.createElement("div");
      n.className = "".concat(i, "toolbar"), t.appendChild(n), function (e, t) {
        var n = e.componentsServices,
            o = e.core.fullscreenToggler,
            i = e.data,
            r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
            s = D(t);
        s.title = "Enter fullscreen";
        var a = R(s, "20px", "0 0 18 18", r);
        n.enterFullscreen = function () {
          i.isFullscreenOpen = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
        }, n.exitFullscreen = function () {
          i.isFullscreenOpen = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", r);
        }, s.onclick = function () {
          i.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen();
        };
      }(e, n), function (e, t) {
        var n = D(t, "Close");
        n.onclick = e.core.lightboxCloser.closeLightbox, R(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
      }(e, n);
    }

    function P(e) {
      var t = e.props.sources,
          n = e.elements.container,
          o = document.createElement("div");
      o.className = "".concat(i, "nav"), n.appendChild(o), j(e, o), t.length > 1 && function (e, t) {
        var n = e.componentsServices,
            o = e.props.sources,
            r = (e.stageIndexes, document.createElement("div"));
        r.className = "".concat(i, "slide-number-container");
        var s = document.createElement("div");
        s.className = c;
        var a = document.createElement("span");

        n.setSlideNumber = function (e) {
          return a.innerHTML = e;
        };

        var l = document.createElement("span");
        l.className = "".concat(i, "slash");
        var u = document.createElement("div");
        u.innerHTML = o.length, r.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(u), t.appendChild(r), setTimeout(function () {
          s.offsetWidth > 55 && (r.style.justifyContent = "flex-start");
        });
      }(e, o);
    }

    function X(e, t) {
      var n = this,
          o = e.elements.sourceMainWrappers,
          i = e.props,
          r = 0;
      this.byValue = function (e) {
        return r = e, n;
      }, this.negative = function () {
        s(-a());
      }, this.zero = function () {
        s(0);
      }, this.positive = function () {
        s(a());
      };

      var s = function s(e) {
        o[t].style.transform = "translateX(".concat(e + r, "px)"), r = 0;
      },
          a = function a() {
        return (1 + i.slideDistance) * innerWidth;
      };
    }

    function B(e, t, n, o) {
      var i = e.elements.container,
          r = n.charAt(0).toUpperCase() + n.slice(1),
          s = document.createElement("div");
      s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(r, " slide"), s.onclick = t, function (e, t) {
        var n = document.createElement("div");
        n.className = "".concat(p, " ").concat(c), R(n, "20px", "0 0 20 20", t), e.appendChild(n);
      }(s, o), i.appendChild(s);
    }

    function U(e, t) {
      var n = e.classList;
      n.contains(t) && n.remove(t);
    }

    function V(e) {
      var t = this,
          n = e.core,
          o = n.eventsDispatcher,
          i = n.fullscreenToggler,
          r = n.globalEventsController,
          s = n.scrollbarRecompensor,
          a = e.data,
          c = e.elements,
          u = e.props,
          d = e.slideSwipingProps;
      this.isLightboxFadingOut = !1, this.runActions = function () {
        t.isLightboxFadingOut = !0, c.container.classList.add(v), r.removeListeners(), u.exitFullscreenOnClose && a.isFullscreenOpen && i.exitFullscreen(), setTimeout(function () {
          t.isLightboxFadingOut = !1, d.isSwiping = !1, c.container.classList.remove(v), document.documentElement.classList.remove(l), s.removeRecompense(), document.body.removeChild(c.container), o.dispatch("onClose");
        }, 220);
      };
    }

    function Y(e) {
      var t,
          n,
          o,
          i = e.collections.sourceMainWrappersTransformers,
          r = e.componentsServices,
          s = e.core,
          a = s.classFacade,
          c = s.slideIndexChanger,
          l = s.sourceDisplayFacade,
          d = s.stageManager,
          p = e.elements.sourceAnimationWrappers,
          f = e.stageIndexes,
          v = (t = function t() {
        a.removeFromEachElementClassIfContains("sourceAnimationWrappers", m);
      }, n = 250, o = [], function () {
        o.push(!0), setTimeout(function () {
          o.pop(), o.length || t();
        }, n);
      });
      c.changeTo = function (e) {
        f.current = e, d.updateStageIndexes(), r.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed();
      }, c.jumpTo = function (e) {
        var t = f.current;
        c.changeTo(e), a.removeFromEachElementClassIfContains("sourceMainWrappers", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), i[e].zero(), setTimeout(function () {
          t !== f.current && i[t].negative();
        }, 220);
      };
    }

    function q(e) {
      return e.touches ? e.touches[0].clientX : e.clientX;
    }

    function _(e) {
      var t = e.core,
          n = t.lightboxCloser,
          o = t.fullscreenToggler,
          i = t.slideChangeFacade;

      this.listener = function (e) {
        switch (e.key) {
          case "Escape":
            n.closeLightbox();
            break;

          case "ArrowLeft":
            i.changeToPrevious();
            break;

          case "ArrowRight":
            i.changeToNext();
            break;

          case "F11":
            e.preventDefault(), o.enterFullscreen();
        }
      };
    }

    function J(e) {
      var t = e.collections.sourceMainWrappersTransformers,
          n = e.elements,
          o = e.slideSwipingProps,
          i = e.stageIndexes;

      this.runActionsForEvent = function (e) {
        var t, a, c;
        n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, a = s, (c = t.classList).contains(a) || c.add(a), o.swipedX = q(e) - o.downClientX, r(i.current, "zero"), void 0 !== i.previous && o.swipedX > 0 ? r(i.previous, "negative") : void 0 !== i.next && o.swipedX < 0 && r(i.next, "positive");
      };

      var r = function r(e, n) {
        t[e].byValue(o.swipedX)[n]();
      };
    }

    function G(e) {
      var t,
          n = e.props.sources,
          o = e.resolve,
          i = e.slideSwipingProps,
          r = o(J),
          s = (t = !1, function () {
        return !t && (t = !0, requestAnimationFrame(function () {
          t = !1;
        }), !0);
      });
      1 === n.length ? this.listener = function () {
        i.swipedX = 1;
      } : this.listener = function (e) {
        i.isSwiping && s() && r.runActionsForEvent(e);
      };
    }

    function $(e) {
      var t = e.collections.sourceMainWrappersTransformers,
          n = e.core.slideIndexChanger,
          o = e.elements.sourceMainWrappers,
          i = e.stageIndexes;
      this.runPositiveSwipedXActions = function () {
        void 0 === i.previous || (r("positive"), n.changeTo(i.previous)), r("zero");
      }, this.runNegativeSwipedXActions = function () {
        void 0 === i.next || (r("negative"), n.changeTo(i.next)), r("zero");
      };

      var r = function r(e) {
        o[i.current].classList.add(u), t[i.current][e]();
      };
    }

    function K(e, t) {
      e.contains(t) && e.removeChild(t);
    }

    function Q(e) {
      var t = e.core.lightboxCloser,
          n = e.elements,
          o = e.resolve,
          i = e.slideSwipingProps,
          r = o($);
      this.runNoSwipeActions = function () {
        K(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isSwiping = !1;
      }, this.runActions = function () {
        i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), K(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), i.isSwiping = !1;
      };
    }

    function Z(e) {
      var t = e.resolve,
          n = e.slideSwipingProps,
          o = t(Q);

      this.listener = function () {
        n.isSwiping && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
      };
    }

    function ee(e) {
      var t, n, o;
      n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) {
        for (var n = 0; n < o[e].length; n++) {
          U(o[e][n], t);
        }
      }, function (e) {
        var t = e.core.eventsDispatcher,
            n = e.props;

        t.dispatch = function (e) {
          n[e] && n[e]();
        };
      }(e), function (e) {
        var t = e.componentsServices,
            n = e.core.fullscreenToggler;
        n.enterFullscreen = function () {
          t.enterFullscreen();
          var e = document.documentElement;
          e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }, n.exitFullscreen = function () {
          t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
        };
      }(e), function (e) {
        var t = e.core,
            n = t.globalEventsController,
            o = t.windowResizeActioner,
            i = e.resolve,
            r = i(_),
            s = i(G),
            a = i(Z);
        n.attachListeners = function () {
          document.addEventListener("mousemove", s.listener), document.addEventListener("touchmove", s.listener, {
            passive: !0
          }), document.addEventListener("mouseup", a.listener), document.addEventListener("touchend", a.listener, {
            passive: !0
          }), addEventListener("resize", o.runActions), document.addEventListener("keydown", r.listener);
        }, n.removeListeners = function () {
          document.removeEventListener("mousemove", s.listener), document.removeEventListener("touchmove", s.listener), document.removeEventListener("mouseup", a.listener), document.removeEventListener("touchend", a.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", r.listener);
        };
      }(e), function (e) {
        var t = e.core.lightboxCloser,
            n = (0, e.resolve)(V);

        t.closeLightbox = function () {
          n.isLightboxFadingOut || n.runActions();
        };
      }(e), ne(e), function (e) {
        var t = e.data,
            n = e.core.scrollbarRecompensor;

        n.addRecompense = function () {
          "complete" === document.readyState ? o() : addEventListener("load", function () {
            o(), n.addRecompense = o;
          });
        };

        var o = function o() {
          document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
        };

        n.removeRecompense = function () {
          document.body.style.removeProperty("margin-right");
        };
      }(e), function (e) {
        var t = e.core,
            n = t.slideChangeFacade,
            o = t.slideIndexChanger,
            i = t.stageManager;
        e.props.sources.length > 1 ? (n.changeToPrevious = function () {
          o.jumpTo(i.getPreviousSlideIndex());
        }, n.changeToNext = function () {
          o.jumpTo(i.getNextSlideIndex());
        }) : (n.changeToPrevious = function () {}, n.changeToNext = function () {});
      }(e), Y(e), function (e) {
        var t = e.core,
            n = t.classFacade,
            o = t.slideSwipingDown,
            i = e.elements.sources,
            r = e.slideSwipingProps,
            s = e.stageIndexes;

        o.listener = function (e) {
          r.isSwiping = !0, r.downClientX = q(e), r.swipedX = 0, "VIDEO" === e.target.tagName || e.touches || e.preventDefault();
          var t = i[s.current];
          t && t.contains(e.target) ? r.isSourceDownEventTarget = !0 : r.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u);
        };
      }(e), function (e) {
        var t = e.collections.sourcesRenderFunctions,
            n = e.core.sourceDisplayFacade,
            o = e.props,
            i = e.stageIndexes;

        function r(e) {
          t[e] && (t[e](), delete t[e]);
        }

        n.displaySourcesWhichShouldBeDisplayed = function () {
          if (o.loadOnlyCurrentSource) r(i.current);else for (var e in i) {
            r(i[e]);
          }
        };
      }(e), function (e) {
        var t = e.stageIndexes,
            n = e.core.stageManager,
            o = e.props.sources.length - 1;
        n.getPreviousSlideIndex = function () {
          return 0 === t.current ? o : t.current - 1;
        }, n.getNextSlideIndex = function () {
          return t.current === o ? 0 : t.current + 1;
        }, n.updateStageIndexes = 0 === o ? function () {} : 1 === o ? function () {
          0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next);
        } : function () {
          t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex();
        }, n.isSourceInStage = o <= 2 ? function () {
          return !0;
        } : function (e) {
          var n = t.current;
          if (0 === n && e === o || n === o && 0 === e) return !0;
          var i = n - e;
          return -1 === i || 0 === i || 1 === i;
        };
      }(e), function (e) {
        var t = e.collections,
            n = t.sourceMainWrappersTransformers,
            o = t.sourceSizers,
            i = e.core.windowResizeActioner,
            r = e.data,
            s = e.elements.sourceMainWrappers,
            a = e.props,
            c = e.stageIndexes;

        i.runActions = function () {
          innerWidth < 992 ? r.maxSourceWidth = innerWidth : r.maxSourceWidth = .9 * innerWidth, r.maxSourceHeight = .9 * innerHeight;

          for (var e = 0; e < a.sources.length; e++) {
            U(s[e], u), e !== c.current && n[e].negative(), o[e] && o[e].adjustSize();
          }
        };
      }(e);
    }

    function te(e) {
      var t = e.core.eventsDispatcher,
          n = e.data,
          o = e.elements,
          r = e.props.sources;
      n.isInitialized = !0, function (e) {
        for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, i = 0; i < n.length; i++) {
          t[i] = o(X, [i]);
        }
      }(e), ee(e), o.container = document.createElement("div"), o.container.className = "".concat(i, "container ").concat(a, " ").concat(g), function (e) {
        var t = e.elements;
        t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d);
      }(e), P(e), function (e) {
        var t = e.core.slideSwipingDown,
            n = e.elements,
            o = e.props.sources;
        n.sourceWrappersContainer = document.createElement("div"), n.sourceWrappersContainer.className = "".concat(d, " ").concat(a), n.container.appendChild(n.sourceWrappersContainer), n.sourceWrappersContainer.addEventListener("mousedown", t.listener), n.sourceWrappersContainer.addEventListener("touchstart", t.listener, {
          passive: !0
        });

        for (var i = 0; i < o.length; i++) {
          O(e, i);
        }
      }(e), r.length > 1 && function (e) {
        var t = e.core.slideChangeFacade;
        B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z");
      }(e), function (e) {
        for (var t = e.props.sources, n = e.resolve, o = n(w), i = n(M), r = n(k, [o, i]), s = 0; s < t.length; s++) {
          if ("string" == typeof t[s]) {
            var a = r.getTypeSetByClientForIndex(s);
            if (a) i.runActionsForSourceTypeAndIndex(a, s);else {
              var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
              c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
            }
          } else i.runActionsForSourceTypeAndIndex("custom", s);
        }
      }(e), t.dispatch("onInit");
    }

    function ne(e) {
      var t = e.collections.sourceMainWrappersTransformers,
          n = e.componentsServices,
          o = e.core,
          i = o.eventsDispatcher,
          r = o.lightboxOpener,
          s = o.globalEventsController,
          a = o.scrollbarRecompensor,
          c = o.sourceDisplayFacade,
          u = o.stageManager,
          d = o.windowResizeActioner,
          p = e.data,
          f = e.elements,
          h = e.stageIndexes;

      r.open = function () {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        h.current = o, p.isInitialized ? i.dispatch("onShow") : te(e), u.updateStageIndexes(), c.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), a.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), i.dispatch("onOpen");
      };
    }

    function oe() {
      var e = localStorage.getItem("fslightbox-scrollbar-width");
      if (e) return e;

      var t = function () {
        var e = document.createElement("div"),
            t = e.style;
        return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e;
      }(),
          n = function () {
        var e = document.createElement("div");
        return e.style.width = "100%", e;
      }();

      document.body.appendChild(t);
      var o = t.offsetWidth;
      t.appendChild(n);
      var i = n.offsetWidth;
      document.body.removeChild(t);
      var r = o - i;
      return localStorage.setItem("fslightbox-scrollbar-width", r.toString()), r;
    }

    function ie(e, t, n) {
      return (ie = re() ? Reflect.construct : function (e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var i = new (Function.bind.apply(e, o))();
        return n && se(i, n.prototype), i;
      }).apply(null, arguments);
    }

    function re() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function se(e, t) {
      return (se = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function ae(e) {
      return function (e) {
        if (Array.isArray(e)) return ce(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return ce(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function ce(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }

      return o;
    }

    function le() {
      for (var e = document.getElementsByTagName("a"), t = function t(_t) {
        if (!e[_t].hasAttribute("data-fslightbox")) return "continue";

        var n = e[_t].getAttribute("data-fslightbox"),
            o = e[_t].getAttribute("href");

        fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox());
        var i = null;
        i = "#" === o.charAt(0) ? document.getElementById(o.substring(1)) : o, fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[_t]);
        var r = fsLightboxInstances[n].props.sources.length - 1;
        e[_t].onclick = function (e) {
          e.preventDefault(), fsLightboxInstances[n].open(r);
        }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");

        for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[_t].attributes, c = fsLightboxInstances[n].props.customAttributes, l = 0; l < a.length; l++) {
          if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
            c[r] || (c[r] = {});
            var u = a[l].name.substr(5);
            c[r][u] = a[l].value;
          }
        }

        function d(o, i) {
          e[_t].hasAttribute(i) && (fsLightboxInstances[n].props[o][r] = e[_t].getAttribute(i));
        }
      }, n = 0; n < e.length; n++) {
        t(n);
      }

      var o = Object.keys(fsLightboxInstances);
      window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    }

    window.FsLightbox = function () {
      var e = this;
      this.props = {
        sources: [],
        customAttributes: [],
        customClasses: [],
        types: [],
        videosPosters: [],
        slideDistance: .3
      }, this.data = {
        isInitialized: !1,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: oe(),
        isFullscreenOpen: !1
      }, this.slideSwipingProps = {
        isSwiping: !1,
        downClientX: null,
        isSourceDownEventTarget: !1,
        swipedX: 0
      }, this.stageIndexes = {}, this.elements = {
        a: [],
        container: null,
        slideSwipingHoverer: null,
        sourceWrappersContainer: null,
        sources: [],
        sourceMainWrappers: [],
        sourceAnimationWrappers: []
      }, this.componentsServices = {
        enterFullscreen: null,
        exitFullscreen: null,
        hideSourceLoaderIfNotYetCollection: [],
        setSlideNumber: function setSlideNumber() {}
      }, this.resolve = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return n.unshift(e), ie(t, ae(n));
      }, this.collections = {
        sourceMainWrappersTransformers: [],
        sourceLoadHandlers: [],
        sourcesRenderFunctions: [],
        sourceSizers: []
      }, this.core = {
        classFacade: {},
        eventsDispatcher: {},
        fullscreenToggler: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxOpener: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        slideSwipingDown: {},
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {}
      }, ne(this), this.open = function (t) {
        return e.core.lightboxOpener.open(t);
      }, this.close = function () {
        return e.core.lightboxCloser.closeLightbox();
      };
    }, window.fsLightboxInstances = {}, le(), window.refreshFsLightbox = function () {
      for (var e in fsLightboxInstances) {
        var t = fsLightboxInstances[e].props;
        fsLightboxInstances[e] = new FsLightbox(), fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = [];
      }

      le();
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=script.js.map