import {ChildBWrapper} from "./styles";
import React, {ReactNode, useContext} from "react";
import {ThemeContext} from "./ParentContext";

interface Props {
    isOkay: boolean
    children: ReactNode
}

export default function ChildB(props:Props){
    const ctx = useContext(ThemeContext)
    return (
        <ChildBWrapper isOkay={props.isOkay}>
            <p>{props.isOkay}</p>
            <p>{ctx.theme}</p>
            {props.children}
        </ChildBWrapper>
    )
}


