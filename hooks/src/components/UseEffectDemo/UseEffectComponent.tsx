import { useEffect } from 'react';

interface InProps {
    count: number
}

const UseEffectComponent = ({ count }: InProps ) => {
    useEffect(() => {
        // Code to be run.
        console.log('I am mounted');
        //console.log(count);

        // Optional return function.
        return () => {
            console.log('I am unmounted!');
        }
    }, []); // Dependency array.

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <p>Current count: {count}</p>
        </div>
    );
}
 
export default UseEffectComponent;