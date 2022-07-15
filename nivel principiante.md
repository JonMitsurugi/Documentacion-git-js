# JavaScript - nivel Junior

## Conceptos nuevos aprendidos

### Declarar e inicializar

Siempre pensé que inicializar una variable era colocar el scope y el nombre de esta y declararla era darle un valor. Bueno, resulta que es al revés.

### document.write(*value*)

Sirve para imprimir en pantalla el *value*. Aunque utilizar el console.log tiene sus beneficios a la hora de conocer algún error, este metodo agiliza a la hora de ver resultados.
Tambien tiene algo interesante que se puede imprimir código html (entre comillas).
De todos modos investigando averigue que es una mala practica utilizarlo y habría que utilizar metodos especificos de document(como document.createElement()).
O sea, es util para hacer pruebas pero no para nada formal.

```js
document.write("Hola como estas!!" + "<br>"); // Acá agrega un salto de linea.
```

### prompt(*string*)

Es como el input de JS. Se puede alamcenar en una variable.

### label&colon;

Es el indicador para una declaración en la que vera involucrado un `continue` o un `break`. Se utiliza sobre todo en bucles anidados para detener una ieración total y no solo el bucle child.

```js
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
```

### DOM

#### **document**

Metodos de selección de elementos.

| Metodo | Definión |
| ------ | -------- |
| getElementById(*id*) | Devuelve una referencia al elemento por su ID. |
| getElementsByTagName(*tag*) | Devuelve una referencia al o a los elementos por su etiqueta. |
| querySelector(*selector*) | Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores (separados con coma). En el selector debe escribirse el punto. |
| querySelectorAll(*selector*) | Devuelve una NodeList estatica que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados. |

```js
let subtitulo =  document.querySelector(".subtitulo");
```

#### **element**

Metodos para definir, obtener y eliminar atributos.

| Metodo | Definión |
| ------ | -------- |
| setAttribute(*name*,*value*) | Establece el valor de un atributo en el elemento indicado. Si este ya existe, actualiza el atributo. Con los atributos booleanos solo es necesario poner un string vacio pues se los considera true solo con estar presentes. |
| getAttribute(*attribute*) | Devuelve el valor del atributo especificado en el elemento. Si el attributo no existe devuelve null o "". |
| removeAttribute() | Elimina un atributo del elemento especificado. |

```js
let subtituloSinClase = subtitulo.setAttribute("contentEditable", "true");
```

#### **Atributos globales**

| Atributo | Definión |
| ------ | -------- |
| contentEditable | Especifica si el elemento es editable o no. Los valores pueden ser true, false o inherit. |
| hidden | Indica que el elemento aún no esta. No es necesario evaluar a rue pues con que este presente ya el elemento estara "escondido". |
| tabindex | Indica si el elemento puede ser enfocado y si puede ser recorrido secuencialmente con la tecla Tab. Según su número, este lo posicionara dentro de la secuencia. |
| title | Es el texto de piste que aparece al posicionarse sobre el elemento. |
| id | Representa el identificador del elemento, que debe ser unico en el documento. |
| className  | Obtiene o establece el valor del artibuto class del elemento especificado.|
| style | Accede a cualquier atributo y el cual se puede modificar. La sintaxis es `element.style.elAtributo = "valor"`. De esta forma no es  necesario utilizar `setAttribute()`.|

#### **Atributos de inputs**

| Atributo | Definión |
| ------ | -------- |
| value | Especifica el valor del input. Según el tipo de input, comprendera un dato diferente. Para `button`, `reset`, y `submit` define el texto del botón. Para `text`, `password`, y `hidden` define el valor inicial del input. Para `checkbox`, `radio`, `image` define el valor asociado con el input (este tambien es el valor que se envia con submit). |
| type | El tipo de contrtol a mostrar. Su valor por defecto es `text`. Los tipos: `button checkbox color date datetime email file hidden image monh number password radio range reset search submit tel time url week`    |
| accept | Toma como valor una lista separada por comas de uno o más tipos de archivos, o especificadores de tipo de archivo únicos, que describen qué tipos de archivo permitir. Es solo para el tipo *file*. |
| form | Indica a que formulario pertenece, a pesar de no estar dentro de este. Su valor es el del Id del formulario.    |
| placeholder | Es un texto que aparece en un input de carga o textarea dando alguna de instrucción. Normalmente esta en color gris claro, pero sus atributos son modificables. |
| minlength | Valor minimo de caracteres que el usuario puede ingresar en un input o textarea. Su valor debe ser menor al de maxlength en el caso de estar este presente. |
| required  | Es un atribuo booleano que determina que el input debe ser completado con un valor para poder ser enviado. |
| disabled | Atributo booleano que en caso de ser true, vuelve el objeto inusable y a prueba de clics. |
| checked | Atributo booleano que estando presente marca al input, si es un `checkbox` o `radio`. |

#### **Clases, classLists y metodos de classLists**

