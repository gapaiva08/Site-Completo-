// script.js

// Exemplo de validação de formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector('textarea').value;

    if (nome && email && mensagem) {
        alert(`Mensagem enviada por ${nome}!`);
        // Aqui você poderia enviar os dados para um servidor ou fazer outra ação
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
