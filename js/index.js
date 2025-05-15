
document.addEventListener('DOMContentLoaded', function() {
  
    const dataInicio = new Date('2023-12-16'); 
    const botaoMusica = document.getElementById('botaoMusica');
    const musica = document.getElementById('musica');
    let musicaTocando = false;

    function atualizarContador() {
        const agora = new Date();
        const diferenca = agora - dataInicio;
        

        const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44));
        const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24);
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('tempoRelacionamento').innerHTML = `
            ${meses} meses ${Math.floor(dias)} dias ${horas} horas ${minutos} minutos
        `;
    }


    botaoMusica.addEventListener('click', function() {
        if (musicaTocando) {
            musica.pause();
            botaoMusica.textContent = 'Nossa Musica ♫';
        } else {
            musica.play()
                .then(() => {
                    botaoMusica.textContent = 'Parar Musica ♫';
                })
                .catch(error => {
                    console.error("Erro ao reproduzir música:", error);
                    alert("Por favor, interaja com a página para que a música possa tocar.");
                });
        }
        musicaTocando = !musicaTocando;
    });

  
    function criarChuvaDeCoracoes() {
        const coracao = document.createElement('div');
        coracao.innerHTML = '❤️';
        coracao.style.position = 'fixed';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.top = '-10px';
        coracao.style.fontSize = (Math.random() * 20 + 10) + 'px';
        coracao.style.animation = `cair ${Math.random() * 3 + 2}s linear forwards`;
        coracao.style.opacity = Math.random() * 0.5 + 0.5;
        coracao.style.zIndex = '-1';
        
        document.body.appendChild(coracao);
        
        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes cair {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);

    function efeitoDigitacao() {
        const textos = document.querySelectorAll('.conteudo p:not(.data):not(.assinatura)');
        textos.forEach((elemento, index) => {
            const textoOriginal = elemento.textContent;
            elemento.textContent = '';
            
            setTimeout(() => {
                let i = 0;
                const velocidade = 30 + Math.random() * 20; 
                
                function digitar() {
                    if (i < textoOriginal.length) {
                        elemento.textContent += textoOriginal.charAt(i);
                        i++;
                        setTimeout(digitar, velocidade);
                    }
                }
                
                digitar();
            }, index * 1500); 
        });
    }

    atualizarContador();
    setInterval(atualizarContador, 60000); // Atualiza a cada minuto
    setInterval(criarChuvaDeCoracoes, 300); // Cria corações a cada 300ms
    
    setTimeout(efeitoDigitacao, 1000);

    console.log("%cPara a pessoa mais especial do mundo! ❤️", 
        "color: #d23669; font-size: 16px; font-weight: bold;");
});

document.querySelector('.carta').addEventListener('click', function() {
    const mensagens = [
        "Eu te amo mais que tudo!",
        "Você é o amor da minha vida!",
        "5 meses e muitos mais pela frente!",
        "Minha vida é melhor com você!",
        "Você me faz feliz todos os dias!"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    alert(mensagemAleatoria);
});
