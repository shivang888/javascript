let productData = localStorage.getItem("cart");
    console.log(productData);

    let cart = JSON.parse(productData);
// load event
window.addEventListener("load",function () {
  // getdat to index.js 
    
    // console.log(cart);
    // console.log(cart[1].img);
    
  //  create cart card
       for (let i = 0; i < cart.length; i++) {
        let displayData = document.querySelector('#dispData').innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${cart[i].img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${cart[i].title}</h5>
            <p class="card-text">${cart[i].para}</p>
            <p class="card-text">${cart[i].price}</p>
            <button id="dusbin" type="button" class="btn btn-primary">Remove <i class="fa-regular fa-trash-can fa-lg" style="color: #00000;"></i></button>
          </div>
        </div>
      </div>
    </div>
        `
       }
 hendlerDelet();
 Total();
})
// confirm order alert message
function placeorder() {
    alert("Congratulatio your Order Placed");
}

function hendlerDelet () {
  const dustbin = document.querySelectorAll("#dusbin");
  dustbin.forEach((e) => {
    e.addEventListener("click" ,() => {
   const target = e.parentNode.parentElement.parentElement.parentElement;
   cart.splice(target,1);
  target.remove();
  localStorage.setItem("cart",JSON.stringify(cart));
    })
  })
}

// clear all process
  let clearAllBtn = document.querySelector('.clearAll');
     clearAllBtn.addEventListener('click',function () {
      localStorage.removeItem("cart");
     })





function Total () {
  let displayTotal = document.querySelector('.total-price')
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    let value = Number (cart[i].price);
    sum += value ;
  }
  displayTotal.innerText = sum;
}
