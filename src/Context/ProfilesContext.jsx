import React, {createContext, useState, useEffect}  from "react";
import { initialUserCredentials } from "../Data/InitialData"

export const ProfilesContext = createContext();

export const ProfilesContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = (username, password) => {        
        let userCredentials = initialUserCredentials[username];
        if (password == userCredentials.password) {
            setCurrentUser(username)
            return username
        }
        
        setCurrentUser(null)
        return null;
    };

    return (
        <ProfilesContext.Provider
            value={{
                currentUser,
                login
            }}
        >
            {children}
        </ProfilesContext.Provider>
    );
};

