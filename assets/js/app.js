//Funciones drag & drop

function drag(ev) {
    console.log(ev.target.src);
    ev.dataTransfer.setData('text', ev.target.id); //ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR 
}

function permitirDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var image = ev.dataTransfer.getData('text'); //ACA RECUPERAMOS LOS DATOS
    ev.target.appendChild(document.getElementById(image));
}