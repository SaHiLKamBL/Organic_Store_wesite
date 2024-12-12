let username=document.querySelector('#username')
let password=document.querySelector('#password')
let loginbtn=document.querySelector('#loginbtn')
let loginregbtn=document.querySelector('#loginregbtn')



loginbtn.addEventListener('click',()=>{
    if(username.value==""||password.value==""){
        alert("Fill the Fields")
    }
    else{
        let storeusername = localStorage.getItem("regusername");
        let storepassword = localStorage.getItem("regpassword");

        if (username.value === JSON.parse(storeusername) && password.value === JSON.parse(storepassword)) {
            alert("Login Successful");
            username.value = "";
            password.value = "";
     window.location.href="home.html"
        }
        
    }
    
})

loginregbtn.addEventListener('click',()=>{
    window.location.href="register.html";
})

