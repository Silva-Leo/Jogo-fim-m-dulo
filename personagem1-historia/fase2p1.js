var tela = document.getElementById("tela");
var bottominicio = document.getElementById("bottominicio")

function alerts(texto) {
    return alert(texto);
}

mostra();
fase2escolha1();

function mostra() {
    tela.innerHTML = `Parece que suas escolhas não saem como queria né..`;
}

function fase2escolha1() {

    var escolha3 = "";
    setTimeout(() => {
        escolha3 = prompt(`Faça sua escolha\n 1) Tente provar para as pessoas que as documentações estão erradas!\n 2)Se cansar dessa novela milenar e transformar todo mundo em pudim`)
        while (escolha3 != "1" && escolha3 != "2") {
            escolha3 = prompt(`Faça sua escolha\n 1) Tente provar para as pessoas que as documentações estão erradas!\n 2)Se cansar dessa novela milenar e transformar todo mundo em pudim`)
        }

        if (escolha3 == '1') {
            alerts("Você puxou conversa com os humanos, eles não sabem como te responder ..parece que desaprenderam a falar...");
            fase2escolha2();
        } else {
            alerts('Após ter transformado todo mundo em pudim você comeu tudo...');
            gameOver1();
        }
    }, 5000);
}

function fase2escolha2() {
    tela.innerHTML = `Você não consegue se comunicar com eles...Por que será que você bugou até os seres humanos... vá atrás das documentações descobrir..`
    bottominicio.style.display = 'none'
    var escolha4 = "";
    setTimeout(() => {
        escolha4 = prompt(`Faça sua escolha\n 1)Ir para o reino Java atrás da documentação lendária.\n 2)Tentar fazer mímica para se comunicar com eles.`)
        while (escolha4 != "1" && escolha4 != "2") {
            escolha4 = prompt(`Faça sua escolha\n 1)Ir para o reino Java atrás da documentação lendária.\n 2)Tentar fazer mímica para se comunicar com eles.`)
        }
        if (escolha4 == '1') {
            alerts("Sem eles entenderem mesmo, você sai voando em toda velocidade em busca da verdade!");
            location = ('../personagem1-historia/Fase3P1.html');
        } else {
            alerts('Jura mesmo que você acha que mímica foi uma boa escolha..? Vá logo atrás da verdade!');
            location = ('../personagem1-historia/Fase3P1.html');
        }
    }, 5000);
}

function gameOver1() {
    tela.innerHTML = `Não sabemos como você comeu a cidade inteira sendo um espírito... Acho que essa história é um próprio bug, mas enfim você engordou, fez isso com os outros reinos e ficou sozinho por mais milênios.. E assim de forma rápida e prematura acaba a história desse ilustre personagem!`
    setTimeout(() => { alerts("É acabou ..!"); }, 15000);
    setTimeout(() => { location = ('../index.html'); }, 20000);
}

 //tenho que fazer voltar para a tela inicial

