# Tic Tac Toe

A classic Tic Tac Toe game implementation with an intelligent AI opponent. Play against the computer using the minimax algorithm that ensures optimal moves.

## Overview

This project is a browser-based Tic Tac Toe game where you compete against an AI player. The AI uses the minimax algorithm to evaluate all possible game states and make unbeatable moves. The best you can do is a tie game !

## Technologies Used

- **HTML5**: Semantic markup and game interface structure
- **CSS3**: Styling and responsive layout
- **JavaScript (ES6+)**: Game logic, AI algorithm, and DOM manipulation

## Project Structure

```
TicTacToe_JS/
├── README.md             # Project documentation
├── tictactoe.html        # Main game interface
├── script.js             # Game logic and AI implementation
└── style.css             # Styling and layout
```

## How to Play

1. **Open the Game**: Open `tictactoe.html` in your web browser
2. **Make Your Move**: Click on any empty cell to place your 'O'
3. **AI Response**: The computer automatically plays its 'X' move
4. **Win Conditions**:
   - **You Win**: Get three O's in a row (highlighted in green)
   - **You Lose**: AI gets three X's in a row (highlighted in red)
   - **Tie**: All cells filled with no winner (cells highlighted in gray)
5. **Play Again**: Click the "Replay" button to start a new game

## Game Rules

- Players alternate turns (you play as O, AI plays as X)
- The first player to get three marks in a row wins
- Rows can be horizontal, vertical, or diagonal
- If all cells are filled with no winner, the game is a tie
- The AI always plays optimally using minimax algorithm

## AI Algorithm

The AI opponent uses the **minimax algorithm**, a decision-making algorithm that:
- Explores all possible future game states
- Evaluates positions based on win/loss/tie outcomes
- Selects the move that minimizes your chances of winning

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies or installations required

### Installation

1. Clone or download the project files
2. Open `tictactoe.html` directly in your browser
3. Start playing immediately

## License

This project is provided as-is for educational purposes.

## Credits

This project was developed following resources from:
- **FreeCodeCamp YouTube Tutorial**: [JavaScript Tic Tac Toe Project Tutorial - Unbeatable AI w/ Minimax Algorithm][Beau_Tutorial] by Beau Carnes.
- **FreeCodeCamp Article**: [How to make your Tic Tac Toe game unbeatable by using the minimax algorithm][Ahmad_Article] by Ahmad Abdolsaheb.

[Beau_Tutorial]: https://www.youtube.com/watch?v=P2TcQ3h0ipQ
[Ahmad_Article]: https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37
