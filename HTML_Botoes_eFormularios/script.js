document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('.form-container form');
    const statusMensagem = document.getElementById('mensagem-status');
    
    if (formulario && statusMensagem) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();
            const nome = formulario.querySelector('#nome').value.trim();
            const email = formulario.querySelector('#email').value.trim();
            const mensagem = formulario.querySelector('#mensagem').value.trim();
            
            if (nome === '' || email === '' || mensagem === '') {
                statusMensagem.innerHTML = '<p class="erro">Por favor, preencha todos os campos.</p>';
                statusMensagem.className = 'erro';
            } else {
                statusMensagem.innerHTML = '<p class="sucesso">Mensagem enviada com sucesso!</p>';
                statusMensagem.className = 'sucesso'; // Consistente com a classe no HTML
                formulario.reset();
            }
        });
    }
});