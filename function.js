console.log("ai sim")

//FUNCTION, NOME, (PARAMETROS) { ESCOPO }
// function somar(){
//     let numa = 1
//     let numb = 20
//     const soma = numa + numb
//     console.log(soma)
// }
// const somar = () => {
//     let numa = 1
//         let numb = 20
//         const soma = numa + numb
//         console.log(soma)
// }
// somar()

// (()=>{
//     console.log("funcao anonima")
// })()
function somar(numa = 0,numb = 0){
    // let numa = 1
    // let numb = 20
    const soma = numa + numb
    return soma
}
// const numa = prompt("digite um numero")
// const numb = prompt("digite um numero")
// const resultado =  somar(numa,numb)
// console.log(resultado,"resultado")

// function multiplica(numa,numb){
//     return numa*numb
// }
// const resultadoMultiplicacao = multiplica(3,8)
// console.log(resultadoMultiplicacao)
const listaNumeros =[1,2,4,5,8]
const resultLista = multiplcaPorTres(listaNumeros,10)

function multiplcaPorTres(lista=[],multiplcador){
    console.log(lista,"lista parametro",multiplcador)
    let aux = []
    for(let i = 0;i < lista.length; i++){
        aux.push(lista[i]/multiplcador)
    }
    return aux
}

console.log(resultLista,"lista")
