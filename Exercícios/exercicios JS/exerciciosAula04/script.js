// Ex 01

// let n1 = Number(prompt("digite um numero: "))
// let n2 = Number(prompt("digite um outro numero: "))

// if(n1 > n2){
//     alert(`${n1} é o maior`)
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
// }else if(media ){
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
// let n2 = 6
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

// if(n1 > n2 && n2 > n3){
//     alert(`${n1}, ${n2}, ${n3}`)
// }else if(n1 > n3 && n3 > n2){
//     alert(`${n1}, ${n3}, ${n2}`)
// }else if(n2 > n1 && n1 > n3){
//     alert(`${n2}, ${n1}, ${n3}`)
// }else if(n2 > n3 && n3 > n1){
//     alert(`${n2}, ${n3}, ${n1}`)
// }else if(n3 > n1 && n1 > n2){
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
// if(salario < 0){
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
// }else if(salario > 1500){
//     aumento = salario * 5 / 100
//     salarioFinal = salario + aumento
//     alert(aumento)
//     alert(`Seu salário era ${salario} demos 5% de aumento R$${aumento} agora seu salario final é R$${salarioFinal}`)
// }else{
//     alert("Valor inválido")
// }

// Ex 12
// let valorHora = Number(prompt("Qual o valor da sua hora trabalhada: "))
// let quantidadeHoras = Number(prompt("Quantidades de hora trabakhadas:"))
// let salario = valorHora * quantidadeHoras
// let imposto = 0
// let salarioFinal = 0
// let inss = salario * 10 / 100
// let fgts = salario * 11 / 100
// let descontoFgts = fgts - salario 

// if(salario <= 900){
//     alert(`seu salario é de R$${salario} e você está isento do IR`)
// }else if(salario > 900 && salario <=1500){
//     imposto = salario * 5 / 100
//     salarioFinal =  salario - imposto - inss
//     alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 10% R$${imposto} e o INSS R$${inss}(10%) e seu  FGTS foi de 11% R$${descontoFgts}`)
// }else if(salario > 1500 && salario <= 2500){
//     imposto = salario * 10 / 100
//     salarioFinal = salario - imposto - inss
//     alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 10% R$${imposto} e o INSS R$${inss}(10%)  e seu  FGTS foi de 11% R$${descontoFgts}`)
// }else if(salario > 2500){
//     imposto = salario * 20 / 100
//     salarioFinal = salario - imposto - inss
//     alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 20% R$${imposto} e o INSS R$${inss}(10%)  e seu  FGTS foi de 11% R$${descontoFgts}`)
// }else{
//     alert("valor invalido")
// }

// EX 12+1

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
// fazer em sala

// EX 16
//  fazer em sala

// EX 17
