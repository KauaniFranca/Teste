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
