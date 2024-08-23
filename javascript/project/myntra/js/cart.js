window.addEventListener("load",function () {
    let productData = localStorage.getItem("cart");
    console.log(productData);

    let cart = JSON.parse(productData);
    console.log(cart);
    console.log(cart[1].img);
    
   
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
            <button type="button" class="btn btn-primary">Remove <i class="fa-regular fa-trash-can fa-lg" style="color: #00000;"></i></button>
          </div>
        </div>
      </div>
    </div>
        `
       }
 
})

function placeorder() {
    alert("Congratulatio your Order Placed");
}
