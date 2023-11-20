let valores = [8, 1, 7, 5 ,4, 2]

/*

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

//forma simplificada do código acima
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`o Valor 2 está na posição ${valores.indexOf(2)}`)


let num = valores.indexOf(3)
if (num == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`o Valor está na posição ${num}`)
}

