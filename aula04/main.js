// Preciso criar uma lista com os 3 jogadores
let personagem = ["","",""]

let viloes = ["","",""]

let forcaPersonagem = 0
let forcaViloes = 0

alert(`O array contem ${personagem}`)
for (let i = 0; i < 3; i++ ){
    personagem[i] = prompt(`Digite o nome do seu personagem ${i+1}`)
    // Calcular a força de cada jogador, e depois somar para saber a força do time
    forcaPersonagem += Math.floor(Math.random() * 10)+1

}

console.log(`Agora, o array contem ${personagem}`)
console.log(`Inicio vilões ${viloes}`)
for (let i = 0; i <3; i++){
    let indiceAleatorio = Math.floor(Math.random() * 5)
    let viloesPossivel = ["Nazare Tedesco", "Odete Roitmann", "Flora", "Carminha", "Laura Prudente da Costa"]
    viloes[i] = viloesPossivel[indiceAleatorio]
    // Calcular a força do time do computador
    forcaViloes += Math.floor(Math.random()*10)+1
}
console.log(`Final viloes: ${viloes}`)

// Comparar os dois times para saber quem venceu

if (forcaPersonagem > forcaViloes) {
    alert(`Seu time é muito forte, você ganhou a disputa de cabo de guerra! Sua força foi de ${forcaPersonagem}`)
} else {
    if (forcaPersonagem < forcaViloes) {
        alert(`Seu time é fraquinho. O computador ganhou o cabo de guerra com força de ${forcaViloes}`)
    } else {
        alert("Os dois times tem a mesma força! Vocês empataram")
    }
}