//CONTROL GESTIONAR SOLICITUDES


//Inserta los registros existentes de localstorage al controlde reportes
for(let i = 1; i < localStorage.length; i++){
    let insertTable = document.querySelector(".tablaControl tbody");
    let tr = document.createElement("tr");
    insertTable.appendChild(tr).innerHTML = `
    <td>${JSON.parse(localStorage.getItem(i)).id}</td>
    <td>${JSON.parse(localStorage.getItem(i)).tipoDeAsunto}</td>
    <td>${JSON.parse(localStorage.getItem(i)).mensajeReporte}</td>
    <td>${JSON.parse(localStorage.getItem(i)).prioridad}</td>
    <td><button id="btnAccepted" class="accepted btnAccepted">Aceptar</button></td>
    <td><button id="btnRejected" class="rejected btnRejected">Rechazar</button></td>
    <td id="status" class="wait">${JSON.parse(localStorage.getItem(i)).status}</td>
    `
}    


//agrega los eventos para cambiar el estatus de los reportes
const tablaControl = document.querySelector(".tablaControl")
for(let i = 1; i < tablaControl.children[0].children.length; i++){
    tablaControl.children[0].children[i].children[4].addEventListener('click', () => {
        console.log(i)
        tablaControl.children[0].children[i].children[6].style.backgroundColor = '#008f39'
        tablaControl.children[0].children[i].children[6].textContent = 'Aceptado'
    })
    tablaControl.children[0].children[i].children[5].addEventListener('click', () => {
        console.log(i)
        tablaControl.children[0].children[i].children[6].style.backgroundColor = '#cb3234'
        tablaControl.children[0].children[i].children[6].textContent = 'Rechazado'
    })

}