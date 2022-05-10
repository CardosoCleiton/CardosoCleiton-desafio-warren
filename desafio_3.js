

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

    while (vetorNumbers[i] <= 0 || vetorNumbers[i] == nTotal || vetorNumbers[i] > nTotal) {

        vetorNumbers[i] = parseFloat(prompt(`Digite o ${(i + 1)}º numero do vetor! Lembre nao pode ser 0 e não pode ser igual ou maior que o  numero ${(nTotal)}, que você digitou`))
    }
}
for (var i = 0; i < vetorNumbers.length; i++) {
    somaNumbers += vetorNumbers[i]
    //console.log(somaNumbers)
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
    console.log("Entrou aqui na condição de vetor de 2 elementos")

    var novoArray = new Array(2).fill(vetorNumbers[2])
    const somaVetor = novoArray.reduce(soma);

    if (somaVetor == nTotal) {
        listVector.moveNumber(novoArray)
        console.log(`Abaixo o único vetor possivel para essa situação`)
        console.log(listVector.vector)

    } else if (somaVetor != nTotal) {
        while (novoArray[0] != vetorNumbers[0] && novoArray[1] != vetorNumbers[0]) {
            for (i = 2; i >= 0; i--) {
                novoArray[1] = vetorNumbers[i]
                const somaVetor = novoArray.reduce(soma)
                console.log(somaVetor, novoArray, vetorNumbers)

                if (somaVetor == nTotal) {
                    listVector.moveNumber(novoArray)
                }
            }

            for (i = 1; i >= 0; i--) {

                novoArray = new Array(2).fill(vetorNumbers[1])
                novoArray[1] = vetorNumbers[i]
                const somaVetor = novoArray.reduce(soma)
                if (somaVetor == nTotal) {
                    listVector.moveNumber(novoArray)
                    console.log(`Abaixo os vetores possiveis`)
                    console.log(listVector.vector)
                }
            }

        }
    } else {
        console.log('Não foram encontrados vetores para essa situação, porque a soma dos numeros passado não dá um valor exato')
    }

}
//testar se o numero passado  menos a soma dos valores do vetor é menor do que a metade metade do numero passado e se é maior do que zero
//caso esse teste seja true o vetor terá no maximo três posições
else if (somaNumbers >= nTotal && vetorNumbers[2] < nTotal / 2) {
    console.log("entrou no if de no maximo 3 elementos")
    var x = 2
    var novoArray = vetorNumbers
    const somaVetor = novoArray.reduce(function (somaVetor, i) {
        return somaVetor + i;
    });

    console.log(somaVetor, novoArray, vetorNumbers)

    if (somaVetor == nTotal) {
        listVector.moveNumber(novoArray)
        console.log(`Abaixo o único vetor possivel para essa situação`)
        console.log(listVector.vector)
    } else if (somaVetor != nTotal) {

        novoArray = new Array(3).fill(vetorNumbers[2])

        while (novoArray[0] != vetorNumbers[0] && novoArray[1] != vetorNumbers[0] && novoArray[2] != vetorNumbers[0]) {

            while (x >= 0) {
                for (i = 2; i >= 0; i--) {
                    novoArray = new Array(3).fill(vetorNumbers[x])
                    novoArray[x] = vetorNumbers[i]
                    const somaVetor = novoArray.reduce(function (somaVetor, i) {
                        return somaVetor + i;
                    });
                    if (somaVetor == nTotal) {
                        listVector.moveNumber(novoArray)
                        console.log(`Abaixo os vetores para essa situação`)
                        console.log(listVector.vector)
                    }
                }
                x--
            }
        }
    } else {
        console.log('Não foram encontrados vetores para essa situação, porque a soma dos numeros passado não dá um valor exato')
    }
}
//entra nesse if somente se os novos arrays tiverem mais de três posições.
else if (somaNumbers > 0) {
    console.log("entrou no if de mais de 4 elementos")
    var novoArray = new Array(4).fill(vetorNumbers[2])
    var somaVetor = novoArray.reduce(function (acumulador, valorAtual, index, array) {
        return acumulador + valorAtual;
    });

    if (somaVetor == nTotal) {
        console.log(`entrou no if de igualdade`)
        listVector.moveNumber(novoArray)
        console.log(`Abaixo o único vetor para essa situação`)
        console.log(listVector.vector)
    } else if (somaVetor != nTotal) {

        // console.log("entrou no if de mais de 4 elementos")
        // const novoArray = new Array(4).fill(vetorNumbers[2])
        var somaVetor = novoArray.reduce(function (acumulador, valorAtual, index, array) {
            return acumulador + valorAtual;
        });

        console.log("entrou no else if")
        var numPlus = 4
        while (nTotal > somaVetor) {
            console.log("entrou no while")
            novoArray = new Array(numPlus++).fill(vetorNumbers[2])
            novoArray.push(vetorNumbers[2]); // inserir o valor de vetorNumber na posição de indice 2 na ultima posição do novoArray
            somaVetor = novoArray.reduce(function (acumulador, valorAtual, index, array) {
                return acumulador + valorAtual;
            });
            console.log("chegou aqui")
            console.log(novoArray, somaVetor, nTotal)

            if (somaVetor == nTotal) {
                listVector.moveNumber(novoArray)
                console.log(`Abaixo os vetores para essa situação`)
                console.log(listVector.vector)
            }
        }
        console.log("saiu do while ")
        while (novoArray[0] != vetorNumbers[1]) {
            novoArray.push(vetorNumbers[1]); // ascresenta outro valo ao final do array ..... vetorNumbers precisa rodar array[array.length - 1]
            novoArray.shift(); // tira a primeira posição do array
            console.log("entrou do while 2 ")
            console.log(novoArray, somaVetor, nTotal)
        }
        console.log("saiu do while 2 ")
        while (novoArray[0] != vetorNumbers[0]) {
            novoArray.push(vetorNumbers[0]); // ascresenta outro valo ao final do array ..... vetorNumbers precisa rodar array[array.length - 1]
            novoArray.shift(); // tira a primeira posição do 
            console.log("entrou do while 3 ")
            console.log(novoArray, somaVetor, nTotal)
        }
        console.log("saiu do while 3 ")

        //console.log(listVector.vector)
    } else {
        console.log('Não foram encontrados vetores para essa situação, porque a soma dos numeros passado não dá um valor exato')
    }
} else {
    console.log('Não foram encontrados vetores para essa situação, porque a soma dos numeros passado não dá um valor exato')
}










