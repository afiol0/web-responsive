// Alert personalizado
// Esta funcion abre la ventana emergente cuando se completa con exito el formulario
function showAlert() {
    var alert = document.getElementById("customAlert");
    alert.style.display = "block";
  }
  // Esta funcion cierra la ventana emergente cuando se completa con exito el formulario
  function closeAlert() {
    var alert = document.getElementById("customAlert");
    alert.style.display = "none";
  }
// Esta funcion limpia los campos del formulario
  function limpiarCampos() {
    document.getElementById("nombre").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("mensaje").value = ""
  }
  
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
        alert("Por favor, no puede dejar el campo nombre vacío.")
        return false;
    }
    // Si el email no tiene contenido no será válido
    if (email.trim() === "") {
        alert("Por favor, no puede dejar el campo email vacío.")
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
    else {
        // En caso de que se complete con exito el formulario se limpiará y mostrará la alerta personalizada
        limpiarCampos()
        showAlert()
    }
    
}
// Carrusel
// Declaramos un diccionario imagenes que guardará el nombre del curso, url de la imagen y la descripción
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
// Para que no nos cargue los eventos todo el rato en cualquier pagina, le especificamos que solo haga lo del carrusel cuando este en la pagina de cursos
if (window.location.href.includes("pagina-cursos.html")) {
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
    // Añadimos un evento que al clicar en 'atras' nos mueva el indicie hacia atras y cargue la descripcion de la imagen correspondiente
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
}
// Tema oscuro-claro
/* Esta funcion recogerá el estado del checklist para saber si está activo o no
con ello conseguiremos que en función del estado cambie la clase del body a oscuro o claro para todas las paginas*/
function toogleMode() {
    const body = document.body;
    const modoClaro = document.getElementById('toogle').checked;
    if (modoClaro) {
        body.classList.add('claro');
        body.classList.remove('oscuro');
    } else {
        body.classList.remove('claro');
        body.classList.add('oscuro');
    }
    // Guardar el estado del checklist en localStorage para que se guarde incluso si reiniciamos la pestaña
    localStorage.setItem('modoClaro', modoClaro);
}

// Verificar el estado del checklist al cargar la página para que cada vez que naveguemos por otras paginas mire el estado
window.addEventListener('DOMContentLoaded', () => {
    const modoClaroGuardado = localStorage.getItem('modoClaro') === 'true';
    document.getElementById('toogle').checked = modoClaroGuardado;
    toogleMode();
});

// Agregar un listener para cambiar el modo cuando se cambie el checklist
document.getElementById('toogle').addEventListener('change', toogleMode);
