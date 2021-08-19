var tela = document.getElementById("tela");

function alerts(texto) {
    return alert(texto);
}

mostra();
history3fase3();

function mostra() {
    tela.innerHTML = `O mago está liberto após seus crash´s não darem conta, você está preso e cada vez mais fraco pois o Wikipédia contém a SABEDORIA humana e isso destrói o bug com o tempo, então a cada minuto preso você fica mais fraco.. Só existe uma forma agora de parar com essa situação, escolha com sabedoria `;
}

function history3fase3() {
    var escolha17 = "";
    setTimeout(() => {
        escolha17 = prompt(`Faça sua escolha\n 1)Bugar a passagem do tempo nessa realidade!\n 2)Pensar mais um pouco para decidir seu próximo plano` )
        while (escolha17 != "1" && escolha17 != "2") {
            escolha17 = prompt(`Faça sua escolha\n 1)Bugar a passagem do tempo nessa realidade..!\n 2)Pensar mais um pouco para decidir seu próximo plano..` )
        }

        if (escolha17 == '1') {
            alerts("Você fez com o tempo andasse 1000 vezes mais lento.. . . . ");
            gameOver5();
        } else {
            alerts('Enquanto você pensa o mago chega na sala onde você está, você percebe que ele está nervoso mas contente por ter pego numa armadilha um ser milenar e poderoso como você');
            final4Fase3();
        }
    }, 5000);
}

function final4Fase3() { 
    tela.innerHTML = `Você tenta chegar em um acordo com o mago, mas ele suspeita que você pode ser um grande mentiroso, aliás você é um ser do mal né. Então o acordo é benéfico, ele te liberta, porém você vai estar fraco o suficiente para não fazer nada.. eae vai mentir ou não?? `
    var escolha18 = "";
    setTimeout(() => {
        escolha18 = prompt(`Faça sua escolha\n 1)Aceitar o acordo \n 2)Fingir aceitar, porém você está mentindo`)
        while (escolha18 != "1" && escolha18 != "2") {
            escolha18 = prompt(`Faça sua escolha\n 1)Aceitar o acordo..\n 2)Fingir aceitar, porém você está mentindo..`)
        }
        if (escolha18 == '1') {
            alerts("Depois de uns dias você foi solto, fraco e sem poderes, preso por toda a eternidade pelo mago..FIM para seres do mal tem que ser assim haha, parabéns player!");
           
        } else {
            alerts('Você mentiu, mas olha que louca, o mago também mente..parece que os seres humanos também sabem ser do mal.. seu fim é ficar congelado para sempre, fraco, te colocaram na praça central do reino como ums estátua. O mal não venceu mais uma vez!');
            
        }
    }, 5000);
}

function gameOver5() {
    tela.innerHTML = `Parece uma escolha sensata né, porque agora você fica mais fraco bem mais lento, mas esse bug que você causou te faz ficar congelado para sempre...porque o mago vai demorar 1.000 vezes mais para chegar e vocês chegarem a um acordo.. é isso você ta preso ai por uns milênios denovo.. com seu objetivo na sua frente e você não podendo fazer nada..`
    setTimeout(() => { alerts("Bom..talvez com todo esse tempo livre agora (kkkk) você pode pensar nos seus atos e deixar de ser mal, ou não né, seres do mal como você nunca aprendem até estarem numa situação assim...FIM"); }, 5000);
    setTimeout(() => {  location = ('../index.html'); }, 15000);

}


