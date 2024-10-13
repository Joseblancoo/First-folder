//metodos accesores (get, set)
/*
get: con esta se accede a una propiedad en el objeto
set: se usa para modificar una propiedad del objeto
*/ 

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
    constructor(especie, edad, nombre, raza){
        super(especie, edad, nombre)
        this.raz = raza;
    }
    ladrar(){
        document.write('!GUAU¡');
    }
    set setRaza(newName){
        this.raz = newName;
    }
    get getRaza(){
        return this.raz;
    }
}

const gato = new Animal('gato', '3', 'copo');
const perro = new Perro('perro', '2', 'jack', 'jack russel');

perro.setRaza = 'doberman';
document.write(perro.getRaza)
