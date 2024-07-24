let screen_1 = document.querySelector('#screen-1');
let screen_2 = document.querySelector('#screen-2');
let display = document.querySelector('#ans-display');

function addition (){
    total = parseInt(screen_1.value) + parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function substraction (){
    total = parseInt(screen_1.value) - parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function multi (){
    total = parseInt(screen_1.value) * parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function divide (){
    total = parseInt(screen_1.value) / parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function modul (){
    total = parseInt(screen_1.value) % parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}