alert('Bem vindo, ao jogo do número secreto! Será que você consegue adivinhar o número correto?');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//enquanto não atender ao requisito chute == numeroSecreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 0 e 10')
    if (chute == numeroSecreto){
        alert('Acertou, miseravi!');
    } else {
        if (chute > numeroSecreto)
            alert(`Errou! Tente um número MENOR que ${chute}`);
        else {
            alert(`Errou! Tente um número MAIOR que ${chute}`);
        }
    } 
}
    