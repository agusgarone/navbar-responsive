document.querySelector(".boton").onclick = function() {deslizamiento()};

function deslizamiento() {
    document.querySelector('.links').classList.toggle("linkact");
}
deslizamiento();