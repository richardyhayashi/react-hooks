/* eslint-disable react-refresh/only-export-components */
import { useImperativeHandle, forwardRef, Ref, useState } from 'react'

interface CounterProps { }

export type CounterRef = {
    reset: () => void;
};

const Counter = (_: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-2xl'>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default forwardRef(Counter);