function troca(elementoQueChamou){
    //console.log(elementoQueChamou);
    var textoNovo = elementoQueChamou.value

    var textoAntigo = document.getElementById("textoTrocar")
    

    textoAntigo.innerText = textoNovo
    
}

function trocaAgora(elementoQueChamou){
    //console.log(elementoQueChamou);
    var textoNovo2 = elementoQueChamou.value

    var textoAntigo2 = document.getElementById("textoTrocaAgora")
    

    textoAntigo2.innerText = textoNovo2
    
}

function viraVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "200px"
}

function viraAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "20px"
}