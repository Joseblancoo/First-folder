//for in
//devuelve la posicion del elemento del array

let animales = ["gato", "perro", "caballo"];

for (animal in animales) {
    document.write(animal);
}

//para mostrar el elemento y no la posicion

for (animal in animales) {
    document.write(animales[animal]);
}
