// let nome = prompt("Digite um nome")

//  COMPARAÇÃO
// == SE O VALOR É IGUAL
// === SE O VALOR E O TIPO SÃO IGUAIS
// console.log(3 === "3")
// != diferente
// || OU 
// && E
//CONDICIONAL 
// if(condicao){
// executa
// }
// else if(condicao){
// executa
//}
//else{
// executa
//}
// if(nome == "Anderson"){
//     console.log("if 1")
//     alert("Você é muito bonito")
// }
// else if(nome == "José"){
//     console.log("if 2")
//     alert("Você não é bonito")
// }
// else{
//     console.log("else")
//     alert(`seu nome é ${nome}`)
// }
// if(nome != "Maria"){
//     alert("Seu nome deve ser Maria")
// }
// if(nome == "Anderson" || nome == "Pedro"){
//     alert("VOcê ganhou o prêmio")
// }
// if(nome.toLowerCase() == "anderson" && 1>0){
//     alert("Parabens!")
// }

let operador = prompt(`Digite uma opção,
    1 - soma, 
    2 - subtração, 
    3 - multiplicação, 
    4 - divisão`)
if(operador != "1" || operador != "2" || operador != "3" || operador != "4"){
    alert("Operação inválida")
}else {
    alert(operador)
}
