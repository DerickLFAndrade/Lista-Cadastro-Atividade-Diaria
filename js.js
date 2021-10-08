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
  resetar.style.color = 'white'
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

  resetar.style.background = 'white'
  resetar.style.color = 'black'
  botão.style.background = 'gray'
  botão.style.color = 'black'
  tab.style.background = 'linear-gradient(white, gray, black)'

}
function temaPadrão() {
  titulo.style.background = 'rgb(139, 194, 29)'
  titulo.style.color = 'white'
  titulo.style.boxShadow = '5px 5px 10px rgb(139, 194, 29)'
  ativ.style.background = 'rgb(210, 236, 183)'
  ativ.style.color = 'black'
  container.style.background = 'lightgreen'
  container2.style.background = 'linear-gradient(rgb(31, 46, 31), gray, green)'
  container2.style.boxShadow = '0px 0px 2px white'
  tab.style.background = 'linear-gradient(rgb(77, 88, 77), gray, green)'
  resetar.style.background = 'greenyellow'
  resetar.style.color = 'rgb(65, 60, 60)'
  botão.style.background = 'rgb(59, 56, 56)'
  botão.style.color = 'rgb(212, 201, 201)'
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
 
  if (ativ.value == '') {
    alert('Para cadastrar uma atividade, preencha o campo "Atividade" abaixo e clique em "Cadastrar"')
  } else {
    if (window.matchMedia("(min-width: 863px)").matches) {

      resetar.addEventListener('click', limpar)
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
        botdel.remove(botdel)
        botEdt.remove(botEdt)
      }

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

          if (resultado == true) {
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

              if (op1.value == '' || op2.value == '' || op3.value == '' || op4.value == '' || op5.value == '' || op6.value == '' || op7.value == '' || op8.value == '') {
                ativ.disabled = false
              } else if (op1.value == '-' || op2.value == '-' || op3.value == '-' || op4.value == '-' || op5.value == '-' || op6.value == '-' || op7.value == '-' || op8.value == '-') {
                ativ.value = false
              }

            })
          }



        })

        op1d.appendChild(botdel)


        //Função do botão editar tarefa
        botEdt.addEventListener('click', function () {
          op1.disabled = false

          op1d.appendChild(botEditSave)

          //Função do botão editar e salvar uma tarefa
          botEditSave.addEventListener('click', function () {
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
              ativ.disabled = true
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
            op2.disabled = true

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
        atividCadast.remove(atividCadast)
        botdel.remove(botdel)
        botEdt.remove(botEdt)
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
        botEditSave.style.marginLeft = '-345px'
        tab.appendChild(botEditSave)
        
      })
      
     botEditSave.addEventListener('click', function () {
        atividCadast.disabled = true
       botEditSave.style.visibility = 'hidden'
      botão.disabled = false
       ativ.disabled = false
        
      })


      

      atividCadast.type = 'text'
      atividCadast.disabled = true
     
      atividCadast.style.width = '270px'
      atividCadast.style.marginTop = '20px'
      atividCadast.style.fontSize = '10pt'
      atividCadast.style.background = 'white'
      atividCadast.style.borderRadius = '5px'
      atividCadast.style.marginLeft= '10px'
      atividCadast.style.color = 'black'
      atividCadast.style.fontFamily = 'Space'
      atividCadast.style.fontWeight = 'bold'
      atividCadast.value = ativ.value

      //tab.appendChild(tabela)
      //tabela.appendChild(linha)
      tab.appendChild(atividCadast)
      tab.appendChild(botdel)
      tab.appendChild(botEdt)
    }

  }
}
botão.addEventListener('click', adicionar)



