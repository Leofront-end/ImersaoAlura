function jogar() {
    let venceu = 0 // Se for 1, perdeu. Se for 0, ganhou

    for (let rodada = 1; rodada <= 3; rodada++) {
        console.log(`Rodada: ${rodada}`)
        
        let escolhaJogador = prompt(`Nível ${rodada}, escolha vidro de 1 a 3`)
        let pisoQuebrado = Math.floor(Math.random()*3)+1 

        if (escolhaJogador == 1 | escolhaJogador == 2 | escolhaJogador == 3) {
            if ( escolhaJogador == pisoQuebrado ) {
                alert("Vidro quebrou! A Rodada acabou para você")
                ganhou = 1
                break
            } else {
                alert(`Passou! Piso quebrado estava na ponte ${pisoQuebrado}`)
            }
        } else {
            rodada -= rodada
            alert("Escolha um numero de 1 a 3")
        }
        
    }

    if (venceu == 0) {
        alert("Você venceu!!")
    }
}