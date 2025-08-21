const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbyYFDp94qlj1voSg0wu1wqMpFggvFeUbG-V46-CnPPFFhr8G6yntsnnl9Qulfv9vD6z/exec", {
    method: "POST",
    body: data
  })
  .then(response => response.text())
  .then(text => {
    msg.innerText = "✅ Enviado com sucesso!";
    form.reset();
  })
  .catch(err => {
    console.error("Erro ao enviar:", err);
    msg.innerText = "❌ Ocorreu um erro, tente novamente.";
  });
});
