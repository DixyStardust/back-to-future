"use strict";
//Endpoint mockapi
const url = "https://635777772712d01e14084afe.mockapi.io/usuarios";

let buttonSend = document.getElementById("btnEnviar");
buttonSend.addEventListener("click", addUser);

let tbody = document.getElementById("tbody-dinamico");

//Agrega los datos a del formulario a el API
async function addUser(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let direccion = document.getElementById("direccion").value;
  let cp = document.getElementById("cp").value;

  let usuario = {
    "nombre": nombre,
    "apellido": apellido,
    "email": email,
    "direccion": direccion,
    "cp": cp
  };

  if (nombre != "" && apellido != "" && email != "" && direccion != "" && cp != "") {
    try {
      let res = await fetch(url, {
        "method": "POST",
        "headers": {
          "Content-type": "application/json"
        },
        "body": JSON.stringify(usuario)
      });

      if (res.status == 201) {
        window.location.href = "./show_data.html";
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Tiene los campos vacios");
  }
}
