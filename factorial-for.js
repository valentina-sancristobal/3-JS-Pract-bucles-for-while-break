// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for:

let j = 1

for (let i = 1; i < 10; i = i + 1) {
    //Esto es el bucle
    j = j * i;
    console.log(j);
}

// practica mejorada:

let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
console.log(factorial) // Factorial de 10 = 3628800