//crear una tienda de apps
/*
- Se tiene que poder ver: puntuacion de la app, nro de descargas y peso
- Se tienen que poder descargar, desinstalar, abrir y cerrar
*/


class Apps {
    constructor(descargas, puntuacion, peso){
        this.downloads = descargas;
        this.puntuation = puntuacion;
        this.size = peso;
        this.installed = false;
        this.open = false;
    }
    instalar(){
        if(this.installed == false){
            this.installed = true;
            alert('esta app ha sido instalada');
        }
    }
    desinstalar(){
        if(this.installed == true){
            this.installed = false;
            alert('esta app ha sido desinstalada');
        }
    }
    abrir(){
        if(this.open == false && this.installed == true){
            this.open = true
            alert('su app ha sido iniciada');
        } else { alert('app no instalada'); }
    }
    cerrar(){
        if(this.open == true && this.installed == true){
            this.open = false;
            alert('app cerrada');
        } else { alert('app no instalada'); }
    }
    infoApp(){
        document.write(`
            Descargas: ${this.downloads} <br>
            Puntuacion: ${this.puntuation} <br>
            Peso: ${this.size} <br>`)
        }
}

let app = new Apps('1000', '4,6', '450mb')

app.infoApp()
app.instalar()
app.abrir()
