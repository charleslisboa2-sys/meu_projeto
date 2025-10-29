document.addEventListener('DOMContentLoaded', () => {
    const containerPrincipal = document.querySelector('.container-principal');
    const btnAdicionar = document.querySelector('#btn-adicionar-cartao');

    if (containerPrincipal && btnAdicionar) {
        btnAdicionar.addEventListener('click', () => {
            const novoCartao = document.createElement('article');
            novoCartao.classList.add('cartao');
            novoCartao.innerHTML = `
                <h2>Novo Artigo</h2>
                <p>Este é um novo artigo adicionado dinamicamente.</p>
            `;
            containerPrincipal.appendChild(novoCartao);

        });
    }
});
