let convidados = []; // Array que guarda os nomes

function adicionarNome() {
    const input = document.getElementById("nome-input");
    const nome = input.value.trim();

    if (nome !== "") {
        convidados.push(nome);
        input.value = "";
        input.focus();
        // Opcional: ocultar a lista ao adicionar um novo para forçar o clique no botão
        document.getElementById("lista-convidados").innerHTML = "";
        document.getElementById("resultado-area").style.display = "none";
    }
}

function mostrarLista() {
    const listaUI = document.getElementById("lista-convidados");
    const contagemSpan = document.querySelector("#contagem-a span");
    const resultadoArea = document.getElementById("resultado-area");

    // Limpa a visualização anterior
    listaUI.innerHTML = "";
    let contadorA = 0;

    // Loop para processar e imprimir
    convidados.forEach(nome => {
        const nomeMaiusculo = nome.toUpperCase();
        
        if (nomeMaiusculo.startsWith("A")) {
            contadorA++;
        }

        const li = document.createElement("li");
        li.textContent = nomeMaiusculo;
        listaUI.appendChild(li);
    });

    // Atualiza contagem e mostra a área de resultados
    contagemSpan.textContent = contadorA;
    resultadoArea.style.display = "block";
}

function limparTudo() {
    convidados = [];
    document.getElementById("lista-convidados").innerHTML = "";
    document.getElementById("resultado-area").style.display = "none";
}
