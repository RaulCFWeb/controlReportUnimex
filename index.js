class Alumno{
    constructor(nombre, matricula, contrasenia){
        this.nombre = nombre;
        this.matricula = matricula;
        this.contrasenia = contrasenia;
    }
}
alumno1 = new Alumno('Raul Cruz','alumno1','123');


//INDEX INGRESO
const ingresoIndex = () => {
    matriculaIndex = document.querySelector("#matriculaIndex");
    contraseniaIndex = document.querySelector("#contraseniaIndex");
    if (matriculaIndex.value != alumno1.matricula || contraseniaIndex.value != alumno1.contrasenia) {
        messageIndex = document.querySelector(".messageIndex")
        messageIndex.style.display = "block";
        messageIndex.textContent = 'Datos incorrectos, ingresalos nuevamente'
    } else {
        window.location = "reporte.html"
    }
}
document.querySelector("#btnIngresar").addEventListener('click', ingresoIndex)



alert(`Para ingresar a pagina de agregar solicitudes las credenciales son:
La matricula es: alumno1 
y la contraseña es: 123`)