import {ChildAWrapper} from "./styles";

interface Props {
    setIsOkay: Function
    isOkay: boolean
}

export default function ChildA(props:Props){
    return(
        <ChildAWrapper isOkay={props.isOkay}>
            <p>{props.isOkay}</p>
            <button onClick={()=>props.setIsOkay(!props.isOkay)}>klick</button>
        </ChildAWrapper>
    )
}