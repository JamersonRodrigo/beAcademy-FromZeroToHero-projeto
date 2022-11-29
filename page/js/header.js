

let menuMobile = document.getElementById("header")
let aberto=false



function ativaDesativa(){
    if (aberto ===true){
        menuMobile.classList.remove("ativado")
        aberto=false
    }else if(aberto===false){
        menuMobile.classList.add("ativado")
        aberto=true
    }
}

