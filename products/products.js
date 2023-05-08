// Selecionar todos os botões de favorito na página
const favoritos = document.querySelectorAll('#favorito');

// Adicionar um manipulador de eventos a cada botão de favorito
favoritos.forEach(function(favorito) {
  favorito.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Obter o ID do produto
    const produtoId = this.closest('.single-pro-details').id;
    //const produtoId = this.closest('.pro').id;
    
    // Verificar se o produto já foi adicionado aos favoritos
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.includes(produtoId)) {
      // Adicionar o produto aos favoritos
      favoritos.push(produtoId);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
  });
});


