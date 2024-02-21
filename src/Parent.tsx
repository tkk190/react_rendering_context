import React, {ReactNode, useState} from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

interface Props{
    children: ReactNode
}

export default function Parent(props:Props){
    const [isOkay, setIsOkay] = useState(false)
    return(
        <>
            <ChildA
                isOkay={isOkay}
                setIsOkay={setIsOkay}
            />
            <ChildB
                isOkay={isOkay}
            >{props.children}</ChildB>
        </>
    )
}

