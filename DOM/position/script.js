
import { data } from "./data.js"
let carrinho = []

function openCarrinho(){
    const button = document.querySelector(".carrrinhobtn")
    button.addEventListener("click",()=>{
        console.log("carrinho")
        const ulcart = document.querySelector(".cartul")
        if(ulcart){
            ulcart.remove()
        }else{
            carrinho.forEach((cart)=>{
                const header = document.querySelector("header")
            header.insertAdjacentHTML("beforeend",`
                <ul class="cartul">
                <li>${cart.name}</li>
                </ul>
            `)
            })
        }
        
    })
}
openCarrinho()

function montarLista(){
    const ulProdutos = document.querySelector(".produtos")
    data.items.forEach((item)=>{
    ulProdutos.insertAdjacentHTML("beforeend",`
        <li>
            <p>${item.product.name}</p>
            <button id="btnadd${item.product.id}" >Adicionar ao carrinho</button>
        </li>
        
        `)
        const btnadd = document.getElementById(`btnadd${item.product.id}`)
        btnadd.addEventListener("click",()=>{
            console.log("add ao carrinho",item.product)
            carrinho.push(item.product)
        })
    })
}
montarLista()
