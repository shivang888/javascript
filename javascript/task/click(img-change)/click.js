
let a = 0;
function changeImage (){
 
   let img =  document.querySelector("#image");
   
     if(a == 0){
        img.src = "/img/range-rover.Webp";
        a++;
      }
      else if(a == 1){
        img.src = "/img/rolls-royce.Webp";
        a++;
     }else if (a == 2) {
      img.src = "/img/jaguar.png";
      a=0;
     }
 
     
    // let img = document.querySelector('#image');
    // img.src = "rolls-royce.webp";
 }


