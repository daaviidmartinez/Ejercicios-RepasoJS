let numero = prompt("Dime un numero del 1 al 12");
while (numero > 12 || numero <= 0) {
    alert("Tiene que ser entre el 1 y el 12");
    numero = prompt("Dime un numero del 1 al 12");
}

function Dado() {
    let ResultDado = Math.floor(Math.random() * 12) + 1;
    console.log(ResultDado);
    if (ResultDado == numero) {
        alert("BINGO!!!!")
    } else {
        alert("Vuelve a intentarlo :(")
    }
}

Dado()