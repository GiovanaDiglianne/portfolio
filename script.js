// Seleciona o formulário de contato
const formulario = document.getElementById("form-contato");

// Seleciona o elemento onde mostraremos as mensagens
const mensagemFormulario = document.getElementById("mensagem-formulario");

// Executa esta função quando o usuário tentar enviar o formulário
formulario.addEventListener("submit", function(event) {

    // Impede o envio real do formulário
    event.preventDefault();

    // Obtém os valores digitados pelo usuário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        mensagemFormulario.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Verifica se o e-mail possui um formato básico válido
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        mensagemFormulario.textContent = "Por favor, informe um e-mail válido.";
        return;
    }

    // Simula o envio da mensagem
    mensagemFormulario.textContent = "Mensagem enviada com sucesso!";

    // Limpa os campos após o envio
    formulario.reset();
});