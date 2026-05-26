// Ex 01 calculadora simples
// let n1 = 20;
// let n2 = 30;

// let operacao = prompt("Digite a operação que deseja (+ , - , * , / )");

// if(operacao === "+"){
//     let soma = n1 + n2
//     console.log(soma);
// }else if(operacao === "-"){
//     let sub = n1 - n2
//     console.log(sub);
// }else if(operacao === "/"){
//     let Div = n1 / n2
//     console.log(Div);
// }else if (operacao === "*"){
//     let multi = n1 * n2
//     console.log(multi);
// }else{
//     console.log("Operação inválida")
// }
// ------------------------------------------

// Ex 02 Resto da Divisão

// let number = Number(prompt("Digite um numero: "));

// if(number % 2 == 0){
//     console.log("Par");
// }else{
//     console.log("Ímpar")
// }
// -----------------------------------------------
// Ex 03
// let quadrado = number ** 2;
// let cubo =  number ** 3;

// console.log("Quadrado: ", quadrado);
// console.log("Cubo: ", cubo);

// ------------------------------------------------

// Ex 04

// let C = 25;
// let F = (C * 9/5) + 32;

// console.log(F)

// -------------------------------------------------

//  Ex 05
// let nota1 = 6.5;
// let nota2 = 8;
// let nota3 = 5;

// media = (nota1 + nota2 + nota3) / 3;

// console.log(media.toFixed(2));
// -----------------------------------------------

// Ex 06

// let valorCompra = 50;
// let valorPago = 70;

// valorTroco = (valorPago - valorCompra);

// console.log(` Seu troco é: ${valorTroco}`);
// -------------------------------------------------

// Ex 07
// let number1 = 10;
// let number2 = "10";

// console.log(number1 == number2);
// == compara sommente os valores por isso ele fica true

// console.log(number1 === number2);
// compara os valores e os tipos por isso false
// -------------------------------------------------

// Ex 08

// let n1 = 10;
// let n2 = 5;

// if(n1 > n2){
//     console.log(` o maior é: ${n1}`)
// }else{
//     console.log(`o maior é: ${n2}`)
// }

// ----------------------------------------------------

// Ex 09

// let nota1 = 7.4;
// let nota2 = 8.5;
// let nota3 = 5.3;

// let media = (nota1 + nota2 + nota3) / 3;

// if(media >= 7){
//     console.log(`Aprovado com média: ${media.toFixed(2)}`);
// }else{
//     console.log(`Reprovado com média: ${media.toFixed(2)}`);
// }
// --------------------------------------------------------------

// Ex 10

// let idade = Number(prompt("Digite sua idade: "));

// if(idade  >= 18){
//     console.log("maior de idade: " , idade);
// }else{
//     console.log("Menor de idade: ", idade);
// }
// ----------------------------------------------------------

// Ex 11
// let nome = "Jordan";
// let Nome = "jordan";

// if(nome === Nome){
//     console.log(false);
// }else if(nome !== Nome){
//     console.log(true);
// }else{
//     console.log("Valor inválido")
// }
// -------------------------------------------------


// Ex 12

// let produto1 = 50;

// if(produto1 >= 10 && produto1<= 100){
//     console.log("O produto está entre R$10 e R$100")
// }else{
//     console.log("O produto está fora da faixa de R$10 e R$100")
// }
// ------------------------------------------------------

// Ex 13

// let numero = 22;

// if(numero > 0 && numero % 2 == 0){
//     console.log(true);
// }else{
//     console.log(false);
// }
// -------------------------------------------------------------

// Ex 14
// let usuario = "root";

// if(usuario === "Admin" || usuario === "root"){
//     console.log("Acesso confirmado");
// }else{
//     console.log("Acesso inválido");
// }
// ----------------------------------------------------

// Ex 15
// let bool = false;

// if(!bool){
//     console.log("usuario n está logado")
// }else{
//     console.log("Usuário está logado")
// }
// ------------------------------------------------

// Ex 16
// let nome = "Jordan";
// let idade = "18";
// let email = "jordan@gmail.com";

// if(nome !== "" && email !== "" && idade >= 18){
//     console.log("Acesso liberado");
// }else{
//     console.log("Acesso inválido");
// }
// -------------------------------------------------------------

// Ex 17

// let assinante =  false;
// let valorCompra = 50;

// if(assinante === true || valorCompra > 200){
//     console.log("Você ganhou um desconto de 10%");
// }else{
//     console.log("Infelizmente você não ganhou o desconto");
// }
// -----------------------------------------------------------

// Ex 18

// let idade = 18;
// let conta = true;
// let estadoUsaurio = true;

// if(idade >= 18 && conta === true && estadoUsaurio === true){
//     console.log("Conteúdo liberado");
// }else{
//     console.log("Acesso restrito");
// }
// ----------------------------------------------------------------------

// Ex 19
// let number = 100;

// if (number % 2 == 0 && number >= 1 && number <= 100){
//     console.log(`${number} é Par e está dentro do intervalo`)
// }else{
//     console.log(`${number} é Impar não está dentro do intervalo`)
// }
// -------------------------------------------------------------------------

// Ex 20
// let nota = 10;

// if(nota < 5){
//     console.log("Reprovado")
// }else if(nota < 7 && nota >= 5){
//     console.log("Recuperação")
// }else if(nota <= 8 && nota >= 7){
//     console.log("Aprovado")
// }else if( nota >= 9){
//     console.log("Excelente")
// }else{
//     console.log("Nota inválida")
// }
// ---------------------------------------------------------

// Ex 21

// let peso = 88;
// let altura = 1.75;

// let imc = peso / (altura * altura);

// console.log("Seu IMC é:", imc.toFixed(2));

// if (imc < 18.5) {
//     console.log("Abaixo do peso");
// } else if (imc < 25) {
//     console.log("Peso normal");
// } else if (imc < 30) {
//     console.log("Sobrepeso");
// } else {
//     console.log("Obesidade");
// }
// ---------------------------------------------------------------

// EX 22

let numeroFixo = 44;
let palpite = Number(prompt("De um palpite de um numero: "))

if(palpite === numeroFixo){
    console.log("Você Acertou na mosca!! ")
}else if(palpite > numeroFixo){
       console.log("Você chutou alto, chute um pouco  menos")
}else{
    console.log("Você chutou muito baixo, chute um pouco mais")
}