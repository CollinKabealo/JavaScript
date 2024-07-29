document.addEventListener('DOMContentLoaded', () => {
    const gamespace = document.getElementById('gamespace');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let gameInterval;

    
    function startGame() {
        clearGamespace(); 
        score = 0; 
        updateScore(0); 

        gameInterval = setInterval(() => {
            createFallingApple();
        }, 2000); 
    }

    
    function clearGamespace() {
        clearInterval(gameInterval); 
        gamespace.innerHTML = ''; 
    }

    
    function createFallingApple() {
        const apple = document.createElement('img');
        apple.src = 'img/apple.png'; 
        apple.classList.add('apple');
        apple.style.left = Math.random() * (gamespace.offsetWidth - 100) + 'px'; 
        apple.style.top = '-100px'; 

        
        apple.addEventListener('click', () => {
            score++;
            updateScore(score);
            apple.remove(); 
        });

        gamespace.appendChild(apple);

        
        let fallInterval = setInterval(() => {
            if(parseInt(apple.style.top) < gamespace.offsetHeight) {
                apple.style.top = parseInt(apple.style.top) + 5 + 'px'; 
            } else {
                clearInterval(fallInterval); 
                apple.remove(); 
            }
        }, 50); 
    }

    
    function updateScore(newScore) {
        scoreDisplay.textContent = `${newScore} pts`;
    }

    const startButton = document.getElementById('start_button');
    startButton.addEventListener('click', startGame);
});
