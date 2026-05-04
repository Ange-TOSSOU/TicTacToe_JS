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
    turn(square.target.id, humanPlayer);
}

function turn(squareId, player) {
    originalBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;

    let gameWon = checkWin(originalBoard, player);
    if (gameWon) gameOver(gameWon);
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
            gameWon.player == humanPlayer ? "blue" : "red";
    }

    // Make the cells not clickable anymore.
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
}
