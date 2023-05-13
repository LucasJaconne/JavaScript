 

    function verificar(){
        var data = new Date()
        var currentYear = data.getFullYear()
        var ano = document.querySelector('input#idade')
        var idade = Number(ano.value)
        var resultado = currentYear - idade
        var mas = document.querySelector('input#masc')
        sexo = mas.checked ? "Masculino" : "Feminino"
        var res = document.querySelector('div#resp')
        if(resultado > 0 && resultado <=12 ){
            res.innerHTML = (`Você é do sexo ${sexo} e tem ${resultado} ano(s) de idade`)
        } else if (resultado > 13 && resultado <=18) {
            res.innerHTML = (`Você é do sexo ${sexo} e tem ${resultado} ano(s) de idade`)
        } else if (resultado > 19 && resultado <=40) {
            res.innerHTML = (`Você é do sexo ${sexo} e tem ${resultado} ano(s) de idade`)
        } else if (resultado > 41 && resultado <=120) {
            res.innerHTML = (`Você é do sexo ${sexo} e tem ${resultado} ano(s) de idade`)
        } else {
            window.alert(`ERRO, digite sua idade novamente`)
        }
    }


