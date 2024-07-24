
let a = 0;
function changeImage (){
 
   let img =  document.querySelector("#image");
    


     if(a == 0){
        img.src = "rolls-royce.webp";
        a++;
     }
     else if(a == 1){
        img.src = "range-rover.webp";
        a++;
     }else{
      img.src = "fortuner.png";
      a--;
     }




    // let img = document.querySelector('#image');
    // img.src = "rolls-royce.webp";
 }