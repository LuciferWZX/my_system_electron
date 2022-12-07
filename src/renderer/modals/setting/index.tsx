import {FC} from "react";
import {Col, Modal, Row} from "antd";
import {useModel} from "foca";
import modalStore from "@/stores/modal.store";
import {useMemoizedFn} from "ahooks";
import {IconFont, IconType, Menu} from "@/components";
import {StyledSettingContent} from "@/modals/setting/style";
import {MenuItemType} from "@/types/menu";
import ThemeForm from "@/modals/setting/theme";
import BoxContent from "@/modals/setting/BoxContent";

const Setting:FC = () => {
    const {visible,curKey} = useModel(modalStore,state =>({
        visible:state.settingVisible,
        curKey:state.settingKey,
    }))
    ///菜单项
    const items:MenuItemType[] = [
        {
            label: '外观',
            key: 'theme',
            icon:<IconFont type={IconType.theme}/>
        },
        {
            label: '通用',
            key: 'general',
            icon:<IconFont type={IconType.general}/>
        },

    ];
    ///取消弹窗
    const onCancel = useMemoizedFn(()=>{
        modalStore.updateState({settingVisible:false})
    })
    ///点击菜单进行切换
    const changeKey = useMemoizedFn((clickedKey:string)=>{
        if (clickedKey!==curKey){
            modalStore.updateState({settingKey:clickedKey})
        }
    })
    ///根据不同的菜单渲染不同的组件
    const renderForm=()=>{
        switch (curKey) {
            case 'theme':{
                return(
                    <BoxContent
                        title={"外观"}>
                        <ThemeForm/>
                    </BoxContent>

                )
            }
            case "general":{
                return(
                    <BoxContent
                        title={"通用"}>
                        aaa
                    </BoxContent>

                )
            }
            default:{
                return null
            }
        }
    }
    return(
        <Modal
            title="设置"
            open={visible}
            width={700}
            maskClosable={false}
            closeIcon={<IconFont type={IconType.close}/>}
            transitionName={"ant-fade"}
            footer={null}
            onCancel={onCancel}>
            <StyledSettingContent>
                <Row gutter={20}>
                    <Col span={6}>
                        <Menu
                            menu={items}
                            onChange={changeKey}
                            selectedKey={curKey}
                        />
                    </Col>
                    <Col span={18}>
                        {renderForm()}
                    </Col>
                </Row>

            </StyledSettingContent>
        </Modal>
    )
}
export default Setting