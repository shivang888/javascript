// user regex

function checkuser(e,spanId){
    let name = /^[a-zA-Z]+$/;

    if(name.test(e.value)){
        spanId.innerText = "";
    }else{
        spanId.style.color = "red";
        spanId.innerText = "Plese Enter Only Character";
    }
}

// email regex

function checkemail(e,spanId){
    let email = /^([a-z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z]{2,4})+$/;

    if(email.test(e.value)){
        spanId.innerText = "";
    }else{
        spanId.style.color = "red";
        spanId.innerText = "Plese Enter Valid E-mail";
    }
}

// password regex

function checkpass(e,spanId){
    let pass = /^[a-zA-z0-9._-]{3,5}$/;

    if(pass.test(e.value)){
        spanId.innerText = "";
    }else{
        spanId.style.color = "red";
        spanId.innerText = "Plese Enter Valid Password";
    }
}

// mobile number regex

function checknumber(e,spanId){
    let number = /^[0-9]{10}$/;

    if(number.test(e.value)){
        spanId.innerText = "";
    }else{
        spanId.style.color = "red";
        spanId.innerText = "Plese Enter Valid mobile Number";
    }
}
