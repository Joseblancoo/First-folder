//Crear un listado de materias con sus alumnos y profesores para la universidad
/*
1- Crear una funcion que nos devuelva:
- Profesor asignado
- Nombres de los alumnos
2- Funcion que nos indique en cuantas clases esta confla
- Nombre de esas clases y sus profesores
*/


function materiasInfo(materia){
    materias = {
        fisica: ["Perez", 'pedro', 'maria', 'juan', 'david'],
        matematica: ['Romero', 'pedro', 'juan', 'cofla', 'david'],
        Programacion: ['Gonzalo', 'pedro', 'maria', 'juan', 'cofla', 'david'],
        logica: ['Regulo', 'pedro', 'maria', 'juan', 'cofla']
    }
    if (materias[materia] !== undefined) {
        return (materias[materia], materia);
    } else {
        return false;
    }
}

let informacion = materiasInfo('fisica');

if (informacion !== false) {
    // let profesor = materiasInfo('fisica')[0][0];
    // let alumnos = materiasInfo('fisica')[0];
    
    document.write(`el profesor de ${informacion} <br> es: ${informacion[0]} <br> los alumnos son: ${informacion[1]}`);
}