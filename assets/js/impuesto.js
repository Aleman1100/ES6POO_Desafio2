//Export hacia el script principal (Solución,P19)
export default

//constructor de impuesto, con getter y setter (L9,P7)
class Impuesto {
    constructor (monto_bruto_anual, deducciones){
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }

    get monto_bruto_anual (){
        return this._monto_bruto_anual;
    }

    set monto_bruto_anual(nuevo_monto_bruto_anual){
        this._monto_bruto_anual = nuevo_monto_bruto_anual;
    }

    get deducciones (){
        return this._deducciones;
    }

    set deducciones(nuevo_deducciones){
        this._deducciones = nuevo_deducciones;
    }
}