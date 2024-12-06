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

////////////////////////////////////////////////////////////////
/* SCROLL SERVIÇOS */

let scrollServicos = document.querySelector("#servicos");
let containerServicos = document.querySelector("#servicos .scroll-container");
let filhosServicos = Array.from(containerServicos.children);

filhosServicos.forEach(item => {
    let duplicado = item.cloneNode(true);
    containerServicos.appendChild(duplicado);
});


/* SCROLL PROJETOS */

let scrollProjetos = document.querySelector("#projetos");
let containerProjetos = document.querySelector("#projetos .scroll-container");
let filhosProjetos = Array.from(containerProjetos.children);

filhosProjetos.forEach(item => {
    let duplicado = item.cloneNode(true);
    containerProjetos.appendChild(duplicado);
});