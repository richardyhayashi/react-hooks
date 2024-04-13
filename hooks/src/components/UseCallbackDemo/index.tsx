import { useState } from "react";
import Search from './Search';

const allUsers: string[] = [
    'John',
    'Alex',
    'George',
    'Simon',
    'James',
];

const shuffle = (users: string[]): string[] => {
    const copy = []
    let  n = users.length,
         i;

    // While there remain elements to shuffle…
    while (n) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * n--);

        // And move it to the new array.
        copy.push(users.splice(i, 1)[0]);
    }

  return copy;
}

const UseCallbackDemo = () => {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = (text: string) => {
        const filteredUsers = allUsers.filter((user) =>
            user.includes(text),
        );

        setUsers(filteredUsers);
    }

    return (
        <div className="tutorial">
            <h1 className="text-3xl">UseCallback Demo</h1>
            <div className="align-center mb-2 flex">
                <button onClick={() => setUsers(shuffle(allUsers))}>
                    Shuffle
                </button>

                <Search onChange={handleSearch} />
            </div>

            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseCallbackDemo;