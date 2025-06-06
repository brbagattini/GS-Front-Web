document.addEventListener("DOMContentLoaded", function () {
    const formularioContato = document.querySelector("form");
    formularioContato.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const nome = formularioContato.querySelector('input[placeholder="Seu Nome Completo"]').value;
        const celular = formularioContato.querySelector('input[placeholder="Seu Celular"]').value;
        const email = formularioContato.querySelector('input[placeholder="Seu email"]').value;
        const mensagem = formularioContato.querySelector('input[placeholder="Escreva uma mensagem para a gente..."]').value;
        alert(
            `Olá ${nome}!\n\nRecebemos sua mensagem:\n"${mensagem}"\n\nVamos responder no e-mail: ${email} ou via SMS ou por Whatsapp: ${celular}.\n\nObrigado por entrar em contato`
        );
    });
    const botaoDoar = document.getElementById("Doar");
    botaoDoar.addEventListener("click", function (evento) {
        evento.preventDefault();
        alert("Agradecemos sua doação! Obrigado e tenha um ótimo dia");
    });
});
const botaoMenu = document.getElementById('menu-toggle');
const menu = document.querySelector('nav');
botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('mostrar');
});
let slideAtual = 0;
const slides = document.querySelectorAll('#slideshow img');

function trocarSlide() {
  slides.forEach((img, i) => img.classList.remove('ativo'));
  slideAtual = (slideAtual + 1) % slides.length;
  slides[slideAtual].classList.add('ativo');
}
if (slides.length) {
  slides[0].classList.add('ativo');
  setInterval(trocarSlide, 3000);
}
if (!nome || !celular || !email || !mensagem) {
  alert("Por favor, preencha todos os campos!");
  return;
}
document.querySelectorAll(".tema").forEach(botao => {
  botao.addEventListener("click", () => {
    document.body.style.backgroundColor = botao.dataset.cor;
  });
});
const botoesTema = document.querySelectorAll(".tema");

botoesTema.forEach(botao => {
  botao.addEventListener("click", () => {
    const tema = botao.dataset.tema;

    // Remove qualquer tema anterior
    document.body.classList.remove("tema-azul", "tema-escuro", "tema-claro");

    // Aplica o novo tema
    document.body.classList.add(`tema-${tema}`);
  });
});
