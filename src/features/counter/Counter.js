import { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispath = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0)
    const resetAll = () => {
        setIncrementAmount(0)
        dispath(reset())
    }
    const addValue = Number(incrementAmount) || 0;
    return (
        <>
        <section>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispath(increment())}>+</button>
                <button onClick={() => dispath(decrement())}>-</button>
            </div>
            <input type="text"
                   value={incrementAmount}
                   onChange={(e) => setIncrementAmount(e.target.value)}            
            />
            <div>
                <button onClick={() => dispath(incrementByAmount(addValue))}>Add Value</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
        </>
    );
}
export default Counter;