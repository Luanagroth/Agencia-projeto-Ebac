// Seleciona o botão e o menu
const botaoMenu = document.querySelector(".header__menu-toggle");
const menu = document.querySelector(".header__menu");

// Adiciona evento de clique no botão
botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo"); // alterna a classe ativo para mostrar/esconder menu
});
