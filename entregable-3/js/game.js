const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 900;

//Variables para el uso del juego utilizadas en las distintas clases
let spacePressed = false; //Espacio presionado
let angle = 0; // Angulo
let hue = 0; //Lo uso para modificar el color del particle
let frame = 0;//Lo uso para crear los obstaculos
let score = 0; //Puntaje
let gameSpeed = 3; //Velocidad del juego

//Creamos el personaje
const bird = new Bird();
const pajaro = new Image();
pajaro.src = './Animaciones/bird.png'


//Particle
const particlesArray = [];

//Obstacle
const obstaclesArray = [];

//Animaciones
const bang = new Image();
bang.src = './Animaciones/bang.png'

//imagenes de fondo
const layer5 = new Image();
layer5.src = './Animaciones/background/layer07_Sky.png';
const layer4 = new Image();
layer4.src = './Animaciones/background/layer06_Rocks.png';
const layer3 = new Image();
layer3.src = './Animaciones/background/layer05_Clouds.png'; 
const layer2 = new Image();
layer2.src = './Animaciones/background/layer03_Hills_1.png';
const layer1 = new Image();
layer1.src = './Animaciones/background/layer01_Ground.png';

const sky = new Background(layer5,0.1);
const rocks = new Background(layer4,0.2);
const clouds = new Background(layer3,0.3);
const hills = new Background(layer2,0.5);
const ground = new Background(layer1,1);

const imageArray =[sky, rocks, clouds, hills, ground];

//Gradiente para el puntaje
const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#fff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');

let xb=0;
let xb2= 1280;

//Llama a los metodos para la animacion del juego
function animate(){
    //Limpia el personaje
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //imagenes fondo
    imageArray.forEach(object => {
        object.update();
        object.draw();
    });
   // handleBackround();
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
    bird.frameX = 0;
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
                ctx.fillStyle = 'black';
                ctx.font = "30px Georgia";
                ctx.strokeText('Game Over, your Score is: '+ score, 220, canvas.height/2- 20);
                ctx.fillText('Game Over, your Score is: ' + score, 220, canvas.height/2- 20);
                return true;
            }
    }
}

function handleBackround(){
    if(bg.x1 <= -bg.width + gameSpeed){
        bg.x1 = bg.width;
    }else{
        bg.x1 -= gameSpeed;
    };
    if(bg.x2 <= -bg.width + gameSpeed){
        bg.x2 = bg.width;
    }else{
        bg.x2 -= gameSpeed;
    }
    ctx.drawImage(backgroung, bg.x1, bg.y, bg.width, bg.height);
    ctx.drawImage(backgroung, bg.x2, bg.y, bg.width, bg.height);
}



