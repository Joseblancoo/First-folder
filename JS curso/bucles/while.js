//while
//el bucle se ejecuta hasta que la condicion (en este caso "(numero < 6)" se cumpla)

let numero = 0;

while (numero < 6) {
    numero++;
    document.write(numero);
}

//break
//termina la sentencia

while (numero < 1000) {
    numero++;
    document.write(numero);
    if (numero == 10) {
        break;
    }
}
