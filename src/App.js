// import { VideoList } from "./components/VideoList";
import { MyApp } from "./components/Components";
import { ProductList } from "./components/ProductList";
import "./styles.css";
import { useState } from "react";

export function App() {
  return (
    <>
      {/* <h1>Hello, World</h1> */}
      {/* <VideoList /> */}
      <MyApp />
      <ProductList />
      <Board />
    </> // - React Fragment
  );
} // Это JSX-разметка, т.е. объединение HTML и JavaScript в одно целое

export function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null)); // Создастся Массив с 9 элементами, каждому из которых будет присвоено Значение "null".

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
} //In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]); // state that contains the entire game history
  const currentSquares = history[history.lenght - 1];

  function handlePlay(nextSquares) {
    //TODO
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
} // This (removing the export default keywords) tells your index.js file to use the Game component as the top-level component instead of your Board component.

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null); // value сохраняет Значиние, setValue - Функция, меняющая Значение. null - начальное Значение для переменной Состояния.
  // function handleClick() {
  //   setValue("X");
  // }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// export default App;

// полезная статья по Состояниям: https://reactdev.ru/learn/state-a-components-memory/
