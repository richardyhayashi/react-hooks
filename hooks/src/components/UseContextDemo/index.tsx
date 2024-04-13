import { useState } from 'react';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

export interface User {
    name: string;
    isSubscribed: boolean;
}

const UseContextDemo = () => {
    const [user] = useState({
        name: 'John',
        isSubscribed: true,
    });

    return (
        <div className="tutorial">
            <h1 className='text-3xl'>useContext Demo</h1>
            <DashboardContext.Provider value={user}>
                <Dashboard  />
            </DashboardContext.Provider>
        </div>
    );
}
 
export default UseContextDemo;