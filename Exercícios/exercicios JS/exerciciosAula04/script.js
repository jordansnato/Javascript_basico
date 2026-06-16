// Ex 01

// let n1 = Number(prompt("digite um numero: "))
// let n2 = Number(prompt("digite um outro numero: "))

// if(n1 > n2){
// alert(`${n1} é o maior`)
// }else{
//     alert(`${n2} é o maior`)
// }

// EX 02
//  let n1 = Number(prompt("digite um numero: "))

//  if(n1 > 0){
//     alert(`${n1} é possitivo`)
//  }else{
//     alert(`${n1} é negativo`)
//  }

// Ex 03
// let letra = prompt("Digite uma letra: ").toLowerCase()

// if(letra === "f"){
//     alert("Feminino")
// }else if(letra === "m"){
//     alert("Masculino")
// }else{
//     alert("Sexo inválido")
// }

// EX 04
// let vogal = prompt("Digite uma letra: ")

// if(vogal == "a" || vogal == "e" || vogal =="i" || vogal == "o" || vogal == "u"){
//     alert(`${vogal} é vogal`)
// }else{
//     alert(`${vogal} não é vogal`)
// }

// EX 05

// let n1 =  Number(prompt("digite uma nota: "))
// let n2 =  Number(prompt("digite uma nota: "))
// let n3 =  Number(prompt("digite uma nota: "))


// let media = (n1 + n2 + n3)/3;

// if(media === 10){
//     alert("Aprovado com distinção")
// }else if(media >= 7){
//     alert("aprovado")
// }else{
//     alert("Reprovado")
// }

// EX 06
// let n1 = 8
// let n2 = 6
// let n3 = 7

// if(n1 > n2 && n1 > n3){
//     alert(`${n1} é o maior`)
// }else if (n2 > n1 && n2 > n3){
//     alert(`${n2} é o maior`)
// }else{
//     alert(`${n3} é o maior`)
// }

// EX 07
// let n1 = 8
// let n2 = 9
// let n3 = 7

// if(n1 > n2 && n1 > n3 && n2 > n3){
//     alert(`${n1}é o maior entre eles e o ${n3} é o menor`)
// }else if(n2 > n1 && n2 > n3 && n3 > n1){
//     alert(`${n2}é o maior entre eles e o ${n1} é o menor`)
// }else{
//     alert(`${n3} é o maior entre eles e o ${n2} é o menor`)
// }

// EX 08
// let produto1 = Number(prompt("Qual o valor do produto1: R$"))
// let produto2 = Number(prompt("Qual o valor do produto2: R$"))
// let produto3 = Number(prompt("Qual o valor do produto3: R$"))

// if(produto1 < produto2 && produto1 < produto3){
//     alert(`${produto1} é o menor preço`)
// }else if(produto2 < produto1 && produto2 < produto3){
//     alert(`${produto2} é o menor preço`)
// }else{
//     alert(`${produto3} é o menor preço`)
// }

// EX 09

// let n1 = Number(prompt("Digite um numero:"))
// let n2 = Number(prompt("Digite um numero:"))
// let n3 = Number(prompt("Digite um numero:"))

// if(n1 >= n2 && n2 >= n3){
//     alert(`${n1}, ${n2}, ${n3}`)
// }else if(n1 >= n3 && n3 >= n2){
//     alert(`${n1}, ${n3}, ${n2}`)
// }else if(n2 >= n1 && n1 >= n3){
//     alert(`${n2}, ${n1}, ${n3}`)
// }else if(n2 >= n3 && n3 >= n1){
//     alert(`${n2}, ${n3}, ${n1}`)
// }else if(n3 >= n1 && n1 >= n2){
//     alert(`${n3}, ${n1}, ${n2}`)
// }else{
//     alert(`${n3}, ${n2}, ${n1}`)
// }

// EX 10

// let turno = prompt("Que turno você estuda('M -> Matutino - V -> Vespertino - N -> Noturno')").toLowerCase()

