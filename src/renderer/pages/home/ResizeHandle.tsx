import React, {FC} from "react";
import {PanelResizeHandle} from "react-resizable-panels";
import styled from "styled-components";
interface IProps{
    className?:string
}
const ResizeHandle:FC<IProps> = (props) => {
    return(
        <PanelResizeHandle className={props.className}>
            <StyledResizeHandle className={"resize-handle-inner"}/>
        </PanelResizeHandle>
    )
}
export default ResizeHandle

const StyledResizeHandle = styled.div``