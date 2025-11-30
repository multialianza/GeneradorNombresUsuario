//Generar un nombre de usuario con el uso de métodos String y Math 
//para manipular texto y generar números aleatorios combinándolos
//para crear un resultado dinámico a partir de la entrada del usuario.


// Evento para ejecutar la lógica al hacer clic en el botón
document.getElementById("btnGenerar").addEventListener("click", function () {

    // CAPTURA DE DATOS
    let nombre = prompt("Ingresa tu Nombre:");
    let apellido = prompt("Ingresa tu Apellido:");

    // Validación básica
    if (!nombre || !apellido) {
        console.log("=".repeat(50));
        console.log("Debes ingresar Nombre y Apellido");
        console.log("Vuelve a intentarlo nuevamente!!!");
        console.log("=".repeat(50) + "\n");
        return;
    }

    // PROCESAMIENTO DE LOS NOMBRES

    // Inicial del nombre (1er caracter), .toLowerCase() convierte ambos fragmentos a minúscula.
    let inicialNombre = nombre.slice(0, 1).toLowerCase();

    // Primeras 3 letras del apellido
    let primerasTresApellido = apellido.slice(0, 3).toLowerCase();

    // GENERAR NÚMERO ALEATORIO ENTRE 10 Y 99
    let numeroAleatorio = Math.floor(Math.random() * 90) + 10;

    // ENSAMBLAJE DEL RESULTADO FINAL
    let nombreUsuario = inicialNombre + primerasTresApellido + numeroAleatorio;

    // Mostrar en consola
    console.log("=".repeat(50));
    console.log(`Si el usuario ingresa "${nombre}" y "${apellido}":`);
    console.log("Tu nuevo nombre de usuario es: " + nombreUsuario);
    console.log("=".repeat(50) + "\n");
});

