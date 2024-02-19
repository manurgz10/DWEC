var persona = 1;

let maquina = Math.floor((Math.random() * 2) + 1);

function checkwinner() {
    if (maquina === 1) { 
        return ("Cara. ¡Has ganado!");
    } else {
        return ("Cruz. Has perdido.");
    }
}

console.log(checkwinner());
