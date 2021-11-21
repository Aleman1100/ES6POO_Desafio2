"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//constructor de cliente y function para impuesto (L9,P6)
//Export hacia el script principal (Solución,P19)
var Clientes = /*#__PURE__*/function () {
  function Clientes(nombre, impuesto) {
    _classCallCheck(this, Clientes);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Clientes, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
    /*metodo function prototype dentro de la clase para el impuesto (L9,P4)
    Formula para impuesto en Desafio*/

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var valorImpuesto = (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
      return console.log("\nPara cliente ".concat(this._nombre, " el impuesto a pagar es ").concat(valorImpuesto));
    }
  }]);

  return Clientes;
}();

exports["default"] = Clientes;