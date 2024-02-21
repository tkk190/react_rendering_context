import styled from 'styled-components';


interface Props{
    isOkay: boolean
}
export const ChildAWrapper = styled.div<Props>`
    ${p=>p.isOkay ? `
        background-color: green;
    ` : `
        background-color: red;
    `}
`

export const ChildBWrapper = styled.div<Props>`
    ${p=>p.isOkay ? `
        background-color: blue;
    ` : `
        background-color: orange;
    `}
`
