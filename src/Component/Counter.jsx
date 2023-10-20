import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      Counter App
      <div>{counter}</div>
      <div className="buttons">
        <Button onClick={handleClick1} variant="primary">
          Increment
        </Button>{" "}
        <Button onClick={handleClick2} variant="danger">
          Decrement
        </Button>{" "}
      </div>
    </div>
  );
};

export default Counter;
