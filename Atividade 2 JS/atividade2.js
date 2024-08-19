//Escreva um programa que verifique se é um número positivo, negativo ou zero
let valor = prompt('Digite um numero')
if (valor >= 1){
  console.log('Positivo')
} else if (valor == 0) {
  console.log('Nulo')
} else if (valor < 0) {
  console.log('Negativo')
} else {
  console.log('Não é um numero')
}

// Escreva um programa que determine se um número é par ou impar
let num = prompt('Digite um número')

if(num % 2 === 0) {
  console.log('O número é par')
} else {
  console.log( 'O número é impar')
}

// Definir se a pessoa é idoso, adulto, jovem ou criança
let idade = prompt('Qual a sua idade? ')
if (idade >= 60){
  console.log('Você é idoso')
} else if(idade <= 59 && idade >= 20){
  console.log('É adulto')
} else if(idade <= 20 && idade <= 15) {
  console.log('É jovem')
} else if(idade < 15) {
  console.log('É criança')
} else {
  console.log('Digite uma idade entre 0 e 100 por favor')
}

// Escreva um programa que receba a classificação da nota com A, B, C, D, F com base no seu valor numérico

let notas = prompt('Digite sua nota:')

switch(true){
  case notas >= 0 && notas <= 2:
    console.log('Sua Nota é F')
    break
  case notas >= 3 && notas <= 5:
    console.log('Sua nota é D')
    break
  case notas >= 6 && notas <=  8:
    console.log('Sua nota é C')
    break
  case notas == 9:
    console.log('Sua nota é B')
    break
  case notas == 10:
    console.log('Sua nota é A')
    break
  default:
    console.log('Digite sua nota')
}

// Escreva um programa que dado um número de 1 a 7 exiba o dia da semana correspondente
let diaDaSemana = prompt('Digite um número para o dia da semana')

switch (true){
  case diaDaSemana == 1:
    console.log('Domingo')
    break
  case diaDaSemana == 2:
    console.log('Segunda')
    break
  case diaDaSemana == 3:
    console.log('Terça')
    break
  case diaDaSemana == 4:
    console.log('Quarta')
    break
  case diaDaSemana == 5:
    console.log('Quinta')
    break
  case diaDaSemana == 6:
    console.log('Sexta')
    break
  case diaDaSemana == 7:
    console.log('Sábado')
    break
}  

// Faturamento mensal
let digiteSeuFaturamento = prompt('Digite o seu faturamento Mensal')
let faturamento = parseInt(digiteSeuFaturamento, 10)

if(faturamento == 1000){
  console.log('Você não tem bonus')
} else if(faturamento > 1000 && faturamento <= 5000) {
  let bonusDe5 = faturamento * 0.05
  console.log(`Parabéns!! seu faturamento foi de 5%, ficando ${faturamento + bonusDe5}`)
} else if(faturamento > 5000){
  let bonusDe10 = faturamento * 0.10
  console.log(`Parabéns!! seu faturamento foi de 5%, ficando ${faturamento + bonusDe10}`)
} else{
  console.log('Digite o seu salário por favor')
}