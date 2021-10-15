//Creacion del canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

//Game runs
let spacePressed = false; //Espacio presionado
let angle = 0; // Angulo
let hue = 0; //Lo uso para modificar el color del particle
let frame = 0;//Lo uso para crear los obstaculos
let score = 0; //Puntaje
let gameSpeed = 2; //Velocidad del juego

//Creamos el personaje
const bird = new Bird();

//Particle
const particlesArray = [];

//Obstacle
const obstaclesArray = [];

function animate(){
    //Limpia el personaje
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    //Representa las coordenadas del personaje, los saltos y su dibujo
    bird.update();
    bird.draw();
    handleParticles();
    //Sirve para el loop de la animacion
    requestAnimationFrame(animate);
    //Hace que haga un salto al estar quieto
    angle+=0.12;
    hue++;
    frame++;
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

//Funcion que agrega las particulas simulando humo al personaje
function handleParticles(){
    particlesArray.unshift(new Particle);

    for(i=0; i<particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    //If more than 200, remove 20
    if(particlesArray.length>200){
        for (let index = 0; index < 20; index++) {
            particlesArray.pop(particlesArray[index]);  
        }
    }
}

function handleObstacles(){
    if(frame%80 ===0){
        obstaclesArray.unshift(new Obstacle());
    }

    for (let i= 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }

    if(obstaclesArray.length>10){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}



