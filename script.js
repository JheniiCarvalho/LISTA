let listaConvidados = [];

function atualizarTela() {
    const listaElement = document.getElementById("lista-convidados");
    const contagemElement = document.querySelector("#contagem-a span");
    
    // Limpa a lista visual antes de reconstruir
    listaElement.innerHTML = "";
    let contadorA = 0;

    listaConvidados.forEach(nome => {
        const nomeMaiusculo = nome.toUpperCase();
        
        // Conta nomes que começam com A
        if (nomeMaiusculo.startsWith("A")) {
            contadorA++;
        }

        // Cria o item da lista
        const li = document.createElement("li");
        li.textContent = nomeMaiusculo;
        listaElement.appendChild(li);
    });

    contagemElement.textContent = contadorA;
}

function adicionarNome() {
    const input = document.getElementById("nome-input");
    const nome = input.value.trim();

    if (nome !== "") {
        listaConvidados.push(nome);
        input.value = ""; // Limpa o campo
        input.focus();    // Volta o cursor para o campo
        atualizarTela();
    }
}

function limparLista() {
    listaConvidados = [];
    atualizarTela();
}

// Permite adicionar ao apertar "Enter" no teclado
document.getElementById("nome-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") adicionarNome();
});
