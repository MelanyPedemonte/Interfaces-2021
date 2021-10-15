const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

//Game runs
let spacePressed = false; //Espacio presionado
let angle = 0; // Angulo
let hue = 0;
let frame = 0;
let score = 0; //Puntaje
let gameSpeed = 2; //Velocidad del juego

//Creamos el personaje
const bird = new Bird();


function animate(){
    //Limpia el personaje
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Representa las coordenadas del personaje, los saltos y su dibujo
    bird.update();
    bird.draw();
    //Sirve para el loop de la animacion
    requestAnimationFrame(animate);
}
animate();

//Hace que al tocar el "espacio" suba
//https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
window.addEventListener('keydown', (e) => {
    //console.log(e.code);
    if (e.code === "Space") {
        spacePressed = true;
    }
});

//Hace que al no tocar el "espacio" baje
window.addEventListener('keyup', (e) => {
    if (e.code === "Space") {
        spacePressed = false;
    }
});


