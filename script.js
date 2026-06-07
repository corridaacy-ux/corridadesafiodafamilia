const LINK_GOOGLE_FORMS = "https://forms.gle/wceRLE6F1drY1uch6";
const DATA_EVENTO = "2026-08-08T06:30:00-03:00";

document.querySelectorAll('a[href="https://forms.gle/wceRLE6F1drY1uch6"]').forEach(link => {
  link.href = LINK_GOOGLE_FORMS;
});

function atualizarContador() {
  const alvo = new Date(DATA_EVENTO).getTime();
  const agora = new Date().getTime();
  const diferenca = alvo - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").innerHTML = "<strong>É hoje!</strong>";
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
