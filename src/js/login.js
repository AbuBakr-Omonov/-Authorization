const BASE_URL = "https://dummyjson.com"
const formEL = document.querySelector(".form")
const usernameInp = document.querySelector(".username")
const passwordInp = document.querySelector(".password")
const errorMsg = document.querySelector(".error_msg")

formEL.addEventListener("submit", (e) => {
    e.preventDefault()
     const user = {
        username: usernameInp.value,
        password: passwordInp.value,
     }

     fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
     })
     .then((res)=> {
        if(!res.ok){
            throw new Error("username or password os incorrect")
        }

        return res.json()
    })
    .then(data => {
        localStorage.setItem("access_token",data.accessToken)

        location.replace("admin.html")

      
        
    })
    .catch((err)=> {
        errorMsg.textContent = err.message;
        errorMsg.classList.remove("hidden");
     })

     usernameInp.value = "";
     passwordInp.value = "";

}) 


 
