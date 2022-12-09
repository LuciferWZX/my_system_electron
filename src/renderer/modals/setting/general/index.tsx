import {StyledGeneralForm} from "@/modals/setting/general/style";
import React from "react";
import {Form, Select, Space, Typography} from "antd";
import {IconFont, IconType} from "@/components";
import {GlobalOutlined} from "@ant-design/icons";

const { Text ,Link} = Typography;

interface OptionType{
  value:string
  label:string
  selectedLabel:React.ReactNode
}
interface GeneralFormValues{
  language:"zh-CN"|"en-US"
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
  return(
    <StyledGeneralForm>
      <Form
          colon={false}
        initialValues={{
          language:"zh-CN"
        }}
        autoComplete="off">
        <Space direction={"vertical"}>
          <Form.Item
            label="软件语言"
            name="language"
            className={'lan-item'}
          >
            <Select
              style={{ width: 120 }}
              allowClear={false}
              options={languages}
              optionLabelProp={"selectedLabel"}
              suffixIcon={<IconFont type={IconType.down}/>}
            />
          </Form.Item>
          <Text type="secondary">"软件语言"仅对你的客户端界面生效。</Text>

        </Space>
      </Form>
    </StyledGeneralForm>
  )
}
export default GeneralForm
