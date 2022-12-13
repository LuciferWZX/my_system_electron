import React, {FC, useState} from "react";
import {IconFont, IconType} from "@/components";
import {Button, Checkbox, Modal, Radio, RadioChangeEvent, Row, Space} from "antd";
import {useModel} from "foca";
import modalStore from "@/stores/modal.store";
import {changeCloseWinTypeModal} from "@/utils/action";
import {useBoolean, useIsomorphicLayoutEffect} from "ahooks";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {StyledConfirmCloseTypeContent} from "@/modals/confirmCloseType/style";
import appStore from "@/stores/app.store";


const ConfirmCloseTypeModal:FC = () => {
    const visible = useModel(modalStore,state => state.closeWinTypeVisible)
    const closeType = useModel(appStore,state => state.closeType)
    const [type,setType]=useState<"min"|"quit">("min")
    const [noTip,{set:setNoTip}]=useBoolean(false)
    useIsomorphicLayoutEffect(()=>{
        setType(closeType)
    },[closeType])

    const onCancel=()=>changeCloseWinTypeModal(false)
    const onChange=(e:RadioChangeEvent)=>{
        setType(e.target.value)
    }
    const onChangeCheckbox=(e: CheckboxChangeEvent)=>{
      setNoTip(e.target.checked)
    }
    const handleOk=async ()=>{
        modalStore.updateState({closeWinTypeVisible:false})
        appStore.updateState({closeType:type})
        if(window.app_store && window.electron){
            const {setStore}=window.app_store
            await setStore("showConfirmTypeModal",!noTip)
            const {sendMsgToMain}=window.electron
            if (type === "min"){
                sendMsgToMain("min")
            }
            if(type === "quit"){
                sendMsgToMain("destroy")
            }
        }
    }
    //关闭完成后重置数据
    const afterClose=()=>{
        setType(closeType)
        setNoTip(false)
    }
    return(
        <Modal
            title="关闭提示"
            centered={true}
            open={visible}
            width={500}
            maskClosable={false}
            afterClose={afterClose}
            closeIcon={<IconFont type={IconType.close}/>}
            transitionName={"ant-fade"}
            footer={[
                <Checkbox checked={noTip} key={"showTip"} onChange={onChangeCheckbox} style={{float:'left'}}>不再提示</Checkbox>,
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
