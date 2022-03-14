console.clear()

const prompt = require(`prompt-sync`)()
let pontos = 0
let respostas
//Título da História
console.log('Trenzinho da Infelicidade - Baseado em fatos reais')
console.log()
//Começo da História
console.log(
  'Em um bairro cheio de gente, você e sua amiga tentam chegar ao trabalho e para isso precisam pegar o trem, só não imaginavam que seria o maior desafio da vida de vocês.'
)
console.log()
//Novo paragráfo
console.log(
  'Vocês precisam chegar as 8hrs no trabalho e chegando na estação descobrem que o trem está com problema por conta da energia, o trem demora muito pra chegar e quando finalmente chega está muito cheio'
)
console.log(
  'Dentro do trem, com pessoas suadas e fedidas, você e sua amiga acham que não vão chegar a tempo porque o Rubinho Barrichello era mais rápido que aquele trem'
)
console.log(
  'Ao sair do trem naquela muvuca, você sem querer pisa no chinelo da sua amiga (sim, ela estava de chinelo) e vê o chinelo girando no meio da multidão sem saber se pegava ou fingia que nem viu'
)
console.log()
console.log(
  'Agora vou te fazer algumas perguntas sobre algumas partes que faltaram nessa história e só você sabe o que realmente aconteceu com vocês no fim de tudo. Responda apenas sim ou não'
)
//Função para a contagem
function contagem() {
  if (respostas.toLowerCase() == 'sim') {
    pontos += 10
  } else {
  }
}

//Perguntas
respostas = prompt('Vocês conseguiram pegar o primeiro trem que passou?: ')
contagem()
console.log()
respostas = prompt('Vocês também estavam suados e fedidos?: ')
contagem()
console.log()
respostas = prompt('Precisou empurrar algum idoso pra entrar no trem?: ')
contagem()
console.log()
respostas = prompt(
  'O chinelo da sua amiga caiu no vão entre o trem e a plataforma?: '
)
contagem()
console.log()
respostas = prompt('Não era melhor trabalhar remotamente como Dev?: ')
contagem()
console.log()
console.log('E o final da história foi...')
console.log()

if (pontos == 0) {
  console.log('Vocês não chegaram a tempo e foram demitidos')
} else if (pontos == 10 || pontos == 20) {
  console.log('Vocês chegaram um pouco atrasados e tomaram um esporro')
} else if (pontos == 30) {
  console.log('Você chegou 5 minutos atrasado e vai ter que sair mais tarde')
} else if (pontos == 40) {
  console.log('Parabéns, chegou a tempo. Mas cheio de suor e descabelado')
} else if (pontos == 50) {
  console.log(
    'Nenhum trem te para! Chegou no trabalho a tempo e em perfeito estado.'
  )
}
console.log()
