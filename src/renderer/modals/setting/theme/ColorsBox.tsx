import React, {FC} from "react";
import {useControllableValue} from "ahooks";
import styled, {css} from "styled-components";
import {Avatar, Space, theme} from "antd";
import {IconFont, IconType} from "@/components";
const { useToken } = theme;

interface IProps{
  option?:string[]
  value?:string,
  onChange?:(val:string)=>void
}
const ColorsBox:FC<IProps> = (props) => {
  const {option}=props

  const [value, setValue] = useControllableValue<string>(props);
  const clickBox=(_color:string)=>{

    if(_color !== value){
      setValue(_color)
    }

  }
  return(
    <StyledColorsBox wrap>
      {option?.map(_color=>{
        const checked=_color === value
        return(
          <Avatar
            key={_color}
            style={{
              backgroundColor:_color
            }}
            icon={checked && <IconFont type={IconType.check}/>}
            className={'color-ball'}
            onClick={()=>clickBox(_color)}
          >

          </Avatar>
        )
      })}
    </StyledColorsBox>
  )
}

const StyledColorsBox = styled(Space)`
  .color-ball{
    cursor: pointer;
  }
`
const StyledColorBall = styled.div`
`
export default ColorsBox
