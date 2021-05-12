// declare uma variavel e o tipo dela //

//let name= 'Danilo' // declaração de variavel
//console.log(typeof name) // dabendo tipo da variavel

//--------------------------------------------//

// crie um objeto com nome idade estrelas e escritos


let dados = { // declarei a variavel dados com os valores respectivos como objeto

    name: 'Michael',
    age: 30,
    stars: 5,
    isSubscribed: true

}

console.log(dados.name,'de indade',dados.age,'de',dados.stars,'estrelas') // formato de escrita
console.log(`${dados.name} de idade ${dados.age}de ${dados.stars} estrelas`) // formato de escrita

//----------------------------------------------------//

let students=[] // criacao vetor sem conteudo

students = [ // atribuicao do objeto na primeira posicao do vetor
    dados
]

console.log(students) // escrita array completo

//-------------------------------------------------//

console.log(students[0]) // escrita da posicao do vetor

//-----------------------------------------------//

 // crie um segundo objeto e atribua a posicao um do vetor students

let dados2 = { 

    name: 'Jessica',
    age: 26,
    stars: 5,
    isSubscribed: false

}

students=[
    dados,
    dados2
]

console.log(students[1])

//---------------------------------------//

console.log(a)
var a=1 // apresentara um erro undefined por que a variavel nao foi declarada
// e acontede u hosting 
