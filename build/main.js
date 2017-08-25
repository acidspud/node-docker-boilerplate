require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pino__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pino___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pino__);

const l = __WEBPACK_IMPORTED_MODULE_0_pino___default()({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

/* harmony default export */ exports["a"] = l;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_env__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(10);




/* harmony default export */ exports["default"] = new __WEBPACK_IMPORTED_MODULE_1__common_server__["a" /* default */]().router(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */]).listen(process.env.PORT);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_examples_service__ = __webpack_require__(6);

class Controller {
  all(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__services_examples_service__["a" /* default */].all().then(r => res.json(r));
  }

  byId(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__services_examples_service__["a" /* default */].byId(req.params.id).then(r => {
      if (r) {
        res.json(r);
      } else {
        res.status(404).end();
      }
    });
  }

  create(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__services_examples_service__["a" /* default */].create(req.body.name).then(r => res.status(201).location(`/api/v1/examples/${r.id}`).json(r));
  }
}
/* unused harmony export Controller */

/* harmony default export */ exports["a"] = new Controller();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(4);


/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]().post('/', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */].create.bind(__WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */])).get('/', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */].all.bind(__WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */])).get('/:id', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */].byId.bind(__WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */]));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_logger__ = __webpack_require__(0);


let id = 0;
const examples = [{ id: id++, name: 'example 0' }, { id: id++, name: 'example 1' }];

class ExamplesService {
  all() {
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.all()`);
    return Promise.resolve(examples);
  }

  byId(id) {
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.byId(${id})`);
    return this.all().then(r => r[id]);
  }

  create(name) {
    const example = {
      id: id++,
      name
    };

    examples.push(example);
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(example, `${this.constructor.name}.create(${name})`);

    return Promise.resolve(example);
  }
}
/* unused harmony export ExamplesService */


/* harmony default export */ exports["a"] = new ExamplesService();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_os__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie_parser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swagger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logger__ = __webpack_require__(0);









const app = new __WEBPACK_IMPORTED_MODULE_0_express___default.a();

class ExpressServer {
  constructor() {
    const root = __WEBPACK_IMPORTED_MODULE_1_path__["normalize"](`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser__["json"]());
    app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser__["urlencoded"]({
      extended: true
    }));
    app.use(__WEBPACK_IMPORTED_MODULE_5_cookie_parser___default()(process.env.SESSION_SECRET));
    app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(`${root}/public`));
  }

  router(routes) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__swagger__["a" /* default */])(app, routes);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = port => () => __WEBPACK_IMPORTED_MODULE_7__logger__["a" /* default */].info(`up and running in ${"development" || 'development'} @: ${__WEBPACK_IMPORTED_MODULE_4_os__["hostname"]()} on port: ${port}}`);
    __WEBPACK_IMPORTED_MODULE_3_http__["createServer"](app).listen(port, welcome(port));
    return app;
  }
}
/* harmony export (immutable) */ exports["a"] = ExpressServer;

/* WEBPACK VAR INJECTION */}.call(exports, "server/common"))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);


/* harmony default export */ exports["a"] = function (app, routes) {
  __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default()(__WEBPACK_IMPORTED_MODULE_1_path__["join"](__dirname, 'Api.yaml'), app, function (err, middleware) {

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(middleware.metadata());
    app.use(middleware.files({
      // Override the Express App's case-sensitive and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: true,
      apiPath: process.env.SWAGGER_API_SPEC
      // Disable serving the "Api.yaml" file
      // rawFilesPath: false
    }));

    app.use(middleware.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(middleware.CORS(), middleware.validateRequest());

    // Error handler to display the validation error as HTML
    app.use(function (err, req, res, next) {
      res.status(err.status);
      res.send('<h1>' + err.status + ' Error</h1>' + '<pre>' + err.message + '</pre>');
    });

    routes(app);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, "server/common/swagger"))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_controllers_examples_router__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = routes;

function routes(app) {
  app.use('/api/v1/examples', __WEBPACK_IMPORTED_MODULE_0__api_controllers_examples_router__["a" /* default */]);
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("dotenv");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("pino");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("swagger-express-middleware");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }
/******/ ]);
//# sourceMappingURL=main.map