const idade = prompt("Qual é sua idade?")

if (idade < 18) {
    alert("Você não pode jogar jokempo")
}

// alert("Vamos jogar")

if (idade >= 18) {
    let escolhaJogador = prompt("Digite \n1-Pedra, \n2-Papel \n3-Tesoura")
    let escolhaComputador = Math.floor(Math.random() * 3) + 1

    if (escolhaJogador == escolhaComputador) {
        alert("Empate")
    }

    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            alert("Computador venceu, escolheu papel")
        }
        if (escolhaComputador == 3) {
            alert("Jogador venceu, escolheu tesoura")
        }
    }

    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            alert("Computador venceu, escolheu pedra")
        }
        if (escolhaComputador == 3) {
            alert("Jogador venceu, escolheu tesoura")
        }
    }

    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert("Jogador venceu, escolheu pedra")
        }
        if (escolhaComputador == 2) {
            alert("Computador venceu, escolheu papel")
        }
    }
}