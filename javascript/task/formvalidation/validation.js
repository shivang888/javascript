document.getElementById("submit").addEventListener("click", function (event) {
   event.preventDefault();

   checkData();
});

let username = document.getElementById("username");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

function checkData() {
   let usernameValue = username.value.trim();
   let emailValue = email.value.trim();
   let pass1Value = pass1.value.trim();
   let pass2Value = pass2.value.trim();

   if (usernameValue == "") {
      setError(username, "plese fill username");
   } else {
      setSuccess(username);
   }

   if (emailValue == "") {
      setError(email, "Plese fill e-mail");
   } else if (!isEmail(emailValue)) {
      setError(email, "Email is not Valid");
   } else {
      setSuccess(email);
   }


   if (pass1Value == "") {
      setError(pass1, "Plese fill password");
   } else {
      setSuccess(pass1);
   }


   if (pass2Value == "") {
      setError(pass2, "Plese fill password");
   } else if (pass1Value !== pass2Value) {
      setError(pass2, "Password does not match");
   } else {
      setSuccess(pass2);
   }
   
}


function setError(u, msg) {
   let parentBox = u.parentElement;
   parentBox.className = "input-field error";
   let span = parentBox.querySelector("span");
   let fa = parentBox.querySelector(".fa");
   span.innerText = msg;
   fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
   let parentBox = u.parentElement;
   parentBox.className = "input-field success";
   let fa = parentBox.querySelector(".fa");
   fa.className = "fa fa-check-circle";
}

function isEmail(e) {
   let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return reg.test(e);
}