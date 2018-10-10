var numero = document.getElementById("numero");
var boton = document.getElementById("boton");

boton.onclick = () => numero.textContent = Math.floor(Math.random()*5+1);


var jugador = document.getElementById("jugador");
var cpu = document.getElementById("CPU");


function createNumbers(player){
    
    var randomNumbers = _.shuffle(_.range(1,90));

    for (var i of _.range(0,14)){
        var item = document.createElement("div");
        item.className = "item";
        item.textContent = randomNumbers[i];
        player.appendChild(item);
    }
}

createNumbers(jugador);
createNumbers(cpu);