import styled, {css} from "styled-components";
const selectedStyle = (color:string,selectedBgColor:string,isChecked?:boolean) => {
    if(isChecked){
        return css`
            background: ${selectedBgColor};
            border-radius: 4px;
            color: ${color};
            font-size: 14px;
      `
    }
    return css`
        border-radius: 4px;
        color: ${color};
      `
}
export const StyledMenu = styled.ul`
  >li+li{
    margin-top: 5px;
  }
  
`
export const StyledMenuItem = styled.li<{
    checked:boolean,
    selectedColor:string
    selectedBgColor:string
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 18px;
  height: 44px;
  cursor:pointer;
  font-weight: 600;
  :hover{
    ${({selectedColor,selectedBgColor})=>selectedStyle(selectedColor,selectedBgColor)}
  }
  ${({checked,selectedColor,selectedBgColor})=>{
      if(checked){
          return selectedStyle(selectedColor,selectedBgColor,true)
      }
  }}
  
`
