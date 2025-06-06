const perguntas = [
  { pergunta: "Você sabe como acionar a defesa civil em caso de emergência?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você tem um kit de emergência preparado em casa?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você sabe onde fica o abrigo mais próximo da sua casa?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você já recebeu alertas de enchente no seu celular?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você saberia o que fazer se a água começasse a subir?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Sua família tem um plano de evacuação?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você evita entrar em contato com água de enchente?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você estaria disposto a ajudar vizinhos em uma emergência?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você sabe onde entregar doações em caso de desastre?", opcoes: ["Sim", "Não"], correta: 0 },
  { pergunta: "Você acredita que informação e preparo podem salvar vidas?", opcoes: ["Sim", "Não"], correta: 0 }
];

let perguntaAtual = 0;
let acertos = 0;
let respostaSelecionada = false;

const elPergunta = document.getElementById("quiz-pergunta");
const elOpcoes = document.getElementById("quiz-opcoes");
const elProximo = document.getElementById("quiz-proximo");
const elResultado = document.getElementById("quiz-resultado");

function carregarPergunta() {
  const q = perguntas[perguntaAtual];
  elPergunta.textContent = q.pergunta;
  elOpcoes.innerHTML = "";
  elProximo.disabled = true;

  q.opcoes.forEach((op, i) => {
    const botao = document.createElement("button");
    botao.textContent = op;

    botao.addEventListener("click", () => {
      // Marcar visualmente
      const botoes = elOpcoes.querySelectorAll("button");
      botoes.forEach(btn => btn.classList.remove("selecionado"));
      botao.classList.add("selecionado");

      // Registrar resposta
      if (i === q.correta) acertos++;
      respostaSelecionada = true;
      elProximo.disabled = false;
    });

    elOpcoes.appendChild(botao);
  });
}

elProximo.addEventListener("click", () => {
  perguntaAtual++;
  respostaSelecionada = false;

  if (perguntaAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  document.getElementById("quiz-container").style.display = "none";
  elResultado.style.display = "block";

  let mensagem = "";
  if (acertos >= 8) {
    mensagem = "Você demonstra estar bem preparado para lidar com situações de enchente.";
  } else if (acertos >= 5) {
    mensagem = "Você tem uma boa noção, mas ainda há pontos importantes para reforçar.";
  } else {
    mensagem = "Você precisa buscar mais informações e se preparar melhor para sua segurança.";
  }

  elResultado.innerHTML = `
    <h3>Resultado final</h3>
    <p>Você respondeu corretamente ${acertos} de ${perguntas.length} perguntas.</p>
    <p>${mensagem}</p>
    <a href="index.html">Voltar para a página inicial</a>
  `;
}

carregarPergunta();
