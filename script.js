const CODIGO_CORRECTO = "1234"; // Cambia esta clave por la que quieras

function verificarCodigo() {
  const input = document.getElementById("codeInput").value;
  const errorMsg = document.getElementById("errorMsg");
  const overlay = document.getElementById("loginOverlay");

  if (input === CODIGO_CORRECTO) {
    errorMsg.style.display = "none";
    overlay.classList.add("hidden");
  } else {
    errorMsg.style.display = "block";
  }
}

// Permite presionar Enter en el teclado
document.getElementById("codeInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    verificarCodigo();
  }
});
