var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
history3fase2();

function mostra() {
    tela.innerHTML = `O bug é rápido, sem demora.. chega e desarruma tudo, buga tudo e no final ninguém sabe o que aconteceu, essa é a sensação no ar, o pouco ar que resta no calabolço, porém parece que os humanos tem uma carta na manga..`;
}

function history3fase2() {
    var escolha15 = "";
    setTimeout(() => {
        escolha15 = prompt(`Faça sua escolha\n 1)Encarar a relíquia e destruir ela\n 2)Já que não tem ninguém olhando...comemorar dançando que você chegou ao seu objetivo.`)
        while (escolha15 != "1" && escolha15 != "2") {
            escolha15 = prompt(`Faça sua escolha\n 1) Ir para a sala onde guardam a documentação e pregar sua peça\n 2)`)
        }

        if (escolha15 == '2') {
            alerts("Algo acontece e você fica congelado...que coisa não!");
            final3Fase2();
        } else {
            alerts('É então, destruiu tudo..');
            gameOver4();
        }
    }, 5000);
}

function final3Fase2() {
    tela.innerHTML = `Jura que um ser milenar maléfico e tudo mais começou a dançar bem nessa hora...Enfim...No passado, após as aventuras e batalhas no coliseu, foi forjado um encantamento novo, fora das documentações e registros, pois ele era o próprio registro da humanidade, e a salvação contra o inimigo na sua forma mais forte.. o Wikipédia.. (sim Wikipédia mesmo) mas esse encantamento precisava de 1 minuto para fazer efeito após você entrar na sala.. Você curte dançar mesmo ..nossa..`
    var escolha16 = "";
    setTimeout(() => {
        escolha16 = prompt(`Faça sua escolha\n 1)Você reconhece que está preso que nem os humanos e propõe  um acordo com eles aos gritos.\n 2)Chama seus crash´s para tentar te libertar desse encantamento.`)
        while (escolha16 != "1" && escolha16 != "2") {
            escolha16 = prompt(`Faça sua escolha\n 1)Você reconhece que está preso que nem os humanos e propõe  um acordo com eles aos gritos.\n 2)Chama seus crash´s para tentar te libertar desse encantamento.`)
        }
        if (escolha16 == '1') {
            alerts("Aos gritos eles ouvem, e pedem a libertação do mago porque só ele usa esse encantamento");
            location = ('../personagem1-historia/Fase3P1.html');
        } else {
            alerts('Os crash´s quebram pois o encantamento tem algo que pode vencer o bug e tudo que é relacionado...');
            location = ('../personagem1-historia/Fase3P1.html');
        }
    }, 5000);
}

function gameOver4() {
    tela.innerHTML = `Os humanos tinham deixado um encantamento atrás da documentação, mas como precisava de um minuto para poder fazer efeito, você foi mais rápido e destruiu tudo, seu objetivo foi concluído, toda essa maldade te deixa mais forte, agora você é o único ser poderoso dos reinos, todos tem medo de você..`
    setTimeout(() => { alerts("Mas parece que esse é o FIM.. Porém saiba de uma coisa.. um bug sempre estará presente..enquanto você tiver vendo um filme..ele vai estar lá... até nos seus sonhos ele estará lá..GAME OVER"); }, 5000);
    setTimeout(() => {  location = ('../index.html'); }, 15000);
}



