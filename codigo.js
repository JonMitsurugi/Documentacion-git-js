// let pepe = prompt("holaaa" );

// let pocho = "hola";
// document.write((pepe == pocho) + "<br>");

let frutas = ["pera", "manzana", "banana"];

for (let fruta of frutas) {
    document.write(" " + fruta + " ");
}

let numeros = [12, 58, 96];
let muchasCosas = ["Agua", true, numeros, 265, "suerte"];

buclePadre:
for(let cosa of muchasCosas) {
    if (Array.isArray(cosa)) {
        for(let numero of numeros) {
            if (numero > 90) {
                break buclePadre; // Si no declarara el break con el label, solo se detendría el bucle de numeros.
            } else {
                document.write(numero + " ");
            }
        }
    } else {
        document.write(cosa + " ");
    }
}

class Animal { // palabra reservada class + el nombre.
    constructor(especie,edad,color) { // constructor, siempre obligatorio, con los atributos del objeto obligatorios para instanciar.
        this.especie = especie; //Los atributos(propiedades?) llevan 'this.' para seleccionar el mismo objeto.
        this.edad = edad;
        this.color = color;
        this.informacion = `\nSoy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
    }   // Utilizando los template literals para agregar datos al string.

    verInfo() { //los metodos dentro de la clase no llevan 'function' y no pueden ser arrow functions.
        document.write(this.informacion + "<br>");
    }
}

class Perro extends Animal { // Para heredar atributos y metodos de otra clase se utiliza 'extends'.
    constructor(especie,edad,color,raza) {
        super(especie,edad,color); // Para heredar el constructor de otra clase se utiliza 'super'.
        this.raza = raza; // Se aghrega una propiedad particular de perro.
    }

    ladrar() {
        alert("wow!!");
    }

    get getRaza() {
        return this.raza; // En JS el getter lleva 'return'.
    }

    set setRaza(raza) {
        this.raza = raza;
    }

    static mensajeParaPerros() { // 'static' sirve para declarar metodos de clase, o sea, se puede uilizar sin instanciar la clase.
        alert("Aca solo van perros!!!");
    }
}

let perro = new Perro("perro", 15, "marrón", "Collie"); // Se instancia con la palabra 'new'.
let pajaro = new Animal("pajaro", 5, "rojo");
let gato = new Animal("gato", 18, "negro");


// perro.verInfo();
// pajaro.verInfo();
// gato.verInfo();
// perro.ladrar();
perro.setRaza = "Dalmata"; // A pesar de tener estructura de metodo en su declaración, el setter se llama como un atributo.
document.write(`La raza de mi perro es ${perro.getRaza}` + "<br>"); // El getter en funcionamiento.
Perro.mensajeParaPerros();

const titulo = document.querySelector(".titulo");
let input = document.querySelector(".input-normal");

titulo.setAttribute("contentEditable", "true");
titulo.setAttribute("tabindex", "1");
input.placeholder = "Hola";
input.tabindex = -1;
input.disabled = "true";

let subtitulo = document.getElementById("titulo-secundario");
subtitulo.style.color = "#5CA2AC";
subtitulo.hidden = "false";
subtitulo.removeAttribute("hidden");

document.write(subtitulo.style.color);
input.className = "pocho";
input.classList.add("pepe");
document.write("<br>" + input.classList.item(1));
document.write("<br>" + input.classList.contains("toto"));
document.write("<br>" + input.textContent);
document.write("<br>" + input.innerHTML);
document.write("<br>" + input.outerHTML);

let parrafo = document.querySelector('.parrafito');
document.write('<br>' + parrafo.outerHTML);
document.write('<br>' + parrafo.innerHTML);
document.write('<br>' + parrafo.textContent);
alert('<br>' + parrafo.textContent);
alert('<br>' + parrafo.innerHTML);
alert('<br>' + parrafo.textContent);