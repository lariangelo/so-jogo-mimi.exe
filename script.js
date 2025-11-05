const scenes = [
  {
    title: "Fase 1 — Sistema Operacional",
    text: `
      <p>Mimi aparece em um laboratório cheio de cabos e telas piscando. Ela olha ao redor com os olhinhos brilhando de curiosidade.</p>
      <p><b>Mimi:</b> "Uau! Tantos botões e luzes... mas o que será que faz tudo isso funcionar? Acho que é hora de entender o que é um Sistema Operacional!"</p>
    `
  },
  {
    title: "Fase 2 — Memória Secundária",
    text: `
      <p>Mimi entra em uma sala cheia de gavetas e cofres brilhantes. Ela pega um dos discos e balança o rabinho animada.</p>
      <p><b>Mimi:</b> "Então é aqui que os dados ficam? Que lugar mais interessante!"</p>
    `
  },              
  {
    title: "Fase 3 — BIOS",
    text: `
      <p>No porão do laboratório, Mimi encontra um velho chip dourado que brilha fraquinho.</p>
      <p><b>Mimi:</b> "Você acorda o computador todo dia? Que trabalho importante, Sr. BIOS!"</p>
    `
  },
  {
    title: "Fase 4 — Processador",
    text: `
      <p>Mimi observa uma placa cheia de circuitos. Ela vê algo no centro, brilhando forte.</p>
      <p><b>Mimi:</b> "Então você é o cérebro do computador! Uau... será que pensa mais rápido do que eu?"</p>
    `
  },
  {
    title: "Fase 5 — Memória RAM",
    text: `
      <p>Mimi chega a uma sala com várias portas abrindo e fechando super rápido.</p>
      <p><b>Mimi:</b> "Essa deve ser a memória RAM! Tudo aqui acontece tão depressa que até fico tonta!"</p>
    `
  },
  {
    title: "Fase 6 — Particionamento de Memória",
    text: `
      <p>Mimi entra em uma espécie de depósito dividido em várias áreas.</p>
      <p><b>Mimi:</b> "Hmm... parece que cada pedacinho da memória tem seu próprio espaço. Isso deve ajudar a organizar tudo direitinho!"</p>
    `
  }
];


