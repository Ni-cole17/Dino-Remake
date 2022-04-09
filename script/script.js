const person = document.querySelector('.person');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping)
        jump();
    }
}

function jump(){
    isJumping = true;
    let upInterval = setInterval(()=>{
        if(position >= 150){
            clearInterval(upInterval);
            //descendo
            let downinterval=setInterval(()=>{
            if(position <= 0){
                clearInterval(downinterval);
                isJumping = false;
            }  else{ 
            position -= 20;
            person.style.bottom = position + 'px';
            }
            },20);
        }
        else{
        //subindo
        position += 20;

        person.style.bottom = position + 'px';
        }
    },20); //código é executado a cada 20 milissegundos
}

function createpeoples(){
    const peoples = document.createElement('div');
    let peoplesposition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);
    peoples.classList.add('peoples');
    peoples.style.left = 1000 + 'px'
    background.appendChild(peoples);

    let leftInterval = setInterval(()=>{

        if(peoplesposition < -60){
            clearInterval(leftInterval);
            background.removeChild(peoples);
        }else if(peoplesposition > 0 && peoplesposition < 60 && position < 60){
        //GAME OVER
        clearInterval(leftInterval);
        document.body.innerHTML = "<h1 class='game-over'>Fim de Jogo</h1>";
        }
        else{    
            peoplesposition -=10;
            peoples.style.left = peoplesposition + 'px';    
        }
    },20);

    setTimeout(createpeoples,randomTime);
}

createpeoples();
document.addEventListener('keyup', handleKeyUp)
