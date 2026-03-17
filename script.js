// Função para criar as luzes azuis brilhando
function gerarBrilho() {
    // Cria 20 partículas de brilho
    for (let i = 0; i < 20; i++) {
        const brilho = document.createElement('div');
        brilho.classList.add('brilho');
        
        // Posiciona no meio da tela
        brilho.style.left = Math.random() * window.innerWidth + 'px';
        brilho.style.top = Math.random() * window.innerHeight + 'px';
        
        document.body.appendChild(brilho);

        // Remove o brilho depois de 1 segundo para não travar o site
        setTimeout(() => {
            brilho.remove();
        }, 1000);
    } 
    
    // Mensagem de alerta legal
    alert("Obrigado por se preocupar com o planeta!");
}

// Efeito de brilho automático ao rolar a página (passar slides)
window.addEventListener('scroll', () => {
    // Sempre que rolar, cria um pequeno rastro de luz azul
    const trilha = document.createElement('div');
    trilha.classList.add('brilho');
    trilha.style.left = Math.random() * window.innerWidth + 'px';
    trilha.style.top = window.scrollY + (window.innerHeight / 2) + 'px';
    document.body.appendChild(trilha);

    setTimeout(() => { trilha.remove(); }, 500);
});