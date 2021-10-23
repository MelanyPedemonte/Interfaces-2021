let game = document.querySelector( '#game' );
let block = document.querySelector( '#block' );
let hole = document.querySelector( '#hole' );
let bird = document.querySelector( '#bird' );
let score = 0;
let spacePressed = false; //Espacio presionado
let angle = 0; // Angulo
let gameSpeed = 3; //Velocidad del juego
let jumping = 0;

function initRandomHoles() {
    hole.addEventListener( 'animationiteration', _ => {
        const fromHeight = 57 * window.innerHeight / 100
        const toHeight = 97 * window.innerHeight / 100

        const randomTop = Math.floor( Math.random() * (toHeight - fromHeight) + fromHeight )
        hole.style.top = `-${randomTop}px`
    })
} 

function resetAllAnimations() {
    const seconds = 2;
    const blockAnimationCss = `blockAnimation ${ seconds }s infinite linear`;
    
    block.style.animation = blockAnimationCss; 
    hole.style.animation = blockAnimationCss;

    score++;

    /** 
    if ( star.style.display !== 'none' ) return

    const num = getRandomNumber( 1, 5 )
    const starAnimationCss = `starAnimation${ num } ${ seconds }s infinite linear`
    star.style.animation = starAnimationCss*/
}

//volar
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if(birdTop>6 && jumpCount<15){
            bird.style.top = (birdTop-5)+"px";
        }
        if(jumpCount > 20){
            clearInterval(jumpInterval)
            jumping = 0
            jumpCount = 0
        }
        jumpCount++;
    },10);
}

//juego
setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (birdTop+3)+"px";
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    var ctop = -(500-birdtop);
    if((birdTop>600)){
        alert("Game Over. Score "+score);
        bird.style.top = 100 + "px";
        score = 0;
    }
},10);
initRandomHoles()
resetAllAnimations()
