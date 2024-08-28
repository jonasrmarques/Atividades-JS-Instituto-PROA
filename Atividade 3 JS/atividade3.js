//Exercício 01: Escreva um programa que funcione como uma calculadora básica, Ele deve solicitar ao usuário dois números e a operação desejada\\


//Aqui temos a obtenção dos dados do calculo, numero e numero2 indicam os números a serem usados no calculo e a variavel equacao indica qual será a esquacao feita, seja adição, subtração, divisão ou multiplicação.
let numero = parseFloat(prompt('Qual o primeiro número você deseja fazer a operação?'))
let numero2 = parseFloat(prompt('Qual o segundo número você deseja fazer a operação?'))
let equacao = parseFloat(prompt('Você deseja fazer um calculo de: adição = 1; subtração = 2; divisão = 3; multiplicação = 4'))

//Essa função chamada calcular tem como intuito fazer todo o calculo matemático, dentro dela eu coloquei um if onde o número escolhido na variável equação será atribuito ao calculo matemático onde 1 é a adição, 2 é a subtração, 3 é a divisão e 4 é a multiplicação
function calculadora() {

 if(equacao == 1){
// Dentro desse if basicamente está falando que, caso o usuário digite 1 em equacao a soma de numero e numero2 irá ser armazanada na variavel resultado
   let resultado = numero + numero2
   console.log('A soma é: ' + resultado)
// Dentro desse else if, caso o usuário digite 2 em equacao, acontecerá a subtração de número e número2 e será armazenada em resultado
 } else if(equacao == 2){
   let resultado = numero - numero2
   console.log('A subtração é: ' + resultado)
//Dentro desse else if, caso o usuário digite 3 acontecerá a divisão de numero e numero2 e será armazenado em resultado.
 } else if(equacao == 3){
   let resultado = numero / numero2
   console.log('A divisão é: ' + resultado)
//Dentro desse elsif, caso o usuário digite 4 acontecerá a multiplicação de numero e numero2 e será armazenado em resultado.
 } else if(equacao == 4){
   let resultado = numero * numero2
   console.log('A multiplicação é: ' + resultado)
//Caso nenhuma dessas sentenças sejam executadas, cairá no else, pedindo pra o usuário digitar um número válido
 } else(numero == NaN && numero == Undefined && numero2 == NaN && numero2 == Undefined && equacao == NaN && equacao == Undefined)
    console.log('Por favor digite um número válido')
}
//Esse calculadora() está executando o chamado da função .
calculadora()


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// Escreva um programa que solicite as notas de 4 provas e calcule a média ele é aprovado se a média for maior ou igual a 7, recuperação se a média for entre 5 e 7, e reprovado se for menor que 5


function mediaAritmetica(){
    // Nessas variáveis prova1, prova2, prova3 e prova4 seráo armazenadas as notas dos alunos
    let prova1 = parseFloat(prompt('Digite sua primeira nota'))
    let prova2 = parseFloat(prompt('Digite sua segunda nota'))
    let prova3 = parseFloat(prompt('Digite sua terceira nota'))
    // Nessa variável media, será somada as 4 notas dos alunos e dividido por 4 que dará a média aritmetica dos valores passados
    let prova4 = parseFloat(prompt('Digite sua quarta nota'))
    let media = (prova1 + prova2 + prova3 + prova4) / 4
    

    switch(true){
    // Esse switch irá fazer a comparação, onde caso a nota seja maior ou igual a 7 ele irá cair na parte onde foi aprovado, caso a nota seja menor que 7 ou maior ou igual a 5 ela cairá na recuperação e caso seja menor que 5 ele estará reprovado.
      case media >= 7:
        console.log('Você foi aprovado ' + media)
        break
      case media < 7 && media >= 5:
        console.log('Você está em recuperação ' + media)
        break
      case media < 5:
        console.log('Você foi reprovado ' + media)
        break
    } 
  }
  
  mediaAritmetica()

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Escreva um programa que verifique se um número passado pelo usuário é primo

// Aqui escrevemos a função chamada eprimo
function ePrimo(numero) {

// Dentro desse if tem uma verificação de que se o número for 0 ou 1 ele irá retornar que o número não é primo, afinal, 0 e 1 não são números primos.
  if(numero == 0 || numero == 1){
    return ('Não é um numero primo')
}

// Dentro desse for, passamos a variável i que é igual a 2 e um método que recebe a raiz quadrada do número e irá incrementar 1 a cada iteração.
  for(let i = 2; i <= Math.sqrt(numero); i++){
// Dentro desse if, ele verifica se a iteração deixará resto, caso ele encontre um divisor, retornará que ele não é um número primo
    if(numero % i == 0){
      return('Não é um número primo')
    }
  }
// Se não cair em nenhuma dessas condigões, cairá no return que irá retornar que o número é primo.
  return('É um número primo')
}

console.log(ePrimo(4))
console.log(ePrimo(7))
console.log(ePrimo(17))

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Escreva um programa que conte quantas vezes caracteres especiais como (@, #, $, %) aparecem em uma string fornecida pelo usuário

// Aqui criamos a função, chamada de contarCaracteres
function contarCaracteres(str){
  //dentro dessa função criamos um array chamado de char, que recebeu os caracteres especiais
  const char = ['@', '#', '$', '%']
  let contador = 0
  
  
  // Dentro desse laço for, passamos uma variável i = 0 e toda vez que i for menor que o comprimento da string ele irá incrementar 1 caso a comparação if em baixo seja verdadeira, no caso: se algum caracter especial que for passado pelo usuário no parâmetro, ele irá verificar dentro do array, se for verdade irá incrementar +1 dentro do contador
  for(let i = 0; i < str.length; i++){
      if(char.includes(str[i])){
      contador++
   }
 }
  return contador
}


// Aqui temos duas variáveis, uma recebe o valor do usuário, no caso o que ele deseja botar, e o outro armazena o valor do usuário dentro de uma variável que está recebendo também a função e adicionando o valor do usuário dentro do parâmetro dela.
let usuario = prompt('Digite um valor')
let totalChar = contarCaracteres(usuario)


// Aqui nós chamamos o console para imprimir os valores e a função
console.log(`Total de caracteres especiais(@, #, $, %): ${totalChar}`)

// Faça um código de 1 a 100 e faça que com o usuário tente adivinhar.


function adivinhe(){
  let numero = Math.floor(Math.random() * 101)
  let verdade = true
  
  while(verdade){
    let usuario = parseInt(prompt('Digite um número'))
    if(usuario <= 0 || !usuario){
      alert('Digite um número válido!')
      
    } else if(usuario > numero) {
      alert('O número é menor, tente de novo')
      
    } else if(usuario < numero) {
      alert('O número é maior, tente de novo')
      
    }else {
      verdade = false
      alert('Parabéns você acertou')
    }
  }
}

adivinhe()


  /*
   * Legenda:
   * parseFloat: transforma o número passado de string para ponto flutuante
   * console.log(): mostra o que foi passado dentro dos paranteses no console.
   * Math.sqrt(): irá retornar a raiz quadrada do número colocado
   * includes(): ele irá verificar se dentro da variável passada existe elementos incluidos dentro da função
   */