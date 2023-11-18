function calcular() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    var res = document.getElementById('res')

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        res.innerHTML = '[Error] Insira todos os dados'
    } else {
        res.innerHTML = 'Contando...'
        var val1 = Number(n1.value)
        var val2 = Number(n2.value)
        var val3 = Number(n3.value)
        if (val1 < val2) {
            //Contagem crescente
            for (var c = val1; c <= val2; c += val3) {
                res.innerHTML += ` ${c},   `
            }
        } else {
            //contagem regressiva
            for (let c = val1; c >= val2; c -= val3){
                res.innerHTML += ` ${c} >  `
            }
        }
    }
}