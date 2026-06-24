function alterarTitulo(){
    document.getElementById("titulo").innerText = "Meu primeiro Dom com JavaScript"
}

function acaoalert(){
    alert("Você clicou no botão!");
}

function mostrarNome(){
  let nome =  document.getElementById("name").value
  document.getElementById("resultado").innerText = `Olá ${nome}!`;  

}

function verificadorIdade(){
    let nome =  document.getElementById("name").value
    let idade = document.getElementById("age").value

    if(idade >= 18){
        document.getElementById("resultadoIdade").innerText = `Olá ${nome} você tem ${idade} você é maior de idade`
    }else{
        document.getElementById("resultadoIdade").innerText = "Você não é maior de idade"
    }

}
let foto_trocada = false
function trocarImagem(){

    if(foto_trocada === false){
        foto_trocada = true
        document.getElementById("imagem").src="cris.jpg"
    }else{
        foto_trocada = false
        document.getElementById("imagem").src="cris2.jpg"
    }
}

function esconderTexto(){
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto(){
    document.getElementById("texto").style.display = "block"
}

function criarParagrafo(){
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Lorem15";
    novoParagrafo.id = "paragrafo"
    novoParagrafo.classList.add("paragrafo");
    document.getElementById("area").appendChild(novoParagrafo);
};

function removerAviso(){
    document.getElementById("paragrafo").remove();
}
