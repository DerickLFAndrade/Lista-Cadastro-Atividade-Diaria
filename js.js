var ativ = document.getElementById('ativ')
var botão = document.getElementById('botão')
var op1 = document.getElementById('opçãot1')
var op2 = document.getElementById('opçãot2')
var op3 = document.getElementById('opçãot3')
var op4 = document.getElementById('opçãot4')
var op5 = document.getElementById('opçãot5')
var op6 = document.getElementById('opçãot6')
var op7 = document.getElementById('opçãot7')
var op8 = document.getElementById('opçãot8')
var op1d = document.getElementById('opção1')
var op2d = document.getElementById('opção2')
var op3d = document.getElementById('opção3')
var op4d = document.getElementById('opção4')
var op5d = document.getElementById('opção5')
var op6d = document.getElementById('opção6')
var op7d = document.getElementById('opção7')
var op8d = document.getElementById('opção8')
var tab = document.getElementById('tabela')
var resetar = document.getElementById('resetar')
var container = document.getElementById('containerPrincipal')
var container2 = document.getElementById('containerSecundario')

var tema1 = document.getElementById('dark')
var tema2 = document.getElementById('white')

tema1.addEventListener('click', temaDark)
tema2.addEventListener('click', temaWhite)
function temaDark() {
  ativ.style.background = 'black'
  ativ.style.color = 'white'
  container.style.background = 'black'
  container2.style.background = 'linear-gradient(black, gray, white)'
  container2.style.boxShadow = '0px 0px 2px white'
  tab.style.background = 'white'
  resetar.style.background = 'gray'
  resetar.style.color = 'white'
  botão.style.background = 'black'
  botão.style.color = 'white'
}
function temaWhite() {
  ativ.style.background = 'white'
  ativ.style.color = 'black'
  container.style.background = 'white'
  container2.style.background = 'linear-gradient(black, gray, black)'
  container2.style.boxShadow = '0px 0px 0px white'
  tab.style.background = 'white'
  resetar.style.background = 'white'
  resetar.style.color = 'black'
  botão.style.background = 'gray'
  botão.style.color = 'black'
  tab.style.background = 'gray'
}

ativ.addEventListener('click', function () {
  if (ativ.value == 'Atividade') {
    ativ.value = ''
    ativ.focus
  }
})
function limpar() {
  op1.innerHTML = ''
  op2.innerHTML = ''
  op3.innerHTML = ''
  op4.innerHTML = ''
  op5.innerHTML = ''
  op6.innerHTML = ''
  op7.innerHTML = ''
  op8.innerHTML = ''
  botão.style.visibility = 'visible'
  ativ.value = ''
  ativ.placeholder = 'Atividade'
  ativ.disabled = false
  botão.disabled = false
}



function adicionar() {
  if (ativ.value == '') {
    alert('Para cadastrar uma atividade, preencha o campo "Atividade" abaixo e clique em "Cadastrar"')
  } else {
    var botdel = document.createElement('button')
    var botEdt = document.createElement('button')
    if (op2.innerHTML == '' && op3.innerHTML == '' && op4.innerHTML == '' && op5.innerHTML == '' && op6.innerHTML == '' && op7.innerHTML == '' && op8.innerHTML == '') {

      op1.innerHTML = `- ${ativ.value}`
      op2.innerHTML = '-'
      ativ.value = ''
      ativ.placeHolder = 'Atividade'
      ativ.focus
      var botdel = document.createElement('button')
      var botEdt = document.createElement('button')
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op1.remove(op1)
        op1d.remove(op1d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false


      })

      op1.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op1.appendChild(botEdt)



    } else if (op3.innerHTML == '' && op4.innerHTML == '' && op5.innerHTML == '' && op6.innerHTML == '' && op7.innerHTML == '' && op8.innerHTML == '') {

      op2.innerHTML = `- ${ativ.value}`
      op2.style.marginTop = '3vw'
      op3.innerHTML = '- '
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus


      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op2.remove(op2)
        op2d.remove(op2d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op2.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op2.appendChild(botEdt)

    } else if (op4.innerHTML == '' && op5.innerHTML == '' && op6.innerHTML == '' && op7.innerHTML == '' && op8.innerHTML == '') {

      op3.innerHTML = `- ${ativ.value}`
      op3.style.marginTop = '5.2vw'
      op4.innerHTML = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'

      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op3.remove(op3)
        op3d.remove(op3d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op3.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op3.appendChild(botEdt)

    } else if (op5.innerHTML == '' && op6.innerHTML == '' && op7.innerHTML == '' && op8.innerHTML == '') {

      op4.innerHTML = `- ${ativ.value}`
      op4.style.marginTop = '7.4vw'
      op5.innerHTML = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'

      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op4.remove(op4)
        op4d.remove(op4d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op4.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op4.appendChild(botEdt)

    } else if (op6.innerHTML == '' && op7.innerHTML == '' && op8.innerHTML == '') {

      op5.innerHTML = `- ${ativ.value}`
      op5.style.marginTop = '9.6vw'
      op6.innerHTML = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'


      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op5.remove(op5)
        op5d.remove(op5d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op5.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op5.appendChild(botEdt)

    } else if (op7.innerHTML == '' && op8.innerHTML == '') {

      op6.innerHTML = `- ${ativ.value}`
      op6.style.marginTop = '11.6vw'
      op7.innerHTML = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op6.remove(op6)
        op6d.remove(op6d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op6.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op6.appendChild(botEdt)

    } else if (op8.innerHTML == '') {

      op7.innerHTML = `- ${ativ.value}`
      op7.style.marginTop = '13.8vw'
      op8.innerHTML = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op7.remove(op7)
        op7d.remove(op7d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op7.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op7.appendChild(botEdt)

    }


    else {

      op8.innerHTML = `- ${ativ.value}`
      op8.style.marginTop = '16vw'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus
      botão.disabled = true
      ativ.disabled = true

      var botdel = document.createElement('button')
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '35vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.3vw'

      botdel.addEventListener('click', function () {
        op8.remove(op8)
        op8d.remove(op8d)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
      })

      op8.appendChild(botdel)

      botEdt.innerHTML = '✏️'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '38vw'
      botEdt.style.background = 'w'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.fontSize = '1.3vw'

      op8.appendChild(botEdt)

    }
  }
}
botão.addEventListener('click', adicionar)
resetar.addEventListener('click', limpar)


