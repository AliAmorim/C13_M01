console.clear()

const prompt = require('prompt-sync')()
let continuar = 'sim'

reset: while (true) {
  principal: while (continuar == 'sim') {
    console.log('Crimes de L.A')
    console.log(
      '-------------------------------------------------------------------------------------------------------------------'
    )
    console.log()

    console.log(
      'Você é um novo detetive na cidade de Los Angeles e precisa provar a todos que é um dos melhores. Para fazer isso, vai precisar desvendar o maior mistério que a cidade já viu. '
    )
    console.log(
      '_______________________________________________________________________________________________________________________________'
    )
    console.log()

    let hora = 6
    let dia = 1

    let status = {
      saude: 100,
      medo: 0,
      instinto: 50
    }

    console.log(`Agora são: ${hora} horas do dia ${dia}`)

    console.log()

    function avancadia(diaatual, diapassado = 1) {
      console.log(`Dia seguinte...`)
      diaatual = diaatual + diapassado
      console.log()
      console.log(`Agora é o dia ${diaatual}`)
      dia = diaatual
      return diaatual
    }

    function avancahora(horaatual, tempopassado = 1) {
      console.log(`Se passaram ${tempopassado} horas`)
      horaatual = horaatual + tempopassado
      console.log()
      console.log(`Agora são ${horaatual} horas`)
      hora = horaatual
      return horaatual
    }

    console.log('Seu status atual: ')
    console.log()
    console.log(status)

    function morte() {
      status.saude = 0
      status.medo = 0
      status.instinto = 0
    }

    function calculo1() {
      status.saude = 100
      status.medo = 10
      status.instinto = 70
    }

    function calculo2() {
      status.saude = 100
      status.medo = 30
      status.instinto = 80
    }

    function vitoria() {
      status.saude = 100
      status.medo = 0
      status.instinto = 100
    }

    console.log()

    console.log(
      'Você acorda com o celular tocando e vê que é o chefe do departamento de polícia de L.A, atende e o mesmo diz que você precisa ir até a delegacia urgentemente…'
    )
    console.log()
    console.log('Faça sua escolha (digite o número correspondente) : ')
    console.log()
    console.log(
      '1: Você se arruma o mais rápido possível e corre até a delegacia (1 hora)'
    )
    console.log()
    console.log(
      '2: Não se preocupa muito e resolve tomar um café da manhã (2 horas)'
    )

    console.log()
    let escolha = +prompt()
    console.log()
    console.clear()

    if (escolha == 1) {
      avancahora(hora, 1)
      console.log()
      console.log(
        'Seu chefe fica impressionado com a sua velocidade e vontade de resolver um caso e começa a te contar sobre um assasinato que aconteceu em um beco do lado de um bar bem movimentado. '
      )
    } else if (escolha == 2) {
      avancahora(hora, 2)
      console.log()
      console.log('Seu chefe se lembrará da sua falta de compromisso…')
      console.log(
        'Ele começa a te contar sobre um assasinato que aconteceu em um beco do lado de um bar bem movimentado'
      )
    }

    console.log()

    console.log(
      'Você sabe que é sua chance de mostrar a todos do que é capaz, então vai até o local do crime para investigar…'
    )

    console.log()

    console.log('Seu status atual:')
    console.log()
    calculo1()
    console.log(status)

    console.log()

    console.log(
      'Ao chegar no local você se depara com o corpo de uma mulher, mas sem marcas de tortura, nem ao menos sangue, apenas uma marca de corrente no pescoço da vítima. O assasino foi muito cuidadoso. '
    )
    console.log()

    console.log('Faça sua escolha: ')
    console.log()

    console.log('1: Olhar ao redor para procurar pistas (2 horas)')
    console.log()

    console.log('2: Pedir para ver as cameras de segurança do bar (3 horas)')
    console.log()
    escolha = +prompt()

    console.log()
    console.clear()

    if (escolha == 1) {
      avancahora(hora, 2)
      console.log()
      console.log(
        'Você começa a investigar cada pedaço daquele beco, mas teme que o assasino esteja observando de alguma forma. '
      )
      console.log()
      console.log('Seu status atual: ')
      console.log()
      calculo2()
      console.log(status)
      console.log()
      console.log(
        'Não encontra nada que se pareça com a arma do crime e fica frustrado. Depois de procurar mais um pouco resolve ir até a delegacia procurar informações sobre a vítima.'
      )
    } else if ((escolha = 2)) {
      avancahora(hora, 3)
      console.log()
      console.log(
        'Você entra no bar com um ar de superioridade e pede para ver as imagens da camera, infelizmente as imagens mostram que a vítima não esteve no local mas percebe uma movimentação estranha atrás do balcão. Um homem com um capuz guarda alguma coisa em um saco de lixo e vai embora com o objeto, as cameras não identificaram o rosto do suspeito e você então decide voltar a delegacia para procurar mais informações sobre a vítima. '
      )
      console.log()
      console.log('Seus status atual: ')
      calculo1()
      console.log()
      console.log(status)
    }

    console.log()

    console.log(
      'Você resolve almoçar enquanto pensa no caso mas recebe uma ligação do seu chefe dizendo que o assassino fez mais uma vítima… agora em um lago sem muito movimento de pessoas. '
    )
    console.log()
    console.log('1: Terminar o almoço (1 hora)')
    console.log()
    console.log('2: Correr até o lago para investigar (2 horas)')
    console.log()
    escolha = +prompt()
    console.clear()

    if (escolha == 1) {
      avancahora(hora, 1)
      console.log()
      console.log(
        'Não está com pressa para resolver o caso? Não é isso que um bom detetive faria… '
      )
      console.log()
      console.log(
        'Depois de almoçar você corre até o lago e se depara com mais uma vítima sem vestigios de tortura, somente uma marca no pescoço. As vítimas estão sendo cruelmente enforcadas com algum tipo de corrente, corda, pode ser qualquer coisa do tipo. '
      )
    } else if (escolha == 2) {
      avancahora(hora, 2)
      console.log()
      console.log(
        'Você corre até o lago e se depara com mais uma vítima sem vestigios de tortura, somente uma marca no pescoço. As vítimas estão sendo cruelmente enforcadas com algum tipo de corrente, corda, pode ser qualquer coisa do tipo.'
      )
    }

    console.log()

    console.log(
      'Após observar um pouco mais de perto o corpo da vítima, você repara em um homem andando ali perto, com uma roupa preta, todo coberto, mal dava para ver o rosto dele. '
    )

    console.log()

    console.log('1: Ir atrás do homem? ')
    console.log()

    console.log('2: Ignorar')
    console.log()

    escolha = +prompt()
    console.clear()

    if (escolha == 1) {
      console.log()
      console.log(
        'Você vai atrás do homem mas sem correr para não levantar suspeitas, mas logo ele percebe que está sendo seguido e começa a correr. O homem atravessa a rua correndo desesperado…'
      )
      console.log()
      console.log('3 : Correr atrás dele na rua? ')
      console.log()
      console.log('4 : Parar para chamar reforço? ')
      console.log()
      escolha = +prompt()
      console.clear()

      if (escolha == 3) {
        console.log(
          'Você tentou atravessar correndo mas acabou sendo atropelado'
        )
        console.log()
        console.log('Seu status atual')
        morte()
        console.log()
        console.log(status)
        console.log()
        console.log('VOCÊ MORREU')
        console.log()
        continuar = prompt(
          'Deseja jogar novamente? Esse jogo não tem savepoint, então você iniciará toda a história novamente. '
        ).toLowerCase()
        console.log()
        console.clear()
        if (continuar == 'sim') {
          continue
        } else {
          break
        }
      }
      if ((escolha = 4)) {
        console.log(
          'Você observa o homem correr e chama reforços mas já é tarde para alcança-lo, então você volta para a delegacia para ligar os casos'
        )
        avancahora(hora, 2)
        console.log()
      }
    }

    if (escolha == 2) {
      console.log()
      console.log(
        'Você ignora o movimento do homem e volta para a delegacia para ligar os casos.'
      )
      console.log()
      avancahora(hora, 2)
      console.log()
    }

    console.log(
      'Você está na delegacia, em frente a um quadro com as fotos das vítimas e a ligação do crime. O que fazer em seguida?'
    )
    console.log()
    console.log('1: Procurar o que as duas tem em comum?')
    console.log()
    console.log('2: Esperar pelo próximo movimento do assasino')
    console.log()
    escolha = +prompt()
    console.log()
    console.clear()

    if (escolha == 1) {
      console.log(
        'Você faz pesquisas intensas para descobrir se as vítimas possuem algo em comum e descobre que as duas se envolveram com o mesmo homem, Tom mas também conhecem um outro homem, Jason. '
      )
      console.log()
      console.log(
        'Você decide ir pra casa descansar para no outro dia ir atrás de informações sobre Tom e Jason. '
      )
      console.log()
    }
    if (escolha == 2) {
      console.log(
        'E esperar que ele mate mais alguém? Péssima escolha! Fim de jogo pra você. '
      )
      console.log()
      continuar = prompt(
        'Deseja jogar novamente? Esse jogo não tem savepoint, então você iniciará toda a história novamente. '
      )

      console.clear()
      if (continuar.toLowerCase() == 'sim') {
        break principal
      } else if (continuar.toLowerCase() == 'nao') {
        break reset
      }
    }

    hora = 6
    dia = 2

    console.log(`Agora são: ${hora} horas do dia ${dia}`)

    console.log(
      '_________________________________________________________________________________________________________'
    )

    console.log(
      'Após muitas pesquisas você descobre que Jason é dono de uma loja de bijuterias, onde possui muitas correntes. '
    )

    console.log()

    console.log(
      'Já Tom é um entregador de pizza, que roda a cidade toda para realizar as entregas. '
    )

    console.log()

    console.log(
      'Com todas essas informações está na hora da sua escolha final… '
    )

    console.log()

    console.log(
      '------------------ QUEM É O ASSASINO?-------------------------'
    )

    console.log()

    console.log('1: TOM')

    console.log()

    console.log('2: JASON')

    console.log()

    escolha = +prompt()
    console.clear()

    if (escolha == 1) {
      console.log(
        'PARABÉNS! Acertou o assasino e como você descobriu? Investigou o Tom e descobriu que ele foi só um amigo das duas vítimas mas que sempre tentou algo a mais com elas, em tempos diferentes. Levou um fora das duas que gostavam de Jason, então o que Tom fez? Usou correntes para enforcar as vítimas, assim, ele culparia Jason facilmente. É isso ai, Detetive. '
      )

      console.log()
      vitoria()
      console.log()
      console.log(status)
      break reset
    } else if (escolha == 2) {
      console.log(
        'Achou mesmo que seria tão óbvio? Coitado do Jason. Vou te contar a verdadeira história. Tom foi só um amigo das duas vítimas mas que sempre tentou algo a mais com elas, em tempos diferentes. Levou um fora das duas que gostavam de Jason, então o que Tom fez? Usou correntes para enforcar as vítimas, assim, ele culparia Jason facilmente.'
      )
      console.log()

      console.log(
        'Errou feio ein! Tem um inocente na cadeia. Fim de jogo pra você. '
      )
      console.log()

      console.log('Deseja jogar novamente?')
      continuar = prompt()
      console.clear()
      if (continuar.toLowerCase() == 'sim') {
        break principal
      } else if (continuar.toLowerCase() == 'nao') {
        break reset
      }
    } else if ((escolha = !1 || 2)) {
      console.log('Opção Inválida - O jogo irá reiniciar')
      console.log()
      console.log()
    }
  }
}
