import { useState } from "react";

function MyButton({ count, onClick }) {
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  //   alert("You clicked me!");
  // }
  // return <button onClick={handleClick}>You clicked me {count} times!</button>;

  return <button onClick={onClick}>You clicked me {count} times!</button>;
}

const user = {
  name: "Ivan",
  age: 33,
  avatar: {
    URL: "https://img.goodfon.ru/original/1024x768/e/33/park-ssha-gory-reka-peyzazh.jpg",
    container: { height: 450, width: 450 },
  },
};

function MyImage() {
  return (
    <img
      className="avatar"
      src={user.avatar.URL}
      alt="My avatar!"
      style={user.avatar.container}
    />
  );
}

export function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="header1div">
      <MyImage />
      <h1 className="header1">
        {user.name}, <br />
        Welcome to my app!
      </h1>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
