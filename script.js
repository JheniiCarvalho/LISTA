const convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Alberto", "Daniela"];
const listaElement = document.getElementById("lista-convidados");
const contagemElement = document.getElementById("contagem-a");

let contadorA = 0;

convidados.forEach(nome => {
    // 1. Transformar em maiúsculas
    const nomeMaiusculo = nome.toUpperCase();

    // 2. Verificar se começa com "A"
    if (nomeMaiusculo.startsWith("A")) {
        contadorA++;
    }

    // 3. Criar o elemento na tela
    const li = document.createElement("li");
    li.textContent = nomeMaiusculo;
    listaElement.appendChild(li);
});

// 4. Exibir o total
contagemElement.textContent = `Total de nomes que começam com 'A': ${contadorA}`;
