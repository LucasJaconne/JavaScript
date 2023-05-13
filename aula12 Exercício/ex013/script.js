function carregar(){
    var msg = document.querySelector('div#txt1')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora > 6 && hora < 12) {
        img.src = 'manhâ.png'
        document.body.style.background = '#e2c87f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#e4964d'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#081141'
    }

}
