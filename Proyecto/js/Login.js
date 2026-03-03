document.addEventListener("DOMContentLoaded",()=>{
    const boton = document.getElementById("btnIngresar");
    boton.addEventListener("click",()=>{
        let usuario = document.getElementById("usuario").value;
        let password = document.getElementById("password").value;
        if(usuario === "Yo" && password === "1414"){
            alert("Login Exitoso");
            window.location.href = "index.html";
        }else{
            alert("Usuarios o contraseña invalidos");
        }
    });
});
