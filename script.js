function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome === "" || email === "") {
      alert("Por favor, preencha todos os campos antes de enviar o formulário.");
    } else {
      orca();
    }
  }

function orca() {
    alert("Seu pedido foi enviado, logo retornaremos com um orçamento!!");
}