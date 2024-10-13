//Tienda de celulares
/*  Hay tres celulares disponibles entre las opciones mas economicas
-Crear un sistema para mostrar las particularidades de cada celular, deben tener:
color, peso, resolucion de pantalla, resolucion de camara y memoria ram
-cada celular debe poder: prender, apagar, reiniciar, tomar fotos y grabar.
    
    En la seccion de alta gama hay dos celulares que son los mas nuevos
-Implementar las siguientes cualidades en esos celulares:
grabar en camara super lenta
reconocimiento facial
tienen una camara extra
*/

class celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.rp = resolucionPantalla;
        this.rc = resolucionCamara;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert('celular encendido');
            this.encendido = true;
        } else {
            alert('celular apagado');
            this.encendido = false;
        }
    }
    reboot(){
        if(this.encendido == true){
            alert('REINICIANDO');
        } else {
            alert('el ceclular esta apagado');
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rc}`);
    }
    grabarVideo(){
        alert(`video grabado en una resolucion de: ${this.rc}`);
    }
    moreInfo(){
        document.write(`Color:${this.color} <br>
        Peso:${this.peso} <br>
        Resolucion de pantalla:${this.rp} <br>
        Resolucion de camara:${this.rc} <br>
        Memoria ram:${this.ram} <br>
        `);
    }
}

class altaGama extends celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram,rcde){
        super(color, peso, resolucionPantalla, resolucionCamara, ram);
        this.resolucionCamaraExtra = rcde;
    }
    slowMotion(){
        alert('se grabo un video en camara lenta');
    }
    reconocimientoFacial(){
        alert('tu celular ha sido desbloqueado con Face ID');
    }
    altaGamaInfo(){
        document.write(this.moreInfo() + `Resolucion 2da camara:${this.resolucionCamaraExtra} <br>`);
    }
}

celular1 = new celular('azul', '100g', '1920x720', '15MP', '2GB');
celular2 = new celular('blanco', '100g', '1920x720', '20MP', '4GB');
celular3 = new celular('negro', '120g', '1920x720', '20MP', '6GB');
celularModerno1 = new altaGama('negro', '125g', '1920x1080', '20MP', '8GB', '15MP');

celular1.moreInfo();
celular2.moreInfo();
celular3.moreInfo();
celularModerno1.altaGamaInfo();

