export class ValidaCadena{

    constructor(campo, valor){
        this.campo = campo;
        this.valor = valor;
        this.patron = this.asignaPatron();
        this.mensaje;
    }

    asignaPatron(){
        if(this.campo === 'nombre' || this.campo === 'apellido'){
            this.patron = /^([a-zA-z]\s?)+{3,45}$/;
            this.mansaje = "solo se admite caracteres alfabeticos"
        }else if(this.campo === 'telefono'){
            this.patron = /^\d*[-|\s]*\d$/;
            this.mensaje = "solo se admiten caracteres numericos"
        }
    }
    setTimeout(() => {
        
    },30)
}    

