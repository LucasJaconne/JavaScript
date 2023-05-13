function calcular(){
    var num = document.querySelector('input#num')
    var tabela = document.querySelector('select#seltab')

    if (num.value.length == 0){ // se num for nulo, vai da erro
        window.alert('Por favor, digite um número!')
    } else {
        var numero = Number(num.value)
        tabela.innerHTML = '' // serve para zerar o último e fazer um novo
        for (var c = 1; c <= 10; c++){
            var calculo = numero * c
            var item = document.createElement('option') // criamos um option no seletc do HTML
            item.text = `${numero} * ${c} = ${calculo}` // criamos um texto para item
            item.value = `tabela${c}` // usado para dar um valor para cada item c
            tabela.appendChild(item) // aqui adicionamos o item para a tabela, usando esse comando
        }
    }

    
    
}