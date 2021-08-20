var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
fase1Escolha3();

function mostra() {
    tela.innerHTML = `<img class="persona" src="./bug3.png">`;
}

function fase1Escolha3() {
    var escolha13 = "";
    setTimeout(() => {
        tela.innerHTML = "De alguma forma você sai das trevas e da respawn perto de um reino chamado Java e perto de algumas cidades que ficam envolta desse reino..O clima fica frio, nublado , tempestades se iniciam, sua presença é notável , o fim dos tempos chegou na sua pior versão, grito são ouvidos de longe , os reinos estão criando suas defesas pois todos esses eventos mostram que o fim começou.. "
        escolha13 = prompt(`Faça sua escolha\n 1) Ir direto para o reino \n 2)Se apresentar para a cidade flexbox`)
        while (escolha13 != "1" && escolha13 != "2") {
            escolha13 = prompt(`Faça sua escolha\n 1)  Ir direto para o reino Java\n 2)Se apresentar para a cidade flexbox`)
        }
        if (escolha13 == '1') {
            alerts("Você simplismente aparece na porta do castelo do reino Java, o clima muda instantaneamente uma neblina densa se forma..");
            final3Fase1();
        } else {
            alerts('Ao chegar na cidade, todas as proporções das casas mudam, tudo fica diferente, desconexo, algumas casas somem, as pessoas viram picolé.Terminado sua apresentação, vai para o castelo.. ');
            final3Fase1();
        }
    }, 14000);

}
s
function final3Fase1() {
    var escolha14 = "";
    tela.innerHTML = `Você tem o poder de bugar tudo, de mudar tudo em sua volta, não ta preocupado com a defesa do castelo, seu objetivo é destruir as relíquias, para toda a sabedoria restante viva em sua mente demoniaca, e com isso a documentação milenar só terá bugs mais bugs por toda a eternidade`
    setTimeout(() => {
        escolha14 = prompt(`Faça sua escolha\n 1)Dominar o castelo criando um exército de espíritos 'crash' para tirar toda a funcionalidade do castelo e suas defesas\n 2)Dominar o castelo e prender os humanos no calabouço`);
        if (escolha14 == '1') {
            alerts("Os crash´s fizeram seu trabalho, agora é só destruir as relíquias");
            location = ('../personagem1-historia/fase2p3.html');
        } else {
            alerts('Desde o rei até o soldado mais fraco está preso, mas você percebe que eles não estão tão preocupados assim..');
            location = ('../personagem1-historia/fase2p3.html');
        }
    }, 5000);
}


