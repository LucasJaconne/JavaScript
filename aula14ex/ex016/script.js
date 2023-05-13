function Contar(){
var ini = document.querySelector('input#início')
var f = document.querySelector('input#fim')
var pas = document.querySelector('input#passo')
var resp = document.querySelector('div#resp')


if (ini.value < 0 || f.value.length == 0 || pas.value.length == 0){ // aqui colocamos  que se ini for menor q 0 ou fim for nulo ou ou pas for nulo, vai dar erro
  window.alert('Erro')
} else {
  var inicio = Number(ini.value) // aqui pegamos cada variael e transformamos em number
  var fim = Number(f.value)
  var passo = Number(pas.value)
  resp.innerHTML = '' // isso serve para quando for colocar outros valores no input, zera o anterior e faz outro, ou seja, dxa a caixa vazia
if (inicio < fim){ // contagem crescente
  for (var c = inicio; c <= fim; c += passo){ //usamos o c+= passo para somar o c mais o passo
    resp.innerHTML += `${c} \uD83D\uDC49` // usamos para concatenar o que ja tinha antes e colocar um novo, ou seja, coloca todos os números (MUITO IMPORTANTE)
    
  }
  resp.innerHTML += `\uD83C\uDFC1` // coloca o emote após acabar
} else { 
  for (var c = inicio; c >= fim; c -= passo){ // contagem regressiva
    resp.innerHTML += `${c} \uD83D\uDC49`
  }
  resp.innerHTML += `\uD83C\uDFC1`
}
  
}



  
  
   
 
 } 
 
 