const questions = [
  // Fase 1 - SO
  [
    {
      question:
      "O Sistema Operacional é o cérebro-chefe que mantém tudo funcionando. As suas duas funções principais são...",
      options: [
        "Servir como máquina virtual e gerenciar recursos",
        "Realizar operações matemáticas e armazenar dados",
        "Controlar o computador e seus braços robóticos",
        "Rodar jogos de tabuleiro e vídeos online",
      ],
      answer: 0,
    },
  ],
  // Fase 2 - Memoria secundaria
  [
    {
      question:
        "Mesmo quando o computador está desligado, seu Sistema Operacional permanece armazenado no/a...",
      options: ["ROM", "SSD/HD", "Pendrive", "Placa-mãe"],
      answer: 1,
    },
    {
      question:
        " O SO e os programas de usuário ficam armazenados na memória secundária. Mas por que não na RAM, que parece bem mais rápida?",
      options: [
        "Porque a RAM só guarda dados temporariamente",
        "Porque a secundária deixa o PC mais rápido",
        "Porque a secundária guarda dados permanentemente",
        "Porque é mais barata",
      ],
      answer: 2,
    },
  ],
  // Fase 3 - BIOS
  [
    {
      question:
        "Uma das atividades que acontecem imediatamente após o computador ser ligado é o...",
      options: ["POST", "BUST", "DUST", "START"],
      answer: 0,
    },
    {
      question:
        "O responsável por realizar algumas atividades imediatamente após o computador ser ligado é...",
      options: ["RAM", "BIOS", "ROM", "HD"],
      answer: 1,
    },
    {
      question:
        '"Verificar o setup, fazer o POST, descompactar dados, ler dispositivos de armazenamento e carregar o SO" são atividades realizadas...',
      options: [
        "Após o computador ser comprado",
        "Após o computador ser desligado",
        "Após o computador ser ligado",
        "Após o computador ser quebrado",
      ],
      answer: 2,
    },
    {
      question: "Antes de encerrar a sua execução, o BIOS...",
      options: [
        "Salva todos os dados do usuário e faz o POST",
        "Realiza o carregamento do SO a partir do HD ou do SSD",
        "Lê todos os dados de arquivos",
        "Escalona os próximos processos e salva os dados",
      ],
      answer: 1,
    },
  ],
  // Fase 4 - processador
  [
    {
      question: "O escalonamento de processos é...",
      options: [
        "a alocação dos programas na memória",
        "o SO e os programas de usuário são escalonados para usar o processador ",
        "o SO e os programas de usuário são escalonados para usar a internet",
        "o adiantamento dos programas de usuário no SO",
      ],
      answer: 1,
    },
    {
      question:
        'O sistema que realiza múltiplas tarefas "ao mesmo tempo" é chamado de...',
      options: [
        "Monoprogramado",
        "Multi-tarefas",
        "Esperto",
        "Multiprogramado",
      ],
      answer: 3,
    },
  ],
  // Fase 5 - RAM
  [
    {
      question: "Um processo, no contexto de SO, pode ser definido como...",
      options: [
        "Atividades realizadas por IA",
        "Instâncias de programas em execução",
        "Ações legais contra algo/alguém",
        "Arquivos gerados pelo SO",
      ],
      answer: 1,
    },
    {
      question: "A memória RAM...",
      options: [
        "Salva os dados do usuário permanentemente",
        "Recebe os programas em execução",
        "Processa os vídeos do YouTube em 4K",
        "É a memória dos anfíbios",
      ],
      answer: 1,
    },
  ],
  // Fase 6
  [
    {
      question:
        "Para organizar os dados armazenados na memória utiliza-se o...",
      options: [
        "Escalonamento",
        "Encaixamento",
        "Particionamento",
        "Acomodamento",
      ],
      answer: 2,
    },
    {
      question: "Processos diferentes possuem...",
      options: [
        "Mesmo tamanho de memória",
        "Tamanhos diferentes",
        "Prioridade igual",
        "Acesso fixo",
      ],
      answer: 1,
    },
    {
      question: "O particionamento pode ser lógico fixo, ou seja,...",
      options: [
        "Ocorre no fim das atividades do usuário",
        "Ocorre no fim das atividades do SO",
        "Ocorre no ínicio das atividades do SO",
        "Ocorre durante as atividades do SO",
      ],
      answer: 2,
    },
    {
      question: "O particionamento pode ser lógico variável, ou seja,...",
      options: [
        "Ocorre no ínicio das atividades do usuário",
        "Ocorre no fim das atividades do SO",
        "Ocorre no ínicio das atividades do SO",
        "Ocorre durante as atividades do SO",
      ],
      answer: 3,
    },
  ],
];

const pieces = [
  {
    name: "Biscoito Amarelo",
    desc: "Mimi tenta comer, e o Whiskas se duplica em dezenas. Bug delicioso detectado.",
  },
  {
    name: "Biscoito Vermelho",
    desc: "Picante. Literalmente.",
  },
  {
    name: "Biscoito Azul",
    desc: "Mimi tentou comer... mas descobriu que era um chip sabor peixe.",
  },
  {
    name: "Biscoito Rosa",
    desc: "Cheira bem! Mimi deu uma mordida e agora tudo tem glitter.",
  },
  {
    name: "Biscoito Roxo",
    desc: "Mimi deu uma mordida e sentiu gosto de disquete antigo",
  },
  {
    name: "Biscoito Dourado",
    desc: "Tem gosto de vitória (e de atum importado). Mimi aprova com nota 10.",
  },
];

let currentPhase = 0;
let currentQuestion = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const piecesContainer = document.getElementById("pieces");
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart-btn");

window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 50);
});


