/* IF/ELSE
Crie uma variável com uma nota de 0 a 100. 
 Use if/else para classificar: A (>= 90), B (>= 80), C (< 80).
  Exiba a classificação.
 Dica: Use else if para verificar múltiplas condições.

let nota = Number(prompt("Informe uma nota de 0 a 100: "))

if(nota >= 90){
    alert("A")
}else if( nota >= 80){
    alert("B")
}else{
    alert("C")
}
*/

/*  SWITCH 
 Crie uma variável com número de 1 a 7. 
Use switch para exibir o nome do dia correspondente 
(1 = Domingo, 2 = Segunda...). Caso inválido, exiba "Dia inválido".
Dica: Use case para cada número e break para interromper.

let numero = Number(prompt("Informe um numero de 1 a 7: "))

switch(numero){

    case 1: alert("Domingo")
    break;
    case 2: alert("segunda-feira")
    break;
    case 3: alert("Terça-feira")
    break;
    case 4: alert("Quarta-feira")
    break;
    case 5: alert("Quinta-feira")
    break;
    case 6: alert("Sexta-feira")
    break;
    case 7: alert("Sabádo")
    break;

    default:
    alert("Dia Inválido")
}
*/ 

/* TERNÁRIO
 Crie uma variável com uma temperatura.
  Use o operador ternário para exibir "Quente"
   se maior que 25, ou "Frio" caso contrário.
Dica: condicao ? valorSeVerdadeiro : valorSeFalso


let temperatura = Number(prompt("Digite a temperatura atual: "))

let temp = temperatura > 25 ? "Quente" : "Frio"; 
alert(temp)
*/

/* 
Crie duas variáveis: maior de idade (boolean)
e tem carteira (boolean). Use if com && para verificar
se a pessoa pode dirigir (maior de idade E tem carteira).
Dica: && exige que TODAS as condições sejam verdadeiras.
*/

// let maiorDeIdade = prompt(
//     "Informe true para maior de idade ou false para menor de idade:"
// ) === "true";

// let temCarteira = prompt(
//     "Tem carteira? Digite true ou false:"
// ) === "true";

// if (maiorDeIdade && temCarteira) {
//     alert("Pode dirigir.");
// } else {
//     alert("Não pode dirigir.");
// }

// Crie uma variável com um número. Verifique se ele está entre 10 e 20 
// (inclusive). Exiba "Dentro" ou "Fora" do intervalo.
// Dica: Use && para verificar duas condições ao mesmo tempo.

// let number = Number(prompt("Digite um número entre 10 e 20: "))

// if(number > 9 && number <= 20){
//     alert("O numero está dentro do intervalo!!")
// }else{
//     alert("O numero está fora do interválo!!")
// }

//  Você tem um if/else que verifica cores. 
//  Reescreva-o usando switch. Cores: "vermelho" → "Pare",
//   "amarelo" → "Atenção", "verde" → "Siga".
// Dica: Cada case corresponde a uma cor.

// let cor = prompt("Digite uma cor: ").toLowerCase()

// switch(cor){
//     case "amarelo": alert("atenção")
//     break;
//     case "vermelho": alert("pare")
//     break;
//     case "verde": alert("siga")
//     break;

//     default: alert("cor indefinida")
// }

