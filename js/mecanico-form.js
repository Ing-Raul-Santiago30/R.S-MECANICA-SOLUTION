// ingresar datos a la tabla
var tablaMecanico = localStorage.getItem("tablaMecanicoStorage");
tablaMecanico = JSON.parse(tablaMecanico);
if (tablaMecanico == null) {
  var tablaMecanico = [];
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
  var objetoMecanico = JSON.stringify({
    idMecanico: idForm > 0 ? idForm : tablaMecanico.length + 1,
    Nombre: document.getElementById("txtNombre").value,
    Apellido: document.getElementById("txtApellido").value,
    telefono: document.getElementById("txtTelefono").value,
    direccion: document.getElementById("txtDireccion").value,
    email: document.getElementById("txtEmail").value,
    
  });
  console.log(objetoMecanico);

  //editar cliente
  if (idForm > 0) {
    for (const i in tablaMecanico) {
        var varMecanico = JSON.parse(tablaMecanico[i]);
        if (varMecanico.idMecanico == idForm) {
        tablaMecanico[i] = objetoMecanico;
        break;
      }
    }
  } else {
    tablaMecanico.push(objetoMecanico);
  }

  // nuevos pacientes
  //tablaCliente.push(objetoCliente);
  // crear un localstorange para guardar
  localStorage.setItem("tablaMecanicoStorage", JSON.stringify(tablaMecanico));
  swal.fire('CAMBIOS  GUARDADO','','success').then(
    (result)=>{

        window.location.replace("mecanico.html");// para que me retorne al html que quiero 
    }
  );
   // con ese nombre lo guardo y se queda
  //PARA PODER REGRESAR

        }else if(result.isDenied){
            swal.fire('CAMBIOS NO GUARDADO','','info').then(
                (result)=>{
                window.location.replace("mecanico.html");
                }
            )
            
        }
    }

   );
  
}

function cargarPagina() {
  if (idForm > 0) {
    // sacar datos de la fila y ponerlo en el formulario
    for (const i in tablaMecanico) {
      var varMecanico = JSON.parse(tablaMecanico[i]);
      if (varMecanico.idMecanico == idForm) {
        document.getElementById("txtIdMecanico").value = varMecanico.idMecanico;
        document.getElementById("txtNombre").value = varMecanico.Nombre;
        document.getElementById("txtApellido").value = varMecanico.Apellido;
        document.getElementById("txtTelefono").value = varMecanico.telefono;
        document.getElementById("txtDireccion").value = varMecanico.direccion;
        document.getElementById("txtEmail").value = varMecanico.email;
        break; // PARA EVITAR QUE SIGA BUSCANDO
      }
    }
  }
}
