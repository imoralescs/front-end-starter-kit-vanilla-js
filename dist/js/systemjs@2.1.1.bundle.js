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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/systemjs@2.1.1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/js/systemjs@2.1.1.js":
/*!**********************************!*\
  !*** ./src/js/systemjs@2.1.1.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* eslint-disable */\n\n/*\n* SystemJS 2.1.1\n*/\n(function () {\n  var hasSelf = typeof self !== 'undefined';\n  var envGlobal = hasSelf ? self : global;\n  var baseUrl;\n\n  if (typeof location !== 'undefined') {\n    baseUrl = location.href.split('#')[0].split('?')[0];\n    var lastSepIndex = baseUrl.lastIndexOf('/');\n    if (lastSepIndex !== -1) baseUrl = baseUrl.slice(0, lastSepIndex + 1);\n  }\n\n  var backslashRegEx = /\\\\/g;\n\n  function resolveIfNotPlainOrUrl(relUrl, parentUrl) {\n    if (relUrl.indexOf('\\\\') !== -1) relUrl = relUrl.replace(backslashRegEx, '/'); // protocol-relative\n\n    if (relUrl[0] === '/' && relUrl[1] === '/') {\n      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;\n    } // relative-url\n    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) || relUrl.length === 1 && (relUrl += '/')) || relUrl[0] === '/') {\n        var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1); // Disabled, but these cases will give inconsistent results for deep backtracking\n        //if (parentUrl[parentProtocol.length] !== '/')\n        //  throw new Error('Cannot resolve');\n        // read pathname from parent URL\n        // pathname taken to be part after leading \"/\"\n\n        var pathname;\n\n        if (parentUrl[parentProtocol.length + 1] === '/') {\n          // resolving to a :// so we need to read out the auth and host\n          if (parentProtocol !== 'file:') {\n            pathname = parentUrl.slice(parentProtocol.length + 2);\n            pathname = pathname.slice(pathname.indexOf('/') + 1);\n          } else {\n            pathname = parentUrl.slice(8);\n          }\n        } else {\n          // resolving to :/ so pathname is the /... part\n          pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));\n        }\n\n        if (relUrl[0] === '/') return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl; // join together and split for removal of .. and . segments\n        // looping the string instead of anything fancy for perf reasons\n        // '../../../../../z' resolved to 'x/y' is just 'z'\n\n        var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;\n        var output = [];\n        var segmentIndex = -1;\n\n        for (var i = 0; i < segmented.length; i++) {\n          // busy reading a segment - only terminate on '/'\n          if (segmentIndex !== -1) {\n            if (segmented[i] === '/') {\n              output.push(segmented.slice(segmentIndex, i + 1));\n              segmentIndex = -1;\n            }\n          } // new segment - check if it is relative\n          else if (segmented[i] === '.') {\n              // ../ segment\n              if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {\n                output.pop();\n                i += 2;\n              } // ./ segment\n              else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {\n                  i += 1;\n                } else {\n                  // the start of a new segment as below\n                  segmentIndex = i;\n                }\n            } // it is the start of a new segment\n            else {\n                segmentIndex = i;\n              }\n        } // finish reading out the last segment\n\n\n        if (segmentIndex !== -1) output.push(segmented.slice(segmentIndex));\n        return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');\n      }\n  }\n  /*\n   * Package name maps implementation\n   *\n   * Reduced implementation - only a single scope level is supported\n   * \n   * To make lookups fast we pre-resolve the entire package name map\n   * and then match based on backtracked hash lookups\n   * \n   * path_prefix in scopes not supported\n   * nested scopes not supported\n   */\n\n\n  function resolveUrl(relUrl, parentUrl) {\n    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || relUrl.indexOf(':') !== -1 && relUrl || resolveIfNotPlainOrUrl('./' + relUrl, parentUrl);\n  }\n\n  function createPackageMap(json, baseUrl) {\n    if (json.path_prefix) {\n      baseUrl = resolveUrl(json.path_prefix, baseUrl);\n      if (baseUrl[baseUrl.length - 1] !== '/') baseUrl += '/';\n    }\n\n    var basePackages = json.packages || {};\n    var scopes = {};\n\n    if (json.scopes) {\n      for (var scopeName in json.scopes) {\n        var scope = json.scopes[scopeName];\n        if (scope.path_prefix) throw new Error('Scope path_prefix not currently supported');\n        if (scope.scopes) throw new Error('Nested scopes not currently supported');\n        var resolvedScopeName = resolveUrl(scopeName, baseUrl);\n        if (resolvedScopeName[resolvedScopeName.length - 1] === '/') resolvedScopeName = resolvedScopeName.substr(0, resolvedScopeName.length - 1);\n        scopes[resolvedScopeName] = scope.packages || {};\n      }\n    }\n\n    function getMatch(path, matchObj) {\n      var sepIndex = path.length;\n\n      do {\n        var segment = path.slice(0, sepIndex);\n        if (segment in matchObj) return segment;\n      } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1);\n    }\n\n    function applyPackages(id, packages, baseUrl) {\n      var pkgName = getMatch(id, packages);\n\n      if (pkgName) {\n        var pkg = packages[pkgName];\n\n        if (pkgName === id) {\n          if (typeof pkg === 'string') return resolveUrl(pkg, baseUrl + pkgName + '/');\n          if (!pkg.main) throw new Error('Package ' + pkgName + ' has no main');\n          return resolveUrl((pkg.path ? pkg.path + (pkg.path[pkg.path.length - 1] === '/' ? '' : '/') : pkgName + '/') + pkg.main, baseUrl);\n        } else {\n          return resolveUrl((typeof pkg === 'string' || !pkg.path ? pkgName + '/' : pkg.path + (pkg.path[pkg.path.length - 1] === '/' ? '' : '/')) + id.slice(pkgName.length + 1), baseUrl);\n        }\n      }\n    }\n\n    return function (id, parentUrl) {\n      var scopeName = getMatch(parentUrl, scopes);\n\n      if (scopeName) {\n        var scopePackages = scopes[scopeName];\n        var packageResolution = applyPackages(id, scopePackages, scopeName + '/');\n        if (packageResolution) return packageResolution;\n      }\n\n      return applyPackages(id, basePackages, baseUrl) || throwBare(id, parentUrl);\n    };\n  }\n\n  function throwBare(id, parentUrl) {\n    throw new Error('Unable to resolve bare specifier \"' + id + (parentUrl ? '\" from ' + parentUrl : '\"'));\n  }\n  /*\n   * SystemJS Core\n   * \n   * Provides\n   * - System.import\n   * - System.register support for\n   *     live bindings, function hoisting through circular references,\n   *     reexports, dynamic import, import.meta.url, top-level await\n   * - System.getRegister to get the registration\n   * - Symbol.toStringTag support in Module objects\n   * - Hookable System.createContext to customize import.meta\n   * - System.onload(id, err?) handler for tracing / hot-reloading\n   * \n   * Core comes with no System.prototype.resolve or\n   * System.prototype.instantiate implementations\n   */\n\n\n  var hasSymbol = typeof Symbol !== 'undefined';\n  var toStringTag = hasSymbol && Symbol.toStringTag;\n  var REGISTRY = hasSymbol ? Symbol() : '@';\n\n  function SystemJS() {\n    this[REGISTRY] = {};\n  }\n\n  var systemJSPrototype = SystemJS.prototype;\n\n  systemJSPrototype.import = function (id, parentUrl) {\n    var loader = this;\n    return Promise.resolve(loader.resolve(id, parentUrl)).then(function (id) {\n      var load = getOrCreateLoad(loader, id);\n      return load.C || topLevelLoad(loader, load);\n    });\n  }; // Hookable createContext function -> allowing eg custom import meta\n\n\n  systemJSPrototype.createContext = function (parentId) {\n    return {\n      url: parentId\n    };\n  }; // onLoad(id, err) provided for tracing / hot-reloading\n\n\n  systemJSPrototype.onload = function () {};\n\n  var lastRegister;\n\n  systemJSPrototype.register = function (deps, declare) {\n    lastRegister = [deps, declare];\n  };\n  /*\n   * getRegister provides the last anonymous System.register call\n   */\n\n\n  systemJSPrototype.getRegister = function () {\n    var _lastRegister = lastRegister;\n    lastRegister = undefined;\n    return _lastRegister;\n  };\n\n  function getOrCreateLoad(loader, id, firstParentUrl) {\n    var load = loader[REGISTRY][id];\n    if (load) return load;\n    var importerSetters = [];\n    var ns = Object.create(null);\n    if (toStringTag) Object.defineProperty(ns, toStringTag, {\n      value: 'Module'\n    });\n    var instantiatePromise = Promise.resolve().then(function () {\n      return loader.instantiate(id, firstParentUrl);\n    }).then(function (registration) {\n      if (!registration) throw new Error('Module ' + id + ' did not instantiate');\n\n      function _export(name, value) {\n        // note if we have hoisted exports (including reexports)\n        load.h = true;\n        var changed = false;\n\n        if (_typeof(name) !== 'object') {\n          if (!(name in ns) || ns[name] !== value) {\n            ns[name] = value;\n            changed = true;\n          }\n        } else {\n          for (var p in name) {\n            var _value = name[p];\n\n            if (!(p in ns) || ns[p] !== _value) {\n              ns[p] = _value;\n              changed = true;\n            }\n          }\n        }\n\n        if (changed) for (var i = 0; i < importerSetters.length; i++) {\n          importerSetters[i](ns);\n        }\n        return value;\n      }\n\n      var declared = registration[1](_export, registration[1].length === 2 ? {\n        import: function _import(importId) {\n          return loader.import(importId, id);\n        },\n        meta: loader.createContext(id)\n      } : undefined);\n\n      load.e = declared.execute || function () {};\n\n      return [registration[0], declared.setters || []];\n    });\n    instantiatePromise = instantiatePromise.catch(function (err) {\n      loader.onload(load.id, err);\n      throw err;\n    });\n    var linkPromise = instantiatePromise.then(function (instantiation) {\n      return Promise.all(instantiation[0].map(function (dep, i) {\n        var setter = instantiation[1][i];\n        return Promise.resolve(loader.resolve(dep, id)).then(function (depId) {\n          var depLoad = getOrCreateLoad(loader, depId, id); // depLoad.I may be undefined for already-evaluated\n\n          return Promise.resolve(depLoad.I).then(function () {\n            if (setter) {\n              depLoad.i.push(setter); // only run early setters when there are hoisted exports of that module\n              // the timing works here as pending hoisted export calls will trigger through importerSetters\n\n              if (depLoad.h || !depLoad.I) setter(depLoad.n);\n            }\n\n            return depLoad;\n          });\n        });\n      })).then(function (depLoads) {\n        load.d = depLoads;\n      });\n    }); // disable unhandled rejections\n\n    linkPromise.catch(function () {}); // Captial letter = a promise function\n\n    return load = loader[REGISTRY][id] = {\n      id: id,\n      // importerSetters, the setters functions registered to this dependency\n      // we retain this to add more later\n      i: importerSetters,\n      // module namespace object\n      n: ns,\n      // instantiate\n      I: instantiatePromise,\n      // link\n      L: linkPromise,\n      // whether it has hoisted exports\n      h: false,\n      // On instantiate completion we have populated:\n      // dependency load records\n      d: undefined,\n      // execution function\n      // set to NULL immediately after execution (or on any failure) to indicate execution has happened\n      // in such a case, pC should be used, and pLo, pLi will be emptied\n      e: undefined,\n      // On execution we have populated:\n      // the execution error if any\n      eE: undefined,\n      // in the case of TLA, the execution promise\n      E: undefined,\n      // On execution, pLi, pLo, e cleared\n      // Promise for top-level completion\n      C: undefined\n    };\n  }\n\n  function instantiateAll(loader, load, loaded) {\n    if (!loaded[load.id]) {\n      loaded[load.id] = true; // load.L may be undefined for already-instantiated\n\n      return Promise.resolve(load.L).then(function () {\n        return Promise.all(load.d.map(function (dep) {\n          return instantiateAll(loader, dep, loaded);\n        }));\n      });\n    }\n  }\n\n  function topLevelLoad(loader, load) {\n    return load.C = instantiateAll(loader, load, {}).then(function () {\n      return postOrderExec(loader, load, {});\n    }).then(function () {\n      return load.n;\n    });\n  } // the closest we can get to call(undefined)\n\n\n  var nullContext = Object.freeze(Object.create(null)); // returns a promise if and only if a top-level await subgraph\n  // throws on sync errors\n\n  function postOrderExec(loader, load, seen) {\n    if (seen[load.id]) return;\n    seen[load.id] = true;\n\n    if (!load.e) {\n      if (load.eE) throw load.eE;\n      if (load.E) return load.E;\n      return;\n    } // deps execute first, unless circular\n\n\n    var depLoadPromises;\n    load.d.forEach(function (depLoad) {\n      {\n        try {\n          var depLoadPromise = postOrderExec(loader, depLoad, seen);\n          if (depLoadPromise) (depLoadPromises = depLoadPromises || []).push(depLoadPromise);\n        } catch (err) {\n          loader.onload(load.id, err);\n          throw err;\n        }\n      }\n    });\n\n    if (depLoadPromises) {\n      return Promise.all(depLoadPromises).then(doExec).catch(function (err) {\n        loader.onload(load.id, err);\n        throw err;\n      });\n    }\n\n    return doExec();\n\n    function doExec() {\n      try {\n        var execPromise = load.e.call(nullContext);\n\n        if (execPromise) {\n          execPromise = execPromise.then(function () {\n            load.C = load.n;\n            load.E = null; // indicates completion\n\n            loader.onload(load.id, null);\n          }, function () {\n            loader.onload(load.id, err);\n            throw err;\n          });\n          execPromise.catch(function () {});\n          return load.E = load.E || execPromise;\n        } // (should be a promise, but a minify optimization to leave out Promise.resolve)\n\n\n        load.C = load.n;\n        loader.onload(load.id, null);\n      } catch (err) {\n        loader.onload(load.id, err);\n        load.eE = err;\n        throw err;\n      } finally {\n        load.L = load.I = undefined;\n        load.e = null;\n      }\n    }\n  }\n\n  envGlobal.System = new SystemJS();\n  /*\n   * Supports loading System.register via script tag injection\n   */\n\n  var err$1;\n  if (typeof window !== 'undefined') window.addEventListener('error', function (e) {\n    err$1 = e.error;\n  });\n  var systemRegister = systemJSPrototype.register;\n\n  systemJSPrototype.register = function (deps, declare) {\n    err$1 = undefined;\n    systemRegister.call(this, deps, declare);\n  };\n\n  systemJSPrototype.instantiate = function (url, firstParentUrl) {\n    var loader = this;\n    return new Promise(function (resolve, reject) {\n      var script = document.createElement('script');\n      script.charset = 'utf-8';\n      script.async = true;\n      script.crossOrigin = 'anonymous';\n      script.addEventListener('error', function () {\n        reject(new Error('Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : '')));\n      });\n      script.addEventListener('load', function () {\n        document.head.removeChild(script); // Note URL normalization issues are going to be a careful concern here\n\n        if (err$1) return reject(err$1);else resolve(loader.getRegister());\n      });\n      script.src = url;\n      document.head.appendChild(script);\n    });\n  };\n  /*\n   * Supports loading System.register in workers\n   */\n\n\n  if (hasSelf && typeof importScripts === 'function') systemJSPrototype.instantiate = function (url) {\n    var loader = this;\n    return new Promise(function (resolve, reject) {\n      try {\n        importScripts(url);\n      } catch (e) {\n        reject(e);\n      }\n\n      resolve(loader.getRegister());\n    });\n  };\n  /*\n   * SystemJS global script loading support\n   * Extra for the s.js build only\n   * (Included by default in system.js build)\n   */\n\n  (function (global) {\n    var systemJSPrototype = System.constructor.prototype; // safari unpredictably lists some new globals first or second in object order\n\n    var firstGlobalProp, secondGlobalProp, lastGlobalProp;\n\n    function getGlobalProp() {\n      var cnt = 0;\n      var lastProp;\n\n      for (var p in global) {\n        if (!global.hasOwnProperty(p)) continue;\n        if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp) return p;\n        cnt++;\n        lastProp = p;\n      }\n\n      if (lastProp !== lastGlobalProp) return lastProp;\n    }\n\n    function noteGlobalProps() {\n      // alternatively Object.keys(global).pop()\n      // but this may be faster (pending benchmarks)\n      firstGlobalProp = secondGlobalProp = undefined;\n\n      for (var p in global) {\n        if (!global.hasOwnProperty(p)) continue;\n        if (!firstGlobalProp) firstGlobalProp = p;else if (!secondGlobalProp) secondGlobalProp = p;\n        lastGlobalProp = p;\n      }\n\n      return lastGlobalProp;\n    }\n\n    var impt = systemJSPrototype.import;\n\n    systemJSPrototype.import = function (id, parentUrl) {\n      noteGlobalProps();\n      return impt.call(this, id, parentUrl);\n    };\n\n    var emptyInstantiation = [[], function () {\n      return {};\n    }];\n    var getRegister = systemJSPrototype.getRegister;\n\n    systemJSPrototype.getRegister = function () {\n      var lastRegister = getRegister.call(this);\n      if (lastRegister) return lastRegister; // no registration -> attempt a global detection as difference from snapshot\n      // when multiple globals, we take the global value to be the last defined new global object property\n      // for performance, this will not support multi-version / global collisions as previous SystemJS versions did\n      // note in Edge, deleting and re-adding a global does not change its ordering\n\n      var globalProp = getGlobalProp();\n      if (!globalProp) return emptyInstantiation;\n      var globalExport;\n\n      try {\n        globalExport = global[globalProp];\n      } catch (e) {\n        return emptyInstantiation;\n      }\n\n      return [[], function (_export) {\n        return {\n          execute: function execute() {\n            _export('default', globalExport);\n          }\n        };\n      }];\n    };\n  })(typeof self !== 'undefined' ? self : global);\n  /*\n   * Loads WASM based on file extension detection\n   * Assumes successive instantiate will handle other files\n   */\n\n\n  var instantiate = systemJSPrototype.instantiate;\n\n  systemJSPrototype.instantiate = function (url, parent) {\n    if (url.slice(-5) !== '.wasm') return instantiate.call(this, url, parent);\n    return fetch(url).then(function (res) {\n      if (!res.ok) throw new Error(res.status + ' ' + res.statusText + ' ' + res.url + (parent ? ' loading from ' + parent : ''));\n      if (WebAssembly.compileStreaming) return WebAssembly.compileStreaming(res);\n      return res.arrayBuffer().then(function (buf) {\n        return WebAssembly.compile(buf);\n      });\n    }).then(function (module) {\n      var deps = [];\n      var setters = [];\n      var importObj = {}; // we can only set imports if supported (eg early Safari doesnt support)\n\n      if (WebAssembly.Module.imports) WebAssembly.Module.imports(module).forEach(function (impt) {\n        var key = impt.module;\n        setters.push(function (m) {\n          importObj[key] = m;\n        });\n        if (deps.indexOf(key) === -1) deps.push(key);\n      });\n      return [deps, function (_export) {\n        return {\n          setters: setters,\n          execute: function execute() {\n            return WebAssembly.instantiate(module, importObj).then(function (instance) {\n              _export(instance.exports);\n            });\n          }\n        };\n      }];\n    });\n  };\n  /*\n   * Package name map support for SystemJS\n   * \n   * <script type=\"systemjs-packagemap\">{}</script>\n   * OR\n   * <script type=\"systemjs-packagemap\" src=package.json></script>\n   * \n   * Only supports loading the first package map\n   */\n\n\n  var packageMapPromise, packageMapResolve;\n\n  if (typeof document !== 'undefined') {\n    var scripts = document.getElementsByTagName('script');\n\n    var _loop2 = function _loop2(i) {\n      var script = scripts[i];\n      if (script.type !== 'systemjs-packagemap') return \"continue\";\n\n      if (!script.src) {\n        packageMapResolve = createPackageMap(JSON.parse(script.innerHTML), baseUrl);\n        packageMapPromise = Promise.resolve();\n      } else {\n        packageMapPromise = fetch(script.src).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          packageMapResolve = createPackageMap(json, script.src);\n          packageMapPromise = undefined;\n        }, function () {\n          packageMapResolve = throwBare;\n          packageMapPromise = undefined;\n        });\n      }\n\n      return \"break\";\n    };\n\n    _loop: for (var i = 0; i < scripts.length; i++) {\n      var _ret = _loop2(i);\n\n      switch (_ret) {\n        case \"continue\":\n          continue;\n\n        case \"break\":\n          break _loop;\n      }\n    }\n  }\n\n  if (!packageMapPromise) packageMapResolve = throwBare;\n\n  systemJSPrototype.resolve = function (id, parentUrl) {\n    parentUrl = parentUrl || baseUrl;\n    var resolvedIfNotPlainOrUrl = resolveIfNotPlainOrUrl(id, parentUrl);\n    if (resolvedIfNotPlainOrUrl) return resolvedIfNotPlainOrUrl;\n    if (id.indexOf(':') !== -1) return id; // now just left with plain\n    // (if not package map, packageMapResolve just throws)\n\n    if (packageMapPromise) return packageMapPromise.then(function () {\n      return packageMapResolve(id, parentUrl);\n    });\n    return packageMapResolve(id, parentUrl);\n  };\n\n  systemJSPrototype.get = function (id) {\n    var load = this[REGISTRY][id];\n\n    if (load && load.e === null && !load.E) {\n      if (load.eE) return null;\n      return load.n;\n    }\n  }; // Delete function provided for hot-reloading use cases\n\n\n  systemJSPrototype.delete = function (id) {\n    var load = this.get(id);\n    if (load === undefined) return false; // remove from importerSetters\n    // (release for gc)\n\n    if (load && load.d) load.d.forEach(function (depLoad) {\n      var importerIndex = depLoad.i.indexOf(load);\n      if (importerIndex !== -1) depLoad.i.splice(importerIndex, 1);\n    });\n    return delete this[REGISTRY][id];\n  };\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/js/systemjs@2.1.1.js?");

/***/ })

/******/ });