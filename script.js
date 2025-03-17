// Ajuste de tamanho da fonte
let tamanhoFonte = 16;
document.getElementById("aumentarFonte").addEventListener("click", function() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte").addEventListener("click", function() {
    tamanhoFonte = Math.max(10, tamanhoFonte - 2);
    document.body.style.fontSize = tamanhoFonte + "px";
});

// Alternar Modo Claro/Escuro
document.getElementById("toggleTema").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Leitura em voz alta ao clicar na legenda
document.querySelectorAll(".legenda").forEach(item => {
    item.addEventListener("click", function() {
        let texto = this.innerText;
        let synth = window.speechSynthesis;
        let utterance = new SpeechSynthesisUtterance(texto);
        synth.speak(utterance);
    });
});
