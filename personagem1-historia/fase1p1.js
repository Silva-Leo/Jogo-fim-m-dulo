var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
escolha1();

function mostra() {
    tela.innerHTML = `<img class="persona" src="./bug1.png">`;
}


function escolha1() {
    var choice = "";
    setTimeout(() => {
        tela.innerHTML = "De alguma forma você sai das trevas e da respawn perto de um reino chamado Java e perto de algumas cidades que ficam envolta desse reino"
        choice = prompt(`Faça sua escolha\n 1) Sobrevoar os reinos\n 2)Ir para a cidade mais próxima`)
        while (choice != "1" && choice != "2") {
            choice = prompt(`Faça sua escolha\n 1) Sobrevoar os reinos\n 2)Ir para a cidade mais próxima`)
        }
        if (choice == '1') {
            alerts("Você foi visto sobrevoando os reinos, as pessoas não conseguem entender o que é ainda, mas estão com medo");
            final1Fase1();
        } else {
            alerts('Você se aproximou da cidade de Flexbox, os cidadãos perceberam que você é o temível mal das documentações milenares!!!');
            final1Fase1();
        }
    }, 14000);

}

function final1Fase1() {
    var escolha2 = "";
    tela.innerHTML = `Você foi reconhecido! Eles não sabem mas você não é mal de verdade, tente provar para eles..`
    setTimeout(() => {
        escolha2 = prompt(`Faça sua escolha\n 1) Falar com algum cidadão\n 2)Se esconder para não assustar ninguém`);
        if (escolha2 == '1') {
            alerts("O cidadão ao chegar perto de você bugou e se transformou em um pudim");
            location = ('../personagem1-historia/Fase2P1.html');
        } if (escolha2 == '2') {
            alerts('Você é um ser do mal milenar e se escondeu??? As pessoas ficaram confusas..');
            location = ('../personagem1-historia/Fase2P1.html');
        }
    }, 5000);
}


