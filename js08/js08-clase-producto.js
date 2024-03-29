//Pilares de la programacion orientada a objetos
//Encapsulacion
//Restringir el acceso directo a los atributos
//Herencia
//poliformismo
//Abstraccion

class Producto {
    #nombre;
    #precio;
    #uuid;
    #createdAt;
    constructor(nombre, precio, uuid) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#uuid = uuid;
        this.#createdAt = new Date();
    }

    //Para dar aceso a los atributos encapsulados, usamos
    //los metodos setters y getters
    get nombre() {//leer el atributo
        return this.#nombre;
    }
    set nombre(nombre) {
        //Solo guardar si la longitud es mayor a 5 caracteres
        this.filtrarNombre(nombre, 5) && (this.#nombre = nombre);
    }
    get precio() {
        return this.#precio;
    }
    set precio(precio) {
        this.#precio = precio;
    }
    get uuid() {
        return this.#uuid;
    }

    filtrarNombre(nombre, longitudMinima) {
        if (nombre.length > longitudMinima)
            return true;
        else
            throw `La longitud es menor a ${longitudMinima} caracteres`;
    }

    imprimirDatos() {
        return `
        UUID : ${this.uuid}
        Nombre : ${this.nombre}
        Precio : ${this.precio}`;
    }


}
//Herencia
class ProductoElectronico extends Producto {
    #diasParaGarantia;
    constructor(nombre, precio, uuid, diasParaGarantia) {
        //super() hace referencia al constructor de la clase padre
        super(nombre, precio, uuid)
        this.#diasParaGarantia = diasParaGarantia;
    }
    //Agregar el set and get de dias Para Grantia
    get diasParaGarantia() {
        return this.#diasParaGarantia;
    }
    set diasParaGarantia(dias) {
        this.#diasParaGarantia = dias;
    }
    //Sobre-escritura overriding de metodos
    imprimirDatos(){
        return super.imprimirDatos()+`
        Garantia ${this.diasParaGarantia}`;
    }

}

export { Producto, ProductoElectronico };
