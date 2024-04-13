import { useMemo, useState } from 'react';
import { initialItems } from './utils';


const UseMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(
        () => items.find((item) => item.isSelected),
        [items]
    );

    return (
        <div className="tutorial">
            <h1 className='text-3xl'>useMemo Demo</h1>
            <h2 className='text-2xl'>Count: {count}</h2>
            <h2 className='text-2xl'>Selected Item: {selectedItem?.id}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
 
export default UseMemoDemo;