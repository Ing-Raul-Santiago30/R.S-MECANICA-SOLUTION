var tablaMantenimiento = localStorage.getItem("tablaMantenimientoStorage");
tablaMantenimiento = JSON.parse(tablaMantenimiento);
if(tablaMantenimiento == null){
    var tablaMantenimiento = [];
}
listar();

function listar(){
    console.log("ingresando a listar");
    var dataFila = "";
    if(tablaMantenimiento.length > 0){
        for(const i in tablaMantenimiento){
            let taller = JSON.parse(tablaMantenimiento[i]);
            dataFila += "<tr>";
            dataFila += "<td>" +taller.idMantenimiento+"</td>";
            dataFila += "<td>" +taller.Marca+"</td>";
            dataFila += "<td>" +taller.Modelo+"</td>";
            dataFila += "<td>" +taller.AÑO+"</td>";
            dataFila += "<td>" +taller.Kilometraje+"</td>";
            dataFila += "<td>" +taller.Tipo_Mantenimiento+"</td>";
            dataFila += "<td>" +
                        "<button type = 'button' class='btn btn-warning'onclick='abrirForm("+taller.idMantenimiento+")'>EDITAR</button>"+
                        "<button type = 'button' class='btn btn-info' onclick='eliminarItem("+taller.idMantenimiento+")'>Eliminar</button>"+
                        "<td>";
            dataFila += "</tr>";    
        }
        document.getElementById("dataMantenimiento").innerHTML=dataFila;
    }
    else{
        document.getElementById("dataMantenimiento").innerHTML = "<tr><td colspan='7'>NO HAY DATOS</td></tr>";
    }
}
function abrirForm(idForm){
    localStorage.setItem("idForm",JSON.stringify(idForm));
    window.location.replace("mantenimiento-form.html");

}
// funcion para agregar el boton elimiar 
function eliminarItem(idItem){
    for(const i in tablaMantenimiento){
        var taller = JSON.parse(tablaMantenimiento[i]);
        if(taller.idMantenimiento == idItem){
            tablaMantenimiento.splice(i,1);
            localStorage.setItem("tablaMantenimientoStorage",JSON.stringify(tablaMantenimiento));
        }
    }
    listar();
}
