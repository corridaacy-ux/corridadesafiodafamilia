const LINK_GOOGLE_FORMS = "https://docs.google.com/forms/d/e/1FAIpQLSf5teEWjt8Ya-DE1M9oGxZ_AOOwN-y0XWkKF6AzW6GW1Ko49g/viewform?usp=header";

const DATA_EVENTO = "2026-08-08T06:30:00-03:00";

document.querySelectorAll("a").forEach(link => {
  const texto = link.textContent.toLowerCase();

  if (
    texto.includes("inscreva") ||
    texto.includes("inscrição") ||
    texto.includes("inscrever")
  ) {
    link.href = LINK_GOOGLE_FORMS;
    link.target = "_blank";
  }
});

function atualizarContador() {
  const alvo = new Date(DATA_EVENTO).getTime();
  const agora = new Date().getTime();
  const diferenca = alvo - agora;

  const contador = document.getElementById("contador");
  if (!contador) return;

  if (diferenca <= 0) {
    contador.innerHTML = "<strong>É hoje!</strong>";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);
