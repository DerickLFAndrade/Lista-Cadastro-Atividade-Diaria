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
  op1.value = ''
  op2.value = ''
  op3.value = ''
  op4.value = ''
  op5.value = ''
  op6.value = ''
  op7.value = ''
  op8.value = ''
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
    var botEditSave = document.createElement('button')
   


    

    //Função 1
    if (op2.value == '' && op3.value == '' && op4.value == '' && op5.value == '' && op6.value == '' && op7.value == '' && op8.value == '') {
      
      op1.value = `- ${ativ.value}`
      op2.value = '-'
      ativ.value = ''
      ativ.placeHolder = 'Atividade'
      ativ.focus

      //deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '3vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      //editar tarefa 
      botEdt.innerHTML = 'Editar'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '3vw'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      //Salvar edição
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '3vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'

 
      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 1?')
        
        if(resultado == true) {
          op1.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op1.disabled = false
  
          op1d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op1.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)

            if (op1.value == '' || op2.value == '' ||  op3.value == '' ||  op4.value == '' ||  op5.value == '' ||  op6.value == '' ||  op7.value == '' ||  op8.value == '' ) {
              ativ.disabled = false
            } else if (op1.value == '-' || op2.value == '-' || op3.value == '-' || op4.value == '-' || op5.value == '-' || op6.value == '-' || op7.value == '-' || op8.value == '-') {
              ativ.value = false
            }
            
          })
        } 
       


      })

      op1d.appendChild(botdel)

    
      //Função do botão editar tarefa
      botEdt.addEventListener('click', function() {
        op1.disabled = false
       
        op1d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function() {
          op1.disabled = true
          
          botEditSave.remove(botEditSave)
        })

      })
      
      op1d.appendChild(botEdt)
    } 

//função 2
    else if (op3.value == '' && op4.value == '' && op5.value == '' && op6.value == '' && op7.value == '' && op8.value == '') {

      op2.value = `- ${ativ.value}`
      op3.value = '-'
      ativ.value = ''
      ativ.placeHolder = 'Atividade'
      ativ.focus
      
      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '8vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '8vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '8vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 2?')

        if (resultado == true) {
          op2.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op2.disabled = false

          op2d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op2.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op2d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op2.disabled = false

        op2d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op1.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op2d.appendChild(botEdt)

    } 
    //função 3
    else if (op4.value == '' && op5.value == '' && op6.value == '' && op7.value == '' && op8.value == '') {
      

      op3.value = `- ${ativ.value}`
      op4.value = '-'
      ativ.value = ''
      ativ.placeHolder = 'Atividade'
      ativ.focus

      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '13.3vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '13.3vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '13.3vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 3?')

        if (resultado == true) {
          op3.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op3.disabled = false

          op3d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op3.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op3d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op3.disabled = false

        op3d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op3.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op3d.appendChild(botEdt)

    }


    
    //Função 4
    else if (op5.value == '' && op6.value == '' && op7.value == '' && op8.value == '') {

      op4.value = `- ${ativ.value}`
      op4.style.marginTop = '3.4vw'
      op5.value = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '18.7vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '18.7vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '18.7vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 4?')

        if (resultado == true) {
          op4.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op4.disabled = false

          op4d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op4.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op4d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op4.disabled = false

        op4d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op4.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op4d.appendChild(botEdt)

    

    } 

    //Função 5
    else if (op6.value == '' && op7.value == '' && op8.value == '') {

      op5.value = `- ${ativ.value}`
      op5.style.marginTop = '3.6vw'
      op6.value = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '24.5vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '24.5vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '24.5vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 5?')

        if (resultado == true) {
          op5.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op5.disabled = false

          op5d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op5.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op5d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op5.disabled = false

        op5d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op5.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op5d.appendChild(botEdt)



    

    } 
    
    //Função 6
    else if (op7.value == '' && op8.value == '') {

      op6.value = `- ${ativ.value}`
      op6.style.marginTop = '3.6vw'
      op7.value = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '30.3vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '30.3vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '30.3vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 5?')

        if (resultado == true) {
          op6.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op6.disabled = false

          op6d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op6.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op6d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op6.disabled = false

        op6d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op6.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op6d.appendChild(botEdt)



    } 
    
    //Função 7
    else if (op8.value == '') {

      op7.value = `- ${ativ.value}`
      op7.style.marginTop = '3.6vw'
      op8.value = '-'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus

      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '36.1vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '36.1vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '36.1vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 5?')

        if (resultado == true) {
          op7.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op7.disabled = false

          op7d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op7.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op7d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op7.disabled = false

        op7d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op7.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op7d.appendChild(botEdt)

    }

    //Função 8
    else {

      op8.value = `- ${ativ.value}`
      op8.style.marginTop = '3.6vw'
      ativ.value = ''
      ativ.placeholder = 'Atividade'
      ativ.focus
      botão.disabled = true
      ativ.disabled = true

      //Style botão deletar tarefa
      botdel.innerHTML = 'X'
      botdel.style.position = 'absolute'
      botdel.style.left = '37vw'
      botdel.style.top = '41.9vw'
      botdel.style.background = 'red'
      botdel.style.borderRadius = '5px'
      botdel.style.color = 'black'
      botdel.style.fontWeight = 'bold'
      botdel.style.fontSize = '1.2vw'
      botdel.style.width = '3vw'

      ////Style botão editar tarefa
      botEdt.innerHTML = 'Editar'
      botEdt.style.position = 'absolute'
      botEdt.style.left = '39.8vw'
      botEdt.style.top = '41.9vw'
      botEdt.style.borderRadius = '5px'
      botEdt.style.color = 'black'
      botEdt.style.fontWeight = 'bold'
      botEdt.style.width = '5vw'
      botEdt.style.textAlign = 'center'
      botEdt.style.fontSize = '1.2vw'
      botEdt.style.background = 'none'

      ////Style botão salvar tarefa
      botEditSave.innerHTML = 'Salvar'
      botEditSave.style.position = 'absolute'
      botEditSave.style.left = '44.5vw'
      botEditSave.style.top = '41.9vw'
      botEditSave.style.background = 'greenyellow'
      botEditSave.style.borderRadius = '5px'
      botEditSave.style.color = 'black'
      botEditSave.style.fontWeight = 'bold'
      botEditSave.style.fontSize = '1.2vw'
      botEditSave.style.width = '4.5vw'
      botEditSave.style.textAlign = 'center'



      //Função do botão deletar uma tarefa
      botdel.addEventListener('click', function () {
        var resultado = confirm('Você realmente deseja exluir o item - 5?')

        if (resultado == true) {
          op8.value = '- '
          botão.style.visibility = 'visible'
          ativ.value = ''
          ativ.placeholder = 'Atividade'
          ativ.disabled = true
          botão.disabled = true
          op8.disabled = false

          op8d.appendChild(botEditSave)

          botEditSave.addEventListener('click', function () {
            op8.disabled = true
            botão.disabled = false
            botEditSave.remove(botEditSave)
            ativ.disabled = false
          })
        }



      })

      op8d.appendChild(botdel)


      //Função do botão editar tarefa
      botEdt.addEventListener('click', function () {
        op8.disabled = false

        op8d.appendChild(botEditSave)

        //Função do botão editar e salvar uma tarefa
        botEditSave.addEventListener('click', function () {
          op8.disabled = true

          botEditSave.remove(botEditSave)
        })

      })

      op8d.appendChild(botEdt)

      if (op8.value == true) {
        ativ.disabled = true
        botão.disabled = true
      }

    }

   
  }
}
botão.addEventListener('click', adicionar)
resetar.addEventListener('click', limpar)


