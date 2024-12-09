//import '../css/normalize.css'
//import '../css/styles.css'
import { ValidaCadena } from './class/registro.class';

const campoNombre = document.querySelector(`#nombre`);
const campoApellido = document.querySelector(`#apellido`);
const campoDNI = document.querySelector(`#dni`);
const campoFechaNacimineto = document.querySelector(`#fecha_nac`);
const campoTelefono = document.querySelector(`#telefono`);
const campoCorreo = document.querySelector(`#correo`);
const campoDomicilio = document.querySelector(`#domicilio`);

//  const nombreCompleto = (input) => {
//     const patron = /^([a-zA-z]\s?)+{3,45}$/;
//     const valido = patron.test(input.target.value);

//     if(!patron.test(valido)){
//          alert("el formato es incorrecto, solo se pueden usar caracteres alfabeticos");
//     }else{
//         console.log("nombre valido");
//     }
// }

campoNombre.addEventListener('input', ValidaCadena);
campoApellido.addEventListener('input', ValidaCadena);
campoTelefono.addEventListener('input', ValidaCadena)

function validaCampo(evento){
    const campo = new ValidaCadena(evento.target.id, evento.target.value);
    mensaje(evento);
};

function mensaje(evento){
    const campo = evento.target
    const validaCampo = campo.validity;

    if(validaCampo.tooShort){
        campo.setCustomValidity(`El campo ${evento.target.id.toUpperCase()} requiere ${evento.target.minLength} caracteres como minimo`)
    }else{
        campo.setCustomValidity('');
    }

    campo.reportValidity();
}



