Para concluir os exercícios a seguir, você deverá fazer uso do prompt() e do alert() para receber os valores e exibir os resultados, respectivamente.

Exemplo
Leia dois números inteiros, a e b, e faça com que eles troquem os valores entre si. Exiba os valores de a e b.

Resolução
let a = parseInt(prompt("Insira um valor para a"))
let b = parseInt(prompt("Insira um valor para b"))
let aux = 0
aux = a 
a = b
b = aux
alert(`Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`)

Aviso
O exercício acima é a base para resolução dos próximos. Não precisa retornar nada no console. 
Não precisa inicializar as variáveis com valores atribuídos diretamente ao código, a não ser que seja necessário para a conclusão da lógica.

Exercício 1
  Antes do racionamento de energia ser decretado, quase ninguém falava de quilowatts; mas agora, todos incorporaram essa palavra em seu vocabulário.
  
  Sabendo que 100 quilowatts de energia custa um sétimo de salário mínimo, faça um aplicativo que receba o valor do salário mínimo e a quantidade de quilowatts gasta por uma residência. Então, calcule e imprima:
  
  O valor em reais de cada quilowatt;
  O valor em reais a ser pago;
  O novo valor a ser pago por essa residência com um desconto de 10%.

Exercício 2
  Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. 
  Faça um aplicativo que possa receber o valor de um produto e imprima o novo valor tendo em vista que o desconto foi de 9%.

Exercício 3
  Criar um aplicativo que leia a quantidade de fitas que uma locadora de vídeo possui e o valor que ela cobra por cada aluguel, mostrando as informações pedidas a seguir:
  
  Sabendo que um terço das fitas são alugadas por mês, exiba o faturamento anual da locadora;
  Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel. Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, calcule o valor ganho com multas por mês;
  Sabendo ainda que 2% das fitas se estragam ao longo do ano, e um décimo do total é comprado para reposição, exiba a quantidade de fitas que a locadora terá no final do ano.

Exercício 4
  Entrar com um número no formato CDU (centena, dezena e unidade) e imprimi-lo invertido. Por exemplo, 123 sairá 321. O número deverá ser armazenado em outra variável antes de ser impresso.

Exercício 5
  Criar um aplicativo que, dado um número de conta corrente com três dígitos, retorne o seu dígito verificador. Para encontrar o dígito verificador, siga o exemplo do número 235:
  
  Somar o número da conta com o seu inverso: 235 + 532 = 767;
  Multiplicar cada dígito pela sua ordem posicional (da esquerda para a direita) e somar estes resultados: 7*1 + 6*2 + 7*3 = 40;
  O último dígito desse resultado é o dígito verificador da conta: último dígito de 40 é 0.

