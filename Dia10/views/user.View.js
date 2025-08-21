const prompt = require('prompt-sync')

class UsuarioView{

    pedirDatosUsuario(){

        const nombre = prompt(' Nombre: ')
        const correo = prompt('Correo: ')
        const edad = prompt('Edad:')
        return{
            nombre,correo, edad 
        }



    }

    mostrarMensaje (msg) {
        console.log(msg)
    }

    mostrarUsuarios(usuarios){
        console.log("\n-- Lista de Usuario --\n")
        usuarios.forEach ( u  => {

            console.log( `\n Nombre ${u["nombre"]}, \n Correo: ${u["correo"]}, \n Edad: ${u["edad"]} \n` )


        } )
    }


}
module.exports = UsuarioView;