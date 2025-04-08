function init(){
     const main = document.createElement("main")
    // const body = document.getElementById("id")
    // const body = document.getElementsByTagName("body")
    //const body = document.querySelectorAll("body")
    const form = document.createElement("form")
    const h1 = document.createElement("h1")
    h1.innerText = "Login"
    const fieldset = document.createElement("fieldset")
    const label = document.createElement("label")
    label.innerText = "E-mail"
    label.setAttribute("for","email")

    const input = document.createElement("input")
    input.id = "email"
    input.placeholder = "Digite seu email"
    input.type = "text"
    fieldset.append(label,input)

    const fieldset2 = document.createElement("fieldset")
    const label2 = document.createElement("label")
    label2.innerText = "Senha"
    label2.setAttribute("for","password")
    const input2 = document.createElement("input")
    input2.id="password"
    input2.type ="password"
    input2.placeholder="Digite sua senha"

    fieldset2.append(label2,input2)

    const button = document.createElement("button")
    button.type = "submit"
    button.innerText = "Logar"
    button.classList.add("btn")

    form.append(h1,fieldset,fieldset2,button)
    main.appendChild(form)
    const body = document.querySelector("body")
    //console.log(body)
    // body.append()
    const img = document.createElement("img")
    img.src = ""
    img.alt = ""

    body.appendChild(main)
}
init()
