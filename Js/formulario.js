
const btnEnviar = document.getElementById('btn-enviar');

const validar = (e) => {
  
    e.preventDefault();

  const nombreDeUsuario = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');

  if (nombreDeUsuario.value === "") {
    alert("Por favor, escribe tu nombre tu nombre.");
    nombreDeUsuario.focus();
    return false;
  }
  
  if (direcciónEmail.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    direcciónEmail.focus();
    return false;
  }
  
  return true;
}

btnSubmit = document.querySelector('submit')

btnSubmit.addEventListener('click', validar);
