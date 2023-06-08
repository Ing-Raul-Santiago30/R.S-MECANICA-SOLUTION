

var tablaCliente = localStorage.getItem("tablaClienteStorage");
tablaCliente = JSON.parse(tablaCliente);
if(tablaCliente == null){
    var tablaCliente = [];  
 }
listar();
function listar() {
  console.log("Ingresando a Listar.....");

  var dataFila = "";

  if(tablaCliente.length > 0){
    for(const i in tablaCliente){
      var varCliente = JSON.parse(tablaCliente[i]);
      dataFila += "<tr>";
      dataFila += "<td>"+varCliente.idCliente+"</td>";
      dataFila += "<td>"+varCliente.Nombre+"</td>";
      dataFila += "<td>"+varCliente.Apellido+"</td>";
      dataFila += "<td>"+varCliente.direccion+"</td>";
      dataFila += "<td>"+varCliente.email+"</td>";
      dataFila += "<td>"+varCliente.telefono+"</td>";
      dataFila += "<td>"+
                  "<button type = 'button' class='btn btn-warning' onclick='abrirForm("+varCliente.idCliente+")'>EDITAR</button>"+
                  "<button type = 'button' class='btn btn-info' onclick='eliminarItem("+varCliente.idCliente+")'>Eliminar</button>"+
                  "<td>";

      dataFila += "</tr>";
    }
    document.getElementById("dataClientes").innerHTML = dataFila;
  }
  else{
    document.getElementById("dataClientes").innerHTML ="<tr><td colspan='7'>NO HAY DATOS</td></tr>";
  }
}

// comenzar a trabajar con localstore
function abrirForm(idForm) {
  localStorage.setItem("idForm", JSON.stringify(idForm));
  window.location.replace("clientes-form.html");
}
// funcion para agregar el boton eliminar
function eliminarItem (idItem){
  for(const i in tablaCliente){
    var varCliente = JSON.parse(tablaCliente[i]);
    if(varCliente.idCliente == idItem){
      tablaCliente.splice(i,1);
      localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente));
    }
  }
 // llamar o invocar a listar
 listar()
}

