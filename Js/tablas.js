"use strict";

document.addEventListener("DOMContentLoaded", inicioPagina);

function inicioPagina(){

    //dibujo la tabla
    function hacerTabla() {
        let tableBody = document.getElementById('btn-enviar');
        tableBody.innerHTML = "";
        tbEmergencia.forEach(function (e) {
            tableBody.insertRow(-1).innerHTML +=
                `<tr>
                <td>${e.name}</td>
                <td>${e.lastname}</td>
                <td>${e.address}</td>
                <td>${e.postalcode}</td>
            </tr>`;
        });


    }


    function agregar() {
        let name = document.getElementById('nombre').value;
        let lastname = document.getElementById('apellido').value;
        let mail = document.getElementById('email').value;
        let address = document.getElementById('direccion').value;
        let postalcode = document.getElementById('cp').value;
        let botonAgregar = document.getElementById('btn-enviar');
        botonAgregar.addEventListener('click', function(e){
        //defino el arreglo
            let dato = {
                "nombre": name,
                "apellido": lastname,
                "email": mail.value,
                "direccion":address, 
                "cp":postalcode
            };
            hacerTabla();
        
       
        });
        
    }

    addEventListener("load", hacerTabla);
  
    //campos del formulario

    
    
     
    
    
}