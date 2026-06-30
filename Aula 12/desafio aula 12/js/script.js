let cadastrados = 0;

function cadastrar() {
    let filme = document.getElementById("nomeFilme").value;
    let genero = document.getElementById("generoFilme").value;
    let anoFilme = document.getElementById("anoLancamento").value;

    if (filme === '' || genero === '' || anoFilme === '') {
        alert("Favor preencha todos os campos!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        Nome: ${filme} | Gênero: ${genero} | Ano: ${anoFilme}
        <span onclick="deletarFilme(this)"> ❌ </span>
    `;

    document.querySelector("ul").appendChild(li);

    cadastrados++;
    atualizarCadastrados();

    document.getElementById("nomeFilme").value = "";
    document.getElementById("generoFilme").value = "";
    document.getElementById("anoLancamento").value = "";
}

function deletarFilme(el) {
    el.parentElement.remove();
    cadastrados--;
    atualizarCadastrados();
}

function atualizarCadastrados() {
    document.getElementById("cadastro").innerText =
        `Filmes cadastrados: ${cadastrados}`;
}

function trocarTema() {
    document.body.classList.toggle("dark");

    let botao = document.getElementById("tema");

    if (document.body.classList.contains("dark")) {
        botao.innerHTML = "🌙 Noite";
    } else {
        botao.innerHTML = "☀️ Dia";
    }
}