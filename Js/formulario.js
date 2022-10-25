"use strict";
document.addEventListener("DOMContentLoaded", inicioPagina);
function inicioPagina() {
  document.getElementById('btn-enviar').addEventListener("click", validar);
  
  function validar(e){
    let name =document.getElementById('nombre').value;
    let lastname = document.getElementById('apellido').value;
    let mail = document.getElementById('email').value;

    if(name === "" || lastname == "" || mail === ""){
      e.preventDefault();
      alert("faltan datos");
    }else{
      return alert("su datos fueron recibidos");
    }
    window.location.href="./show_data.html";
  }
  let form =document.getElementById('formulario');
  form.addEventListener('submit', function(){
    form.reset();
  })
}
  

// let btnEnviar = document.getElementById('btn-enviar');

// let validar = (e) => {
  
//     e.preventDefault();

//   let nombreDeUsuario = document.getElementById('nombre');
//   let apellidoDeUsuario = document.getElementById('apellido');
//   let emailDeUsuario = document.getElementById('email');
//   let direccionDeUsuario = document.getElementById('direccion');
//   let codPostalDeUsuario = document.getElementById('cp');

//   if (nombre.value === "") {
//     alert("Por favor, escribe tu nombre.");
//     nombre.focus();
//     return false;
//   }
  
//   if (apellido.value === "") {
//     alert("Por favor, escribe tu apellido.");
//     apellido.focus();
//     return false;
//   }
//   if (email.value === "") {
//     alert("Por favor, escribe tu correo electrónico");
//     email.focus();
//     return false;
//   }
//   if (direccion.value === "") {
//     alert("Por favor, escribe tu dirección.");
//     direccion.focus();
//     return false;
//   }
//   if (cp.value === "") {
//     alert("Por favor, escribe tu código Postal");
//     cp.focus();
//     return false;
//   }
//   return true;
// }

// btnSubmit = document.querySelector('[type="submit"]')

// btnSubmit.addEventListener('click', validar);