// if(turno === "m"){
//     alert("Bom dia!")
// }else if(turno === "v"){
//     alert("Boa tarde!")
// }else if(turno === "n"){
//     alert("Boa noite")
// }else{
//     alert("Turno inválido")
// }

// EX 11

// let salario = Number(prompt("Qual seu salário:"))
// let aumento = 0;
// if(salario <= 0){
//     alert("Numero inválido. Digite um valor válido")
// }
// if(salario < 280){
//     aumento = salario * 20 / 100
//     salarioFinal = salario + aumento
//     alert(aumento)
//     alert(`Seu salário era ${salario} demos 20% de aumento R$${aumento} agora seu salario final é R$${salarioFinal}`)
// }else if(salario >= 280 && salario < 700){
//     aumento = salario * 15 / 100
//     salarioFinal = salario + aumento
//     alert(aumento)
//     alert(`Seu salário era ${salario} demos 15% de aumento R$${aumento} agora seu salario final é R$${salarioFinal}`)
// }else if(salario >= 700 && salario < 1500){
//     aumento = salario * 10 / 100
//     salarioFinal = salario + aumento
//     alert(aumento)
//     alert(`Seu salário era ${salario} demos 10% de aumento R$${aumento} agora seu salario final é R$${salarioFinal}`)
// }else if(salario >= 1500){
//     aumento = salario * 5 / 100
//     salarioFinal = salario + aumento
//     alert(aumento)
//     alert(`Seu salário era ${salario} demos 5% de aumento R$${aumento} agora seu salario final é R$${salarioFinal}`)
// }else{
//     alert("Valor inválido")
// }

// Ex 12
let valorHora = Number(prompt("Qual o valor da sua hora trabalhada: "))
let quantidadeHoras = Number(prompt("Quantidades de hora trabakhadas:"))
let salario = valorHora * quantidadeHoras
let imposto = 0
let salarioFinal = 0
let inss = salario * 10 / 100
let fgts = salario * 11 / 100
let descontoFgts = salario  - fgts

