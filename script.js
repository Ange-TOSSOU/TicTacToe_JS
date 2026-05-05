var originalBoard;
const humanPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    // Hide the end game notifier.
    document.querySelector(".endgame").style.display = "none";

    // Initialize the board in an empty board.
    originalBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick);
    }
}

function turnClick(square) {
    // AI plays only if possible.
    if (typeof originalBoard[square.target.id] == 'number') { // Is there at least an empty cell ?
        if (turn(square.target.id, humanPlayer) == null) { // Does the human win ?
            if(!checkTie()) turn(bestSpot(), aiPlayer);
        }
    }
}

function turn(squareId, player) {
    // Make the move.
    originalBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;

    // Stop the game if there is a winner.
    let gameWon = checkWin(originalBoard, player);
    if (gameWon) gameOver(gameWon);

    return gameWon;
}

function checkWin(board, player) {
    // Get all the player pieces position on the board.
    let plays = board.reduce(
        (a, e, i) => (e === player) ? a.concat(i) : a,
        []
    );

    // Determine if there is winning disposition.
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.includes(elem))) {
            gameWon = {index: index, player: player};
            break;
        }
    }

    return gameWon;
}

function gameOver(gameWon) {
    // Highlight the winning disposition.
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == humanPlayer ? "green" : "red";
    }

    // Make the cells not clickable anymore.
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick);
    }

    declareWinner(gameWon.player == humanPlayer ? "You win !" : "You lose.");
}

function emptySquares() {
    // Get empty cells on the board.
    return originalBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    // Get the first empty cell on the board.
    return emptySquares()[0];
}

function declareWinner(who) {
    // Display a message according to the result.
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "gray";

            // Make the cells not clickable anymore.
            cells[i].removeEventListener('click', turnClick);
        }

        declareWinner("Tie Game !");
        
        return true;
    }

    return false;
}
