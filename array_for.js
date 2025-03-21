// let nome = "Anderson"
// let numeros = [ 0,1,2,3 ]
// console.log(nome)
// console.log(nome.length)

//LAÇO FOR - LAÇO DE REPETIÇÃO
// < MENOR QUE
// > MAIOR QUE

// FOR PERCORRE UMA LISTA.
// [ 1,2,3 ]
// index = 0 até o último elemento da lista.
// let contadorVogais = 0
// for(let i= 0; i < nome.length; i++){
//     console.log(nome[i],i)
//     if(nome[i].toLowerCase() === "a" || nome[i].toLowerCase()==="e" || nome[i].toLowerCase()==="i"|| nome[i].toLowerCase()==="o" || nome[i].toLowerCase()==="u"){
//         contadorVogais++
//     }
//     // console.log(nome[10])
// }

// console.log(contadorVogais,"Seu nome possui esse numero de vogais")

let numeros = [ 0,1,2,3,4,5,6,7,10,43,50 ] 
let pares = []
let impares = []
for(let i = 0; i< numeros.length;i++){
    if(numeros[i] % 2 == 0){
        pares.push(numeros[i])
    }else{
        impares.push(numeros[i])
    }
}

console.log(numeros)
console.log(pares)
console.log(impares)
