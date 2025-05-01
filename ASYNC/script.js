
async function getPokemons(){
    const parametros ={
        email:"teste@email",
        senha: "1234"
    }
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/",
        {
            
            headers:{
                'Accept':"application/json"
            }
        }
    )
    
    console.log(res,"response")
    const response = await res.json()
    console.log(response.results,"result")
    const listaPokemon = response.results
    const ul = document.querySelector("ul")
    
   
    for(const item of listaPokemon){
        const data = await fetch(item.url)
        const dados = await data.json()
        // console.log(dados.stats[0],"dados")
        ul.insertAdjacentHTML("beforeend",`
            <li id=${item.name}>
            <p>${item.name}</p>
            <img src="${dados.sprites.front_shiny}" >
            </li>
     `)
     const li = document.getElementById(item.name)
     li.addEventListener("click",()=>{
        console.log(item.name, dados)
        localStorage.setItem("pokemon",JSON.stringify(dados))
     })
       
    }
    
    
}
getPokemons()
