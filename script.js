onload = () => {
    document.body.classList.remove("container");
  };
const CODIGO_CORRECTO = "150325"; // Tu clave aquí

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

document.getElementById("codeInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    verificarCodigo();
  }
});
