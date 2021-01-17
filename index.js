const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;


function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // Descendo
            let downInterval = setInterval (() => {
                if (position <= 0) {
                    clearInterval(downInterval); 
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position +'px';
                }
            }, 20);
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position +'px';
        }
    }, 20);
}
function creatCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInteval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInteval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            // Game Over 
            clearInterval(leftInteval);
            document.body.innerHTML = "<h1 class='game-over'>Fim de Jogo</h1>";
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(creatCactus, randomTime);
}


creatCactus();
document.addEventListener('keyup', handleKeyUp);