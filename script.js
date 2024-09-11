var buttonState = 0;

function showMessage() {
    const displayMessage = document.getElementById('displayMessage');
    const buttonMessage = document.getElementById('buttonMessage'); 
    
    // Mensagem pré-programada
    const message = "Meu amor, hoje 11.09.24, completamos mais um MÊS juntinhos, quero te dizer, através dessa mensagem, que nunca estive tão bem com a vida, tão feliz com tudo. E você é o motivo por trás de tudo isso! Obrigado por ser essa parceira incrível que está sempre ao meu lado, eu te amo mais que tudo! E que esse seja apenas mais um de muitos meses que vem ai. Eu queria estar ai ao seu lado, presente nesse dia, mas infelizmente não foi possível. Mas saiba, que desde sempre, eu sonhei com você. E Deus te pôs em minha vida! És dona do meu coração, do meu dia, dos meus pensamentos, do meu mundo inteiro!";
    
    if(buttonState == 0){
        buttonState = 1;
        displayMessage.textContent = message;
        buttonMessage.textContent = "Ocultar mensagem"
    } else {
        buttonState = 0;
        displayMessage.textContent = "Clique no botão para exibir a mensagem.";
        buttonMessage.textContent = "Mostrar mensagem"
    }
}
