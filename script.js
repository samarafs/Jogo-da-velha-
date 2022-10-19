const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const WinningMessageTextElement = document.querySelector('[data-winning-message-text');
const winningmessage = document.querySelector('[dat')


let isCircleturn = false;

const winningCombinations = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const startGame = () => {
    for(const cell of cellElements){
        cell.addEventListener("click", handleClick, { once: true});
    }
};
const endGame = (isDraw) => {
    if (isDraw) { 
        WinningMessageTextElement.innerText = 'empate'
        
    } else {
        WinningMessageTextElement.innerText = isCircleturn
        ?"circulo venceu"
        : "x venceu";
    }
}
const checkForwin = (currentPlayer) => {
    return winningCombinations.some((combination) => {
     return combination.every((index) => { 
         return cellElements[index].classList.contains(currentPlayer);
        });
    })
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns = () => {
    isCircleturn = !isCircleturn

    board.classList.remove("circle");
    board.classList.remove("x");
};

if (isCircleturn) {
    board.classList.add("circle");
} else {
    board.classList.add("x");
}

const handleClick = (e) => {
    //colocar x ou circle
    const cell = e .target;
    const classToAdd = isCircleturn ? 'circle' : 'x';
    
    placeMark(cell, classToAdd);

    //verificar por vitoria
    const isWin = checkForwin(classToAdd);
    if(isWin) {
        endGame(false);
    }
    // verificar empate

    //proximo simbolo 
    swapTurns();
};
for(const cell of cellElements){
    cell.addEventListener("click", handleClick,{ once: true});
};

startGame();