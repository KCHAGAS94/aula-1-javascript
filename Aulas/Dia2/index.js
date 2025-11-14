
// ***Operadores aritméticos***
// Soma = + 
// Subtração = -
// Multiplicação = *
// Divisão = /
// Resto da divisão = %   
// Incremento = ++
// Decremento = --

// Operadores de atribuição  
let num1 = 3
num1 += 20
console.log(num1) // 23

// --------------------------------------------

// ***Operadores de comparação***
// Maior que = >
// Menor que = <
// Maior ou igual a = >=  
// Menor ou igual a = <=
// Igual a = ==
// Diferente de = !=
// Estritamente igual a = ===
// Estritamente diferente de = !==


let num2 = 3
console.log(num1 > 2) // true
console.log(num1 < 2) // false
console.log(num1 >= 3) // true  

console.log(num2 === '2') // false
console.log(num2 !== 2) // true

// --------------------------------------------

// ***Operadores de igualdade***
// Ele valida o tipo e o valor - ===
// Ele valida apenas o valor - ==

let num3 = 5
let num4 = '5' 
console.log(num3 === num4) // false
console.log(num3 == num4) // true

// --------------------------------------------

// ***Operadores ternários***
// Ele passa a informação se a primeira é verdadeira
// ou falsa

let driver = 90
let speedLimit = driver > 80 ? 'Multado' : 'Dentro do limite'
console.log(speedLimit) // Multado

// --------------------------------------------

// ***Operadores lógicos***
// E = &&
// Ou = ||
// Negação = !

let tenidademinima = false
let temtituloeleitor = true

let podevotar = tenidademinima && temtituloeleitor
console.log("Pode votar: " + podevotar) // true

let podevotar2 = tenidademinima || temtituloeleitor
console.log("Pode votar: " + podevotar2) // true

let podeviajar = !tenidademinima
console.log("Pode viajar: " + podeviajar) // true

// --------------------------------------------

// ***Operadores logicos com strings***
let corcliente = "vermelha"
let corestoque = "azul"
let corvenda = corcliente || corestoque
console.log("Cor da venda: " + corvenda) // vermelha

let corcliente2 = undefined //sem definição de cor
let corestoque2 = "azul"
let corvenda2 = corcliente2 || corestoque2
console.log("Cor da venda: " + corvenda2) // azul

// --------------------------------------------

// ***Operadores if e else***
let driverspeed = 80
if (driverspeed > 110) {
    console.log("driving too fast")
} else if (driverspeed > 40 && driverspeed <= 80) {
    console.log("driving at the speed limit")
} else {
    console.log("drinving below the speed limit")
}

// --------------------------------------------
