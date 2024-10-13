/*primer problema
solo dejar pasar a mayores de 18, el primero que pase luego de las 2 am pasa gratis
*/
// let free = false;

// function validarCliente(time) {
//     let edad = prompt('cual es tu edad');
//     if (edad >= 18){
//         if (time >= 2 && time < 7 && free == false) {
//             alert('entras gratis');
//             free = true;
//         } else {
//             alert('10 cop para entrar');
//         } 
//     } else if (edad < 18) {
//         alert('no puedes pasar, solo mayores de 18');
//     }
// }

// validarCliente(2)
// validarCliente(2)
// validarCliente(3)

/*problema 2
- Crear mini sistema para registrar alumnos presentes (P) y ausentes (A) en clase
- Pasados 30 dias mostrar la situacion final de los alumnos(Nro total de ausentes y presentes)
- se puede tener un maximo de 10% ausencias por semestre, si tiene mas aclarar que esta reprobado
*/

// let alumnos = prompt('cuantos alumnos son');
// let alumnosTotales = [];

// for (i = 0; i < alumnos ; i++) {
//     alumnosTotales[i] = [prompt('nombre del alumno ' + (i+1)), 0];
// }

// const validarAsistencia = (nombre, p) => {
//         let asistencia = prompt(nombre);
//         if (asistencia == 'p' || asistencia == 'P') {
//             alumnosTotales[p][1]++;
//         } 
// }

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales){
//         validarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//     ---asistencias : ${alumnosTotales[alumno][1]}
//     ---ausencias : ${30 - alumnosTotales[alumno][1]}
//     ` 
//     if (30 - alumnosTotales[alumno][1] > 18) {
//         resultado += "REPROBO POR INASISTENCIAS"
//     } else {
//         resultado += '<br><br>'
//     }
//     document.write(resultado);
// }

/*preblema 3
- Crear una calculadora simple
*/

alert('¿que tipo de operacion desea realizar?');
let operacion = prompt('1:suma, 2:resta, 3:multiplicacion, 4:division');

function suma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
function resta(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}
function multiplicacion(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}
function divicion(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

if (operacion == 1) {
    let sum1 = prompt('numero que desea sumar');
    let sum2 = prompt('numero que desea sumar');
    resultado = suma(sum1, sum2);
    document.write (`${sum1} + ${sum2} = ` + resultado);
} else if (operacion == 2) {
    let res1 = prompt('numero que desea restar');
    let res2 = prompt('numero que desea restar');
    resultado = resta(res1, res2);
    document.write (`${res1} - ${res2} = ` + resultado);
} else if (operacion == 3) {
    let mult1 = prompt('numero que desea multiplicar');
    let mult2 = prompt('numero que desea multiplicar');
    resultado = multiplicacion(mult1, mult2);
    document.write (`${mult1} x ${mult2} = ` + resultado);
} else if (operacion == 4) {
    let div1 = prompt('numero que desea dividir');
    let div2 = prompt('numero que desea dividir');
    resultado = divicion(div1, div2);
    document.write (`${div1} / ${div2} = ` + resultado);
} else {
    alert('no se encontro la operación');
}
