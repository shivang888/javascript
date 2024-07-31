let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let img3=document.querySelector(".img3");
let img4=document.querySelector(".img4");
let btn1=document.querySelector(".arro1");
let btn2=document.querySelector(".arro2");



setTimeout(() => {
    img1.style.width="40%"
}, 1000);

setTimeout(() => {
    img2.style.width="40%"
    img1.style.width="10%"

}, 3000);
setTimeout(() => {
    img3.style.width="40%"
    img2.style.width="10%"

}, 5000);

setTimeout(() => {
    img4.style.width="40%"
    img3.style.width="10%"
}, 7000);

setTimeout(() => {
    img4.style.width="10%"
}, 9000);

let a=0;

function next() {
    if (a==0) {
    img1.style.width="40%"  
    a++;

    } else if (a==1) {
        img2.style.width="40%"
        img1.style.width="10%"
        a++;

    } else if(a==2){
        img3.style.width="40%"
        img2.style.width="10%"

        a++;
    }else if(a==3){
    img4.style.width="40%"
    img3.style.width="10%"
    a++;

    }else{
        img4.style.width="10%"
     a=0;
    }
}

let b=0;
function prev() {
    
    if (b==0) {
        img3.style.width="40%" 
    img4.style.width="10%"

        b++;
    
        }
         else if (b==1) {
            img2.style.width="40%" 
            img3.style.width="10%"
        b++;
    
        }else if(b==2){
            img1.style.width="40%"
        img2.style.width="10%"
    
            b++;
        }else{
        img1.style.width="10%" 
        b=0
        }
}