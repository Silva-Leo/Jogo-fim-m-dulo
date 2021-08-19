var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
history2fase3();

function mostra() {
    tela.innerHTML = `Com o mago fora do jogo, sem soldados por perto, você está livre para armar suas traquinagens, ou seja, transforme logo essa documentação em goiaba e acabe com as relíquias do reino!!!`;
}

function history2fase3() {
    var escolha11 = "";
    setTimeout(() => {
        escolha11 = prompt(`Faça sua escolha\n 1)Transforme a documentação em goiaba e as outras relíquias em frutas azedas\n 2)Analisar os fatos que ocorreram`)
        while (escolha11 != "1" && escolha11 != "2") {
            escolha11 = prompt(`Faça sua escolha\n 1)Transforme a documentação em goiaba e as outras relíquias em frutas azedas..\n 2)Analisar os fatos que ocorreram..`)
        }

        if (escolha11 == '1') {
            alerts("É isso, você fez a traquinagem que queria depois de milhôes de anos.... E agora..");
            gameOver4();
        } else {
            alerts('Você percebeu que todos estão fazendo esforços para proteger essas relíquias.. que tal você roubar elas e as pessoas que as vão procurar, te abre uma oportunidade de zoar por várias gerações.');
            final3Fase3();
        }
    }, 5000);
}

function final3Fase3() {
    tela.innerHTML = `Você bolou vários planos para zoar todos que vão atrás das relíquias roubadas, e todos caem na sua traquinagem..Uns são transformados em batata, outros desaprendem a falar ... `
    var escolha12 = "";
    setTimeout(() => {
        escolha12 = prompt(`Faça sua escolha\n 1)Se declarar o rei da zoeira eterna!\n 2)Criar a documentação oficial da zoeira never ends`)
        while (escolha12 != "1" && escolha12 != "2") {
            escolha12 = prompt(`Faça sua escolha\n 1)Se declarar o rei da zoeira eterna!\n 2)Criar a documentação oficial da zoeira never ends`)
        }
        if (escolha12 == '1') {
            alerts("Agora todos os cidadãos convivem com você e o mundo se torna um lugar pior.. E fim rsrs");

        } else {
            alerts('Agora parece que essa documentação criada é a única relíquia existente...Já parou para pensar nisso..Digamos que essa história chegou ao FIM por enquanto..');

        }
    }, 5000);
}

function gameOver4() {
    tela.innerHTML = `É isso..agora você não vê mais sentido nem graça nas suas ações, você percebe que por ser assim vai ficar sozinho por toda a eternidade, assim como você já estava antes...Percebendo essa sua nova realidade você não tem mais a vibe de zoeiro, então você deixa de existir..bugando a si mesmo.`
    setTimeout(() => { alerts("Bom..agora que você não existe mais..chegamos ao fim!"); }, 5000);
    setTimeout(() => { location = ('../index.html'); }, 15000);
}


