var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

/*
        0 == Domingo
        1 == segunda
        2 == terça
        3 == quarta
        4 == quinta
        5 == sexta
        6 == sábado

        Nesse caso o console vai pegar o dia de hj, porém vai mostrar o valor que corresponde ao dia, por exemplo se for segunda ele irá mostar o valor 1
        Para mudar isso, podemos usar o switch, pois se trata de valores fixos, que são os dias da semana

*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
        break
}