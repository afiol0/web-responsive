function validarFormulario() {
    // Declaración de variables

    // Asignamos a las variables su respectivo campo a validar.
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let telefono = document.getElementById("telefono").value;
    let patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let patronTelefono = /^\d{9}$/

    // Si el nombre no tiene contenido no será válido
    if (nombre.trim() === "") {
        alert("Por favor, no puede dejar el campo vacío.")
        return false;
    }
    // Si el email no tiene contenido no será válido
    if (email.trim() === "") {
        alert("Por favor, no puede dejar el campo vacío.")
        return false;
    }
    // Si el email no tiene el patrón determinado no será válido
    if (!email.match(patronEmail)) {
        alert("Por favor, ingresa un email válido.")
        return false;
    }
    // Si el mensaje no contiene nada no será válido.
    if (mensaje.trim() === "") {
        alert("Por favor, ingrese el mensaje para el contacto.")
        return false;
    }

    if (!telefono.match(patronTelefono)) {
        alert("Por favor, ingrese un número de teléfono válido.")
        return false;
    }

    return true;
}

// Carrusel

// Declaramos el diccionario imagenes que guardará el nombre del curso, url de la imagen y la descripción
let imagenes = [
    {
        "url": "../img/html-img.png",
        "nombre": "HTML5",
        "descripcion": "Prueba ahora nuestro curso completo de HTML5!"
    },
    {
        "url": "../img/css-img.png",
        "nombre": "CSS3",
        "descripcion": "Prueba ahora nuestro curso completo de CSS3!"
    },
    {
        "url": "../img/js-img.png",
        "nombre": "Javascript",
        "descripcion": "Prueba ahora nuestro curso completo de Javascript!"
    },
    {
        "url": "../img/react-img.png",
        "nombre": "React",
        "descripcion": "Prueba ahora nuestro curso completo de React!"
    },
]
/*Declaramos los botones, imagenes y texto, 
la variable actual que representa la imagen seleccionada en el carrusel que será la primera */
let atras = document.getElementById('atras')
let adelante = document.getElementById("adelante")
let imagen = document.getElementById('img')
let puntos = document.getElementById('puntos')
let texto = document.getElementById('texto')
let actual = 0
// Añadimos uun evento para el DOM que al cargarlo nos ejecute la funcion cargar imagen
document.addEventListener("DOMContentLoaded", function() {
    cargarImagen(actual);
});
/*  La funcion cargar imagen se encargará de cargar las propiedades de la imagen 
 dado un indice que al principio será 0 (es decir la primera imagen) 
 Cambiará el HTML de la imagen sustituyendo el src="" por el suyo y el texto y titulo por el suyo también*/
function cargarImagen(indice) {
    imagen.innerHTML = ` <img class="img" src="${imagenes[indice].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
        <h3>${imagenes[indice].nombre}</h3>
        <p>${imagenes[indice].descripcion}</p>
    `;
    // Ejecutará la funcion posicion carrusel para ver en que posición está
    posicionCarrusel();
}
// Añadimos un evento que al clicar en atras nos mueva el indicie hacia atras y cargue la descripcion de la imagen correspondiente
atras.addEventListener('click', function(){
    actual -= 1

    if (actual == -1 ){
        actual = imagenes.length - 1
    }
    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>`
    posicionCarrusel()
})
// Añadimos un evento que al clicar en adelante nos mueva el indicie hacia adelante y cargue la descripcion de la imagen correspondiente
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

/* La función posicionCarrusel nos recorrerá el diccionario de imagenes para marcar
 los puntos vacios o llenos dependiendo de donde se encuentre */
function posicionCarrusel() {
    // Reseteamos el innerHTML para que no se acumule nada y siempre que se compruebe sea de nuevo
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        // En caso que se encuentre en la posicion actual pues marcará el punto con bold para que se resalte
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        // En otro caso pondrá un punto normal para que no se marque nada
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}