# JavaScript

## Isomorfismo
Hoy por hoy JavaScript es el unico lenguaje capaz de ejecutarse en las 3 capas de una aplicación.
1. Frontend (con JavasScript).
2. Backend (con Node js).
3. Persistencia de datos "BD" (con MongoDB, Couch DB, Firebase, ...).

Con JavaScript puedes
* Diseño y desarrollo web.
* Hacer Videojuegos.
* Experiencias 3D, RA, RV.
* Controlar Hardware (**drones, robots, electrodomesticos, wearables, etc**).
* Aplicaciones Hibridas y Móviles.
* Aprendizaje Automático
* Etc.

## Caracterizticas
* Lenguaje de alto nivel.
* Interpretado.
* Dinámico.
* Débilmete tipado.
* Miltiparadigmas.
* Sensible a MÁYUSCULAS y minúsculas.
* No necesita los puntos y coma al final de cada línea.
  
## Estructura de codigo
Los **Identificadores** deben comenzar con.
* Una letra o 
* Un signo de dolar **$** o 
* Un guión bajo **_**
* Nunca con un número o caracteres especiales.
  
### Usar snake_case en:
* Nombres de archivos:
```sh 
  mi_archivo_javascript.js
```

### Usar UPPER_CASE en:
* Constantes:
```js 
  const UNA_CONSTANTE = "Soy una constante";
  const PI = 3.141592;
```

### Usar UpperCamelCase en:
* Clases:
```js 
  class Humano {
    constructor(nombre, genero){
      this.nombre = nombre
      this.genero = genero
    }
  }

  saludaHumano () {
    return `Hola mucho gusto ${this.nombre}`
  }
```

### Usar lowerCamelCase en:
1. Objetos:
    ```js 
      const unObjeto = {
        nombre: "Ronaldo",
        email: "ronysic13@gmail.com",
      };
    ```
2. Primitivos:
    ```js 
      let unaCadena = "Hola mundo"
      let unNumero = 20
      let unBoolean = true
      ```
3. Funciones:
    ```js 
      function holaUsuario(user) {
        alert(`Hola binvenido ${user}`)
      }

      holaUsuario("Ronaldo")
    ```
4. Instancias:
    ```js 
      const ajax = new XMLHttpRequest()
      const jon = new Humano("Jonathan", "Hombre");
    ```

## Palabras reservadas
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with

## Ordenamiento de código
1. Importación de módulos.
2. Declaración de variables.
3. Declaración de funciones.
4. Ejecución de código.

## Tipos de datos en JS
**Primitivos** Se acceden directamente al valor p.j:
* string.
* number.
* boolean.
* null.
* undefined.
* NaN.
  
**Compuestos** Se acceden a la referencia del valor.
* object = {}
* array = []
* function () {}
* Class {}
* Etc.

