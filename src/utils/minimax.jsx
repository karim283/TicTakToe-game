export function getBestMove(board) {
  let bestScore = -Infinity;
  let move = null;

  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = "O";
      let score = minimax(board, false);
      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(board, isMaximizing) {
  const winner = calculateWinner(board);
  if (winner === "O") return 1;
  if (winner === "X") return -1;
  if (winner === "Draw") return 0;

  const scores = [];
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = isMaximizing ? "O" : "X";
      scores.push(minimax(board, !isMaximizing));
      board[i] = null;
    }
  }

  if (isMaximizing) {
    return Math.max(...scores);
  } else {
    return Math.min(...scores);
  }
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.every((cell) => cell) ? "Draw" : null;
}