| Atributo | Definión |
| ------ | -------- |
| add(*string*,) | Añade al elemento la o las clases, separadas con comas. Si ya existe el elemento lo ignora. |
| remove(*string*,) | Remueve la o las clases especificadas. Si la clase no existe no produce error. |
|item(*number*) |Devuelve el valor de la clase que se encuentra en ese indice. Si no existe, devuelve null. |
|toggle(*string*, *boolean*) | Si la clase se encuentra, la elimina y devuelve false. Sino la agrega y devuelve true. Si esta el segundo argumento, fuerza sla eliminación o creación segun su valor. |
|contains(*string*) | Comprueba si la clase existe dentro del atributo de la clase del elemento. |
|replace(*oldClass*, *newClass*) | Reemplaza la clase vieja por la nueva. |

```js
let esTituloGrande = titulo.classList.contains("titulo-grande"); 
```

#### **Obtención y modificación de elementos**

| Atributo | Definión |
| ------ | -------- |
| textContent | Representa el contenido de texto de un nodo y sus dencendientes. |
| innerHtml |devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. |
| outerHtml | Devuelve el código y las etiquetas de un elemento Html. |

#### **Creación de elementos**

| Atributo | Definión |
| ------ | -------- |
| createElements(*tagname*, \[*options*\]) | Crea un elemento html reepresentado por su tagname. Tiene que estar escrito en mayúscula. |
| createTextNode() | Devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. |
| createDocumentFragment() | Representa el contenido de texto de un nodo y sus dencendientes. |

#### **Obtención y modificación de childs**

| Atributo | Definión |
| ------ | -------- |
| appendChild(*child*) | Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado. |
## Repasando

### For in

Este bucle guarda en la variable el índice del array:

```js
let frutas = ["pera", "manzana", "banana"];

for(let fruta in frutas) {
    document.write(fruta + " ");
};

//Devuelve 0 1 2
```

### For of

Este bucle guarda en la variable el valor del array:

```js
let frutas = ["pera", "manzana", "banana"];

for(let fruta of frutas) {
    document.write(fruta + " ");
};

//Devuelve pera manzana banana
```

### Clases y Objetos

Recordando la sintaxis de las clases y constructores:

```js
class Animal { // palabra reservada class + el nombre.
    constructor(especie,edad,color) { // constructor, siempre obligatorio, con los atributos del objeto obligatorios para instanciar.
        this.especie = especie; //Los atributos(propiedades?) llevan 'this.' para seleccionar el mismo objeto.
        this.edad = edad;
        this.color = color;
        this.informacion = `\nSoy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`
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
    counter = 0;
    ladrar() { //Los metodos van sin la palabra function.
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


perro.verInfo();
pajaro.verInfo();
gato.verInfo();
perro.ladrar();
perro.setRaza = "Dalmata"; // A pesar de tener estructura de metodo en su declaración, el setter se llama como un atributo.
document.write(`La raza de mi perro es ${perro.getRaza}`); // El getter en funcionamiento.
Perro.mensajeParaPerros()
```

### Metodos de cadenas

| Metodo | Definión |
| ------ | -------- |
| concat(*string*) |     |
| startsWith(*string*) |     |
| endsWith(*string*) |     |
| includes(*string*) |     |
| indexOf(*string*) |     |
| lastIndexOf(*string*) |     |
| padStart(*targetLength*, *padString*) | Rellena el targetLength(es el length esperado entre el length del string original mas el espacio a rellenar) con padstring. Si el targetlength es menor que el length del string original, no hay ningun cambio. Si el padstring es muy largo se vera cortado por la cantidad de espacios a rellenar.    |
| padEnd(*targetLength*, *padString*) | Lo mismo que padStart() pero desde el final.    |
| repeat(*num*) | Repite num de veces el string. |
| split(*string*) |   |
| substring(*index,size*) |   |
| toLowerCase() |   |
| toUpperCase() |   |
| toString() |   |
| trim() |   |
| trimStart() |   |
| trimEnd() |   |
| |  |

### Metodos de arrays

| Metodo | Definión |
| ------ | -------- |
| pop() |     |
| shift() |     |
| push(*element*) |     |
| reverse() |     |
| unshift(*element*) |     |
| sort() |     |
| splice(*index*,,) |     |
| join(*string*) |     |
| slice(,) |     |
| includes(element) |     |
| indexOf(element) |     |
| lastIndexOf(element) |     |
| toString() |   |
| filter() |   |
| forEach() |   |

### Math

| Metodo | Definión |
| ------ | -------- |
| sqrt() |     |
| cbrt() |     |
| max() |     |
| min() |     |
| random() |     |
| round() |     |
| floor() |     |
| fround() |     |
| trunc() |     |
| PI |     |
| SQRT1_2 |     |
| SQRT2 |     |

### Console

| Metodo | Definión |
| ------ | -------- |
| log() |     |
| error() |     |
| table() |     |
| warn() |     |
| clear() |     |
| dir() |     |
| info() |     |
| count() |     |
|countReset() |     |
|groupEnd() |     |
|groupCollapsed() |     |
|time() |     |
|timeLog() |     |
|timeEnd() |     |
