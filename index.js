var numero = document.getElementById("numero");
var boton = document.getElementById("boton");

boton.onclick = () => {
    var random = Math.floor(Math.random()*90+1);
    numero.textContent = random;

    return random;
}


jugador = document.getElementById("jugador");
cpu = document.getElementById("CPU");

let createNumbers = player => {    
    var randomNumbers = _.shuffle(_.range(1,90));
    var arrayFinal = [];

    for (var i of _.range(0,14)){
        var item = document.createElement("item");
        var numero = randomNumbers[i];

        item.className = `item item${numero}`;
        item.textContent = numero;
        arrayFinal.push(numero);
        randomNumbers.splice(i,1);
        player.appendChild(item);
    }

    return arrayFinal;
}

var cartonJugador = createNumbers(jugador);
var cartonCPU = createNumbers(cpu);

/*let stricke = carton => {
    for (let index in carton){
        let valorDado = boton.onclick();
        if (index == valorDado){
            let myItem = document.querySelector(`.item${index}`);
            console.log(myItem);
            myItem.style.backgroundColor = "blue";
        }
    }
}

stricke(cartonJugador);*/