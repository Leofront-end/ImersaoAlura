function jogar() {
    let rodada = 1
    let venceu = false

    while (rodada <= 3) {
        console.log(`Rodada: ${rodada}`)
        
        let escolhaJogador = prompt(`Nível ${rodada}, escolha vidro de 1 a 3`)
        let pisoQuebrado = Math.floor(Math.random()*3)+1 

        if (escolhaJogador == 1 | escolhaJogador == 2 | escolhaJogador == 3) {
            if ( escolhaJogador == pisoQuebrado ) {
                alert("Vidro quebrou! A Rodada acabou para você")
                break
            } else {
                alert(`Passou! Piso quebrado estava na ponte ${pisoQuebrado}`)
            }
    
            rodada++        
        } else {
            alert("Escolha um numero de 1 a 3")
        }
        
        
    }

    if (rodada == 4){
        venceu = true
    }

    if (venceu == true) {
        alert("Você venceu!!")
    }
}