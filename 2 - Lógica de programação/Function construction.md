# Função construtora 
Uma função construtora nada mais é do que um objeto em uma função.
Este objeto irá possuir propriedades, mas não irá possuir valores.
Ela é utilizada como esqueleto para futuros novos objetos, e os valores dele são definidos através dos argumentos que serão dados a esta função. 

## Analogia 
Vamos supor que você seja um diretor de uma escola.  </br>
Cada aluno será cadastrado como um objeto em javascript, e todos objetos irão possuir as seguintes propriedades.: 
- Nome
- Idade 
- Etnia 

Uma maneira não eficaz, seria criar um objeto novo para cada aluno.
Invés disso, podemos pegar um objeto pronto e apenas adicionar valores a essas propriedades.

</br>

> Observe a diferença entre utilizar e não utilizar uma função construtora. Veja que há muito mais trabalho e repetição no código. Afinal, se todos os objetos irão _fazer uso_ das mesmas propriedades, por que não utilizar a função construtora? 

### Criando objetos de maneira normal
```js
const julia = {
    name: 'julia',
    idade: 15,
    etnia: 'branca'
}

const paulo = {
    name: 'Paulo',
    idade: 15,
    etnia: 'Negro'
}

const Pablo = {
    name: 'Pablo', 
    idade: 15,
    etnia: 'Negro'
}
```

### Utilizando uma função construtora 
```js
const Alunos = function(nome, idade, etnia){
    this.nome = name,
    this.idade = idade,
    this.etnia = etnia
}
const Julia = new Alunos('Julia', 15, 'Branca');
const Paulo = new Alunos('Paulo', 15, 'Negro');
const Pablo = new Alunos('Pablo', 15, 'Negro');
```

</br>

# New
A palavra chave 'new' é de extrema importância, pois é ele quem define uma instância nova. Quando usamos ela, seguido pelo nome de uma função construtora, estamos criando um novo objeto com a estrutura definida pela função construtora.

Lembra-se sempre do exemplo que foi dado. </br>
Há uma estrutura chamada "Alunos", esta estrutura possui três propriedades.
Para adicionar um novo aluno, basta você fazer uma instância, ou seja, criar um novo objeto com base na estrutura feita anteriormente. 
E para isto, utilizaremos o "new", pois seria um "novo aluno". 


</br>
</br>

## Resumo
Utilizar uma função construtora, como no exemplo apresentado, é uma abordagem mais eficaz para criar objetos, especialmente quando há muitos objetos com as mesmas propriedades. Isso ajuda a evitar repetições de código e torna o processo de criação e manutenção dos objetos mais fácil e organizado.