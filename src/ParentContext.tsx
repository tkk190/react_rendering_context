import React, {Context, createContext, ReactNode} from "react";
import Parent from "./Parent";

interface Props{
    children: ReactNode
}
export var ThemeContext: Context<{ theme: string }>
export default function ParentContext(props:Props){
    ThemeContext = createContext({theme: 'light'});
    return(
        <ThemeContext.Provider value={{theme: 'dark'}}>
            <Parent>{props.children}</Parent>
        </ThemeContext.Provider>
    )
}