const readline = require("readline");
const { menuCamper } = require("./campers");
const { menuTrainer } = require("./trainers");
const { menuCoordinador } = require("./coordinador");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal() {
    console.clear();
    console.log("=================================");
    console.log("  Bienvenido a Campuslands");
    console.log("=================================");
    console.log("1. Camper");
    console.log("2. Trainer");
    console.log("3. Coordinador");
    console.log("4. Salir");
    rl.question("Selecciona una opción: ", (opc) => {
        switch (opc) {
            case "1":
                menuCamper(rl, menuPrincipal);
                break;
            case "2":
                menuTrainer(rl, menuPrincipal);
                break;
            case "3":
                menuCoordinador(rl, menuPrincipal);
                break;
            case "4":
                console.log("¡Hasta pronto!");
                rl.close();
                break;
            default:
                console.log("Opción inválida, intenta de nuevo...");
                setTimeout(menuPrincipal, 1500);
        }
    });
}

menuPrincipal();