//Herencia (extends)
//se utiliza para agregar propiedades especificas a un determinado objeto

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
    super(especie, edad, nombre, raza){
        this.raz = raza;
    }
    ladrar(){
        document.write('!GUAU¡');
    }
}

const gato = new Animal('gato', '3', 'copo');
const perro = new Perro('perro', '2', 'jack', 'jack russel');

perro.ladrar()
gato.ladrar()