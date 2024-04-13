import { createContext, useContext } from "react";
import { User } from ".";

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext(): User {
    const user = useContext(DashboardContext);

    if (user === undefined) {
        throw new Error("useUserContext must be used with a DashboardContext");
    }

    return user;
}