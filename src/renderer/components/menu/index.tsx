import React, {FC} from "react";
import {StyledMenu} from "@/components/menu/style";
import {MenuItemType} from "@/types/menu";
import MenuItem from "./MenuItem";
import {useControllableValue} from "ahooks";

interface IProps {
    menu:MenuItemType[]
    selectedKey?:string
    onChange?:(clickedKey:string)=>void
}
const Menu:FC<IProps> = (props) => {
    const {menu}=props
    const [key, setKeys] = useControllableValue<string>(props,{
        valuePropName:"selectedKey"
    });

    const selectMenu=(key:string)=>{
        setKeys(key)
    }
    return(
        <StyledMenu>
            {menu.map(me=>{
                return(
                    <MenuItem
                        key={me.key}
                        onClick={()=>selectMenu(me.key)}
                        checked={key===me.key}
                        icon={me.icon}
                        label={me.label}/>
                )
            })}
        </StyledMenu>
    )
}

export default Menu