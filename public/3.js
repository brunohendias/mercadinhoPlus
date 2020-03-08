(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/apiProduto */ "./resources/js/core/apiProduto.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cadastrarProduto',
  data: function data() {
    return {
      produto: {
        nome: '',
        valor: null,
        quantidade: null,
        categoria: '',
        link_image: '',
        descricao: ''
      }
    };
  },
  methods: {
    cadastrarProduto: function cadastrarProduto() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.produto.valor = _this.produto.valor.replace(/\./g, '').replace(',', '.');
                _context.next = 3;
                return _core_apiProduto__WEBPACK_IMPORTED_MODULE_1__["default"].cadastrarProduto(_this.produto).then(function (response) {
                  swal({
                    title: 'Produto cadastrado com suscesso!',
                    icon: 'success'
                  });
                })["catch"](function (err) {
                  var msg = 'Erro ao cadastrar o produto';

                  if (!_this.produto.nome || !_this.produto.valor || !_this.produto.descricao || !_this.produto.quantidade) {
                    msg = "Todos os campos são obrigatorio";
                  }

                  swal({
                    title: msg,
                    icon: 'error'
                  });
                });

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imagemproduto[data-v-9752a2a6] {\n\theight: 320px;\n\twidth: 350px;\n}\n.borderImage[data-v-9752a2a6] {\n\tborder: 1px solid #ddd;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("form", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-4" }, [
        _vm.produto.link_image
          ? _c("img", {
              staticClass: "imagemproduto borderImage",
              attrs: { src: _vm.produto.link_image }
            })
          : _c("p", { staticClass: "text-center" }, [
              _c("strong", [_vm._v("Digite o link no campo Link da imagem")])
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("label", { attrs: { for: "nomeProduto" } }, [
          _c(
            "strong",
            [
              _vm._v("Nome do produto"),
              _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
            ],
            1
          )
        ]),
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6" }, [
            _c("label", { attrs: { for: "valorProduto" } }, [
              _c(
                "strong",
                [
                  _vm._v("Valor do produto"),
                  _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.produto.valor,
                  expression: "produto.valor"
                },
                {
                  name: "mask-decimal",
                  rawName: "v-mask-decimal.br",
                  value: 2,
                  expression: "2",
                  modifiers: { br: true }
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
          _c("div", { staticClass: "col-lg-6" }, [
            _c("label", { attrs: { for: "quantidadeProduto" } }, [
              _c(
                "strong",
                [
                  _vm._v("Quantidade"),
                  _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
                ],
                1
              )
            ]),
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
                onkeypress: "return event.keyCode >= 48 && event.keyCode <= 57 "
              },
              domProps: { value: _vm.produto.quantidade },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.produto, "quantidade", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6" }, [
            _c("label", { attrs: { for: "categoria" } }, [
              _c(
                "strong",
                [
                  _vm._v("Categoria"),
                  _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
                ],
                1
              )
            ]),
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
                  _vm.$set(_vm.produto, "categoria", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-12" }, [
            _c("label", { attrs: { for: "linkImage" } }, [
              _c(
                "strong",
                [
                  _vm._v("Link da imagem"),
                  _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
                ],
                1
              )
            ]),
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
                  _vm.$set(_vm.produto, "link_image", $event.target.value)
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("label", { attrs: { for: "descricaoProduto" } }, [
          _c(
            "strong",
            [
              _vm._v("Descrição do produto"),
              _c("font", { attrs: { color: "#f00" } }, [_vm._v("*")])
            ],
            1
          )
        ]),
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
    ]),
    _vm._v(" "),
    _c("input", {
      staticClass: "btn btn-primary float-right mt-3",
      attrs: { type: "button", value: "Cadastrar" },
      on: {
        click: function($event) {
          return _vm.cadastrarProduto()
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cadastro/cadastrarProduto.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/cadastro/cadastrarProduto.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cadastrarProduto_vue_vue_type_template_id_9752a2a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true& */ "./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true&");
/* harmony import */ var _cadastrarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastrarProduto.vue?vue&type=script&lang=js& */ "./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true& */ "./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cadastrarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cadastrarProduto_vue_vue_type_template_id_9752a2a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cadastrarProduto_vue_vue_type_template_id_9752a2a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9752a2a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cadastro/cadastrarProduto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cadastrarProduto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=style&index=0&id=9752a2a6&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_style_index_0_id_9752a2a6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_template_id_9752a2a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cadastro/cadastrarProduto.vue?vue&type=template&id=9752a2a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_template_id_9752a2a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cadastrarProduto_vue_vue_type_template_id_9752a2a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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