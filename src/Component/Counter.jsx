import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Counter.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/Slices/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { num } = useSelector((state) => state.counterNumber);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  ///////////////////////// TODO:: OLD
  // const [counter, setCounter] = useState(10);

  // const handleClick1 = () => {
  //   setCounter(counter + 1);
  // };

  // const handleClick2 = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <div className="counter">
      Counter App
      {/* <div>{counter}</div>
      <div className="buttons">
        <Button onClick={handleClick1} variant="primary">
          Increment
        </Button>{" "}
        <Button onClick={handleClick2} variant="danger">
          Decrement
        </Button>{" "}
      </div> */}
      {/* TODO --------------------------------- */}
      <div>{num}</div>
      <div className="buttons">
        <Button onClick={handleIncrement} variant="primary">
          Increment
        </Button>{" "}
        <Button onClick={handleDecrement} variant="danger">
          Decrement
        </Button>{" "}
      </div>
    </div>
  );
};

export default Counter;
