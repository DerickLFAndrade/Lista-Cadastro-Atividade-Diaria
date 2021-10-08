var ativ = document.getElementById('ativ')
var titulo = document.getElementById('titulo2')
var botão = document.getElementById('botão')
var op1 = document.getElementById('opçãot1')


var tab = document.getElementById('tabela')
var resetar = document.getElementById('resetar')
var container = document.getElementById('containerPrincipal')
var container2 = document.getElementById('containerSecundario')

var tema1 = document.getElementById('dark')
var tema2 = document.getElementById('white')
var padrão = document.getElementById('padrão')


tema1.addEventListener('click', temaDark)
tema2.addEventListener('click', temaWhite)
function temaDark() {


  titulo.style.background = 'white'
  titulo.style.color = 'black'
  titulo.style.boxShadow = '5px 5px 10px black'
  ativ.style.background = 'black'
  ativ.style.color = 'white'
  container.style.background = 'black'
  container2.style.background = 'linear-gradient(black, gray, white)'
  container2.style.boxShadow = '0px 0px 2px white'
  tab.style.background = 'gray'
  resetar.style.background = 'gray'
  resetar.style.color = 'black'
  resetar.style.boxShadow = 'none'
  botão.style.background = 'black'
  botão.style.color = 'white'
}
function temaWhite() {


  titulo.style.background = 'black'
  titulo.style.color = 'white'
  titulo.style.boxShadow = '5px 5px 10px white'
  ativ.style.background = 'white'
  ativ.style.color = 'black'
  container.style.background = 'white'
  container2.style.background = 'linear-gradient(black, gray, black)'
  container2.style.boxShadow = '0px 0px 0px white'
  resetar.style.boxShadow = 'none'
  resetar.style.background = 'white'
  resetar.style.color = 'black'
  botão.style.background = 'gray'
  botão.style.color = 'white'
  tab.style.background = 'linear-gradient(white, gray, black)'

}
function temaPadrão() {
  titulo.style.background = 'chartreuse'
  titulo.style.color = 'rgb(65, 60, 60)'
  titulo.style.boxShadow = '0px 5px 3px rgb(178, 243, 114)'
  ativ.style.background = 'rgb(210, 236, 183)'
  ativ.style.color = 'black'
  container.style.background = 'lightgreen'
  container2.style.background = 'linear-gradient(rgb(31, 46, 31), gray, green)'
  container2.style.boxShadow = '0px 0px 2px white'
  tab.style.background = 'linear-gradient(rgb(77, 88, 77), gray, green)'
  resetar.style.background = 'chartreuse'
  resetar.style.color = 'rgb(65, 60, 60)'
  resetar.style.boxShadow = '0px  0px 8px rgb(105, 179, 136)'
  botão.style.background = 'rgb(59, 56, 56)'
  botão.style.color = 'chartreuse'
}

tema1.addEventListener('click', temaDark)
tema2.addEventListener('click', temaWhite)
padrão.addEventListener('click', temaPadrão)

ativ.addEventListener('click', function () {
  if (ativ.value == 'Atividade') {
    ativ.value = ''
    ativ.focus
  }
})




