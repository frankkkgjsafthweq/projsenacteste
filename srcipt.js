const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbwqhmtYgv1Nb8fmduP8bh82uzqyGm7C5k2fT3U7hX2TyYDxoGGeRzFfRXlhMhUeRWcY/exec", { 
    method: "POST",
    body: data
  })
  .then(() => {
    msg.textContent = "Cadastro enviado com sucesso!";
    msg.style.color = "green";
    form.reset();
  })
  .catch(() => {
    msg.textContent = "Erro ao enviar. Tente novamente.";
    msg.style.color = "red";
  });
});
    