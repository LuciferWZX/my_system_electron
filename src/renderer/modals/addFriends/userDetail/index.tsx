import React, {FC} from "react";
import {Modal} from "antd";
import {useModel} from "foca";
import modalStore from "@/stores/modal.store";
import UserInfo from "@/modals/addFriends/userDetail/UserInfo";
import styled from "styled-components";
import {IconFont, IconType} from "@/components";

const UserDetailModal:FC = () => {
    const {visible,user}=useModel(modalStore,state => ({
        visible:state.userDetailVisible,
        user:state.detailUser,
    }))

    const onCancel=()=>{
        modalStore.updateState({userDetailVisible:false})
    }
    const afterClose=()=>{
        modalStore.updateState({detailUser:null})
    }
    return(
        <Modal
            open={visible}
            afterClose={afterClose}
            onCancel={onCancel}
            footer={null}
            destroyOnClose={true}
            transitionName={""}
            closeIcon={<IconFont type={IconType.close}/>}
            title={"添加好友"}>
            <StyledModalContent>
                {user && <UserInfo user={user} />}
            </StyledModalContent>
        </Modal>
    )
}

export default UserDetailModal

const StyledModalContent = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`