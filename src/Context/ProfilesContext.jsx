import React, {createContext, useState, useEffect}  from "react";
import { initialUserCredentials, initialUserProfiles} from "../Data/InitialData"

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

    const getProfileData = (username) => {
        let profilesDataString = sessionStorage.getItem('profileData');

        if (profilesDataString == null) {
            return initialUserProfiles[username] ?? null;
        }

        try {
            let profilesData = JSON.parse(profilesDataString);
            return profilesData[username] ?? initialUserProfiles[username] ?? null;
        } catch {
            return null;
        }
    };

    return (
        <ProfilesContext.Provider
            value={{
                getCurrentUsername,
                login,
                logout,
                getProfileData
            }}
        >
            {children}
        </ProfilesContext.Provider>
    );
};

