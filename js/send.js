function sendSubmit() {
  alert('WE NEED A BACKEND!!!!');
}

//BOTÃO PARA ENVIAR DADOS E NÃO RESETAR A PÁGINA
window.onload = function () {
  document.querySelector('#enviar').onclick = function (e) {
    sendSubmit();
  };
};
