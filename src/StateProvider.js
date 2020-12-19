import React, { createContext, useContext, useReducer } from 'react';

// Preparing the data layer
export const StateContext = createContext();

//HOC(Higher Order Component)
export const StateProvider = ({ reducer, initialState, children }) =>
(

    <StateContext.Provider value={useReducer(reducer,
        initialState)}>
        {children}
    </StateContext.Provider>
);

//Hook which help us to pull info fromthe data layer
export const useStateValue = () => useContext(StateContext);