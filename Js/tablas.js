
/*------------ trae datos desde el api -------------*/
const variable = getUsers();
async function getUsers() {
  try { 
    let respuesta = await fetch('https://635777772712d01e14084afe.mockapi.io/usuarios');
    console.log(respuesta);
    if(respuesta.status === 200){
      let response = await respuesta.json();
      mostrarTablas(response);
    }
  } catch (error) {
      console.log(error);
  }	 
}
//llenamos la tabla 
 function mostrarTablas(variable) {   
  let tableBody = document.getElementById('tbody-dinamico');
  variable.forEach(usuario => {
    tableBody.insertRow(-1).innerHTML +=
     `
      <tr>
      <td>${usuario.id}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.email}</td>
      <td>${usuario.direccion}</td>
      <td>${usuario.cp}</td>
      </tr>
    `;
  });
    
}



    