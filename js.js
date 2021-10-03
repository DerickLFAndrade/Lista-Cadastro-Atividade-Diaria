var ativ = document.getElementById('ativ')
var op1 = document.getElementById('opçãot1')
ativ.addEventListener('click', function () { 
    if(ativ.value == 'Atividade')
    {
    ativ.value = ''
    ativ.focus
    }
 })
 ativ.addEventListener('input', adicionar)
 function adicionar() {
     op1.innerHTML = ativ.value
   }