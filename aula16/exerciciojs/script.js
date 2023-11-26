let num = []

function adicionar() {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('sel')
    let valor = Number(txtn.value)
    if (valor < 0 || valor > 100 || txtn.value.length == '') {
        window.alert('Insira um valor entre 0 e 100')
    } else {
        num.push(valor)
        let item = document.createElement('option')
        item.text = `Valor ${Number(txtn.value)} adicionado`
        tab.appendChild(item)
        txtn.value = ''
    }
}



function calcular() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    if (num == 0) {
        res.innerHTML = 'Adicione os valores corretamente'
    } else {
        let ini = [...num]
        ini.sort(function (a, b) {
            return a - b;
        });

        res.innerHTML += (`Ao todo, temos ${num.length} valores<br>`)
        res.innerHTML += (`O menor valor informado foi ${ini[0]} <br>`)
        res.innerHTML += (`O maior valor informado foi ${ini[ini.length - 1]}<br>`)

        // Calcular a soma dos valores
        let soma = num.reduce((total, valor) => total + valor, 0);

        // Calcular a média
        let media = soma / num.length;

        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`;
        res.innerHTML += `A média dos valores informados é ${media.toFixed(2)}`;
    }
}

