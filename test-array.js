let miArray = [1, 2, 3, "Hola", "Mundo", true, false];

function recorrerArray (array) {
    for (i in array) {
        console.log(array[i])
    }
}

recorrerArray(miArray)