let regusername = document.querySelector('#regusername');
let regpassword = document.querySelector('#regpassword');
let regconfirmpassword = document.querySelector('#regconfirmpassword');
let email=document.querySelector("#email")
let mobile=document.querySelector("#mobile")
let regbtn = document.querySelector('#reg_regbtn');

regbtn.addEventListener('click', () => {
    if (regpassword.value !== regconfirmpassword.value) {
        alert('Passwords do not match');
        return; 
    }

    if (regusername.value === "" || regpassword.value === "" || regconfirmpassword.value === "") {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("regusername", JSON.stringify(regusername.value));
    localStorage.setItem("regpassword", JSON.stringify(regpassword.value));
    localStorage.setItem("email", JSON.stringify(email.value));
    localStorage.setItem("mobile", JSON.stringify(mobile.value));

    alert('Registration Successful');
    
    regpassword.value=""
    regconfirmpassword.value=""
     regusername.value=""

     
    window.location.href="login.html"
});