function mostrarCenario() {
  const scene = scenes[currentPhase];
  questionContainer.innerHTML = `
    <div class="scene">
      <h2>${scene.title}</h2>
      ${scene.text}
      <button id="start-phase-btn">Começar fase</button>
    </div>
  `;

  document.getElementById("start-phase-btn").addEventListener("click", showQuestion);
}
 
function showQuestion() {
  const q = questions[currentPhase][currentQuestion];
  questionContainer.innerHTML = `
        <h1>${q.question}</h1>
        ${q.options
          .map(
            (opt, i) =>
              `<div class="option" onclick="checkAnswer(${i})">${opt}</div>`
          )
          .join("")}
    `;
}

function checkAnswer(selected) {
  const q = questions[currentPhase][currentQuestion];
  if (selected === q.answer) {
    soltaconfete();
    currentQuestion++;

    if (currentQuestion < questions[currentPhase].length) {
      questionContainer.innerHTML = "<p>Correto!</p>";
      setTimeout(showQuestion, 1000);
    } else {
      unlockPiece();
    }
  } else {
    questionContainer.innerHTML = `
            <p>Errado! Tente novamente.</p>
            <button id="retry-btn">Tentar novamente</button>
        `;
    document.getElementById("retry-btn").addEventListener("click", () => {
      showQuestion();
    });
  }
}

function mostrarMiauMensagem(texto) {
  const miau = document.getElementById("miauMascote");
  const mensagem = document.getElementById("miauMensagem");

  mensagem.textContent = texto;

  miau.classList.remove("hidden");
  mensagem.classList.remove("hidden");

  // anima
  setTimeout(() => {
    miau.classList.add("show");
    mensagem.classList.add("show");
  }, 100);

  // some depois de alguns segundos
  setTimeout(() => {
    miau.classList.remove("show");
    mensagem.classList.remove("show");
    setTimeout(() => {
      miau.classList.add("hidden");
      mensagem.classList.add("hidden");
    }, 500);
  }, 4000);
}

function unlockPiece() {
  const piece = pieces[currentPhase];
  const pieceDiv = document.createElement("div");
  pieceDiv.classList.add("piece");

  // 👇 Só imagem, sem texto
  pieceDiv.innerHTML = `<img src="imagens/${piece.name}.png" alt="${piece.name}" class="piece-img">`;

  piecesContainer.appendChild(pieceDiv);

  questionContainer.innerHTML = `
    <div class="unlock-container">
        <img src="imagens/${piece.name}.png" class="piece-img" alt="${piece.name}">
        <p>Você ganhou: <strong>${piece.name}</strong></p>
        <p>${piece.desc}</p>
    </div>
  `;

  soltaconfete();
  mostrarMiauMensagem(`Yeppi! Você desbloqueou um ${piece.name}!`);

  const pecas = JSON.parse(localStorage.getItem("peças")) || [];
  if (!pecas.includes(piece.name)) {
    pecas.push(piece.name);
    localStorage.setItem("peças", JSON.stringify(pecas));
    console.log("Peça salva:", piece.name);
  }

  nextBtn.classList.remove("hidden");
}


nextBtn.addEventListener("click", () => {
  currentPhase++;
  currentQuestion = 0;

  if (currentPhase < questions.length) {
    nextBtn.classList.add("hidden");
    mostrarCenario();
  } else {
    mostrarTelaFinal();
  }
});

function mostrarTelaFinal() {
  const game = document.getElementById("game");
  const cpu = document.getElementById("cpu-container");
  const endScreen = document.getElementById("end-screen");

  game.classList.add("hidden");
  cpu.classList.add("hidden");
  endScreen.classList.remove("hidden");

  soltaconfete();
  setTimeout(() => {
    window.location.href = "ending.html";
  }, 2000);
}

function trocarTela(novaTela) {
  container.classList.add("fade");
  setTimeout(() => {
    novaTela(); 
    container.classList.remove("fade");
    container.classList.add("show");
  }, 500);
}

function soltaconfete() {
  confetti({
    particleCount: 500,
    spread: 200,
    origin: { y: 0.6 },
  });
}

window.onload = () => {
  mostrarCenario();
};
showQuestion();
