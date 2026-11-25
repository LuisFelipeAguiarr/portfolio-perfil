// Menu Responsivo (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link no celular
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Atualiza o ano atual automaticamente no rodapé
const anoAtual = document.getElementById('ano-atual');
anoAtual.textContent = new Date().getFullYear();