console.clear()

const prompt = require(`prompt-sync`)()
let maquina
let vitoria = 0
let derrota = 0
let empate = 0
let sorteio
let pontomaq = 0
//Introdução do jogo e login
console.log('-----------JOKENPÔ----------')
let login = prompt('Crie um usuário para jogar: ')
console.log()
console.log('Bem Vindo', login)
//Lista de opções
const jogo = ['Pedra', 'Papel', 'Tesoura']

let continua = 'sim'
// Looping com o jogo

while (continua.toLowerCase() == 'sim') {
  rodadas = prompt('Quantas rodadas você quer jogar?: ')

  for (let i = 0; i < rodadas; i++) {
    let escolha = prompt(
      '[0]Pedra, [1]Papel ou [2]Tesoura? Escolha o número correspondente : '
    )
    console.log()
    if (escolha == 0) {
      escolha = jogo[0]
      console.log(`Você escolheu : ${jogo[0]}`)
    } else if (escolha == 1) {
      escolha = jogo[1]
      console.log(`Você escolheu :${jogo[1]}`)
    } else if (escolha == 2) {
      escolha = jogo[2]
      console.log(`Você escolheu :${jogo[2]}`)
    }
    console.log()

    console.log('-------------------------------------------------')

    console.log()
    //sorteio da escolha da máquina
    sorteio = Math.floor(Math.random() * 3)
    if (sorteio == 0) {
      maquina = jogo[0]
      console.log(`A maquina escolheu : ${jogo[0]}`)
    } else if (sorteio == 1) {
      maquina = jogo[1]
      console.log(`A maquina escolheu : ${jogo[1]}`)
    } else if (sorteio == 2) {
      maquina = jogo[2]
      console.log(`A maquina escolheu : ${jogo[2]}`)
    }

    if (
      (escolha == jogo[0] && maquina == jogo[2]) ||
      (escolha == jogo[1] && maquina == jogo[0]) ||
      (escolha == jogo[2] && maquina == jogo[1])
    ) {
      vitoria++

      console.log()

      console.log('Você Venceu!!!')
    }

    if (
      (escolha == jogo[0] && maquina == jogo[1]) ||
      (escolha == jogo[1] && maquina == jogo[2]) ||
      (escolha == jogo[2] && maquina == jogo[0])
    ) {
      derrota++
      pontomaq++
      console.log()

      console.log('Você perdeu')
    }
    if (
      (escolha == jogo[0] && maquina == jogo[0]) ||
      (escolha == jogo[1] && maquina == jogo[1]) ||
      (escolha == jogo[2] && maquina == jogo[2])
    ) {
      empate++

      console.log()

      console.log('Empatou!!')
    }

    console.log()

    console.log('PLACAR DO USUÁRIO:')
    console.log()
    console.log('Vitórias: ', vitoria)
    console.log()
    console.log(' Derrotas: ', derrota)
    console.log()
    console.log(' Empates: ', empate)
    console.log()
  }
  continua = prompt('Deseja jogar novamente?: ')
}
//Placar final caso o usuário não queira mais jogar
console.log('PLACAR FINAL: ')

if (vitoria > derrota) {
  console.log(
    'Você foi o campeão com ',
    vitoria,
    'pontos e a máquina ficou com apenas  ',
    pontomaq,
    'pontos'
  )
} else if (derrota > vitoria) {
  console.log(
    'Não foi dessa vez!! Você perdeu, fez apenas ',
    vitoria,
    'pontos e a maquina venceu com , ',
    pontomaq,
    'pontos'
  )
} else if (empate > vitoria && empate > derrota) {
  console.log('Deu mais empates, você e a máquina empataram', empate, 'vezes')
}
