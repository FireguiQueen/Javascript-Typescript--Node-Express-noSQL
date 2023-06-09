//                              LIMITANDO CASAS DECIMAIS DE NÚMEROS QUEBRADOS
// Podemos imaginar que "toFixed" significar "fixar". Ou seja, fixar um número de casas decimais.
const num1 = 3.14159265
console.log(num1.toFixed(2)) // dentro dos parentesis colacamos quantas casas queremos que apareça



//                              VERIFICANDO SE O NÚMERO É INTEIRO
// Acessamos o objeto "number", depois acessamos o método "isInteger" e passamos como argumento
// qual valor que queremos saber se é do tipo inteiro ou não.
const num2 = 7
console.log(Number.isInteger(num2)); 


//                              VERIFICANDO SE O VALOR É NaN
// Acessamos o objeto "number", depois acessamos o método "isNaN" e colocamos qual valor
// queremos saber se é 'not a number' ou não.
const num3 = 7 * 'oi'
console.log(Number.isNaN(num3))



//***************************************************************************************



//                            ARREDONDANDO PARA BAIXO (objeto: Math)  
// 'floor()' é usado para arredondar um número para baixo para o próximo número inteiro.
// "Floor" significa "chão/piso". Sendo assim, é como se o número mais baixo fosse o chão, e estamos arredondando até ele.
const num4 = 7.5
console.log(Math.floor(num4))



//                            ARREDONDANDO PARA CIMA (objeto: Math)  
// 'ceil()' é usado para arredondar um número para cima para o próximo número inteiro.
// "Ceil" significa "teto". Sendo assim, é como se o número mais alto fosse o teto, e estamos arredondando até ele.
const num5 = 1.3
console.log(Math.ceil(num5))


//                 ARREDONDANDO UM NÚMERO QUEBRADO PARA O NÚMERO INTEIRO MAIS PRÓXIMO
// 'round()' é usado para arredondar um número quebrado para o número inteiro mais próximo.
// O verbo "Round" significa "arredondar". Estamos arredondando para o número inteiro mais próximo.
const num6 = 10.6
console.log(Math.round(num6))



//                          PEGANDO O MAIOR NÚMERO DE UMA SEQUÊNCIA
// 'max()' é usado para pegar o maior número entre os números que serão apresentados.
// "Max" significa máximo, ou seja, qual seria o número máximo.
console.log(Math.max(402, 200, 600, 120));


//                          PEGANDO O MENOR NÚMERO DE UMA SEQUÊNCIA
// 'min()' é usado para pegar o menor número entre os números que serão apresentados.
// "Min" significa mínimo, ou seja, qual seria o número mínimo.
console.log(Math.min(200, 100, 50, 125));




//                               IEEE 754-2008
/*
--> Institute of Electrical and Electronics Engineers
Em JavaScript (e em muitas outras linguagens de programação), o armazenamento de números em 
ponto flutuante (números quebrados) segue o padrão IEEE 754. 
Esse padrão define a maneira como os números quebrados são representados e operados por debaixo dos panos.. 
Mas o mesmo pode resultar em algumas imprecisões devido às limitações de representação.

Se somarmos '0.1' e '0.7' o resultado correto seria 0.8;
Mas o resultado será.: 0.79999999..  
Isto ocorre devido à forma como esses números são representados em ponto flutuante. 


A representação interna desses números em ponto flutuante pode ser algo como:
0.1 = 0.0001100110011001100110011001100110011001100110011... (repetindo infinitamente)
0.7 = 0.101100110011001100110011001100110011001100110011...  (repetindo infinitamente)

Quando você soma esses dois números, o resultado correto seria:
0.1 + 0.7 = 0.8 = 0.1000000000000000055511151231257827021181583404541015625 (em notação científica)

Mas em binário, nosso resultado é.:
1.0100110011001100110011001100110011001100110011001101...


-> Devido à limitação de precisão na representação em ponto flutuante, 
o resultado é uma representação binária que é ligeiramente menor do que 0.8. 
Quando exibido em formato decimal, essa representação binária resulta em uma aproximação do 
valor real, que é 0.7999999.

Isso ocorre porque a soma é realizada com base nas representações internas dos números em ponto flutuante, 
que têm algumas limitações em relação à precisão. 
No entanto, observe que esse valor é muito próximo do resultado correto e 
pode ser arredondado para 0.8 com o uso do método "toFixed()" ou usando "Math.round()".
*/



