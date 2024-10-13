//label
//mostrar array dentro de un array

let array1 = ["pedro", "maria"];
let array2 = ["nelson", "petra", array1, "alberto"];

for (let array in array2) {
    if (array == 2){
        for(let array of array1) {
            document.write(array);
        }
    }else {
    document.write(array2[array]);
    }
}