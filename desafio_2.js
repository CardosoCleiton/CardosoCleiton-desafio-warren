var numeroAlunos = Number(prompt("Digite o numero de alunos que frequentam as aula"))
var vetorHorarios=[]
var vetorHorarioAtrasado=[]

while (numeroAlunos <= 0) {
    numeroAlunos = Number(prompt(`O numero minimo de alunos deve ser 3`))
}

for (var i = 0; i < numeroAlunos; i++) {
    vetorHorarios[i] = Number(prompt(`Digite o tempo de chegada do ${(i + 1)}º aluno`))
}

console.log(vetorHorarios)

vetorHorarioAtrasado = vetorHorarios.filter(function(item){
    return item > 0;
})

console.log(vetorHorarioAtrasado)
console.log(vetorHorarioAtrasado.length)

if((numeroAlunos - vetorHorarioAtrasado.length)>=3){

    console.log("Aula Normal")

}else{
    console.log("Aula Cancelada")
}