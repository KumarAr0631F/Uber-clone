import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isAvailable, setIsAvailable] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentRide, setCurrentRide] = useState(null);

    const updateCaptainStatus = (status) => {
        setIsAvailable(status);
    };

    const updateLocation = (location) => {
        setCurrentLocation(location);
    };

    const updateCurrentRide = (ride) => {
        setCurrentRide(ride);
    };

    const value = {
        captain,
        setCaptain,
        isAvailable,
        updateCaptainStatus,
        currentLocation,
        updateLocation,
        currentRide,
        updateCurrentRide
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

