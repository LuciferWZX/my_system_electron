import React, {FC} from "react";
import {Form} from "antd";
import {StyledThemeForm} from "@/modals/setting/theme/style";
import SelectBox, {BoxItem} from "@/modals/setting/theme/SelectBox";
import {IconFont, IconType} from "@/components";
import appStore from "@/stores/app.store";

interface ThemeFormValues{
    background:"light"|"dark"
}
const ThemeForm:FC = () => {

    const backgroundOptions:BoxItem[]=[
        {value:"light",label:"白光",icon:<IconFont type={IconType.sun}/>},
        {value:"dark",label:"暗夜",icon:<IconFont type={IconType.moon}/>},
    ]
    const onValuesChange=(changedValues:ThemeFormValues, allValues:ThemeFormValues)=>{
        if (changedValues?.background){
            appStore.updateState({theme:changedValues.background})
        }
    }
    return(
        <StyledThemeForm>
           <Form
               onValuesChange={onValuesChange}
               initialValues={{
                   background:appStore.state.theme
               }}
               layout={"vertical"}
               autoComplete="off">
               <Form.Item
                   label="背景"
                   name="background"
               >
                   <SelectBox option={backgroundOptions} />
               </Form.Item>
           </Form>
        </StyledThemeForm>
    )
}
export default ThemeForm