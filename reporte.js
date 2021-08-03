//REPORTE AGREGAR SOLICITUDES
let tipoDeReporte = document.querySelector("#tipoDeReporte");
let tipoDeAsunto = document.querySelector("#tipoDeAsunto");
let areaAsignada = document.querySelector("#areaAsignada");
let prioridad = document.querySelector("#prioridad");
let mensajeReporte = document.querySelector("#mensajeReporte");
let i = 0;

//constructor de reportes
class Reporte {
    constructor(id, tipoDeReporte, tipoDeAsunto, areaAsignada, prioridad, mensajeReporte, status = 'En espera'){
        this.id = id;
        this.tipoDeReporte = tipoDeReporte;
        this.tipoDeAsunto = tipoDeAsunto;
        this.areaAsignada =areaAsignada;
        this.prioridad = prioridad;
        this.mensajeReporte = mensajeReporte;
        this.status = status;
    }
}

//determina activamente elvalor del area asignada al reporte
setInterval(() => {
    if (tipoDeAsunto.value == 'NO PASO MI PAGO') {
        areaAsignada.value = 'FINANZAS';
    } else if (tipoDeAsunto.value == 'SOLICITUD DE TITULACION') {
        areaAsignada.value = 'SERVICIOS ESCOLARES';
    } else if (tipoDeAsunto.value == 'NO PUEDO ENTRAR A LA PLATAFORMA') {
        areaAsignada.value = 'SISTEMAS';
    } else {
        areaAsignada.value = 'AREA NO ASIGNADA';
    }
}, 1);

//Inserta los registros existentes de localstorage al los status de reportes
for(let i = 1; i < localStorage.length; i++){
    let insertTable = document.querySelector(".tablaStatus tbody");
    let tr = document.createElement("tr");
    insertTable.appendChild(tr).innerHTML = `
    <td>${JSON.parse(localStorage.getItem(i)).id}</td>
    <td>${JSON.parse(localStorage.getItem(i)).tipoDeReporte}</td>
    <td>${JSON.parse(localStorage.getItem(i)).tipoDeAsunto}</td>
    <td>${JSON.parse(localStorage.getItem(i)).prioridad}</td>
    <td class="wait">${JSON.parse(localStorage.getItem(i)).status}</td>
    `
}

//agrega un nuevo registro a la tabla y a localstorage
document.querySelector("#btnAddReporte").addEventListener('click', () => {    
    i += 1; 
    let reporte1 = new Reporte (i, tipoDeReporte.value, tipoDeAsunto.value, areaAsignada.value, prioridad.value, mensajeReporte.value);
    let insertTable = document.querySelector(".tablaStatus tbody");
    const tr = document.createElement("tr");
    insertTable.appendChild(tr).innerHTML = `
    <td>${i}</td>
    <td>${reporte1.tipoDeReporte}</td>
    <td>${reporte1.tipoDeAsunto}</td>
    <td>${reporte1.prioridad}</td>
    <td class="wait">${reporte1.status}</td>`
    localStorage.setItem(i, JSON.stringify(reporte1))
})

alert(`Para ingresar a la pagina de control de reportes y ver los que se agregaron solo abre el archivo control.html o en la barra de direcciones modifica la direccion de reporte.html por control.html`)