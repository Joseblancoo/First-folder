//array = ['cheo', 'Jose', 17];

/*array asociativo

let myPc = {
    nombre: 'cheoPC',
    ram: '8gb',
    procesador: 'Intel i5',
    espacio: '250gb'    
}

document.write(myPc['nombre'])
console.log(myPc['nombre'])
*/

let myPc = {
    nombre: 'cheoPC',
    ram: '8gb',
    procesador: 'Intel i5',
    espacio: '250gb'    
}

let nombre = myPc['nombre'];
let ram = myPc['ram'];
let procesador = myPc['procesador'];
let espacio = myPc['espacio'];

let frase = `
    nombre del PC: ${nombre} <br>
    el procesador es: ${procesador} <br>
    memoria ram: ${ram} <br>
    su espacio en disco es de: ${espacio}
`
document.write(frase);