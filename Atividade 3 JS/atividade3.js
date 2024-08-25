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
    let prova4 = parseFloat(prompt('Digite sua quarta nota'))
    // Nessa variável media, será somada as 4 notas dos alunos e dividido por 4 que dará a média aritmetica dos valores passados
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


  /*
   * Legenda:
   * parseFloat: transforma o número passado de string para ponto flutuante
   * console.log(): mostra o que foi passado dentro dos paranteses no console.
   */