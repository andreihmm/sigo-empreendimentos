document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { // Aguarda carregamento do header
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");

        if (menuToggle && navMenu) {
            menuToggle.addEventListener("click", function () {
                navMenu.classList.toggle("nav-active"); // Alterna a classe para abrir e fechar
            });
        } else {
            console.error("Erro: Elementos 'menu-toggle' ou 'nav-menu' não encontrados.");
        }
    }, 500); // Pequeno delay para garantir que o header carregou
});
