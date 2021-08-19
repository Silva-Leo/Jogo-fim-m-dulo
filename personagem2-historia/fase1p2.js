var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
fase1Escolha2();

function mostra() {
    tela.innerHTML = `<img class="persona" src="./bug2.png">`;
}

function fase1Escolha2() {
    var escolha7 = "";
    setTimeout(() => {
        tela.innerHTML = "De alguma forma você sai das trevas e da respawn perto de um reino chamado Java e perto de algumas cidades que ficam envolta desse reino"
        escolha7 = prompt(`Faça sua escolha\n 1) Sobrevoar os reinos\n 2)Ir para a cidade mais próxima`)
        while (escolha7 != "1" && escolha7 != "2") {
            escolha7 = prompt(`Faça sua escolha\n 1) Sobrevoar os reinos\n 2)Ir para a cidade mais próxima`)
        }
        if (escolha7 == '1') {
            alerts("As pessoas viram uma sombra enorme sobrevoando a cidade, o clima ficou frio");
            final2Fase1();
        } else {
            alerts('Você vai para a cidade mais populosa com o objetivo de pegar a documentação milenar e transformar tudo em goiaba.');
            final2Fase1();
        }
    }, 14000);

}

function final2Fase1() {
    var escolha8 = "";
    tela.innerHTML = `Seu objetivo após milhares de anos é destruir todas as relíquias dos reinos...melhor transformar elas em goiaba, por qual motivo você quer fazer isso..?
    Você quer sempre pregar uma peça nos outros, fazer essa maldade te alimenta e te deixa mais forte!`
    setTimeout(() => {
        escolha8 = prompt(`Faça sua escolha\n 1)Ir para o reino Java e pregar sua peça\n 2)Pregar uma peça em alguem próximo a você nesse momento`);
        if (escolha8 == '1') {
            alerts("Aproveitando que você já está indo para o reino, você já tem a idéia de destruir a documentação milenar.");
            location = ('../personagem1-historia/Fase2P1.html');
        } else {
            alerts('Você vê um aldeão se escondendo atrás das vacas no pasto, ele percebeu sua presença e ficou com medo, você buga as vacas dele para ao inves de dar leite, elas deêm suco de goiaba, e após você decide ir para o castelo da documentação milenar');
            location = ('../personagem1-historia/Fase2P1.html');
        }
    }, 5000);
}


