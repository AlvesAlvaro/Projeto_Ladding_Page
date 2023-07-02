var setadireita = window.document.getElementById("seta-direita")
var setaesquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")


function RolarParaDireita() {
         
    Leonardo.style = "display:none"
    Bruna.style = "display: flex"
    setadireita.style = "display: none"
    setaesquerda.style = "display: flex ; margin-top:50%"


}

function RolarParaEsquerda() {

    Leonardo.style = "display:flex"
    Bruna.style = "display: none"
    setaesquerda.style = "display:none ; margin-top:50%"
    setadireita.style = "display:flex"

}
