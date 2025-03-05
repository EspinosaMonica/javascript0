// 1, abstraccion: definir una clase

class Figura{
    constructor(color){ // se asegura de que los objetos tengan las propiedades necesarias
        this.color=color;

    }

     //Metodos: son las acciones que puede realizar un objeto

     calcularArea(){
        throw new Error("El metodo no ha sido implementado")
     }

     obtenerColor(){
        return this.color()
     }
}


// 2- Herencia: creamos subclases especificas a partir de la clase padre

class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }

}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}


//3. Crear mis objetos

const miCirculo = new Circulo("Morado", 14);
const miRectangulo = new Rectangulo("Verde", 12, 6);

console.log("Color del circulo: ", miCirculo.obtenerColor());
console.log("Color del rectangulo: ", miRectangulo.obtenerColor());
console.log("Rectangulo dice: ", miRectangulo.miNombre());


//4. Polimorfismo
function mostrarArea(Figura){
    console.log(Figura.calcularArea);
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);