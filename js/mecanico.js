var tablaMecanico = localStorage.getItem("tablaMecanicoStorage");
tablaMecanico = JSON.parse(tablaMecanico);
if(tablaMecanico == null){
    var tablaMecanico = [];  
 }
listar();
function listar() {
  console.log("Ingresando a Listar.....");

  var dataFila = "";

  if(tablaMecanico.length > 0){
    for(const i in tablaMecanico){
      var varMecanico = JSON.parse(tablaMecanico[i]);
      dataFila += "<tr>";
      dataFila += "<td>"+varMecanico.idMecanico+"</td>";
      dataFila += "<td>"+varMecanico.Nombre+"</td>";
      dataFila += "<td>"+varMecanico.Apellido+"</td>";
      dataFila += "<td>"+varMecanico.direccion+"</td>";
      dataFila += "<td>"+varMecanico.email+"</td>";
      dataFila += "<td>"+varMecanico.telefono+"</td>";
      dataFila += "<td>"+
                  "<button type = 'button' class='btn btn-warning' onclick='abrirForm("+varMecanico.idMecanico+")'>EDITAR</button>"+
                  "<button type = 'button' class='btn btn-info' onclick='eliminarItem("+varMecanico.idMecanico+")'>Eliminar</button>"+
                  "<td>";

      dataFila += "</tr>";
    }
    document.getElementById("dataMecanicos").innerHTML = dataFila;
  }
  else{
    document.getElementById("dataMecanicos").innerHTML ="<tr><td colspan='7'>NO HAY DATOS</td></tr>";
  }
}

// comenzar a trabajar con localstore
function abrirForm(idForm) {
  localStorage.setItem("idForm", JSON.stringify(idForm));
  window.location.replace("mecanico-form.html");
}
// funcion para agregar el boton eliminar
function eliminarItem (idItem){
  for(const i in tablaMecanico){
    var varMecanico = JSON.parse(tablaMecanico[i]);
    if(varMecanico.idMecanico == idItem){
      tablaMecanico.splice(i,1);
      localStorage.setItem("tablaMecanicoStorage", JSON.stringify(tablaMecanico));
    }
  }
 // llamar o invocar a listar
 listar()
}

