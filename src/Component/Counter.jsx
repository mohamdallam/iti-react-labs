
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




  return (
    <div className="counter">
      Counter App
     
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
