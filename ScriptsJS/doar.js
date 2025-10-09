const botao_inicio = document.getElementById("bt_inicio");
const botao_sobre = document.getElementById("bt_sobre");

botao_inicio.addEventListener("click", () => {
  window.location.href = "../index.html";
});
botao_sobre.addEventListener("click", () => {
  window.location.href = "../ScriptsHTML/info.html";
});
