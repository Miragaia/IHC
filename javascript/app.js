// SELECT ELEMENTS
const productsEl = document.querySelector("#proDetails");

//Render Products Details

function renderProductDetails() {
    // Get the id of the selected product from the query parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
  
    // Find the selected product in the products array
    const product = products.find((product) => product.id == productId);
  
    // Render the product details
    productsEl.innerHTML = `
      <div class="single-pro-image">
        <img src="../${product.imgSrc}" style="margin-bottom: 10px;" width="100%" id="MainImg" alt="">
  
        <div id="imgGroup" class="small-img-group"> 
          
        </div>
      </div>
      <div class="single-pro-details">
        <h4>${product.name}</h4>
        <h2>${product.price}€</h2>
        <p id="opcoes"></p>
        
        <input type="number" id="num" value="1"> 
        <button id="addCart">Adicione ao Carrinho</button>
        <h4>Detalhe dos produtos</h4>
        <span>${product.description}</span>
      </div>
    `;
  
    imgGroupRender(product.imgGroupSrc);
    opcoes(product.opcao)
    
    
    var MainImg = document.getElementById('MainImg');
    var smallImg = document.getElementsByClassName('small-img');
    var quantImg = product.imgGroupSrc.length;
    smallImg[0].onclick = function(){
        MainImg.src = smallImg[0].src;
    }

    smallImg[1].onclick = function(){
        MainImg.src = smallImg[1].src;
    }

    smallImg[2].onclick = function(){
        MainImg.src = smallImg[2].src;
    }

    if(quantImg == 4){
      smallImg[3].onclick = function(){
      MainImg.src = smallImg[3].src;
      }
    }
    
    document.getElementById("addCart").addEventListener("click", function() {
    addToCart(product, product.id);
    });
    
  }
renderProductDetails();
//cart array







//Add to Cart
function addToCart(product, id){
  var cart = JSON.parse(localStorage.getItem("CART")) || [];
  const item = products.find((product) => product.id === id); 

  if (cart.some((item) => item.id === id)){
    alert("Item already in cart");
  }
  else{
    var inputNum = document.getElementById("num");
    var inputNumero = inputNum.value;
    cart.push({...item, 
      numberOfUnits: inputNumero,
    });
    
    localStorage.setItem("CART", JSON.stringify(cart));

    alert("Item added to cart");
  }
  
  
  updateCart(item);
}
//Update Cart
function updateCart(item) {
  //renderCartSubTotal();
}



function imgGroupRender(imgGroupSrc){
  const opImg = document.querySelector("#imgGroup");
  if(imgGroupSrc == undefined){
    return;
  }
  var tamanhoImg = imgGroupSrc.length;
  if(tamanhoImg >= 1){
    for(var i = 0; i < tamanhoImg; i++){
      opImg.innerHTML += `
      <div class="small-img-col">
        <img src="${imgGroupSrc[i]}" width="100%" class="small-img" alt="">
      </div>`;

    }
    
  }
}

function opcoes(opcao){
  const op = document.querySelector("#opcoes");
  if(opcao == undefined){
    return;
  }
  op.innerHTML += `
    <select id="oper">
      <option>Selecione uma opção</option>
    </select>`;
  const op2 = document.querySelector("#oper");
  var tamanho = opcao.length;
  if(tamanho >= 1){
    for(var i = 0; i < tamanho; i++){
      op2.innerHTML += `<option>${opcao[i]}</option>`;
    }
    
  }
}


function filter(marcaAtr){
  
  const storeitems = document.getElementById("pro-container");
  var FilterArray = [];
  var SearchArray = outraSearch();//está bem
  
  var PriceArray = filterPrice();//está bem
  
  var BrandArray = [];
  if (marcaAtr !==  undefined) {
    
     BrandArray = filterMarca(marcaAtr); //ids dos produtos com a marca selecionada
  }
  
  if (SearchArray.length < 24){  // pesquisei
    
    for (let i = 0; i < SearchArray.length; i++){
      
      if (PriceArray.length ==0){
        if (BrandArray.length == 0){
          FilterArray.push(SearchArray[i]);
        }
        else if (BrandArray.includes(SearchArray[i])){
          FilterArray.push(SearchArray[i]);
        }
      }
      else if (PriceArray.includes(SearchArray[i])){
        if (BrandArray.length == 0){
          FilterArray.push(SearchArray[i]);
        }
        else if (BrandArray.includes(SearchArray[i])){
          FilterArray.push(SearchArray[i]);
        }
      }
    }
  }
  else if (PriceArray.length < 12){ //defeni preço
    
    for (let i = 0; i < PriceArray.length; i++){
      
      if (BrandArray.length == 0){
        FilterArray.push(PriceArray[i]);
      }
      else if (BrandArray.includes(PriceArray[i])){
        FilterArray.push(PriceArray[i]);
      }
    }
  }
  else if (BrandArray.length = 1){  //defeni marca
    
    FilterArray = BrandArray;
  }
  
  
  for (let i = 0; i < storeitems.children.length; i++) {
    const product = storeitems.children[i];

    if (FilterArray.includes(i)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  }
}

function outraSearch() {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  
  const storeitems = document.getElementById("pro-container");
  const productNames = [];

  for (let i = 0; i < 12; i++) {
    productNames.push(products[i].name);
  }
  console.log("productNames",productNames);
    

  const matchesSearch = [];
  for (let i = 0; i < 12; i++) {
    if (productNames[i].toUpperCase().indexOf(searchbox) > -1) {
      matchesSearch.push(i);
    }
  }
  
  console.log("matchesSearch",matchesSearch);
  return matchesSearch;
  
  
  for (let i = 0; i < storeitems.children.length; i++) {
    const product = storeitems.children[i];

    if (matches.includes(i)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  }
}

function filterPrice() {
  var fromI = document.getElementById("fromInput");
  var toI = document.getElementById("toInput");
  var precoMin = fromI.value;
  var precoMax = toI.value;
  const storeitems = document.getElementById("pro-container");
  const productPrices = [];

  for (let i = 0; i < 12; i++) {
    productPrices.push(products[i].price);
  }

  const matchesPrices = [];
  for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] >= precoMin && productPrices[i] <= precoMax) {
      matchesPrices.push(i);
    }
  }
  
  return matchesPrices;
  
  
  for (let i = 0; i < storeitems.children.length; i++) {
    const product = storeitems.children[i];

    if (matches.includes(i)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  }
}

function filterMarca(marcaAtr) {
  var marcaI = document.getElementById(marcaAtr);
  var marca = marcaI.value;
  const storeitems = document.getElementById("pro-container");
  const productBrands = [];
  for (let i = 0; i < 12; i++) {
    productBrands.push(products[i].brand);
  }
  

  

  const matchesBrands = [];
  for (let i = 0; i < productBrands.length; i++) {
    if (productBrands[i] == marca) {
      matchesBrands.push(i);
    }
  }
  
  return matchesBrands;
  
  
  for (let i = 0; i < storeitems.children.length; i++) {
    const product = storeitems.children[i];

    if (matches.includes(i)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  }
}



