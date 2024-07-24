let textarea = document.querySelector('textarea');
let preview = document.querySelector('#preview');
let char = document.querySelector('#char-count');
let word = document.querySelector('#word-count');

function pre(){
    if(textarea.value == ""){
        char.innerHTML = "Char Count"
    }else{
        word.innerHTML = textarea.value.split(" ").length-1;
        char.innerHTML = textarea.value.length;
    }
    preview.innerHTML = textarea.value
}


function upper(){
    preview.innerHTML = (textarea.value.toUpperCase());
}
function lower(){
    preview.innerHTML = (textarea.value.toLowerCase());
}

function clc(){
    preview.innerHTML = "";
    char.innerHTML = "Char Count";
    textarea.value = "";
}
function cop(){
    navigator.clipboard.writeText(textarea.value);
}


function removextra(){
    preview.innerHTML = preview.value.trim();
}
