function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("comunidad", ev.target.id);
}

function drop(ev, areaId) {
    // data es el id de la comunidad autónoma
    var data = ev.dataTransfer.getData("comunidad");
    // draggedElement es la comunidad autónoma.
    var draggedElement = document.getElementById(data);
    var area = document.getElementById(areaId + '_map');

    // Obtener las coordenadas del mouse relativas al área
    var mouseX = ev.clientX - area.getBoundingClientRect().left;
    var mouseY = ev.clientY - area.getBoundingClientRect().top;

    // Ajustar las coordenadas del estilo del elemento arrastrado


    if (area.getAttribute('data-comunity') == data) {
        console.log(area.getAttribute('data-comunity'));
        console.log(data);
        draggedElement.style.left = mouseX - (draggedElement.width / 2) + "px";
        draggedElement.style.top = mouseY - (draggedElement.height / 2) + "px";
    }

    else {
        alert('Has fallado.')
    } 
    ev.preventDefault();
}
