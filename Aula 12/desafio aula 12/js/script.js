

function cadastrar(){
    let nome = document.getElementById("nomeFilme").value;
    let genero = document.getElementById("generoFilme").value;
    let anoFilme = document.getElementById("anoLancamento").value;

    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${nome}</h3>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>Ano:</strong> ${anoFilme}</p>
    `;

    document.getElementById("area").appendChild(card);
}