let obj = document.querySelectorAll("div.obj")

function aumentarObj(){
    obj.style.transform = "scale(x, y)"
}

obj.addEventListener("mouseover", aumentarObj);

function diminuirObj(){
    obj.style.transform = "none"
}

obj.addEventListener("mouseout", diminuirObj);
