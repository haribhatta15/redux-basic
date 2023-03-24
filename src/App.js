import "./App.css";
import { decrement, increment, reset } from "./redux/counterSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <p>0</p>
      <div className="btn1">
        <button className="inc" onClick={() => dispatch(increment())}>
          +
        </button>

        <button className="dec" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className="btn2">
        <button className="reset" onClick={() => dispatch(reset())}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
