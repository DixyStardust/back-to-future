document.addEventListener("DOMContenLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(e){
  e.preventDefault();
  let nombreUsuario = document.getElementById('nombre').value;
  if(nombreDeUsuario.length === 0){
    alert("Por favor, escribe tu nombre tu nombre.");
    return;
  }
  this.submit();
}

/*const btnEnviar = document.getElementById('btn-enviar');

const validar = (e) => {
  
    e.preventDefault();

  const nombreDeUsuario = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');

  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre tu nombre.");
    usuario.focus();
    return false;
  }
  
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}

btnSubmit = document.querySelector('[type="submit"]')

btnSubmit.addEventListener('click', validar);
btnEnviar.action*/