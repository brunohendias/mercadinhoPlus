(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/listar/listarProduto.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apiProduto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/apiProduto.js */ "./resources/js/core/apiProduto.js");
/* harmony import */ var _shared_modal_modalEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modal/modalEdit */ "./resources/js/components/shared/modal/modalEdit.vue");
/* harmony import */ var _shared_modal_modalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modal/modalInfo */ "./resources/js/components/shared/modal/modalInfo.vue");
/* harmony import */ var _shared_busca_buscaGeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/busca/buscaGeral */ "./resources/js/components/shared/busca/buscaGeral.vue");
/* harmony import */ var epic_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! epic-spinners */ "./node_modules/epic-spinners/src/lib.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'listarProduto',
  components: {
    modalEdit: _shared_modal_modalEdit__WEBPACK_IMPORTED_MODULE_2__["default"],
    modalInfo: _shared_modal_modalInfo__WEBPACK_IMPORTED_MODULE_3__["default"],
    buscaGeral: _shared_busca_buscaGeral__WEBPACK_IMPORTED_MODULE_4__["default"],
    HalfCircleSpinner: epic_spinners__WEBPACK_IMPORTED_MODULE_5__["HalfCircleSpinner"]
  },
  data: function data() {
    return {
      produtos: [],
      idEdit: null,
      idInfo: null,
      nome: '',
      buscando: false
    };
  },
  created: function created() {
    this.buscarProdutos();
  },
  methods: {
    buscarProdutos: function buscarProdutos() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.buscando = true;
                _context.next = 3;
                return _core_apiProduto_js__WEBPACK_IMPORTED_MODULE_1__["default"].listarProdutos().then(function (response) {
                  _this.buscando = false;
                  _this.produtos = response.data;
                })["catch"](function (err) {
                  _this.buscando = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deletarProduto: function deletarProduto(id) {
      var _this2 = this;

      swal({
        title: "Deseja deletar esse produto",
        icon: 'warning',
        buttons: ['não', 'sim']
      }).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(willDelete) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!willDelete) {
                    _context2.next = 3;
                    break;
                  }

                  _context2.next = 3;
                  return _core_apiProduto_js__WEBPACK_IMPORTED_MODULE_1__["default"].deletarProduto(id).then(function (response) {
                    swal({
                      title: "Produto deletado com suscesso",
                      icon: "success"
                    });

                    _this2.buscarProdutos();
                  })["catch"](function (err) {
                    swal({
                      title: "Erro ao deletar o produto",
                      icon: 'error'
                    });
                  });

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    pegaId: function pegaId(id, component) {
      if (component == 'edit') {
        this.idEdit = id;
      } else if (component == 'info') {
        this.idInfo = id;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apiProduto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/apiProduto.js */ "./resources/js/core/apiProduto.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'buscaGeral',
  data: function data() {
    return {
      filtro: {},
      msg: ''
    };
  },
  methods: {
    filtroBusca: function filtroBusca(filtro) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _core_apiProduto_js__WEBPACK_IMPORTED_MODULE_1__["default"].buscaFiltrada(filtro).then(function (response) {
                  var produtos = response.data;

                  if (produtos.length == 0) {
                    _this.msg = "Nenhum produto encontrado";
                  } else if (produtos.length > 0) {
                    _this.msg = "";
                  }

                  _this.$emit('produtos', produtos);
                })["catch"](function (err) {
                  _this.msg = 'Ocorreu algum erro na busca';
                });

              case 2:
                _this.filtro = {};

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/apiProduto */ "./resources/js/core/apiProduto.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modalEdit',
  data: function data() {
    return {
      produto: {}
    };
  },
  props: ['id'],
  watch: {
    id: function id(val) {
      this.editarProduto(val);
    }
  },
  methods: {
    editarProduto: function editarProduto(id) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__["default"].editarProduto(id).then(function (response) {
                  if (response.data != {}) {
                    _this.produto = response.data;
                    _this.nome = response.data.nome;
                  } else if (response.data == {}) {
                    swal({
                      title: 'Produto não encontrado',
                      icon: 'error'
                    });
                  }
                })["catch"](function (error) {
                  swal({
                    title: 'Erro na busca',
                    icon: 'error'
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateProduto: function updateProduto() {
      var _this2 = this;

      var id = this.produto.id;
      var nome = this.nome;
      var msg = 'Realmente quer editar o produto: ' + nome + ' ?';
      swal({
        title: msg,
        icon: 'warning',
        buttons: ['não', 'sim']
      }).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(willChange) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!willChange) {
                    _context2.next = 5;
                    break;
                  }

                  _this2.produto.valor = _this2.produto.valor.replace(/\./g, '').replace(',', '.');
                  console.log(_this2.produto.valor);
                  _context2.next = 5;
                  return _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__["default"].updateProduto(id, _this2.produto).then(function (response) {
                    msg = nome + ' alterado com suscesso!';
                    swal({
                      title: msg,
                      icon: 'success'
                    });

                    _this2.$emit('listar');
                  })["catch"](function (err) {
                    msg = 'Erro ao alterar o produto ' + nome;
                    swal({
                      title: msg,
                      icon: 'error'
                    });
                  });

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/apiProduto */ "./resources/js/core/apiProduto.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modalInfo',
  data: function data() {
    return {
      produto: {}
    };
  },
  props: ['id'],
  watch: {
    id: function id(val) {
      this.infoProduto(val);
    }
  },
  methods: {
    infoProduto: function infoProduto(id) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__["default"].infoProduto(id).then(function (response) {
                  if (response.data != {}) {
                    _this.produto = response.data;
                  } else if (response.data == {}) {
                    swal({
                      title: 'Produto não encontrado',
                      icon: 'warning'
                    });
                  }
                })["catch"](function (error) {
                  swal({
                    title: 'Erro na busca',
                    icon: 'error'
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imagem-icon[data-v-fa761496] {\n\theight: 120px;\n\twidth: 120px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.borderTop {\n\tborder-bottom: 5px solid #777;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imagemproduto[data-v-862b1354] {\n\theight: 320px;\n\twidth: 350px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imageminfo[data-v-68087afa] {\n\theight: 350px;\n\twidth: 370px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./buscaGeral.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=template&id=fa761496&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/listar/listarProduto.vue?vue&type=template&id=fa761496&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("buscaGeral", {
        on: {
          produtos: function($event) {
            _vm.produtos = $event
          }
        }
      }),
      _vm._v(" "),
      _vm.buscando
        ? _c(
            "div",
            [
              _c("half-circle-spinner", {
                staticClass: "m-auto",
                attrs: { color: "#f00" }
              })
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "row" },
            [
              _c("h3", [_vm._v("Editar produtos")]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-dark" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.produtos, function(produto) {
                    return _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [
                        _c("img", {
                          staticClass: "imagem-icon",
                          attrs: { src: produto.link_image }
                        })
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v(_vm._s(produto.nome))
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v(
                          "R$ " + _vm._s(_vm._f("currency")(produto.valor))
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v(_vm._s(produto.quantidade))
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v(_vm._s(produto.categoria))
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              "data-target": "#modal-info",
                              "data-toggle": "modal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.pegaId(produto.id, "info")
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  "https://img.icons8.com/material-rounded/20/000000/information.png"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-warning",
                            attrs: {
                              "data-target": "#modal-edit",
                              "data-toggle": "modal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.pegaId(produto.id, "edit")
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  "https://img.icons8.com/material-outlined/20/000000/edit.png"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.deletarProduto(produto.id)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  "https://img.icons8.com/ios-glyphs/20/000000/trash--v1.png"
                              }
                            })
                          ]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("modalEdit", {
                attrs: { id: _vm.idEdit },
                on: {
                  listar: function($event) {
                    return _vm.buscarProdutos()
                  }
                }
              }),
              _vm._v(" "),
              _c("modalInfo", { attrs: { id: _vm.idInfo } })
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Imagem")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Quantidade")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Categoria")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Info")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Editar")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Excluir")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=template&id=fa04c7fe&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=template&id=fa04c7fe& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row mb-5 p-4 text-light bg-dark borderTop" },
    [
      _c("form", { staticClass: "col-lg-12", attrs: { method: "POST" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row pt-3" }, [
          _c("div", { staticClass: "col-sm-4" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filtro.nome,
                  expression: "filtro.nome"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "nomefiltro" },
              domProps: { value: _vm.filtro.nome },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.filtro, "nome", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filtro.categoria,
                  expression: "filtro.categoria"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "categoriafiltro" },
              domProps: { value: _vm.filtro.categoria },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.filtro, "categoria", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filtro.quantidade,
                  expression: "filtro.quantidade"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "quantidadefiltro" },
              domProps: { value: _vm.filtro.quantidade },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.filtro, "quantidade", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary mt-3",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.filtroBusca(_vm.filtro)
              }
            }
          },
          [_vm._v("buscar")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.msg,
                expression: "msg"
              }
            ],
            staticClass: "mt-3 alert alert-danger"
          },
          [_vm._v(_vm._s(_vm.msg))]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("strong", [_vm._v("Pesquise pela informação ou parte dela")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "nomefiltro" } }, [
      _c("strong", [_vm._v("Nome do produto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "categoriafiltro" } }, [
      _c("strong", [_vm._v("Categoria")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "quantidadefiltro" } }, [
      _c("strong", [_vm._v("Quantidade")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=template&id=862b1354&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalEdit.vue?vue&type=template&id=862b1354&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal fade", attrs: { id: "modal-edit" } }, [
    _c(
      "div",
      { staticClass: "modal-dialog modal-xl", attrs: { role: "document" } },
      [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header bg-dark text-light" }, [
            _c("h4", { staticClass: "modal-title" }, [
              _vm._v("Editar produto")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "close",
                attrs: {
                  type: "button",
                  "data-dismiss": "modal",
                  "aria-label": "Close"
                }
              },
              [
                _c(
                  "font",
                  { attrs: { color: "#fff", "aria-hidden": "true" } },
                  [_vm._v("X")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-4" }, [
                _vm.produto.link_image
                  ? _c("img", {
                      staticClass: "imagemproduto",
                      attrs: { src: _vm.produto.link_image }
                    })
                  : _c("p", { staticClass: "text-center" }, [
                      _c("strong", [
                        _vm._v("Digite o link no campo Link da imagem")
                      ])
                    ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }, [
                _c(
                  "label",
                  { staticClass: "h5", attrs: { for: "nomeProduto" } },
                  [
                    _c(
                      "strong",
                      [
                        _vm._v("Nome do produto"),
                        _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.produto.nome,
                      expression: "produto.nome"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "nomeProduto",
                    placeholder: "Nome do produto",
                    max: "50",
                    maxlength: "50"
                  },
                  domProps: { value: _vm.produto.nome },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.produto, "nome", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c("div", { staticClass: "col-lg-6 mt-2" }, [
                    _c(
                      "label",
                      { staticClass: "h5", attrs: { for: "valorProduto" } },
                      [
                        _c(
                          "strong",
                          [
                            _vm._v("Valor do produto"),
                            _c("font", { attrs: { color: "#f00" } }, [
                              _vm._v("*")
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.produto.valor,
                          expression: "produto.valor"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "valorProduto",
                        placeholder: "00,00",
                        max: "12",
                        maxlength: "12"
                      },
                      domProps: { value: _vm.produto.valor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.produto, "valor", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 mt-2" }, [
                    _c(
                      "label",
                      {
                        staticClass: "h5",
                        attrs: { for: "quantidadeProduto" }
                      },
                      [
                        _c(
                          "strong",
                          [
                            _vm._v("Quantidade"),
                            _c("font", { attrs: { color: "#f00" } }, [
                              _vm._v("*")
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.produto.quantidade,
                          expression: "produto.quantidade"
                        },
                        { name: "mask-number", rawName: "v-mask-number" }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "quantidadeProduto",
                        id: "quantidadeProduto",
                        placeholder: "0",
                        max: "10",
                        maxlength: "10",
                        onkeypress:
                          "return event.keyCode >= 48 && event.keyCode <= 57 "
                      },
                      domProps: { value: _vm.produto.quantidade },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.produto,
                            "quantidade",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 mt-2" }, [
                    _c(
                      "label",
                      { staticClass: "h5", attrs: { for: "categoria" } },
                      [
                        _c(
                          "strong",
                          [
                            _vm._v("Categoria"),
                            _c("font", { attrs: { color: "#f00" } }, [
                              _vm._v("*")
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.produto.categoria,
                          expression: "produto.categoria"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "categoria",
                        id: "categoria",
                        placeholder: "Categoria",
                        maxlength: "25",
                        max: "25"
                      },
                      domProps: { value: _vm.produto.categoria },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.produto,
                            "categoria",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "label",
                      { staticClass: "h5", attrs: { for: "linkImage" } },
                      [
                        _c(
                          "strong",
                          [
                            _vm._v("Link da imagem"),
                            _c("font", { attrs: { color: "#f00" } }, [
                              _vm._v("*")
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.produto.link_image,
                          expression: "produto.link_image"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "linkImage",
                        id: "linkImage",
                        placeholder: "Link",
                        maxlength: "255",
                        max: "255"
                      },
                      domProps: { value: _vm.produto.link_image },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.produto,
                            "link_image",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 mt-2" }, [
                _c(
                  "label",
                  { staticClass: "h5", attrs: { for: "descricaoProduto" } },
                  [
                    _c(
                      "strong",
                      [
                        _vm._v("Descrição do produto"),
                        _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.produto.descricao,
                      expression: "produto.descricao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "descricaoProduto",
                    id: "descricaoProduto",
                    cols: "30",
                    rows: "10"
                  },
                  domProps: { value: _vm.produto.descricao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.produto, "descricao", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button", "data-dismiss": "modal" },
                on: {
                  click: function($event) {
                    return _vm.updateProduto()
                  }
                }
              },
              [_vm._v("Salvar alterações")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=template&id=68087afa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/modal/modalInfo.vue?vue&type=template&id=68087afa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal fade", attrs: { id: "modal-info" } }, [
    _c(
      "div",
      { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
      [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "imageminfo",
                  attrs: {
                    src: _vm.produto.link_image,
                    alt: "Imagem do produto"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.produto.descricao))])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Informações do produto")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [
          _c(
            "a",
            { staticClass: "text-light", attrs: { "data-dismiss": "modal" } },
            [_vm._v("X")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("strong", [_vm._v("Descrição do produto")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/listar/listarProduto.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/listar/listarProduto.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listarProduto_vue_vue_type_template_id_fa761496_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listarProduto.vue?vue&type=template&id=fa761496&scoped=true& */ "./resources/js/components/listar/listarProduto.vue?vue&type=template&id=fa761496&scoped=true&");
/* harmony import */ var _listarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listarProduto.vue?vue&type=script&lang=js& */ "./resources/js/components/listar/listarProduto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true& */ "./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _listarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _listarProduto_vue_vue_type_template_id_fa761496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _listarProduto_vue_vue_type_template_id_fa761496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa761496",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/listar/listarProduto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/listar/listarProduto.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/listar/listarProduto.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./listarProduto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=style&index=0&id=fa761496&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_style_index_0_id_fa761496_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/listar/listarProduto.vue?vue&type=template&id=fa761496&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/listar/listarProduto.vue?vue&type=template&id=fa761496&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_template_id_fa761496_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./listarProduto.vue?vue&type=template&id=fa761496&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/listar/listarProduto.vue?vue&type=template&id=fa761496&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_template_id_fa761496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listarProduto_vue_vue_type_template_id_fa761496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/busca/buscaGeral.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/busca/buscaGeral.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buscaGeral_vue_vue_type_template_id_fa04c7fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscaGeral.vue?vue&type=template&id=fa04c7fe& */ "./resources/js/components/shared/busca/buscaGeral.vue?vue&type=template&id=fa04c7fe&");
/* harmony import */ var _buscaGeral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscaGeral.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/busca/buscaGeral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscaGeral.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _buscaGeral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _buscaGeral_vue_vue_type_template_id_fa04c7fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _buscaGeral_vue_vue_type_template_id_fa04c7fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/busca/buscaGeral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/busca/buscaGeral.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/shared/busca/buscaGeral.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./buscaGeral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./buscaGeral.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/shared/busca/buscaGeral.vue?vue&type=template&id=fa04c7fe&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/shared/busca/buscaGeral.vue?vue&type=template&id=fa04c7fe& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_template_id_fa04c7fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./buscaGeral.vue?vue&type=template&id=fa04c7fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/busca/buscaGeral.vue?vue&type=template&id=fa04c7fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_template_id_fa04c7fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buscaGeral_vue_vue_type_template_id_fa04c7fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/modal/modalEdit.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalEdit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalEdit_vue_vue_type_template_id_862b1354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalEdit.vue?vue&type=template&id=862b1354&scoped=true& */ "./resources/js/components/shared/modal/modalEdit.vue?vue&type=template&id=862b1354&scoped=true&");
/* harmony import */ var _modalEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/modal/modalEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true& */ "./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modalEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalEdit_vue_vue_type_template_id_862b1354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalEdit_vue_vue_type_template_id_862b1354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "862b1354",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/modal/modalEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/modal/modalEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=style&index=0&id=862b1354&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_style_index_0_id_862b1354_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/shared/modal/modalEdit.vue?vue&type=template&id=862b1354&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalEdit.vue?vue&type=template&id=862b1354&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_template_id_862b1354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEdit.vue?vue&type=template&id=862b1354&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalEdit.vue?vue&type=template&id=862b1354&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_template_id_862b1354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEdit_vue_vue_type_template_id_862b1354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/modal/modalInfo.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalInfo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalInfo_vue_vue_type_template_id_68087afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalInfo.vue?vue&type=template&id=68087afa&scoped=true& */ "./resources/js/components/shared/modal/modalInfo.vue?vue&type=template&id=68087afa&scoped=true&");
/* harmony import */ var _modalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/modal/modalInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true& */ "./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalInfo_vue_vue_type_template_id_68087afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalInfo_vue_vue_type_template_id_68087afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68087afa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/modal/modalInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/modal/modalInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=style&index=0&id=68087afa&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_style_index_0_id_68087afa_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/shared/modal/modalInfo.vue?vue&type=template&id=68087afa&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/modal/modalInfo.vue?vue&type=template&id=68087afa&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_template_id_68087afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalInfo.vue?vue&type=template&id=68087afa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/modal/modalInfo.vue?vue&type=template&id=68087afa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_template_id_68087afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalInfo_vue_vue_type_template_id_68087afa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/apiProduto.js":
/*!*****************************************!*\
  !*** ./resources/js/core/apiProduto.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cadastrarProduto: function cadastrarProduto(body) {
    var url = '/cadastroproduto/store';
    return axios.post(url, body);
  },
  listarProdutos: function listarProdutos() {
    var url = '/produtos/listar';
    return axios.get(url);
  },
  buscaFiltrada: function buscaFiltrada(filtro) {
    var url = '/produtos/fill/';
    return axios.post(url, filtro);
  },
  infoProduto: function infoProduto(id) {
    var url = '/produtos/info/' + id;
    return axios.get(url);
  },
  editarProduto: function editarProduto(id) {
    var url = '/produtos/editar/' + id;
    return axios.get(url);
  },
  updateProduto: function updateProduto(id, body) {
    var url = '/produtos/update/' + id;
    return axios.put(url, body);
  },
  deletarProduto: function deletarProduto(id) {
    var url = '/produtos/deletar/' + id;
    return axios["delete"](url);
  }
});

/***/ })

}]);