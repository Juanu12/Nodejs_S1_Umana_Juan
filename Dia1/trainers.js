function menuTrainer(rl, volverMenu) {
    console.clear();
    console.log("=== Menú Trainer ===");
    console.log("1. Ver horarios");
    console.log("2. Ver ruta asignada");
    console.log("3. Volver al menú principal");

    rl.question("Selecciona una opción: ", (opc) => {
        switch (opc) {
            case "1":
                console.log("Función pendiente: ver horarios");
                setTimeout(() => menuTrainer(rl, volverMenu), 1500);
                break;
            case "2":
                console.log("Función pendiente: ver ruta asignada");
                setTimeout(() => menuTrainer(rl, volverMenu), 1500);
                break;
            case "3":
                volverMenu();
                break;
            default:
                console.log("Opción inválida.");
                setTimeout(() => menuTrainer(rl, volverMenu), 1500);
        }
    });
}

module.exports = { menuTrainer };
