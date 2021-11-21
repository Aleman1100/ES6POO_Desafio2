//Export hacia el script principal (Solución,P19)
export default

//constructor de cliente y function para impuesto (L9,P6)
class Clientes {
    constructor (nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

/*metodo function prototype dentro de la clase para el impuesto (L9,P4)
Formula para impuesto en Desafio*/
    calcularImpuesto(){
        let valorImpuesto = ((this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21)
        return console.log(`\nPara cliente ${this._nombre} el impuesto a pagar es ${valorImpuesto}`)
    }
}
