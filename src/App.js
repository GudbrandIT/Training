// import { VideoList } from "./components/VideoList";
import { MyApp } from "./components/Components";
import { ProductList } from "./components/ProductList";
import "./styles.css";
import { useState } from "react";

function App() {
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

export function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); // Создастся Массив с 9 элементами, каждому из которых будет присвоено Значение "null".

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
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

export default App;

// полезная статья по Состояниям: https://reactdev.ru/learn/state-a-components-memory/
