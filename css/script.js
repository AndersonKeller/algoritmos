const usuarios = [
    {
        name:"Pedro",
        image:"./perfil.jpeg"
    },
    {
        name:"Maria",
        image:"./perfil2.jpeg"
    }, {
        name:"José",
        image:"./perfil3.jpeg"
    }, {
        name:"João",
        image:"./perfil4.jpeg"
    },
     {
        name:"Afonso",
        image:"./perfil5.jpeg"
    }
]

function montaListaUsuarios(){
    const ul = document.querySelector("ul")
    usuarios.forEach((usuario)=>{
        const li = document.createElement("li")
        const img = document.createElement("img")
        img.src = usuario.image
        img.alt = usuario.name
        const p = document.createElement("p")
        p.innerText = usuario.name
        li.append(img,p)
        ul.appendChild(li)
    })

}

montaListaUsuarios()
