var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
fase3escolha1();

function mostra() {
    tela.innerHTML = `O reino Java está abaixo de você! No grande castelo está guardada a documentação com a verdade! Você quer ler e provar a todos que você não é do mal como dizem`;
}

function fase3escolha1() {
    var escolha5 = "";
    setTimeout(() => {
        escolha5 = prompt(`Faça sua escolha\n 1)Vá aonde seus sentidos dizem e ache a documentação no castelo\n 2)Pensar sobre seus atos e refletir...você não precisa provar para ninguém que não é do mal, faça uma boa aç
    ão!` )
        while (escolha5 != "1" && escolha5 != "2") {
            escolha5 = prompt(`Faça sua escolha\n 1)Vá aonde seus sentidos dizem e ache a documentação no castelo\n 2)Pensar sobre seus atos e refletir...você não precisa provar para ninguém que não é do mal, faça uma boa ação!`)
        }

        if (escolha5 == '1') {
            alerts("Você encontrou a documentação sagrada no castelo.. ");
            gameOver2();
        } else {
            alerts('Você percebeu suas qualidades e agora transforma coisas diversas em pudim para alegrar a todos');
            fase3escolha2();
        }
    }, 5000);
}

function fase3escolha2() {  
    tela.innerHTML = `Dar pudim as pessoas as deixa feliz, milênios na escuridão não te ensinaram isso, mas amor próprio sim!`
    var escolha6 = "";
    setTimeout(() => {
        escolha6 = prompt(`Faça sua escolha\n 1)Se tornar do bem e fazer parte da comunidade.\n 2)Buscar se tornar melhor a cada dia`)
        while (escolha6 != "1" && escolha6 != "2") {
            escolha6 = prompt(`Faça sua escolha\n 1)Se tornar do bem e fazer parte da comunidade.\n 2)Buscar se tornar melhor a cada dia`)
        }
        if (escolha6 == '1') {
            alerts("É isso, você alcançou um valor para as pessoas e todos gostam de você..FIM");
          
        } if (escolha6 == '2') {
            alerts('Com os dias sua aparência de mal foi mudando e agora ninguém tem medo de você..FIM');
           
        }
    }, 5000);
}

function gameOver2() {
    tela.innerHTML = `Algo inesperado aconteceu....Ao tocar na documentação sagrada todas as letras se embaralharam, o papel se desmanchou e você não leu nenhuma palavra...é parece que seu destino é bugar tudo que toca`
    setTimeout(() => { alerts("Sem saber a verdade você retorna de onde veio e se esconde para sempre..QUE FIM RUIM AFF"); }, 5000);
    setTimeout(() => { location = ('../index.html'); }, 15000);
}
 

