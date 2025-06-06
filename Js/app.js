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