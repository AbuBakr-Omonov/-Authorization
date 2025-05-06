function checkToken (){
    let token  = localStorage.getItem("access_token")

    fetch("https://dummyjson.com/auth/me" , {
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then( res => {
        if(!res.ok){
            throw new Error("Token incorrect")
        }
    })
    .catch(err => {
        localStorage.removeItem("access_token")
        location.replace("login.html")
    })    
}

window.onload = () =>{
    checkToken()
}

function logout() {
    localStorage.removeItem("access_token");
    location.replace("login.html");
  }