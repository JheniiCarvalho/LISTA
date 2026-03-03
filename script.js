// Inicia carregando os dados salvos ou um array vazio
let convidados = JSON.parse(localStorage.getItem("listaConvidados")) || [];

// Executa ao abrir a página para mostrar se já houver dados
window.onload = () => {
    if (convidados.length > 0) mostrarLista();
};

function salvarNoLocalStorage() {
    localStorage.setItem("listaConvidados", JSON.stringify(convidados));
}

function adicionarNome() {
    const input = document.getElementById("nome-input");
    const nome = input.value.trim();

    if (nome !== "") {
        convidados.push(nome);
        salvarNoLocalStorage(); // Salva sempre que adicionar
        input.value = "";
        input.focus();
        mostrarLista(); // Atualiza em tempo real
    }
}

function mostrarLista() {
    const listaUI = document.getElementById("lista-convidados");
    const contagemASpan = document.querySelector("#contagem-a span");
    const totalSpan = document.querySelector("#total-geral span");
    const resultadoArea = document.getElementById("resultado-area");
    const extraActions = document.getElementById("extra-actions");

    listaUI.innerHTML = "";
    let contadorA = 0;

    convidados.forEach((nome, index) => {
        const nomeMaiusculo = nome.toUpperCase();
        if (nomeMaiusculo.startsWith("A")) contadorA++;

        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <span class="letra-destaque">${nomeMaiusculo[0]}</span>
                <span>${nomeMaiusculo}</span>
            </div>
            <button class="btn-remove" onclick="removerNome(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        listaUI.appendChild(li);
    });

    contagemASpan.textContent = contadorA;
    totalSpan.textContent = convidados.length;
    
    if (convidados.length > 0) {
        resultadoArea.classList.remove("hidden");
        extraActions.classList.remove("hidden");
    }
}

function ordenarLista() {
    convidados.sort((a, b) => a.localeCompare(b));
    salvarNoLocalStorage();
    mostrarLista();
}

function exportarLista() {
    if (convidados.length === 0) return;
    
    const texto = "LISTA DE CONVIDADOS\n" + 
                  "-------------------\n" + 
                  convidados.map(n => n.toUpperCase()).join("\n");
    
    const blob = new Blob([texto], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lista_convidados.txt";
    link.click();
}

function removerNome(index) {
    convidados.splice(index, 1);
    salvarNoLocalStorage();
    mostrarLista();
    
    if (convidados.length === 0) limparTudo();
}

function limparTudo() {
    if (confirm("Deseja apagar toda a lista?")) {
        convidados = [];
        localStorage.removeItem("listaConvidados");
        document.getElementById("lista-convidados").innerHTML = "";
        document.getElementById("resultado-area").classList.add("hidden");
        document.getElementById("extra-actions").classList.add("hidden");
    }
}
