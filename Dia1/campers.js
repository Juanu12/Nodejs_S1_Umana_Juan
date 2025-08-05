function menuCamper(rl, volverMenu) {
    console.clear();
    console.log("=== Menú Camper ===");
    console.log("1. Iniciar sesión");
    console.log("2. Registrarse");
    console.log("3. Volver al menú principal");

    rl.question("Selecciona una opción: ", (opc) => {
        switch (opc) {
            case "1":
                console.log("Función de inicio de sesión (pendiente)...");
                setTimeout(() => menuCamper(rl, volverMenu), 1500);
                break;
            case "2":
                console.log("Función de registro (pendiente)...");
                setTimeout(() => menuCamper(rl, volverMenu), 1500);
                break;
            case "3":
                volverMenu();
                break;
            default:
                console.log("Opción inválida.");
                setTimeout(() => menuCamper(rl, volverMenu), 1500);
        }
    });
}

module.exports = { menuCamper };
