var enviar = document.getElementById("enviar");
enviar.addEventListener("click", function(){
  alert("Enviado correctamente")

})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))