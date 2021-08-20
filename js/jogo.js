
var personagem1 = "Bug1";
var personagem2 = "Bug2";
var personagem3 = "Bug3";
//pegando a tela
var tela = document.getElementById("tela")
var bottominicio = document.getElementById("bottominicio")
var intervalo = null;

function alerts(texto) {
    return alert(texto)
}

function inicioJogo() {
    alerts("O mal sempre existiu... e hoje você vai controlá-lo!");

    tela.innerHTML = `<p>Eras a frente, após batalhas e histórias sobre grandes personalidades do reino Java, onde sempre ocorriam boatos de bravos guerreiros que lutaram por seus objetivos, por cura, por destreza, pela família, novos tempos iniciavam, um mal guardado por milênios que nunca foi vencido, nem os maiores guerreiros puderam combater, nem os melhores e maiores reinos sobreviveram a esse mal..</p>
    <p>Em todas as documentações sagradas que percorreram por gerações, todos mencionavam esse mal, um nome assustador, um monstro indomável .... chamado BUG. Apenas 3 letras, mas com um poder absurdo, capaz de destruir todas construções em segundos, todas as leis e todos os reinos, os melhores guerreiros já partiram... </p>
    <p>Chegou a hora dos ultimos tempos..!<p/>`


    bottominicio.style.display = 'none'

    intervalo = setInterval(function () { personagem() }, 6000)

}

function personagem() {

    clearInterval(intervalo)
    alert("Escolha seu personagem")
    var escolha = prompt(`1- ${personagem1} \n 2- ${personagem2} \n 3- ${personagem3}`)
    if (escolha == 1) {
        return location.href ='../personagem1-historia/fase1p1.html'

    } else if (escolha == 2) {
        location = ('../personagem2-historia/fase1p2.html')

    } else if (escolha == 3) {
        location = ('../personagem3-historia/fase1p3.html')

    } else {
        alert("ESCOLHA@@@")
        escolha = prompt("Vai escolher SIM OU NÃO")
        if (escolha !== 1, 2, 3) {
            return (personagem())
        }

    }

}