if(salario <= 900){
    alert(`seu salario é de R$${salario} e você está isento do IR`)
}else if(salario > 900 && salario <=1500){
    imposto = salario * 5 / 100
    salarioFinal =  salario - imposto - inss
    alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 10% R$${imposto} e o INSS R$${inss}(10%) e seu  FGTS foi de 11% R$${descontoFgts}`)
}else if(salario > 1500 && salario <= 2500){
    imposto = salario * 10 / 100
    salarioFinal = salario - imposto - inss
    alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 10% R$${imposto} e o INSS R$${inss}(10%)  e seu  FGTS foi de 11% R$${descontoFgts}`)
}else if(salario > 2500){
    imposto = salario * 20 / 100
    salarioFinal = salario - imposto - inss
    alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 20% R$${imposto} e o INSS R$${inss}(10%)  e seu  FGTS foi de 11% R$${fgts}`)
}else{
    alert("valor invalido")
}

// 13
// let dia = Number(prompt("Digite um numero pra saber o dia: "))

// switch(dia){
//     case 1: alert(`${dia} | Domingo`)
//     break;
//     case 2: alert(`${dia} | Segunda`)
//     break;
//     case 3: alert(`${dia} | Terça`)
//     break;
//     case 4: alert(`${dia} | Quarta`)
//     break;
//     case 5: alert(`${dia} | Quinta`)
//     break;
//     case 6: alert(`${dia} | Sexta`)
//     break;
//     case 7: alert(`${dia} | Sábado`)
//     break;
//     default: alert("Valor inválido")

// }

// EX 14
// let n1 = Number(prompt("Insira a nota1 do aluno:"))
// let n2 = Number(prompt("Insira a nota2 do aluno:"))
// let media = (n1+n2) / 2

// if(media >=9 && media <= 10){
//     alert(`
//         ${media} | A
//         suas notas foram ${n1} e ${n2} Aprovado
//         `)
// }else if(media >= 7.5 && media < 9){
//     alert(`
//         ${media} | B
//         suas notas foram ${n1} e ${n2} Aprovado
//         `)
// }else if(media >= 6 && media < 7.5){
//     alert(`
//         ${media} | C
//         suas notas foram ${n1} e ${n2} Aprovado
//         `)
// }else if(media >= 4 && media < 6){
//     alert(`
//         ${media} | D
//         suas notas foram ${n1} e ${n2} Reprovado
//         `)
// }else if(media >= 0 && media < 4){
//     alert(`
//         ${media} | E
//         suas notas foram ${n1} e ${n2} Reprovado
//         `)
// }else{
//     alert("Valores invádidos")
// }

// EX 15
let lado1 = Number(prompt("Informe o primeiro numero:"))
let lado2 = Number(prompt("Informe o segundo numero:"))
let lado3 = Number(prompt("Informe o terceiro numero:"))

let eTriangulo = (lado1 + lado2 > lado3) && (lado1+lado3 > lado2) && (lado2 + lado3 > lado1);

if(!eTriangulo){
    alert("os lados n formam um triangulo")
}else{
    if(lado1 === lado2 && lado2 === lado3){
        alert("Equilatero");
    }else if(lado1 === lado2 || lado1 === lado3 || lado3){
        alert("Isósceles");
    }else{
        alert("Escaleno")
    }
}

// EX 16
// let a = Number(prompt("Digite o valor A:"))
// let b = Number(prompt("Digite  valor de B:"))
// let c = Number(prompt("Digite o valor de C:"))

// if(a === 0){
//     alert("A equação não é segundo grau")
// }else{
//     a ** 2  - 4 * a * c

//     if(delta < 0){
//         console.log("A equação não possui raízes reais.");
//     }else if (delta === 0) {
//         const x = -b / (2 * a);
//         console.log(`A equação possui uma raiz real: x = ${x}`);
//     } else {
//         const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         const x2 = (-b - Math.sqrt(delta)) / (2 * a);

//         console.log("A equação possui duas raízes reais:");
//         console.log(`x1 = ${x1}`);
//         console.log(`x2 = ${x2}`);
//     }
// }

// EX 17

/*É divisível por 4 e
Não é divisível por 100, ou
É divisível por 400.
*/

// let ano = Number(prompt("qual ano deseja verificar:"))

// if(ano % 4 === 0 && ano % 100 !== 0 || ano / 400 === 0){
//     alert(`${ano} é Bisexto`)
// }else{
//     alert(`${ano} não é Bisexto`)
// }

// EX 18

// let numberInter = Number(prompt("Digite um numero inteiro:"))

// if(numberInter % 2 === 0 && numberInter !== 0){
//     alert("Numero é par")
// }else{
//     alert("Número é impar")
// }

// EX 19

// let numero = Number(prompt("Digite um número: "))
// // IF aninhamento

// if(numero % 2 === 0){
//     if(numero > 0){
//         alert("Par possitivo")
//     }else{
//         alert("Par e negativo")
//     }
// }else{
//     if(numero < 0){
//         alert(" é impar e negativo")
//     }else{
//         alert("Impar e possitivo")
//     }
// }

// EX 20
// let pergunta1 = prompt("Telefonou para a vítima?:").toLowerCase()
// let pergunta2 = prompt("Esteve no local do crime?:").toLowerCase()
// let pergunta3 = prompt("Mora perto da vítima?:").toLowerCase()
// let pergunta4 = prompt("Devia para a vítima?:").toLowerCase()
// let pergunta5 = prompt("Já trabalhou com a vítima?").toLowerCase()

// let respostas_sim = 0

// if (pergunta1 === "sim") {
//     respostas_sim = respostas_sim + 1
// } 
// if (pergunta2 === "sim") {
//     respostas_sim = respostas_sim + 1
// } 
// if (pergunta3 === "sim") {
//     respostas_sim = respostas_sim + 1
// } 
// if (pergunta4 === "sim") {
//     respostas_sim = respostas_sim + 1
// } 
// if (pergunta5 === "sim") {
//     respostas_sim = respostas_sim + 1
// }
// if (respostas_sim<2){
//     alert("inocente")
// }
// else if (respostas_sim == 2){
//     alert("suspeita")
// }
// else if (respostas_sim<=4){
//     alert("cumplice")
// }
// else if (respostas_sim == 5){
//     alert("assasino")
// }

// EX 21
// let n1 = Number(prompt("Digite um número:"))
// let n2 = Number(prompt("Digite outro número:"))

// if (n1 > n2){
//     alert(`n1: ${n1} é o maior`)
// }else if(n1 < n2){
//     alert(`n2: ${n2} é o maior`)
// }else{
//     alert("digite um numero válido")
// }

// EX 22

// let n1 = Number(prompt("Digite um número:"))
// let n2 = Number(prompt("Digite outro número:"))
// let n3 = Number(prompt("Digite outro número:"))

// if(n1 >= n2 && n2 >= n3){
//     alert(`n1:${n1} é o maior e o n3:${n3} é o menor`)
// }else if(n1 >= n3 && n1 >= n2){
//      alert(`n1:${n1} é o maior e o n2:${n2} é o menor`)
// }else if(n2 >= n1 && n1 >= n3){
//      alert(`n2:${n2} é o maior e o n3:${n3} é o menor`)
// }else if(n2 >= n3 && n3 >= n1){
//      alert(`n2:${n2} é o maior e o n1:${n1} é o menor`)
// }else if(n3 >= n1 && n1 >= n2){
//      alert(`n3:${n3} é o maior e o n2:${n2} é o menor`)
// }else if(n3 >= n2 && n2 >= n1){
//      alert(`n3:${n3} é o maior e o n1:${n1} é o menor`)
// }else{
//     alert("Numero invalido")
// }

// segunda opção
// let n1 = 8
// let n2 = 9
// let n3 = 7

// if(n1 > n2 && n1 > n3 && n2 > n3){
//     alert(`${n1}é o maior entre eles e o ${n3} é o menor`)
// }else if(n2 > n1 && n2 > n3 && n3 > n1){
//     alert(`${n2}é o maior entre eles e o ${n1} é o menor`)
// }else{
//     alert(`${n3} é o maior entre eles e o ${n2} é o menor`)
// }

// Ex 23
// let n1 = Number(prompt("Digite um nuimero:"))

// if(n1 % 2 === 0){
//     alert("o numero é par")
// }else if(n1 % 2 !==0){
//     alert("o numero é impar")
// }else{
//     alert("Numero inválido")
// }

// EX 24

// let raio = Number(prompt("Qual é o raio da circuferencia: "))

// let diametro = raio * 2
// let comprimento = 2 * Math.PI * raio
// let area = Math.PI * raio ** 2

// alert(`Diâmetro: ${diametro.toFixed(2)}
// Comprimento: ${comprimento.toFixed(2)}
// Área: ${area.toFixed(2)}`)

// EX
// alert("Para doar sangue você tem que ter entre 18 e 67 anos")
// let idade = Number(prompt("Qual sua idade: "))

// if(idade >= 18 && idade <= 67){
//     alert("você pode doar sangue")
// }else{
//     alert("você não pode doar sangue")
// }

// EX 26

// let dia = Number(prompt("informe um dia:"))
// let mes = Number(prompt("informe um mes:"))
// let ano = Number(prompt("informe um ano:"))

// if(dia >= 1 && dia <= 31){
//     if(mes >= 1 && mes <= 12){
//         if(ano <= 2013){
//             alert(`${dia}/${mes}/${ano} data válida`)
//         }else{
//             alert("essa não uma data válida")
//         }
//     }

// }else{
//     alert("Isso não é uma data")
// }

// EX 27

// let x = 10
// let y = 20

// let temp = x
// x = y;
// y = temp;

// alert(`${x}, ${y}`)