var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
history2fase2();

function mostra() {
    tela.innerHTML = `Chegando no reino Java, todos sentiram o frio da sua presença, você não liga para o medo das pessoas ou o que elas acham de você, seu objetivo é transformar a documentação em goiaba, e as relíquias em frutas azedas para rir da cara dos donos.`;
}

function history2fase2() {
    var escolha9 = "";
    setTimeout(() => {
        escolha9 = prompt(`Faça sua escolha\n 1)Ir para a sala onde guardam a documentação e pregar sua peça\n 2)Ficar invisível e observar o castelo.`)
        while (escolha9 != "1" && escolha9 != "2") {
            escolha9 = prompt(`Faça sua escolha\n 1) Ir para a sala onde guardam a documentação e pregar sua peça\n 2)`)
        }

        if (escolha9 == '2') {
            alerts("Você invisível pelo castelo percebeu que já sabiam do seu objetivo e que tinha um mago te esperando...");
            final2Fase2();
        } else {
            alerts('Você ao chegar na sala teve uma surpresa inesperada...');
            gameOver3();
        }
    }, 5000);
}

function final2Fase2() {
    tela.innerHTML = `O mago com frio resolveu se agasalhar e pediu para um soldado pegar um agasalho para ele, pois ele não iria sair da sala da documentação, pois queria te deter..Com isso você viu a oportunidade de vencer esse mago.. e o melhor, pregando zoando ele!`
    var escolha10 = "";
    setTimeout(() => {
        escolha10 = prompt(`Faça sua escolha\n 1)Transformar o soldado em um lobo feroz.\n 2)Bugar o agasalho do mago para congelar ele ao vestir.`)
        while (escolha10 != "1" && escolha10 != "2") {
            escolha10 = prompt(`Faça sua escolha\n 1)Transformar o soldado em um lobo feroz..\n 2)Bugar o agasalho do mago para congelar ele ao vestir..`)
        }
        if (escolha10 == '1') {
            alerts("O mago ao dar de cara com o lobo se assustou e saiu correndo.. ele tem muito de lobos");
            location = ('../personagem1-historia/Fase3P1.html');
        } else {
            alerts('O mago ao vestir foi congelado, o soldado vendo isso se assustou empurrou o mago que caiu no chão e quebrou-se em pedacinhos.');
            location = ('../personagem1-historia/Fase3P1.html');
        }
    }, 5000);
}

function gameOver3() {
    tela.innerHTML = `Ao chegar na sala, tinha um mago te esperando, pois como você demorou muito tempo zoando os cidadãos e o reino já estava preparado para sua chegada, quem diria que as escrituras tinham tantas informações sobre você e como te vencer.. Então o mago com seus poderes preparados o transformou em uma galinha`
    setTimeout(() => { alerts("E assim após toda maldade feita por ti, agora você é um animal que não voa e caga ovo....FIM!"); }, 5000);
    setTimeout(() => { location = ('../index.html'); }, 20000);
}



