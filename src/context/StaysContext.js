"use client"
import staysReducer from "@/Reducers/staysReducer";
import { stays } from "@/utilis/stays";

const { createContext, useReducer } = require("react");


const StaysContext = createContext();

function StaysContextProvider({children}) {
  const [state,dispatch] = useReducer(staysReducer,stays)
    return (
       <StaysContext.Provider value={{state:stays,dispatch}}>
         {children}
       </StaysContext.Provider>
    );
}

export {StaysContext,StaysContextProvider} ;