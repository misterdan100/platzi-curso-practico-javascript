El ciclo for ... in es una forma rapida y corta de recorrer un array (o un objeto tambien) para extraer y manipular cada uno se sus valores, en este sencillo ejemplo solo vamos a imprimirlos.

# for ... in con Array
## 1. Definir un array.
usaremos el siguiente array como ejemplo:
```js
let miArray = [1, 2, 3, "Hola", "Mundo", true, false];
```

## 2. Definir una funcion.
ahora podemos hacer una funcion que recorra el array para poder utilizarla en otros codigos.
```js
function imprimirArray (array) {
   
}
```

## 3. Definir ciclo for ... in
para usar el ciclo for ... in la estructura es la siguientes
![Screenshot 2023-04-06 225725.png](https://static.platzi.com/media/user_upload/Screenshot%202023-04-06%20225725-da9ed30c-669c-4932-94e1-ad6acdaaf51f.jpg)
i = "identificador" es una variable temporal que almacenara uno por uno los valores del array en cada ciclo.
array = es el array que va a ser recorrido

## 4. Funcion completa
```js
let miArray = [1, 2, 3, "Hola", "Mundo", true, false];

function recorrerArray (array) {
    for (i in array) {
        console.log(array[i])
    }
}

recorrerArray(miArray)
```

**Resultado:**
```
1
2
3
Hola
Mundo
true
false
```

## 5. Como esta funcionando.
El proceso es sencillo.
1. **For toma el array completo** ([1, 2, 3, "Hola", "Mundo", true, false]) **y comienza a tomar cada uno de los elementos, uno por uno** por su inidice y los almacena en la variable i.
2. Recordemos que los indices en un array comienzan desde 0 no desde 1.
![array-indices](https://www.javascripttutorial.net/wp-content/uploads/2022/08/JavaScript-Array.svg)
2. Entonces **en la primera vuelta i = 0**
3. Luego se ejecuta el console.log(array[i]).
4. **En la siguiente vuelta salta al segundo elemento**, ahora i = 1, luego i = 2, luego i = 3 **y asi sucesivamente** hasta que no hallan mas elementos en el array.

### Que hace array[i] ?
1. **El console.log() lo que hace es que ejecuta array[i] en cada vuelta**, entonces si i = 0, es como si escribieramos array[0], va a buscar el elemento en el indice 0 y lo va a traer para imprimirlo en consola.
2. **array[indice] es la forma de acceder a los elementos de un array por su indice.**
3. Por ejemplo: si vamos en la cuarta vuelta donde i = 3, eso es igual a array[3] va a buscar dentro del array el elemento en el indice 3 ("Hola") y lo va a imprimir en consola. 