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

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Representa las coordenadas del bird 
    bird.update();
    bird.draw();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', (e) => {
    //console.log(e.code);
    if (e.code === "Space") {
        spacePressed = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === "Space") {
        spacePressed = false;
    }
});


