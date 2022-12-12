import React, {FC, useState} from "react";
import {IconFont, IconType} from "@/components";
import {Button, Checkbox, Modal, Radio, RadioChangeEvent, Row, Space} from "antd";
import {useModel} from "foca";
import modalStore from "@/stores/modal.store";
import {changeCloseWinTypeModal} from "@/utils/action";
import {useBoolean} from "ahooks";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {StyledConfirmCloseTypeContent} from "@/modals/confirmCloseType/style";


const ConfirmCloseTypeModal:FC = () => {
    const visible = useModel(modalStore,state => state.closeWinTypeVisible)

    const [type,setType]=useState<"min"|"quit">("min")
    const [showTip,{set:setShowTip}]=useBoolean(false)
    const onCancel=()=>changeCloseWinTypeModal(false)
    const onChange=(e:RadioChangeEvent)=>{
        setType(e.target.value)
    }
    const onChangeCheckbox=(e: CheckboxChangeEvent)=>{
        setShowTip(e.target.checked)
    }
    const handleOk=async ()=>{
        if(window.app_store && window.electron){
            const {setStore}=window.app_store
            await setStore("closeType",type)
            await setStore("showConfirmTypeModal",showTip)
            const {sendMsgToMain}=window.electron
            if (type === "min"){
                sendMsgToMain("min")
            }
            if(type === "quit"){
                sendMsgToMain("close")
            }
        }
    }
    return(
        <Modal
            title="关闭提示"
            centered={true}
            open={visible}
            width={500}
            maskClosable={false}
            closeIcon={<IconFont type={IconType.close}/>}
            transitionName={"ant-fade"}
            footer={[
                <Checkbox checked={showTip} key={"showTip"} onChange={onChangeCheckbox} style={{float:'left'}}>不再提示</Checkbox>,
                <Button
                    key={"submit"}
                    onClick={handleOk}
                    type={"primary"}
                    danger={true}>
                    确定
                </Button>
            ]}
            onCancel={onCancel}>
            <StyledConfirmCloseTypeContent>
                <Radio.Group onChange={onChange} value={type}>
                    <Space direction={"vertical"}>
                        <Radio value={"min"}>最小化到系统托盘</Radio>
                        <Radio value={"quit"}>退出BigTool</Radio>
                    </Space>
                </Radio.Group>

            </StyledConfirmCloseTypeContent>
        </Modal>
    )
}
export default ConfirmCloseTypeModal