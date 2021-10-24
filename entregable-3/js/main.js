// Crear elementos del juego
let bird = new Bird('rosa');
let obstaculo = new Obstaculo(400, 550);  //hay que ver el tema de la posicion top left cuando gire junto con el fondo 


let juego = new Juego(bird, obstaculo);
juego.initGame();
