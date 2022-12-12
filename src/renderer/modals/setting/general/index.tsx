import {StyledGeneralForm} from "@/modals/setting/general/style";
import React from "react";
import {Checkbox, Form, Radio, Select, Space, Typography} from "antd";
import {IconFont, IconType} from "@/components";
import {GlobalOutlined} from "@ant-design/icons";
import appStore from "@/stores/app.store";

const { Text ,Link} = Typography;

interface OptionType{
  value:string
  label:string
  selectedLabel:React.ReactNode
}
interface GeneralFormValues{
  language:"zh-CN"|"en-US",
  closeType:"min"|"quit"
}
const GeneralForm = () => {
  const languages:OptionType[]=[
    {
      value:"zh-CN",
      label:"简体中文",
      selectedLabel:<Space><GlobalOutlined/>简体中文</Space>
    },
    {
      value:"en-US",
      label:"English",
      selectedLabel:<Space><GlobalOutlined/>English</Space>
    }
  ]
  const onValuesChange=(changedValues:GeneralFormValues, allValues:GeneralFormValues)=>{
    if (changedValues?.language){
      appStore.updateState({language:changedValues.language})
    }
    if (changedValues?.closeType){
      appStore.updateState({closeType:changedValues.closeType})
    }
  }
  return(
    <StyledGeneralForm>
      <Form
          colon={false}
          initialValues={{
            language:appStore.state.language,
            closeType:appStore.state.closeType
          }}
          onValuesChange={onValuesChange}
          layout={"vertical"}
        autoComplete="off">
        <Form.Item
            label="软件语言"
            name="language"

            help={"\"软件语言\"仅对你的客户端界面生效。"}
        >
          <Select
              style={{ width: 120 }}
              allowClear={false}
              options={languages}
              optionLabelProp={"selectedLabel"}
              suffixIcon={<IconFont type={IconType.down}/>}
          />
        </Form.Item>
        <Text type="secondary"></Text>
        <Form.Item
            label="关闭主面板"
            name="closeType"
            // className={'lan-item'}
        >
          <Radio.Group >
            <Space direction={"vertical"}>
              <Radio value={"min"}>最小化到系统托盘</Radio>
              <Radio value={"quit"}>退出BigTool</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </StyledGeneralForm>
  )
}
export default GeneralForm