function adicionar() {
  var valueAtiv = ativ.value
  if (valueAtiv == '') {
    alert('Para cadastrar uma atividade, preencha o campo "Atividade" abaixo e clique em "Cadastrar"') 
    
  } else {
   ativ.value = ''
   ativ.placeHolder = 'Aividade'
    if (window.matchMedia("(min-width: 863px)").matches) {
      resetar.addEventListener('click', limpar)
      function limpar() {
        atividCadast.value = ''
        atividCadast.remove(atividCadast)
        botdel.remove(botdel)
        botEdt.remove(botEdt)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
        botdel.remove(botdel)
        botEdt.remove(botEdt)
      }


      var botdel = document.createElement('button')
      var botEdt = document.createElement('button')


      var atividCadast = document.createElement('input')
      botdel.innerHTML = 'X'

      var botEditSave = document.createElement('button')
      atividCadast.appendChild(botEditSave)
      //Salvar edição


      //deletar tarefa
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '10pt'
      botdel.style.padding = '2px'
      botdel.style.width = '35px'
      botdel.style.textAlign = 'center'

      botdel.addEventListener('click', function () {
        var excluir = confirm('Você realmente deseja excluir esse item?')
        if (excluir == true) {
          atividCadast.remove(atividCadast)
          botdel.remove(botdel)
          botEdt.remove(botEdt)
        }

      })

      //editar tarefa 
      botEdt.innerHTML = 'Edit'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '40px'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '10pt'
      botEdt.style.padding = '2px'
      botEdt.style.background = 'none'



      botEdt.addEventListener('click', function () {
        atividCadast.disabled = false
        if (container.style.background == 'black') {
          atividCadast.style.background = 'black'
          atividCadast.style.color = 'white'
        } else if (container.style.background == 'white') {
          atividCadast.style.background = 'gray'
          atividCadast.style.color = 'white'
        } else {
          atividCadast.style.background = 'chartreuse'
          atividCadast.style.color = 'black'
        }

        atividCadast.focus()
        botão.disabled = true
        ativ.disabled = true
        botEditSave.innerHTML = 'Salvar'
        botEditSave.style.visibility = 'visible'
        botEditSave.style.background = 'greenyellow'
        botEditSave.style.borderRadius = '5px'
        botEditSave.style.position = 'absolute'
        botEditSave.style.color = 'black'
        botEditSave.style.fontWeight = 'bold'
        botEditSave.style.fontSize = '10pt'
        botEditSave.style.width = '50px'
        botEditSave.style.textAlign = 'center'
        botEditSave.style.padding = '2px'
        botEditSave.style.marginTop = '50px'
        botEditSave.style.marginLeft = '-318px'
        tab.appendChild(botEditSave)

      })

      botEditSave.addEventListener('click', function () {
        atividCadast.disabled = true
        atividCadast.style.background = 'white'
        atividCadast.style.color = 'black'


        botEditSave.style.visibility = 'hidden'
        botão.disabled = false
        ativ.disabled = false

      })




      atividCadast.type = 'text'
      atividCadast.disabled = true

      atividCadast.style.width = '240px'
      atividCadast.style.marginTop = '20px'
      atividCadast.style.fontSize = '10pt'
      atividCadast.style.background = 'white'
      atividCadast.style.borderRadius = '5px'
      atividCadast.style.marginLeft = '10px'
      atividCadast.style.color = 'black'
      atividCadast.style.fontFamily = 'Space'
      atividCadast.style.fontWeight = 'bold'
      atividCadast.value = valueAtiv

      //tab.appendChild(tabela)
      //tabela.appendChild(linha)
      tab.appendChild(atividCadast)
      tab.appendChild(botdel)
      tab.appendChild(botEdt)
    

    } else {
      resetar.addEventListener('click', limpar)
      function limpar() {
        atividCadast.value = ''
        atividCadast.remove(atividCadast)
        botdel.remove(botdel)
        botEdt.remove(botEdt)
        botão.style.visibility = 'visible'
        ativ.value = ''
        ativ.placeholder = 'Atividade'
        ativ.disabled = false
        botão.disabled = false
        botdel.remove(botdel)
        botEdt.remove(botEdt)
      }


      var botdel = document.createElement('button')
      var botEdt = document.createElement('button')
      

      var atividCadast = document.createElement('input')
      botdel.innerHTML = 'X'

      var botEditSave = document.createElement('button')
      atividCadast.appendChild(botEditSave)
      //Salvar edição
  

      //deletar tarefa
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '10pt'
      botdel.style.padding = '2px'
      botdel.style.width = '35px'
      botdel.style.textAlign = 'center'

      botdel.addEventListener('click', function () {
        var excluir = confirm('Você realmente deseja excluir esse item?')
        if(excluir == true) {
          atividCadast.remove(atividCadast)
          botdel.remove(botdel)
          botEdt.remove(botEdt)
        }
        
      })

      //editar tarefa 
      botEdt.innerHTML = 'Edit'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '40px'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '10pt'
      botEdt.style.padding = '2px'
      botEdt.style.background = 'none'
      

     
      botEdt.addEventListener('click', function () {
        atividCadast.disabled = false
        if (container.style.background == 'black') {
          atividCadast.style.background = 'black'
          atividCadast.style.color = 'white'
        } else if (container.style.background == 'white') {
          atividCadast.style.background = 'gray'
          atividCadast.style.color = 'white'
        } else {
          atividCadast.style.background = 'chartreuse'
          atividCadast.style.color = 'black'
        }
       
        atividCadast.focus()
        botão.disabled = true
        ativ.disabled = true
        botEditSave.innerHTML = 'Salvar'
        botEditSave.style.visibility = 'visible'
        botEditSave.style.background = 'greenyellow'
        botEditSave.style.borderRadius = '5px'
        botEditSave.style.position = 'absolute'
        botEditSave.style.color = 'black'
        botEditSave.style.fontWeight = 'bold'
        botEditSave.style.fontSize = '10pt'
        botEditSave.style.width = '50px'
        botEditSave.style.textAlign = 'center'
        botEditSave.style.padding = '2px'
        botEditSave.style.marginTop = '50px'
        botEditSave.style.marginLeft = '-318px'
        tab.appendChild(botEditSave)
        
      })
      
     botEditSave.addEventListener('click', function () {
        atividCadast.disabled = true
        atividCadast.style.background = 'white'
        atividCadast.style.color = 'black'
        
       
       botEditSave.style.visibility = 'hidden'
      botão.disabled = false
       ativ.disabled = false
        
      })


      

      atividCadast.type = 'text'
      atividCadast.disabled = true
     
      atividCadast.style.width = '240px'
      atividCadast.style.marginTop = '20px'
      atividCadast.style.fontSize = '10pt'
      atividCadast.style.background = 'white'
      atividCadast.style.borderRadius = '5px'
      atividCadast.style.marginLeft= '10px'
      atividCadast.style.color = 'black'
      atividCadast.style.fontFamily = 'Space'
      atividCadast.style.fontWeight = 'bold'
      atividCadast.value = valueAtiv

      //tab.appendChild(tabela)
      //tabela.appendChild(linha)
      tab.appendChild(atividCadast)
      tab.appendChild(botdel)
      tab.appendChild(botEdt)
    }

  }
}
botão.addEventListener('click', adicionar)



