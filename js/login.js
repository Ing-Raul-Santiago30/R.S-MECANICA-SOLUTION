function login(){ // creamos la funcion que validaremos con el onclick
    let user, password// creamos 2 variables donde se almacenaran los datos 
    user = document.getElementById("usuario").value; // lo recogemos los datos 
    password = document.getElementById("password").value;
     // condicional si el usuario es igual a raul y la contrasena es igual anumero inicio sesion de lo contrario no
    if(user =="raul" && password =="1234"){
        window.location="clientes.html"; // redirige a otra pagina 

    }
    else if(user =="jeffry" && password =="1234"){
        window.location="mecanico.html"; // redirige a otra pagina 

    }else{
        alert("Datos Incorrecto");

    }
}