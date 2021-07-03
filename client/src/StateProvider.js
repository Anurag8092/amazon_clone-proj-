//Creating data layer

import React , {useContext, createContext, useReducer} from "react"


//setup data layer
export const StateContext = createContext()

//wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);


//pull data from data layer and to use it in diff components
export const useStateValue = ()=> useContext(StateContext);
