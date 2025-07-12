const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
