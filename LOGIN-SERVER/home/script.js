function verificaUser(){
    const token  = localStorage.getItem("token")
    if(!token){
        location.href = "/login"
    }
}   
verificaUser()
