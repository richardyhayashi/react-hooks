import { useState } from "react";

const UseStateDemo = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="tutorial">
            <h1 className="text-3xl">useState Demo</h1>
            <p className="mb-2">Count: {count}</p>
            <button className="mb-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
 
export default UseStateDemo;