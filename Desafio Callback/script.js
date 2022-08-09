/*
Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/

function gastoConIva(num) {
    return num + (0.21 * num);
}

function map(arrNums, callback) {
    let resultado = [];

    for (const num in arrNums) {
        resultado.push(callback(Number(arrNums[num])));
    }

    return resultado;
}

let nums = [20, 25, '123.5', 435, 934, "43", 21, 2000.30];

let numsConIva = map(nums, gastoConIva);

console.log(numsConIva);
