import React, {FC} from "react";
import {Input, Modal} from "antd";
import {useModel} from "foca";
import modalStore from "@/stores/modal.store";
import {StyledAddFriendsContent} from "@/modals/addFriends/style";
import {useSearchUsers} from "@/modals/addFriends/useSearchUsers";
import SearchUserList from "@/modals/addFriends/SearchUserList";
import {IconFont, IconType} from "@/components";

const AddFriendsModal:FC = () => {
    const {visible}=useModel(modalStore,state => ({
        visible:state.addFriendsVisible
    }))
    const {runAsync,loading}= useSearchUsers()
    const onCancel=()=>{
        modalStore.updateState({addFriendsVisible:false})
    }

    const onSearch=async (value:string)=>{
        await runAsync({query:value.trim()})
    }
    return(
        <Modal
            open={visible}
            footer={null}
            onCancel={onCancel}
            closeIcon={<IconFont type={IconType.close}/>}
            title={'添加好友'}>
            <StyledAddFriendsContent>
                <Input.Search
                    placeholder={"用户名/邮箱/电话号码/昵称"}
                    allowClear
                    style={{width:'70%',marginBottom:10}}
                    enterButton={"查询"}
                    onSearch={onSearch}
                    loading={loading}
                />
                <SearchUserList loading={loading}/>
            </StyledAddFriendsContent>
        </Modal>
    )
}
export default AddFriendsModal