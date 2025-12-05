import React, {createContext, useState, useEffect}  from "react";
import { initialUserCredentials } from "../Data/InitialData"

export const ProfilesContext = createContext();

export const ProfilesContextProvider = ({ children }) => {
    const login = (username, password) => {        
        let userCredentials = initialUserCredentials[username];
        if (password == userCredentials?.password) {
            sessionStorage.setItem('currentUsername', username)
            return username
        }

        sessionStorage.setItem('currentUsername', null)
        return null;
    };

    const logout = () => {
        sessionStorage.setItem('currentUsername', null);
    };

    const getCurrentUsername = () => {
        let username = sessionStorage.getItem('currentUsername');
        if (username == "null") {
            return null
        } else {
            return username
        }
    };

    return (
        <ProfilesContext.Provider
            value={{
                getCurrentUsername,
                login,
                logout
            }}
        >
            {children}
        </ProfilesContext.Provider>
    );
};

