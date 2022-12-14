import React, {FC} from "react";
import {MacScrollbar as TMacScrollbar} from "mac-scrollbar";

interface IProps {
    className?:string
    children?:React.ReactNode
}
const MacScrollbar:FC<IProps> = (props) => {
    return (
        <TMacScrollbar className={'mac-scroll-bar'}>
            {props.children}
        </TMacScrollbar>
    )
}
export default MacScrollbar