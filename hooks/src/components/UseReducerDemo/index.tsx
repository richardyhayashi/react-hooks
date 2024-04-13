import { useReducer } from 'react';
import './index.css';

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: "increment" | "decrement";
}

const reducer = (state: State, action: Action) => {
    const { type } = action;

    switch(type) {
        case 'increment': {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Maximum reached' : null
            };
        }
        case 'decrement': {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Minium reached' : null,
            }
        }
        default:
            return state;
    }
}

const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    });
    
    return (
        <div className='tutorial'>
            <h1 className='text-3xl'>useReducer</h1>
            <div className='flex mb-2'>Count: {state.count} {state.error && <div className='ml-2 text-red-500'>{state.error}</div>}</div>
            <button className='mb-2' onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button className='' onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
        </div>
    );
}
 
export default UseReducerDemo;