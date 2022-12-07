import React, {FC} from "react";
import {useControllableValue} from "ahooks";
import styled, {css} from "styled-components";
import {Space, theme} from "antd";
const { useToken } = theme;
export interface BoxItem{
    value:string
    label:React.ReactNode
    icon?:React.ReactNode
}
interface IProps{
    option?:BoxItem[]
    value?:string,
    onChange?:(val:string,item:BoxItem)=>void
}
const SelectBox:FC<IProps> = (props) => {
    const {option}=props

    const [value, setValue] = useControllableValue<string>(props);
    const clickBox=(item:BoxItem)=>{
        if(item.value !== value){
            setValue(item.value,item)
        }

    }
    return(
        <StyledSelectBox>
            {option?.map(op=>{
                return(
                    <Box
                        key={op.value}
                        checked={op.value === value}
                        onClick={()=>clickBox(op)}
                    >
                        <OptionContent
                            appTheme={op.value}>
                            <span className={'op-icon'}>{op.icon}</span>
                            <span className={'op-label'}>{op.label}</span>
                        </OptionContent>
                    </Box>
                )
            })}
        </StyledSelectBox>
    )
}

interface IBox {
    children?:React.ReactNode
    checked:boolean
    onClick?:React.MouseEventHandler<HTMLDivElement>
}
const Box:FC<IBox> = (props) => {
    const { token } = useToken();
    return(
        <StyledBox
            checked={props.checked}
            onClick={props.onClick}
            borderColor={token.colorPrimary}
        >
            {props.children}
        </StyledBox>
    )
}
const StyledBox = styled.div<{checked:boolean,borderColor:string}>`
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  ${({checked,borderColor})=>{
      if (checked){
          return css`
            border-color:${borderColor}
          `
      }
  }}
  
`
const StyledSelectBox = styled(Space)`

`
const OptionContent = styled.div<{appTheme:"dark"|"light"|string}>`
  width: 64px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  ${({appTheme})=>{
      if(appTheme === "dark"){
          return css`
            background: #161c26;
            color: white;
          `
      }
    if(appTheme === "light"){
      return css`
            background: white;
            color: black;
          `
    }
  }};
  .op-icon{
    font-size: 20px;
  }
  .op-label{
    font-size: 10px;
  }
`
export default SelectBox