
function cadastrar(){
    let filme = document.getElementById("nomeFilme").value;
    let genero = document.getElementById("generoFilme").value;
    let anoFilme = document.getElementById("anoLancamento").value;

    let li = document.createElement("li")
    li.innerHTML = `Nome: ${filme} | Genêro: ${genero} 
    | Data lançamento: ${anoFilme} <span onclick= 'deletarTarefa(this)'>❌</span>` 

    document.querySelector("ul").appendChild(li)

    document.getElementById("nomeFilme").value = "";
    document.getElementById("generoFilme").value = "";
    document.getElementById("anoLancamento").value = "";
}

function deletarTarefa(li){
    li.parentElement.remove(li)

}