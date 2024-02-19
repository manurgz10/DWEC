import { User } from "./User.js";

export async function getUsers(){
    const usuariosFetch = await fetch("http://34.90.153.139/ejercicios/usuarios.php");
    const users = await usuariosFetch.json();


    const resultado = []
   
   /* for (let i = 0; i <users.length; i++){
        const transporteFetch = await fetch("http://34.90.153.139/ejercicios/transporte.php?id=" + users[i].transporte);
    }
    const transporte = await transporteFetch.json();

    const usuario = new User(
        users[i].iduser,
        users[i].nick,
        users[i].nombre,
        users[i].apellido,
        users[i].sex,
        transporte
    );
    resultado.push(usuario);

*/
   users.forEach(user => {
        const usuario = new User(
            user.iduser,
            user.username,
            user.name,
            user.surname,
            user.sex,
            user.transport
        );
        resultado.push(usuario);

    });

    return resultado;
   
}