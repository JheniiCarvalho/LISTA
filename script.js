let convidados = [];

function adicionarNome() {
    const input = document.getElementById("nome-input");
    const nome = input.value.trim();

    if (nome !== "") {
        convidados.push(nome);
        input.value = "";
        input.focus();
        
        // Feedback visual simples: pisca o botão de mostrar
        const btnShow = document.getElementById("btn-show");
        btnShow.style.transform = "scale(1.02)";
        setTimeout(() => btnShow.style.transform = "scale(1)", 200);
    }
}

function mostrarLista() {
    const listaUI = document.getElementById("lista-convidados");
    const contagemASpan = document.querySelector("#contagem-a span");
    const totalSpan = document.querySelector("#total-geral span");
    const resultadoArea = document.getElementById("resultado-area");

    listaUI.innerHTML = "";
    let contadorA = 0;

    if (convidados.length === 0) {
        alert("Adicione alguns nomes primeiro!");
        return;
    }

    convidados.forEach((nome, index) => {
        const nomeMaiusculo = nome.toUpperCase();
        
        if (nomeMaiusculo.startsWith("A")) {
            contadorA++;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${nomeMaiusculo}</span>
            <button class="btn-remove" onclick="removerNome(${index})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        listaUI.appendChild(li);
    });

    contagemASpan.textContent = contadorA;
    totalSpan.textContent = convidados.length;
    resultadoArea.classList.remove("hidden");
}

function removerNome(index) {
    convidados.splice(index, 1); // Remove o nome do array
    mostrarLista(); // Atualiza a tela
    
    if (convidados.length === 0) {
        limparTudo();
    }
}

function limparTudo() {
    convidados = [];
    document.getElementById("lista-convidados").innerHTML = "";
    document.getElementById("resultado-area").classList.add("hidden");
}

// Atalho Enter
document.getElementById("nome-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") adicionarNome();
});
