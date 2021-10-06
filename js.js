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
function temaDark () { 
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

    op1.innerHTML = `1 - ${ativ.value}`
    op2.innerHTML = '2'
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

    op2.innerHTML = `2 - ${ativ.value}`
    op3.innerHTML = '3 '
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

    op3.innerHTML = `3 - ${ativ.value}`
    op4.innerHTML = '4 '
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

    op4.innerHTML = `4 - ${ativ.value}`
    op5.innerHTML = '5 '
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

    op5.innerHTML = `5 - ${ativ.value}`
    op6.innerHTML = '6 '
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

    op6.innerHTML = `6 - ${ativ.value}`
    op7.innerHTML = '7 '
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

    op7.innerHTML = `7 - ${ativ.value}`
    op8.innerHTML = '8'
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

    op8.innerHTML = `8 - ${ativ.value}`
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

op1d.addEventListener('click', mudaCor)
function mudaCor() {
op1d.style.background = 'green'
  }