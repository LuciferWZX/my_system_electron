import React, {FC} from "react";
import {Form, Slider, Typography} from "antd";
import {StyledThemeForm} from "@/modals/setting/theme/style";
import SelectBox, {BoxItem} from "@/modals/setting/theme/SelectBox";
import {IconFont, IconType} from "@/components";
import appStore from "@/stores/app.store";
import ColorsBox from "@/modals/setting/theme/ColorsBox";
const { Text ,Link} = Typography;
interface ThemeFormValues{
    background:"light"|"dark"
  primaryColor:string
  fontSize:number
}
const ThemeForm:FC = () => {
    const [form] = Form.useForm();
    const backgroundOptions:BoxItem[]=[
        {value:"light",label:"白光",icon:<IconFont type={IconType.sun}/>},
        {value:"dark",label:"暗夜",icon:<IconFont type={IconType.moon}/>},
    ]
    const colorOptions:string[]=[
      '#722ed1',
      '#eb2f96',
      '#2f54eb',
      '#1677ff',
      '#13c2c2',
      '#52c41a',
      '#fadb14',
      '#faad14',
      '#fa8c16',
      '#fa541c',
      '#f5222d'
    ]
    const onValuesChange=(changedValues:ThemeFormValues, allValues:ThemeFormValues)=>{
        if (changedValues?.background){
            appStore.updateState({theme:changedValues.background})
        }
      if (changedValues?.primaryColor){
        appStore.updateState({primaryColor:changedValues.primaryColor})
      }
      if (changedValues?.fontSize){
        appStore.updateState({fontSize:changedValues.fontSize})
      }
    }
    const resetTheme=async ()=>{
        await appStore.initTheme()

        form.resetFields()
    }
    return(
        <StyledThemeForm>
           <Form
               onValuesChange={onValuesChange}
               initialValues={{
                   background:appStore.state.theme,
                 primaryColor:appStore.state.primaryColor,
                 fontSize:appStore.state.fontSize,
               }}
               form={form}
               layout={"vertical"}
               autoComplete="off">
               <Form.Item
                   label="背景"
                   name="background"
               >
                   <SelectBox option={backgroundOptions} />
               </Form.Item>
             <Form.Item
               label="主色"
               name="primaryColor"
             >
               <ColorsBox option={colorOptions} />
             </Form.Item>
             <Form.Item
               label="字体大小"
               name="fontSize"
               className={'font-size-class'}
               trigger={"onAfterChange"}
             >
               <Slider
                 min={60}
                 max={140}
                 step={10}
                 //dots={true}
                 tooltip={{
                   open:false
                 }}
                 marks={{
                   60: '60%',
                   70: ' ',
                   80: '80%',
                   90: ' ',
                   100: '100%',
                   110: ' ',
                   120: '120%',
                   130: ' ',
                   140: '140%',
                 }}
               />
             </Form.Item>
               <Form.Item
                   label="重置"
               >
                   <Text type="secondary">
                       还原所有外观设置
                       <Link onClick={resetTheme}> 重置</Link>
                   </Text>

               </Form.Item>

           </Form>
        </StyledThemeForm>
    )
}
export default ThemeForm
