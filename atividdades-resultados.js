    //ATIVIDADE 1

    // DESENVOLVA UM ALGORITMO QUE INVERTE UMA PALAVRA, 
    // E EXIBA ELA DE TRÁS PARA FRENTE.
    // PODE SER USADO O PROMT/ALERT 
    // OU SOMENTE O CONSOLE.LOG EXEMPLO : "banana" - > "ananab"

    // let palavra = "banana da terra" // length = 6 index= 5
    // let resultado = ""

    // for(let i = palavra.length -1; i >= 0; i--){
    //     // console.log(palavra[i])
    //     //resultado = resultado + palavra[i]
    //     resultado += palavra[i]
    // }
    // console.log(resultado)
    
// ATIVIDADE 2

// DESENVOLVA UM ALGORITMO QUE RECEBE UMA PALAVRA OU FRASE, 
// E EXIBA ELA DA SEGUINTE FORMA
// SE O INDEX DELA FOR PAR, O CARACTER DEVE SER MAIÚSCULO, 
// SE O INDEX FOR ÍMPAR O CARACTER 
// DEVE SER MINÚSCULO EXEMPLO : "algoritmo" -> "AlGoRiTmO"

// let palavra = "banana"
// let resultado = ""

// for(let i =0;i<palavra.length;i++){
    
//     if(i % 2 ==0 ){
//         resultado += palavra[i].toUpperCase()
//     }else{
//         resultado += palavra[i].toLowerCase()
//     }   
// }
// console.log(resultado)

// ATIVIDADE 3

// -DESENVOLVA UM ALGORITMO QUE RECEBE UM ARRAY DE NÚMEROS 
// -SE O NÚMERO FOR DIVISÍVEL POR 3 EXIBA A PALAVRA "plic" 
// -SE O NÚMERO FOR DIVISÍVEL POR 5 EXIBA A PALAVRA "plac" 
// -SE O NÚMERO FOR DIVISÍVEL POR 3 E POR 5 EXIBA A PALAVRA "boom" 
// -SE O NÚMEOR NÃO FOR DIVISEL NEM POR 3 E NEM POR 5, 
// SOMENTE EXIBA O NÚMERO -O RESULTADO DEVE SER EXIBIDO 
// EM UM ARRAY
//  EXEMPLO : [1,2,3,4,5,6,7,8,9,15] -> 
//  [1,2,"plic",4,"plac",6,7,8,"plic","boom"]

let lista = [1,2,3,4,5,6,7,8,9,15]
let resultado = []

for(let i =0; i<lista.length; i++){
    if(lista[i] % 3 == 0 && lista[i] % 5 ==0){
        resultado.push("boom")
    }else if(lista[i] % 3 == 0){
        resultado.push("plic")
    }else if(lista[i] % 5 ==0){
        resultado.push("plac")
    }else {
        resultado.push(lista[i])
    }
}   
console.log(resultado)
