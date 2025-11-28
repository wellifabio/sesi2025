var modal = document.getElementById("meuModal");
var btn = document.getElementById("abrirModal");
var span = document.getElementsByClassName("fechar")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}