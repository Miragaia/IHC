/*// Recupere a lista de produtos favoritos do armazenamento local
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Selecione a área onde os produtos favoritos serão exibidos na página de favoritos
const listaFavoritos = document.querySelector('#lista-favoritos');

// Adicione cada produto favorito à lista de favoritos
favoritos.forEach(function(produtoId) {
  const produto = document.querySelector(`#${produtoId}`);
  listaFavoritos.appendChild(produto.cloneNode(true));
});


function mostrarFavoritos() {
  // obter produtos favoritos do armazenamento local do navegador
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // selecionar o conteiner onde os produtos favoritos serão exibidos
  const container = document.querySelector("#favoritos-container");

  // se não houver produtos favoritos, exibir uma mensagem indicando isso
  if (favoritos.length === 0) {
    container.innerHTML = "<br><H3>Não tens nenhum produto selecionado como favorito!</H3><br>";
    return;
  }

  // criar uma lista não ordenada para exibir os produtos favoritos
  const lista = document.createElement("ul");

  // para cada produto favorito, criar um item da lista com seu nome e preço
  favoritos.forEach(function(produto) {
    const item = document.createElement("li");
    item.textContent = produto.nome + " - " + produto.preco + " €";
    lista.appendChild(item);
  });

  // adicionar a lista de produtos favoritos ao contêiner na página
  container.appendChild(lista);
}*/

// Recuperar a lista de produtos favoritos do armazenamento local
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Selecionar a área onde os produtos favoritos serão exibidos na página de favoritos
const listaFavoritos = document.querySelector('#lista-favoritos');

// Adicionar cada produto favorito à lista de favoritos
favoritos.forEach(function(produtoId) {
  const produto = document.querySelector(`#${produtoId}`);
  listaFavoritos.appendChild(produto.cloneNode(true));
});


function mostrarFavoritos() {
  // obter produtos favoritos do armazenamento local do navegador
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // selecionar o conteiner onde os produtos favoritos serão exibidos
  const container = document.querySelector("#favoritos-container");

  // se não houver produtos favoritos, exibir uma mensagem indicando isso
  if (favoritos.length === 0) {
    container.innerHTML = "<br><H3>Não tens nenhum produto selecionado como favorito!</H3><br>";
    return;
  }

  // criar uma lista não ordenada para exibir os produtos favoritos
  const lista = document.createElement("ul");

  // para cada produto favorito, criar um item da lista com seu nome e preço
  favoritos.forEach(function(produto) {
    const item = document.createElement("li");
    item.textContent = produto.nome + " - " + produto.preco + " €";
    lista.appendChild(item);
  });

  // adicionar a lista de produtos favoritos ao contêiner na página
  container.appendChild(lista);
}

// Selecionar todos os botões de favorito na página
const botoesFavorito = document.querySelectorAll('.fav');

// Adicionar um manipulador de eventos para cada botão de favorito
botoesFavorito.forEach(function(botoesFavorito) {
  botoesFavorito.addEventListener('click', function(evento) {
    const produtoId = evento.target.dataset.id;
    const produto = document.querySelector(`#${produtoId}`);

    // Adicionar ou remover o produto favorito do armazenamento local
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.includes(produtoId)) {
      favoritos = favoritos.filter(function(id) {
        return id !== produtoId;
      });
      evento.target.textContent = 'Adicionar aos favoritos';
    } else {
      favoritos.push(produtoId);
      evento.target.textContent = 'Remover dos favoritos';
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  });
});

// Exibir a lista de produtos favoritos na página
mostrarFavoritos();

