import { useRef } from "react";
import Counter, { CounterRef } from "./Counter";

const UseImperativeHandleDemo = () => {
    const counterRef = useRef<CounterRef>(null);

    return (
        <div className="tutorial">
            <h1 className="text-3xl">useImperativeHandle Demo</h1>
            <div className="mb-2">
                <Counter ref={counterRef} />
            </div>
            <button onClick={() => counterRef.current?.reset()}>Reset</button>
        </div>
    );
}
 
export default UseImperativeHandleDemo;