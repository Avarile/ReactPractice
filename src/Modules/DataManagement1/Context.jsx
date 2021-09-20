import React from 'react';

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();


// iniState of the Appilication
export const initState = {
  name: "Avarile"
};

// let's create State and Dispatch Context, we are placing it in Constants file so that we can import from multiple components