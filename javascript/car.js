//Render Cart Items
function renderCartItems() {

    var cart = JSON.parse(localStorage.getItem("CART"));
    var total = 0;
    var custoEnvio = 5;
    
    cartItemsEl.innerHTML = "";
    
    cart.forEach((item) => { 
      cartItemsEl.innerHTML += `
        <tr>
            <td><a id="deleteProd" onclick="delProduct(${item.id}), window.location.href='cart.html'" href="#"><i class="fas fa-times-circle"></i></a></td>
            <td><img src="${item.imgSrc}"></td>
            <td>${item.name}</td>
            <td>${(item.price).toFixed(2)}€</td>
            <td><input type="number" id="quant" onchange="updateQuantity(${item.id}, this.value)" value="${item.numberOfUnits}" min="1" max="10"></td>
            <td>${(item.price * item.numberOfUnits).toFixed(2)}€</td>
        </tr>
      `;
      total += item.price * item.numberOfUnits;
      document.getElementById("deleteProd").addEventListener("click", delProduct);
      
    });
    
    cartItemsE2.innerHTML = ` 
      <tr>
        <td>SubTotal do Carrinho</td>
        <td>${total.toFixed(2)}€</td>
      </tr> 
      <tr>
        <td>Custo de Envio</td>
        <td>${custoEnvio}€</td>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>${(total+custoEnvio).toFixed(2)}€</strong></td>
      </tr>
      </tr>
      <tr id="aply">
      </tr>
    `;
  
    localStorage.setItem("CART", JSON.stringify(cart));
    var cartItemsE3 = document.querySelector("#aply");
    document.getElementById("aplicar").addEventListener("click", function() {
      var desconto = (total + custoEnvio)* 0.15;
      var novoTotal = (total + custoEnvio) - desconto;
      
      cartItemsE3.innerHTML = ` 
        <tr>
          <td><strong>Total com desconto</strong></td>
          <td><strong>${novoTotal.toFixed(2)}€</strong></td>
        </tr>
      `;
    });

    /*if(document.getElementById("aplicar").addEventListener("click", aply)){
      cartItemsE3.innerHTML = ` 
      <tr>
        <td>Desconto</td>
        <td>${(total*0.15).toFixed(2)}€</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>${(total+custoEnvio-(total*0.15)).toFixed(2)}€</strong></td>
      </tr>
    `;
    }*/
} 

function delProduct(id) {
  var cartItems = JSON.parse(localStorage.getItem("CART"));

  var updatedCartItems = cartItems.filter(function(item) {
    return item.id !== id;
  });

  localStorage.setItem("CART", JSON.stringify(updatedCartItems));

}

function delCart() {
  localStorage.removeItem('CART');
}

/*function numbUnits(){
  
  var cart = JSON.parse(localStorage.getItem("CART"))
  var inputNum = document.getElementById("quant");
  var inputNumero = inputNum.value;
  cart.numberOfUnits = inputNumero;
  localStorage.setItem("CART", JSON.stringify(cart));

}*/



function updateQuantity(itemId, quantity) {
  var cart = JSON.parse(localStorage.getItem("CART"));
  
  // Find the item in the cart and update its quantity
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      cart[i].numberOfUnits = quantity;
      break;
    }
  }

  localStorage.setItem("CART", JSON.stringify(cart));

  renderCartItems();
}



/*function aply(){
  var desconto = 0.15;
  cartItemsE2.innerHTML = ` 
    <td>Desconto</td>
    <td>${total.toFixed(2)}€</td>
      `;
}*/






const cartItemsEl = document.querySelector("#cart-Items");
const cartItemsE2 = document.querySelector("#table");

renderCartItems();


document.getElementById("delCart").addEventListener("click", delCart);

// Add event listener for the 'beforeunload' event


