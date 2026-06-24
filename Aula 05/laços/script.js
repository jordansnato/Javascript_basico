// let soma = 0

// for(let i = 0; i <= 100000000000000005; i++){

//     if(i % 2 == 0){
//         continue
//     }else{
//         console.log("numero impar " + i)
//     }
// }

// let opcao = "não";
// while(opcao != "sim"){
//     alert("Olá seja bem vindo!" + opcao)
//     opcao = prompt("Quer parar? 'sim' - 'não'")
// }

// DESAFIO

// 1
// for(let n1 = 1; n1 <= 10; n1++){
//     console.log(n1)
// }

// 2
// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 3
// for(let i = 5; i >= 0; i--){
//     console.log(i)
// }console.log("Lançamento")

// Tabuada 
// let numero = 7

// for(let i = 1; i <= 10; i++){
//     console.log(`${numero} X ${i} = ${numero * i}`)
// }

// Bateria
// let bateria = 100;

// while(bateria >= 0){
//     console.log(`Bateria: ${bateria}%`)
//     bateria -= 20;
// }

// let senha = "";

// while(senha !== "123"){
//     senha = prompt("Digite a senha")
//     alert("senha incorreta")
// }
// alert("Senha confirmada com sucesso")

// Desafio 4

// let energia = 100;

// while(energia > 0){
//     energia -= 10
//     console.log(energia)
// }

// let credito = 0;

// do{
//     console.log("tentando jogar")
// }while(credito > 0);

// let opcao ;

// do{
//     opcao = Number(prompt("1 - joga 2 - Ranking 3 - sair"))

//     switch(opcao){
//         case 1: alert("Jogando")
//         break;
//         case 2: alert("Seu ranking é entre os top 10 (5)")
//         break;
//         case 3: alert("Saindo")
//         break
//         default : alert("Número inválido")
//     }
// }while(opcao !==3)

// DESAFIO 5
// let playlist = [
//     "musica 1",
//     "musica 2",
//     "musica 3"
// ];

// for(let i = 0; i < playlist.length; i++){
//     console.log(playlist[i])
// }

// DESAFIO 6

// let filmes =[
//     "filme 1",
//     "filme 2",
//     "filme 3",
//     "filme 4",
//     "filme 5",
// ]

// for(let i = 0; i < filmes.length; i++){
//     console.log(filmes[i])
// }


//DESAFIO 7
// let notas =[7,8,10,5]
// let soma = 0

// for(let i = 0; i < notas.length; i++){
//     soma += notas[i]
// } console.log(soma)

// let media = soma / notas.length
// console.log(media)

//DESAFIO 9

// let idades = [15, 18, 22, 13, 30]
// let maior = idades[0]

// for(let i = 1; i < idades.length; i++){
//     if(idades[i] > maior){
//         maior = idades[i]
//     }
// }console.log(maior)

//DESAFIO 10

// let precos = [10.50, 25.00, 8.99, 12.75]
// let menor = precos[0]

// for(let i = 1; i < precos.length; i++){
//     if(precos[i] < menor){
//         menor = precos[i]
//     }
// }console.log(menor)

// Desafio 11

// let jogadores = [];
// let pontos = [];

// for(let i = 0; i < 3; i++){
//     let nome = prompt("Digite o nome");

//     let pontuação = Number(prompt("Digite a pontuação:"));

//     jogadores.push(nome);
//     pontos.push(pontuação);
// }

// for(let i = 0; i < jogadores.length; i++){
//     console.log(`${jogadores[i]} - ${pontos[i]}`)
// }

// ex 2

// let idades = [15, 18, 22, 13, 30];
// let contador = 0
// let maiores = []

// for(let i = 0; i < idades.length; i++){
//     if(idades[i]>=18){
//         contador ++ 
//     }
// }console.log(contador)

// for(let i = 0; i < idades.length; i++){
//     if(idades[i] >= 18){
//         maiores.push(idades[i])
//     }
// }
// console.log(maiores)


// ex 3

// let numeros = [2, 5, 8, 3, 10];
// let soma = 0
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 === 0){
//         soma += numeros[i]
//     }
// }console.log(soma)

// ex 4

let idades = [15, 18, 22, 13, 30];
let maior = 0
let segundaMaior = 0

for(let i = 0; i < idades.length; i++){
    if(idades[i] > maior){
        segundaMaior = maior
        maior = idades[i]
    }else if(idades[i] > segundaMaior ){
        segundaMaior = idades[i]

    }
}
console.log(segundaMaior)
