let taskAddBtn = document.querySelector('#addTask');
let input = document.querySelector('#input');
let editBtn = document.querySelector('#edit1');
let removeBtn = document.querySelector('#taskPrint');

taskAddBtn.addEventListener("click",function () {
    if (input.value.trim() === '') return;
    document.querySelector('#taskPrint').innerHTML += `<div class="topic1">
    <input id="checkbox1" type="checkbox">
    <div class="value" id="value">${input.value}</div>
    <button onclick="makeInput()" id="edit1">EDIT</button>
    <button onclick="remove()" id="delete">DELETE</button>
    </div>`
    input.value = "";
})


function makeInput() {
      let div = document.getElementById("value");
      let content = div.innerHTML;
      let input = document.createElement("input");
      input.value = content;
      input.className = "value";
      div.parentNode.replaceChild(input, div);  
}

function remove() {
    let deleteBtn = document.querySelectorAll("#delete");
    deleteBtn.forEach(element => {
        element.addEventListener("click",function () {
            element.parentElement.remove();
        });
    });
}






  
