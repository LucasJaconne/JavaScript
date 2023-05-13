var hora = new Date()
var agora = hora.getHours()
console.log(`Agora são ${agora} horas`)
if (agora < 12){
    console.log('Bom dia flor do dia')
} else if (agora < 18){
    console.log('Boa tarde flor da tarde')
} else {
    console.log('Boa noite flor da noite')
}