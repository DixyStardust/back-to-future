const btnEnviar = document.getElementById('btn-enviar');

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