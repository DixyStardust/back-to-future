/*------------ trae datos desde el api -------------*/
const getUsers = async()=>{
  try { 
    let res = await fetch(url);
    let response = await res.json();
    mostrarTablas(response);
    return response;
  } catch (error) {
      console.log(error);
  }	
}
getUsers();


  /*function mostrarTablaCreada(usuario) { 

  tbody.innerHTML = "";
  usuario.forEach(json.usuario => {
      crearLugar(usuario);
  });
}

function crearLugar(usuario) {

  let row = document.createElement("tr");
  let campos= document.createElement("td");
  let datosIngresados = document.createElement("td");
  campos.innerHTML = usuario.thing.;
  datosIngresados.innerHTML = "";
  row.appendChild(campos);
  row.appendChild(datosIngresados);
  tbody.appendChild(row);
}*/
    