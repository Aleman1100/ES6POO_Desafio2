//Import desde un script especifico (Solución,P18)
import Clientes from './clientes.js';
import Impuesto from './impuesto.js';

//Instanciar los impuestos y luego los clientes, agregando su const iX para el objeto 'impuesto' 
const i1 = new Impuesto(1000, 500)
const c1 = new Clientes('Alejandro',i1);

const i2 = new Impuesto(2000, 100)
const c2 = new Clientes('Alejandra',i2);

const i3 = new Impuesto(10000000, 20000)
const c3 = new Clientes('Aleman',i3);

const todoCliente = [c1,c2,c3];

console.table(todoCliente);

//Llamado a la funcion para calcular el impuesto de los clientes.
c1.calcularImpuesto();
c2.calcularImpuesto();
c3.calcularImpuesto();