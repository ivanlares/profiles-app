import React, { createContext, useState, useEffect } from "react";
import { initialUserCredentials, initialUserProfiles, initialFollowingData } from "../Data/InitialData"

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

    const updateProfileData = (data) => {
        let currentUsername = getCurrentUsername();

        console.log(`-- in UpdateProfileData ${currentUsername}`);

        if (data == null || currentUsername == null) {
            return null
        }

        let profilesSessionDataString = sessionStorage.getItem('profileData');

        console.log(`-- profilesSessionDataString ${profilesSessionDataString}`);

        if (profilesSessionDataString == null) {
            // no session data
            let updatedData = initialUserProfiles;
            updatedData[currentUsername] = data;
            sessionStorage.setItem('profileData', JSON.stringify(updatedData));

            console.log(`profilesSessionDataString == null. updatedData ${JSON.stringify(updatedData)}`);
        } else {
            // update existing session data
            try {
                let dataToUpdate = JSON.parse(profilesSessionDataString);
                dataToUpdate[currentUsername] = data
                console.log(`attempting to save sessionstorage item ${dataToUpdate}`);
                sessionStorage.setItem('profileData', JSON.stringify(dataToUpdate));
            } catch (error) {
                console.log(error);
            }
        }
    };

    const isFollowing = (username) => {
        try {
            let currentUsername = getCurrentUsername();
            let followingDataString = sessionStorage.getItem('followingData');

            if (followingDataString == null) {
                return initialFollowingData[currentUsername]?.username ?? false;
            }

            let followingData = JSON.parse(followingDataString);
            let isFollowing = followingData[currentUsername][username];
            return isFollowing ?? false;
        } catch (error) {
            console.log(`got error in isFollowing: ${error}`);
            return false;
        }
    }

    const followingProfileData = () => {
        try {
            let currentUsername = getCurrentUsername();
            let followingData = getAllFollowingData();
            let following = followingData[currentUsername];
            let keys = Object.keys(following);
            let profileData = [];
            keys.forEach((username) => {
                let newItem = getProfileData(username);
                newItem["username"] = username;
                profileData.push(newItem);
            });
            return profileData
        } catch (error) {
            return [];
        }
    }

    const follow = (username) => {
        try {
            let currentUser = getCurrentUsername();
            let followingData = getAllFollowingData();
            if (followingData[currentUser] != null) {
                followingData[currentUser][username] = true;
            } else {
                followingData[currentUser] = {[username]:true};
            }

            sessionStorage.setItem("followingData", JSON.stringify(followingData))
        } catch (error) {
            console.log(error);
        }
    }

    function getAllFollowingData() {
        let followingDataString = sessionStorage.getItem('followingData');

        if (followingDataString == null) {
            return initialFollowingData
        } else {
            return JSON.parse(followingDataString);
        }
    }

    return (
        <ProfilesContext.Provider
            value={{
                getCurrentUsername,
                login,
                logout,
                getProfileData,
                updateProfileData,
                isFollowing,
                followingProfileData,
                follow
            }}
        >
            {children}
        </ProfilesContext.Provider>
    );
};

