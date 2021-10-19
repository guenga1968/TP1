const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    mensaje: /^[a-zA-Z0-9\s]{4,200}$/,
    texto: /^[a-zA-Z0-9\s]{4,25}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,16}$/
}

const campos= {
    nombre: false,
    apellido: false,
    direccion: false,
    ciudad: false,
    telefono:false,
    email:false,
    mensaje:false

}
const validarFormulario = (e) => {

    switch (e.target.name) {
    case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case"apellido":
        validarCampo(expresiones.nombre, e.target, 'apellido');
        break;

        case"direccion":
        validarCampo(expresiones.texto, e.target, 'direccion');
        break;

        case"ciudad":
        validarCampo(expresiones.texto, e.target, 'ciudad');
        break;

        case"email":
        validarCampo(expresiones.correo, e.target, 'email');
        break;

        case"telefono":
        validarCampo(expresiones.telefono, e.target, 'telefono');
        break;

        case"mensaje":
        validarCampo(expresiones.mensaje, e.target, 'mensaje');
        break;
    }
};

const validarCampo =(expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = false;
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    if(campos.nombre && campos.apellido && campos.direccion && campos.ciudad && campos.telefono && campos.email && campos.mensaje) {
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let mensaje = document.getElementById('mensaje').value;
        formulario.reset();
        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito-activo');
        
        setTimeout(() => {
            document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito-activo');
            window.location.href = 'show_data.html?nombre='+ nombre + '&apellido='+apellido +'&mensaje='+ mensaje;
        }, 3000);

     
    }
    else {
        
        document.getElementById('mensaje_error').classList.add('formulario_mensaje_error-activo');
        setTimeout(() => {
            document.getElementById('mensaje_error').classList.remove('formulario_mensaje_error-activo');
        }, 2000);
    }
   
});