import React,{createContext,useContext,useReducer} from "react";
import {initialstate} from '../context/initialstate'


export const StateContext = createContext(initialstate)

export const StateProvider = ({reducer,initialstate,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = ()=>useContext(StateContext)