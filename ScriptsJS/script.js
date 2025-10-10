import abrirContato from "./modules.js";

const elementos_perguntas = document.getElementsByClassName("perguntas");
const botao_retornar = document.getElementById("bt_retornar");
const botao_contato = document.getElementById("bt_contato");
const botao_info = document.getElementById("bt_info");
const botao_doar = document.getElementById("bt_doar");

const respostas = [
  "Agasalhos e cobertores.",
  "Para ajudar os refugiados, que chegam sem recursos na cidade de Toledo, PR.",
  "Para doar, os alunos devem falar com os integrantes da turma nono ano Z, que estão organizando a campanha.",
  "Os itens serão repassados para a Embaixada Solidária em Toledo, PR, a qual distribuirá para os imigrantes e refugiados que necessitam dos recursos.",
  "A campanha ocorrerá até a última semana de novembro durante o horário das aulas da manhã.",
  "Os itens serão repassados para a Embaixada Solidária, que distribuirá para os imigrantes e refugiados que necessitarem.",
];

for (let i = 0; i < elementos_perguntas.length; i++) {
  const pergunta = elementos_perguntas[i];

  pergunta.addEventListener("click", () => {
    const resposta = document.createElement("p");
    resposta.innerHTML = respostas[i];
    resposta.className = "respostas";

    if (pergunta.lastElementChild.className == "respostas") {
      pergunta.removeChild(pergunta.lastElementChild);
    } else {
      pergunta.appendChild(resposta);
    }
  });
}

botao_retornar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

botao_contato.addEventListener("click", abrirContato);
botao_info.addEventListener("click", () => {
  window.location.href = "../ScriptsHTML/info.html";
});
botao_doar.addEventListener("click", () => {
  window.location.href = "../ScriptsHTML/doar.html";
});

