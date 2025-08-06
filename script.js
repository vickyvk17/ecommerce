const products = [
  { id: 1, name: "Red T-shirt", price: 499, image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Red+Tee" },
  { id: 2, name: "Blue Hoodie", price: 899, image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue+Hoodie" },
  { id: 3, name: "Sneakers", price: 1299, image: "https://via.placeholder.com/150/000000/FFFFFF?text=Sneakers" },
  { id: 4, name: "Wrist Watch", price: 1999, image: "https://via.placeholder.com/150/CCCCCC/000000?text=Watch" }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
  });
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

renderProducts();
renderCart();