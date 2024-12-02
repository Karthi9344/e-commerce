let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`${product} added to cart!`);
  console.log("Cart:", cart);
}
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product} added to cart!`);
  console.log("Cart:", cart);
}

function viewCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  alert(`Your cart: ${cart.join(', ')}`);
}

function filterProducts() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const productName = product.querySelector('h2').textContent.toLowerCase();
    if (productName.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
function toggleAuth() {
  const authButton = document.getElementById('authButton');
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (isLoggedIn) {
    localStorage.removeItem('loggedIn');
    authButton.textContent = 'Login';
    alert('Logged out successfully!');
  } else {
    localStorage.setItem('loggedIn', 'true');
    authButton.textContent = 'Logout';
    alert('Logged in successfully!');
  }
}

// Set the initial button state on page load
window.onload = () => {
  const authButton = document.getElementById('authButton');
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  authButton.textContent = isLoggedIn ? 'Logout' : 'Login';
};
