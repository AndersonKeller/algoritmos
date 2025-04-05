function filtro(array=[],condicao){
    let lista = []
    for(let i = 0; i <= array.length; i++){
        if(array[i] < condicao){
            lista.push(array[i])
        }
    }
    return lista
}
const filter = filtro([1,2,3,4,5],3)
// console.log(filter,"filtro")

const lista = [1,23,45,67,8,9]


console.log(lista,"inicial")
// FILTER RET0RNA SEMPRE UM ARRAY, COM ITEMS QUE PASSAM PELA CONDIÇÃO
// SE NENHUM ITEM PASSAR, []
const result = lista.filter((item)=>{
    // console.log(item,"item")
    return item > 3
})
// console.log(result)

//SEMPRE RETORNA UM ARRAY DO MESMO TAMANHO
const resultMap = lista.map((item)=>{
    if(item < 3){
        return item * 3
    }else {
        return item
    }
})
// console.log(resultMap,"map")

//FOREACH
//FOREACH SÓ PERCORRE O ARRAY, NÃO RETORNA NADA
let aux = []
const resultForEach = lista.forEach((item)=>{
    if(item > 9){
        aux.push(item)
    }
    return item
})
// console.log(resultForEach,"foreach",aux)


//FIND 
//PERCORRE O ARRAY E RETORNA O PRIMEIRO ITEM QUE PASSAR NA CONDIÇÃO
const resultFind = lista.find((item)=>{
    console.log("item find")
    return item >3
})
//console.log(resultFind,"find")

//FIND INDEX
//PERCORRE O ARRAY E RETORNA O INDEX DO ITEM ENCPNTRADO PELA CONDIÇÃO

const resultFindIndex = lista.findIndex((item)=>{
    console.log("item find")
    return item >3
})
console.log(resultFindIndex,"index")

//SPLICE
//REMOVE UM ITEM DO ARRAY, e ALTERA O ARRAY ORIGINAL
// lista.splice(1,1)
// console.log(lista)

//SLICE RETORNA UM TRECHO DO ARRAY, SEM ALTERAR O ORIGINAL
const resultSlice = lista.slice(1,3)
console.log(lista,"lista")
console.log(resultSlice,"resultSlice")

