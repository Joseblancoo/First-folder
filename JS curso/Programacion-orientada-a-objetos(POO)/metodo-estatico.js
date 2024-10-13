//metodo estatico (static)
//sirve para ejecutar un metodo sin necesidad de definir un objeto(usando el nombre de la clase)

class Animal{
    constructor(especie, edad, nombre) {
        this.esp = especie;
        this.edad = edad;
        this.name = nombre;
        this.info = `Soy un ${this.esp}, tengo ${this.edad} años y mi nombre es ${this.name}`
    }
     verInfo(){
        document.write(this.info + "<br>")
     }
}

class Perro extends Animal{
    constructor(especie, edad, nombre){
        this.raza = raza;
    }
    static ladrar(){
        document.write('!GUAU¡');
    }
}

// const gato = new Animal('gato', '3', 'copo');
const perro = new Perro('perro', '2', 'jack');

Perro.ladrar()