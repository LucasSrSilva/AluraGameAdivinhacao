alert("Boas vindas ao jogo do número secreto!");
let numerosecreto = 29;
console.log(numerosecreto);
let chute;
let tentativa = 1;
while(chute != numerosecreto){
    chute = prompt("Escolha um número entre 1 e 30");

    if(numerosecreto == chute){
        break;
    }
    else{
        if(chute > numerosecreto){
            alert("O chute foi maior");
        }
        else{
            alert("o numero é menor");
        }
        
    }    
    tentativa++;
}

let palavratentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert("Você acertou! O número secreto é: " + numerosecreto);
alert(tentativa + " " + palavratentativa);


