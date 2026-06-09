/* Crie uma variável com idade e use 
if/else para decidir se é maior de
 idade ou não
 
let idade = Number(prompt("Digite sua idade: "))

if(idade >= 18){
    alert("Você é maior de idade")
}else{
    alert("Você é de menor")
}
*/
/*
Crie um switch que classifique um número de 
1 a 3 como "Baixo", "Médio" ou "Alto"


let number = Number(prompt("digite um numero:"))

switch(number){
    case 1: alert("Baixo")
    break;
    case 2: alert("Médio")
    break;
    case 3: alert("Alto")

    default: alert("Numero indefinido")
}
*/

/*Use operador ternário 
para verificar se um número
 é positivo ou negativo


let number = Number(prompt("digite um numero: "))

let n = number > 0 ? "maior que 0" : "numero menor que 0"
alert(n)
*/

/*
Use if com && para verificar se uma pessoa pode votar
 (idade >= 16 E nacionalidade brasileira)
*/ 

let idade =  Number(prompt("Sua idade: "))
let nacionalidade = prompt("Sua nacionalidade: ").toLowerCase()

if(idade >= 16 && nacionalidade === "brasileiro"){  
    alert("Você pode votar")
}else{
    alert("Você não pode votar")
}