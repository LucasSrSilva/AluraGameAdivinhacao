alert("Boas vindas ao jogo do n�mero secreto!");
let numerosecreto = 29;
console.log(numerosecreto);
let chute;
let tentativa = 1;
while(chute != numerosecreto){
    chute = prompt("Escolha um n�mero entre 1 e 30");

    if(numerosecreto == chute){
        break;
    }
    else{
        if(chute > numerosecreto){
            alert("O chute foi maior");
        }
        else{
            alert("o numero � menor");
        }
        
    }    
    tentativa++;
}

let palavratentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert("Voc� acertou! O n�mero secreto �: " + numerosecreto);
alert(tentativa + " " + palavratentativa);


