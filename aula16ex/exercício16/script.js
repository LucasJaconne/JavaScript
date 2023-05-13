
    let num =document.querySelector('input#numero')
    let tabela = document.querySelector('select#resul')
    let resp = document.querySelector('div#res')
    let vetor = []

    function Numero(n) {
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function Lista(n, l){
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function add(){
        if ( Numero(num.value) && !Lista(num.value, vetor)) {

            vetor.push(Number(num.value))
            let item = document.createElement ('option')
            item.text = `Valor ${num.value} adicionado`
            tabela.appendChild(item)
            resp.innerHTML = ''

        } else {
         window.alert ('valor inválido ou já encontrado na lista')
        }
        num.value = '' // para esvaziar após colocar um numero
        num.focus() // para voltar o cursor na barra
       
}

function fin() {
    
    if (vetor.length == 0) {
        window.alert ('Adiciona um valor acima')
    } else {
        resp.innerHTML = `Temos ${vetor.length} números cadastrados <br>`
        vetor.sort
        let maior = vetor[0]
        let menor = vetor[0]
        for (let pos in vetor){
            if (vetor[pos] > maior){
            maior = vetor[pos]}
            if (vetor[pos] < menor){
            menor = valores[pos]}
        }
        
    }
        resp.innerHTML += `O maior valor é ${maior} <br>`
        resp.innerHTML += `O menos valor é ${menor}`
    

}

