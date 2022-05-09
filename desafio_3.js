

var nTotal = parseFloat(prompt("Digite o numero que você quer somar"))
var vetorNumbers = []
var somaNumbers = 0
var vetorList = []
///*
while (nTotal <= 0) {
    nTotal = parseFloat(prompt(`Digite o numero que você quer somar ! Lembre nao pode ser 0 , não pode ser um texto ou uma letra e nem um valor vazio`))
}

//*/

for (var i = 0; i < 3; i++) {

    vetorNumbers[i] = parseFloat(prompt(`Digite o ${(i + 1)}ºnumero do vetor!`))

    while (vetorNumbers[i] <= 0 || vetorNumbers[i] == nTotal) {

        vetorNumbers[i] = parseFloat(prompt(`Digite o ${(i + 1)}º numero do vetor! Lembre nao pode ser 0 e não pode ser igual ao numero ${(nTotal)}, que você digitou`))
    }
}

for (var i = 0; i < vetorNumbers.length; i++) {
    somaNumbers += vetorNumbers[i]
    console.log(somaNumbers)
}

// organizar os elementos do vetorNumbers com o metodo sort 
vetorNumbers.sort(function (a, b) {
    if (a < b) {
        return -1
    } else {
        return true
    }
})

//criar uma lista de vetores validos
var listVector = {
    vector: [],
    moveNumber: function (num) {
        this.vector.push({ num });
    }
}

//somaVetor
var soma = function (total, item, indice, array) {
    total = total + item;
    if (indice == array.length - 1) {
        return total;
    }
}

//testar se o numero passado  menos a soma dos valores do vetor é negativo    
//caso seja negativo o novo vetor será de apenas duas posiçoes
if (((nTotal - somaNumbers) < 0) || (vetorNumbers[2] >= nTotal / 2)) {
    console.log("Entrou aqui na condição de vetor de 2 eleentos")

    var novoArray = new Array(2).fill(vetorNumbers[2])
    var somaVetor = novoArray.reduce(soma);

    if (somaVetor == nTotal) {
        listVector.moveNumber(novoArray)
    } else {
        while (novoArray[0] != vetorNumbers[0] && novoArray[1] != vetorNumbers[0]) {

            for (i = 2; i >= 0; i--) {
                novoArray[1] = vetorNumbers[i]
                somaVetor = novoArray.reduce(soma)
                if (somaVetor == nTotal) {
                    listVector.moveNumber(novoArray)
                }
            }

            for (i = 1; i >= 0; i--) {

                novoArray = new Array(2).fill(vetorNumbers[1])
                novoArray[1] = vetorNumbers[i]
                somaVetor = novoArray.reduce(soma)

                if (somaVetor == nTotal) {
                    listVector.moveNumber(novoArray)
                }
            }

            novoArray = new Array(2).fill(vetorNumbers[0])
            if (somaVetor == nTotal) {
                listVector.moveNumber(novoArray)
            }

        }
    }
    console.log(listVector.vector)
}

//testar se o numero passado  menos a soma dos valores do vetor é menor do que a metade metade do numero passado e se é maior do que zero
//caso esse teste seja true o vetor terá no maximo três posições
else if ((nTotal - somaNumbers) < (nTotal / 2)) {
    console.log("Pulou o if e entrou no else if aqui o maximo de elementos é 3")
    var x = 2
    var novoArray = vetorNumbers
    somaVetor = novoArray.reduce(function (somaVetor, i) {
        return somaVetor + i;
    });

    if (somaVetor == nTotal) {
        console.log(`entrou no ultimo if`)
        listVector.moveNumber(novoArray)
    }

    novoArray = new Array(3).fill(vetorNumbers[2])

    while (novoArray[0] != vetorNumbers[0] && novoArray[1] != vetorNumbers[0] && novoArray[2] != vetorNumbers[0]) {

        while (x >= 0) {
            for (i = 2; i >= 0; i--) {
                //console.log(`entrou no for ${x} vezes`)
                novoArray = new Array(3).fill(vetorNumbers[x])
                novoArray[x] = vetorNumbers[i]
                somaVetor = novoArray.reduce(function (somaVetor, i) {
                    return somaVetor + i;
                });
                //console.log(`este é o valor do novoArray ${novoArray}`)
                //console.log(`este é o valor do somaVetor ${somaVetor} na linha 103`)
                //console.log(`este é o valor do nTotal ${nTotal} na linha 103`)
                if (somaVetor == nTotal) {
                    console.log(`entrou no if`)
                    listVector.moveNumber(novoArray)
                }
            }
            x--
        }
        // console.log(`este é o valor do novoArray ${novoArray}`)
    }
    console.log(listVector.vector)
}

//entra nesse if somente se os novos arrays tiverem mais de três posições.
else{
    const novoArray = new Array(4).fill(vetorNumbers[2])
    somaVetor = novoArray.reduce(function (acumulador, valorAtual, index, array) {
        return acumulador + valorAtual;
    });

    if (somaVetor == nTotal) {
        console.log(`entrou no if de igualdade`)
        listVector.moveNumber(novoArray)
        console.log(listVector.vector)
    } else {
        var numPlus = 4
        while (nTotal > somaVetor) {
            const novoArray = new Array(numPlus++).fill(vetorNumbers[2])
            novoArray.push(vetorNumbers[2]); // inserir o valor de vetorNumber na posição de indice 2 na ultima posição do novoArray
            somaVetor = novoArray.reduce(function (acumulador, valorAtual, index, array) {
                return acumulador + valorAtual;
            });
            if (somaVetor == nTotal) {
                listVector.moveNumber(novoArray)
                console.log(listVector.vector)
            }
        }
        while (novoArray[0] != vetorNumbers[1]) {
            novoArray.push(vetorNumbers[1]); // ascresenta outro valo ao final do array ..... vetorNumbers precisa rodar array[array.length - 1]
            novoArray.shift(); // tira a primeira posição do array
        }
        while (novoArray[0] != vetorNumbers[0]) {
            novoArray.push(vetorNumbers[0]); // ascresenta outro valo ao final do array ..... vetorNumbers precisa rodar array[array.length - 1]
            novoArray.shift(); // tira a primeira posição do array
        }
        console.log(listVector.vector)
    }
}






