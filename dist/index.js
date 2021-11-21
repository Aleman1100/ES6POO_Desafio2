"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Import desde un script especifico (Solución,P18)
//Instanciar los impuestos y luego los clientes, agregando su const iX para el objeto 'impuesto' 
var i1 = new _impuesto["default"](1000, 500);
var c1 = new _clientes["default"]('Alejandro', i1);
var i2 = new _impuesto["default"](2000, 100);
var c2 = new _clientes["default"]('Alejandra', i2);
var i3 = new _impuesto["default"](10000000, 20000);
var c3 = new _clientes["default"]('Aleman', i3);
var todoCliente = [c1, c2, c3];
console.table(todoCliente); //Llamado a la funcion para calcular el impuesto de los clientes.

c1.calcularImpuesto();
c2.calcularImpuesto();
c3.calcularImpuesto();