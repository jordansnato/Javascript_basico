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

let multi = 0;
let divisao = 0;

function calcularPeso(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso /(altura * altura)
    console.log(imc)

    if(imc < 18.5){
        document.getElementById("imc").innerText = "Abaixo do peso"
    }else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById("imc").innerText = "Peso Ideal"
    }else if(imc >= 25 && imc <= 29.9){
        document.getElementById("imc").innerText = "Sobrepeso"
    }else if(imc >= 30 && imc <= 34.9){
        document.getElementById("imc").innerText = "Obesidade Grau I"
    }else if(imc >= 35.5 && imc <= 39.9){
        document.getElementById("imc").innerText = "Obesidade Grau II"        
    }else{
        document.getElementById("imc").innerText = "Obesidade Grau III (Mórbida)"
    }
}

function listaTarefas(){
    let tarefas = document.getElementById("tarefa").value

    let item = document.createElement("li");
    item.innerText = tarefas;
    item.id = "item"

    document.getElementById("lista").appendChild(item)


    document.getElementById("tarefas").value = "";    
}

function excluir(){
    document.getElementById("item").remove();
}

function calculos(operacao){
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);

    if(operacao === "+"){
        let soma = numero1 + numero2;
        document.getElementById("mostraResultado").innerText = soma;
    }else if(operacao === "-"){
        let sub = numero1 - numero2;
        document.getElementById("mostraResultado").innerText = sub;
    }else if( operacao === "/"){
        let div = numero1 / numero2;
        document.getElementById("mostraResultado").innerText = div;
    }else if(operacao === "*"){
        let multi = numero1 * numero2;
        document.getElementById("mostraResultado").innerText = multi;
    }

}