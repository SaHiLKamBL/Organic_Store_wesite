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
     window.location.href="home.html"
        }
        else{
            alert("Invalid Credentials");
        }
        
    }
  username.value=""
  password.value=""
    
})

loginregbtn.addEventListener('click',()=>{
    window.location.href="register.html";
})

