const cor = ["amarelo", "laranja", "roxo", "azul", "preto", "branco"];
const corProcurada = 'roxo'; // Pode ser qualquer cor

if (cor.indexOf(corProcurada) === -1) {
    console.log("Esta cor não está no vetor");
} else {
    console.log("Esta cor está no vetor");
}
