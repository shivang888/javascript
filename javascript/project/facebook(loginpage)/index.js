
document.getElementById("pass-icon").addEventListener("click",function(){
      let a = document.getElementById('passfield'); 
      let img = document.querySelector("#pass-icon");
   
    if(a.type == "password"){
        a.type = "text";
        img.src = "password-show.png";
    }else{
        a.type = "password";
        img.src = "password-hide.png";
    }

});







