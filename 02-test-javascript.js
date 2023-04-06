// const name = "Daniel";
// const lastName = "Merchan";
// const userName = "misterdan";
// const age = 28;
// const email = "merchanmd@gmail.com"
// const adult = true; 
// const savedMoney = 5000000;
// const duts = 500000;

// const fullName = name + " " + lastName;
// console.log(fullName)

// const realMoney = savedMoney - duts;
// console.log(realMoney)

// funciones -----------------------------------
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function presentacion (completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

presentacion(completeName, "Misterdan")


// condicionales -----------------------------------
const tipoDeSuscripcion = "Expert";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

function verificarSuscripcion (suscripcion) {
    const typesOfSubcriptions = {
        "Free": "Solo puedes tomar los cursos gratis",
        "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
        "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
        "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }

    if (suscripcion in typesOfSubcriptions) {
        return console.log(typesOfSubcriptions[suscripcion])
    }
}

verificarSuscripcion("Free")

// cliclos ---------------------------
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

var i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i)
    i++;
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--
}


// 3. sumar 2 + 2
var respuestaUser = prompt("Cuanto es 2 + 2:")


while (respuestaUser !== 4) {
    respuestaUser = prompt("Cuanto es 2 + 2:")
    if (respuestaUser == 4) {
        console.log("Respuesta correcta");
        respuestaUser = 4;
    }
}

var array2 = ["manzana", "pera", "cereza"];

function extraerPrimerElemento (array) {
    return console.log(array.shift())
}

extraerPrimerElemento(array2)

var array2 = ["manzana", "pera", "cereza"];
function imprimirArray (array) {
    for (i in array) {
        console.log(array[i])
    }
}

imprimirArray(array2)


var auto = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2021,
    color: "Rojo",
    motor: "V8",
    transmision: "Automática",
    traccion: "Trasera"
  };

function imprimirObjeto (objeto) {
    for (clave in objeto) {
        console.log(clave + ": " + objeto[clave])
    }
}

imprimirObjeto(auto)