let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial(){
    exibirTexto("h1", "Jogo do número secreto");
    exibirTexto("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto){

        let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTexto("h1", "Acertou");
        exibirTexto("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        exibirTexto("h1", "Tente novamente")
        if(chute > numeroSecreto){
            exibirTexto("p", "O seu chute foi maior que o número secreto");
        }
        else{
            exibirTexto("p", "O seu chute foi menor que o número secreto");
        }
        tentativas++;
        limparCampo();

    }
}

function gerarNumero(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}