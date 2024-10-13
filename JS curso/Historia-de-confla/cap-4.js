//implementar mejoras para la calculadora
//tiene que poder calcular potencias, raices y cubicas

alert('¿que tipo de operacion desea realizar?');
let operacion = prompt('1:suma, 2:resta, 3:multiplicacion, 4:division, 5:potencia, 6:raiz cuadrada, 7:raiz cubica');

class Calculadora{
static suma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
static resta(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}
static multiplicacion(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}
static divicion(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}
static potencia(num, exp) {
    return num**exp;
}
static raizCuadrada(num){
    return Math.sqrt(num);
}
static raizCubica(num){
    return Math.cbrt(num);
}
}



if (operacion == 1) {
    let num1 = prompt('numero que desea sumar');
    let num2 = prompt('numero que desea sumar');
    resultado = Calculadora.suma(num1, num2);
    document.write (`${num1} + ${num2} = ` + resultado);
} else if (operacion == 2) {
    let res1 = prompt('numero que desea restar');
    let res2 = prompt('numero que desea restar');
    resultado = Calculadora.resta(res1, res2);
    document.write (`${res1} - ${res2} = ` + resultado);
} else if (operacion == 3) {
    let mult1 = prompt('numero que desea multiplicar');
    let mult2 = prompt('numero que desea multiplicar');
    resultado = Calculadora.multiplicacion(mult1, mult2);
    document.write (`${mult1} x ${mult2} = ` + resultado);
} else if (operacion == 4) {
    let div1 = prompt('numero que desea dividir');
    let div2 = prompt('numero que desea dividir');
    resultado = Calculadora.divicion(div1, div2);
    document.write (`${div1} / ${div2} = ` + resultado);
} else if (operacion == 5){
    let num = prompt('numero que desea potenciar');
    let exp = prompt('exponente');
    resultado = Calculadora.potencia(num, exp);
    document.write (`${num}^${exp} = ` + resultado);
} else if (operacion == 6){
    let num = prompt('numero que desea sacar raiz cuadrada');
    resultado = Calculadora.raizCuadrada(num);
    document.write (`raiz cuadrada de ${num} = ` + resultado);
}else if (operacion == 6){
    let num = prompt('numero que desea sacar raiz cubica');
    resultado = Calculadora.raizCubicaa(num);
    document.write (`raiz cubica de ${num} = ` + resultado); 
} else {
    alert('no se encontro la operación');
}

