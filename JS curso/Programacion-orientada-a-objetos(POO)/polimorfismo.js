/*
El polimorfismo se usa para que una lase se comporte
distinto segun las propiedades.
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
     ladrar(){
        if(this.esp == 'perro'){
            document.write('!GUAU¡')
        } else {
            document.write(`no puede ladrar porque es un ${this.esp}` + '<br>')
        }
     }
}

const gato = new Animal('gato', '3', 'copo');
const perro = new Animal('perro', '2', 'jack');

gato.ladrar()
perro.ladrar()