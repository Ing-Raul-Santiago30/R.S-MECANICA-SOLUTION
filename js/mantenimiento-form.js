var tablaMantenimiento = localStorage.getItem("tablaMantenimientoStorage");
tablaMantenimiento = JSON.parse(tablaMantenimiento);
if(tablaMantenimiento == null){
    var tablaMantenimiento = [];
}
var idForm = localStorage.getItem("idForm");
idForm  = JSON.parse(idForm);
if(idForm == null){
    var idForm =0;
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
  var obtTaller = JSON.stringify({
    idMantenimiento: idForm > 0 ? idForm : tablaMantenimiento.length + 1,
    Marca: document.getElementById("txtMarca").value,
    Modelo: document.getElementById("txtModelo").value,
    AÑO: document.getElementById("txtAño").value,
    kilometraje: document.getElementById("txtKilometraje").value,
    Tipo_Mantenimiento: document.getElementById("txtTipo_Mantenimiento").value,
    
  });
  console.log(obtTaller);

  //editar cliente
  if(idForm > 0) {
    for(const i in tablaMantenimiento) {
        var taller = JSON.parse(tablaMantenimiento[i]);
        if (taller.idMantenimiento == idForm){
        tablaMantenimiento[i] = obtTaller;
        break;
      }
    }
  } else {
    tablaMantenimiento.push(obtTaller);
  }

  // nuevos pacientes
  //tablaCliente.push(objetoCliente);
  // crear un localstorange para guardar
  localStorage.setItem("tablaMantenimientoStorage", JSON.stringify(tablaMantenimiento));
  swal.fire('CAMBIOS  GUARDADO','','success').then(
    (result)=>{

        window.location.replace("mantenimiento.html");// para que me retorne al html que quiero 
    }
  );
   // con ese nombre lo guardo y se queda
  //PARA PODER REGRESAR

        }else if(result.isDenied){
            swal.fire('CAMBIOS NO GUARDADO','','info').then(
                (result)=>{
                window.location.replace("mantenimiento.html");
                }
            )
            
        }
    }

   );
  
}

function cargarPagina(){
  if(idForm > 0){
    // sacar datos de la fila y ponerlo en el formulario
    for(const i in tablaMantenimiento) {
      var taller = JSON.parse(tablaMantenimiento[i]);
      if (taller.idMantenimiento == idForm) {
        document.getElementById("txtIdMantenimiento").value = taller.idMantenimiento;
        document.getElementById("txtMarca").value = taller.Marca;
        document.getElementById("txtModelo").value = taller.Modelo;
        document.getElementById("txtAño").value = taller.Año;
        document.getElementById("txtKilometraje").value =taller.kilometraje;
        document.getElementById("txtTipo_Mantenimiento").value = taller.Tipo_Mantenimiento;
        break; // PARA EVITAR QUE SIGA BUSCANDO
      }
    }
  }
    
}