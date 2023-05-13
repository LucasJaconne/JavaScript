/*
function some(n1, n2){
    return n1 + n2
}

let soma = some(2, 4)
console.log(soma)
*/

// no caso acima, colocaos o 2 e 4 como parametro, cada um ocupando respectivamente n1 e n2


function soma (n1=0, n2=0){
    return n1 + n2
}

let some = soma(1)
console.log(some)

// no caso acima, temos uma coisa q pode aocntecer, se um dos parametros nao for oferecido, ent automaticamente ira valer 0, pois n1 e n2 estão (=0)
// o que faz ficar automaticamente 0 se n for oferecido um valor a qualquer um deles, ent ira retornar apenas 1