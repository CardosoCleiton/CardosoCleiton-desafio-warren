var numReverso = []
var numNormal = []
var limite = 1000000

//funcao que inverte a posição dos elementos de uma string ex."100" to "001"
var inverso = function reverse(i) {
    return i.split('').reverse('').join('');
}

//fazer o loop de 1 a 1milhão

for (var i = limite; i >= 0; i--) {
    numReverso[i] = inverso(i.toString())
}

///filtrar os validos Reverso
var numValidos = numReverso.filter(function (item) {
    return item.charAt(0) != "0"
})

//funcao que inverte a string para number
let numValidosReverso = numValidos.map(i => Number(i));
console.log(numValidosReverso)

let numValidosR = numValidosReverso.map(i => Number(i));

for (var i = 0; i <= numValidosReverso.length - 1; i++) {
    numValidosReverso[i] = inverso(numValidosReverso[i].toString())
}

let numValidosN = numValidosReverso.map(i => Number(i));

//console.log(numValidosR)
//console.log(numValidosN)


for (var i = 0; i <= numValidosN.length - 1; i++) {
    if (((numValidosN[i] + numValidosR[i]) % 2) != 0) {
        var numeroSoma = + i
        var somaVetores = numValidosN[i]+  numValidosR[i]
        console.log(`Numero valido ${numValidosN[i]} + seu inverso ${numValidosR[i]} = ${somaVetores}`)
        console.log(`${numValidosN[i]}`)
    }
}
console.log(`Existem ${numeroSoma} interações satisfatórias para um intervalo de 0 a 1milhão`)





