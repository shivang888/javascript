
// function addcart or sore localstorage
function addCart(img,title,para,price) {
  let productData = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(productData);
  productData.push({img,title,para,price})
  console.log(productData);
  localStorage.setItem("cart", JSON.stringify(productData));
  updateCartCount();

}

// count Update
function updateCartCount() {
      let productData = JSON.parse(localStorage.getItem('cart')) || [];
      document.getElementById('spnId').innerText = productData.length;
  }
// localStorage.removeItem("cart");






// btn filter function
// catagory change all-men-women btn
document.getElementById('all-btn').addEventListener('click', function() {
  filterProducts('all');
});

document.getElementById('men-btn').addEventListener('click', function() {
  
  filterProducts('men');
});

document.getElementById('women-btn').addEventListener('click', function() {
  filterProducts('women');
});

function filterProducts(category) {
  const products = document.querySelectorAll('.card-1');
  
  products.forEach(function(product) {
      if (category === 'all') {
          product.classList.remove('hidden');
      } else if (product.classList.contains(category)) {
          product.classList.remove('hidden');
      } else {
          product.classList.add('hidden');
      }
  });
}
