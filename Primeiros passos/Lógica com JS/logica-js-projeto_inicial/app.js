alert('Bem vindo, ao jogo do número secreto! Será que você consegue adivinhar o número correto?');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute
let tentativas = 1

// enquanto não atender ao requisito chute == numeroSecreto
while (chute != numeroSecreto){
    chute = prompt(`${tentativas}° tentativa: Escolha um número entre 1 e 100`);
    if (chute == numeroSecreto) {
        // interrompe o processo
        break; 
    } else {
        if (chute > numeroSecreto) {
            alert(`Errou! Tente um número MENOR que ${chute}`);
        } else {
            alert(`Errou! Tente um número MAIOR que ${chute}`);
        }
        tentativas++
    } 
}

//operador ternário no JS
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if (tentativas > 1) {
    alert(`Acertou, miseravi! Após ${tentativas} tentativas.`);
} else {
    alert(`Acertou, miseravi! De primeira!`);
}
*/ 