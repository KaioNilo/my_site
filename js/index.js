////////////////////////////////////////////////////////////////
/* MENU HAMBURGER */
function clickMenu() {
    let listaMenu = document.getElementById("lista-menu");

    if (listaMenu.style.display == "block") {
        listaMenu.style.display = "none";
    } else {
        listaMenu.style.display = "block";
    }

}


////////////////////////////////////////////////////////////////
/* CARROSEL */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function () {
    nextImg()
}, 4500 /* milissegundos */)

// função para passar imgs
function nextImg() {
    count++;
    if ( count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}