// acess
let a = document.querySelector("#password");
let b = document.querySelector("#email");
let c = document.querySelector('#placeholder-1');
let d = document.querySelector('#placeholder-2');
let toogle = document.querySelector("#hide-show");



// click Event 

toogle.addEventListener("click",function(){
    if(a.type == "password"){
        a.type = "text";
        toogle.innerHTML = "Hide"
    }
    else{
        a.type = "password";
         toogle.innerHTML = "Show"
    }   
});


// function oninput

function email(b) {
    if (b.value == "") {
        c.style.top = "16px"
    } else {
        c.style.top = "-1px"
    }
}

function password(a) {
    if (a.value == "") {
        d.style.top = "86px"
    } else {
        d.style.top = "72px"
    }
}



//  let loginbtn = document.querySelector('.login-btn');

 function loginbtn() {
    alert("login sucessful");
 }