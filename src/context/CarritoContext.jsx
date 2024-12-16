import { createContext, useReducer } from "react";

import CarritoReducer from "./CarritoReducer";

const CarritoContext = createContext()

const CarritotProvider = ({children}) =>{

    const initialState = {
        cart:[]
    }

    const [state, dispatch] = useReducer(CarritoReducer,initialState)
    return(
        <CarritoContext.Provider value ={{state, dispatch}}>
            {children}
        </CarritoContext.Provider>
    )
}

export { CarritoContext, CarritotProvider}