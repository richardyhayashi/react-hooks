import { useState } from "react";
import UseEffectComponent from "./UseEffectComponent";

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    
    return (
        <div className="tutorial">
            <h1 className="text-3xl">useEffect Demo</h1>
            { flag && (<UseEffectComponent count={count} />) }
            <button className="mb-3" onClick={() => {setFlag(!flag)}}>Click Me</button>
            <div>{count}</div>
            <button className="mb-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
 
export default UseEffectDemo;