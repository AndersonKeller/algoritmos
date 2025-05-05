function fazerLogin(){
    const form = document.querySelector("form")
    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        console.log("submit")
        const email = document.querySelector("#email")
        const pass = document.querySelector("#pass")
        console.log(email.value,pass.value)
        const obj = {
            email: email.value,
            password: pass.value
        }
        const res = await fetch(`http://localhost:3001/login`,{
            method:"POST",
            body : JSON.stringify(obj),
            headers: {
                'Content-Type':"application/json; charset=utf-8"
            }
        })
        console.log(res)
        const response = await res.json()
        console.log(response)
        if(res.status === 200){
            localStorage.setItem("token",response.accessToken)
            location.href = "/home"
            
        }else {
            
            alert(response)
        }
        
        
    })
}   
fazerLogin()
