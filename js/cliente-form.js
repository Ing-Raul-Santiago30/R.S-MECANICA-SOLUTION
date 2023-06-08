// ingresar datos a la tabla
var tablaCliente = localStorage.getItem("tablaClienteStorage");
tablaCliente = JSON.parse(tablaCliente);
if (tablaCliente == null) {
  var tablaCliente = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
  var idForm = 0;
}
cargarPagina();

function guardar() {
   swal.fire({
    title: "GUARDAR",
    html: "DESEAS GUARDAR LOS CAMBIOS?",
    showDenyButton: true,
    confirmButtonText: "SI",
    denyButtonText: "NO"
   }).then(
    (result) =>{
        if(result.isConfirmed){
            console.log("PRESIONO GUARDAR..");
  var objetoCliente = JSON.stringify({
    idCliente: idForm > 0 ? idForm : tablaCliente.length + 1,
    Nombre: document.getElementById("txtNombre").value,
    Apellido: document.getElementById("txtApellido").value,
    telefono: document.getElementById("txtTelefono").value,
    direccion: document.getElementById("txtDireccion").value,
    email: document.getElementById("txtEmail").value,
    
  });
  console.log(objetoCliente);

  //editar cliente
  if (idForm > 0) {
    for (const i in tablaCliente) {
        var varCliente = JSON.parse(tablaCliente[i]);
        if (varCliente.idCliente == idForm) {
        tablaCliente[i] = objetoCliente;
        break;
      }
    }
  } else {
    tablaCliente.push(objetoCliente);
  }

  // nuevos pacientes
  //tablaCliente.push(objetoCliente);
  // crear un localstorange para guardar
  localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente));
  swal.fire('CAMBIOS  GUARDADO','','success').then(
    (result)=>{

        window.location.replace("clientes.html");// para que me retorne al html que quiero 
    }
  );
   // con ese nombre lo guardo y se queda
  //PARA PODER REGRESAR

        }else if(result.isDenied){
            swal.fire('CAMBIOS NO GUARDADO','','info').then(
                (result)=>{
                window.location.replace("clientes.html");
                }
            )
            
        }
    }

   );
  
}

function cargarPagina() {
  if (idForm > 0) {
    // sacar datos de la fila y ponerlo en el formulario
    for (const i in tablaCliente) {
      var varCliente = JSON.parse(tablaCliente[i]);
      if (varCliente.idCliente == idForm) {
        document.getElementById("txtIdCliente").value = varCliente.idCliente;
        document.getElementById("txtNombre").value = varCliente.Nombre;
        document.getElementById("txtApellido").value = varCliente.Apellido;
        document.getElementById("txtTelefono").value = varCliente.telefono;
        document.getElementById("txtDireccion").value = varCliente.direccion;
        document.getElementById("txtEmail").value = varCliente.email;
        break; // PARA EVITAR QUE SIGA BUSCANDO
      }
    }
  }
}
