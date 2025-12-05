import React, {createContext, useState, useEffect}  from "react";
import { initialUserCredentials } from "../Data/InitialData"

export const ProfilesContext = createContext();

export const ProfilesContextProvider = ({ children }) => {
    const login = (username, password) => {        
        let userCredentials = initialUserCredentials[username];
        if (password == userCredentials.password) {
            sessionStorage.setItem('currentUsername', username)
            return username
        }
        
        sessionStorage.setItem('currentUsername', null)
        return null;
    };

    const getCurrentUsername = () => {
        return sessionStorage.getItem('currentUsername')
    };

    return (
        <ProfilesContext.Provider
            value={{
                getCurrentUsername,
                login
            }}
        >
            {children}
        </ProfilesContext.Provider>
    );
};

