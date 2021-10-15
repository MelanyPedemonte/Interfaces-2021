//Creacion del canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

//Variables para el uso del juego utilizadas en las distintas clases
let spacePressed = false; //Espacio presionado
let angle = 0; // Angulo
let hue = 0; //Lo uso para modificar el color del particle
let frame = 0;//Lo uso para crear los obstaculos
let score = 0; //Puntaje
let gameSpeed = 3; //Velocidad del juego

//Creamos el personaje
const bird = new Bird();

//Particle
const particlesArray = [];

//Obstacle
const obstaclesArray = [];

//Animaciones
const bang = new Image();
bang.src = './Animaciones/bang.png'

//Gradiente para el puntaje
const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#fff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');

//Llama a los metodos para la animacion del juego
function animate(){
    //Limpia el personaje
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    handleParticles();
    //Representa las coordenadas del personaje, los saltos y su dibujo
    bird.update();
    bird.draw();
    //Me pone un texto en el canvas para llevar el puntaje del personaje
    ctx.fillStyle = gradient;
    ctx.font = '25px Georgia';
    ctx.strokeText("Score: "+ score, 680, 40);
    ctx.fillText("Score: " + score, 680, 40);
    //LLama a la funcion para las colisiones
    handleCollisions();
    //Me corta el juego si la funcion anterior da True
    if(handleCollisions()) return;
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

//HANDLES
//Funcion que agrega las particulas simulando humo al personaje
function handleParticles(){
    particlesArray.unshift(new Particle);

    //Crea los circulos que simulan ser humo y va actualizando su ubicacion
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
    //Esta condicion me da la distancia entre los obstaculos
    if(frame%60 ===0){
        obstaclesArray.unshift(new Obstacle());
    }

    //Va creando los obstaculos
    for (let i= 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }

    if(obstaclesArray.length>20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}

function handleCollisions(){
    for(let i=0; i < obstaclesArray.length; i++){
        console.log(obstaclesArray);
        if ((bird.x < obstaclesArray[i].x + obstaclesArray[i].width) 
            && (bird.x + bird.width > obstaclesArray[i].x) && 
          //Controla las colisiones en Top
          ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
          //Controla las colisiones en Bottom
          (bird.y > canvas.height - obstaclesArray[i].bottom &&
            bird.y + bird.height < canvas.height))){
                //Collision detectada
                ctx.drawImage(bang, bird.x, bird.y, 50, 50); //Image
                //Me pone un texto de Game over en la pantalla
                ctx.fillStyle = 'gray';
                ctx.font = "30px Georgia";
                ctx.strokeText('Game Over, your Score is: '+ score, 220, canvas.height/2- 20);
                ctx.fillText('Game Over, your Score is: ' + score, 220, canvas.height/2- 20);
                return true;
            }
    }
}



