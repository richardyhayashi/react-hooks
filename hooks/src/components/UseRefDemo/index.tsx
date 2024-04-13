import { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log("State: ", count);
        console.log("Ref: ", countRef.current);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="tutorial">
            <h1 className="text-3xl">useRef Demo</h1>
            <div>Count: {count}</div>
            <div>RefCount: {countRef.current}</div> {/*Updating because of useState*/}
            <button onClick={handleIncrement}>Increment</button>
            <input type='text' ref={inputRef} placeholder="Type something..." className="border"/>
        </div>
    );
}
 
export default UseRefDemo;