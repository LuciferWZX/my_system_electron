import React, {FC, useEffect, useState} from "react";
import {StyledOptionInnerBox, StyledSearchBox} from "@/pages/contact/sider/searchHeader/style";
import {Avatar, Button, Select, theme, Typography} from "antd";
import {IconFont, IconType} from "@/components";
import Highlighter from "react-highlight-words";
import {useModel} from "foca";
import PinyinMatch from 'pinyin-match';
import userStore from "@/stores/user.store";
import {Friend} from "@/types/user";
import modalStore from "@/stores/modal.store";


const {Option}=Select
const { Text } = Typography;
const SearchHeader:FC = () => {
    const [query,setQuery]=useState("")
    const {friends} = useModel(userStore,state => ({
        friends:state.friends
    }))
    const {token:{colorPrimary,colorBorder}} = theme.useToken();

    const onChange = (value: string) => {
        if(value){
            userStore.updateState({contactId:value})
        }
    };

    const onSearch = (value: string) => {
        setQuery(value)
    };
    const filterDesc=(friend:Friend)=>{
        const {senderId,friendInfo,senderRemark,receiverRemark}=friend
        let remark = senderId === friendInfo.id?receiverRemark:senderRemark;
        remark = remark??friendInfo.nickname
        const email = friendInfo.email
        const nickname = friendInfo.nickname
        const username = friendInfo.username
        const phone = friendInfo.phone
        //电话
        const phoneOk = query === phone
        if(phoneOk){
            return {
                remark,
                type:'phone',
                msg:(
                    <div>
                        电话：<Highlighter
                        highlightClassName="high-light"
                        searchWords={[phone]}
                        autoEscape={true}
                        textToHighlight={phone}
                    />
                    </div>
                )
            }
        }
        //邮箱
        const emailOk = query === email
        if(emailOk){
            return {
                remark,
                type:'email',
                msg:(
                    <div>
                        邮箱：<Highlighter
                        highlightClassName="high-light"
                        searchWords={[email]}
                        autoEscape={true}
                        textToHighlight={email}
                    />
                    </div>
                )
            }
        }
        //用户名
        const usernameOk = query === username
        if(usernameOk){
            return {
                remark,
                type:'username',
                msg:(
                    <div>
                        用户名：<Highlighter
                        highlightClassName="high-light"
                        searchWords={[username]}
                        autoEscape={true}
                        textToHighlight={username}
                    />
                    </div>
                )
            }
        }
        //备注
        const remarkOk = PinyinMatch.match(remark||"",query)
        if (typeof remarkOk !== "boolean"){
            return {
                remark,
                type:'remark',
                msg:(
                    <div>
                        备注：<Highlighter
                        highlightClassName="high-light"
                        searchWords={[(remark||"")?.substring(remarkOk[0],remarkOk[1]+1)]}
                        autoEscape={true}
                        textToHighlight={remark||""}
                    />
                    </div>
                )
            }
            // return {
            //     remark,
            //     type:'remark',
            //     msg:`备注：${remark}`
            // }
        }
        //昵称
        const nicknameOk = PinyinMatch.match(nickname,query)
        if (typeof nicknameOk !== "boolean"){
            return {
                remark,
                type:'nickname',
                msg:(
                    <div>
                        昵称：<Highlighter
                        highlightClassName="high-light"
                        searchWords={[nickname?.substring(nicknameOk[0],nicknameOk[1]+1)]}
                        autoEscape={true}
                        textToHighlight={nickname}
                    />
                    </div>
                )
            }
            {/*return {*/}
            {/*    remark,*/}
            {/*    type:'nickname',*/}
            {/*    msg:`昵称：${nickname}`*/}
            {/*}*/}
        }
        return {
            remark: remark,
            type:"no",
            msg:remark
        }

    }

    const openAddFriendsModal=()=>{
        modalStore.updateState({addFriendsVisible:true})
    }
  return(
    <StyledSearchBox
        style={{borderBottom:`1px solid ${colorBorder}`}}>
        <Button onClick={openAddFriendsModal} className={'friend-add-btn'}  icon={<IconFont type={IconType.addAccount} />} />
        <Select
            showSearch
            className={'friend-select'}
            placeholder={'请输入手机号/邮箱'}
            onChange={onChange}
            onSearch={onSearch}
            dropdownMatchSelectWidth={false}
            style={{width:180}}
            filterOption={() => true}
            suffixIcon={<IconFont type={IconType.down}/>}
            optionLabelProp={"label"}
            allowClear={true}
        >
            {(query?friends:[]).filter(friend=>{
                const {type}=filterDesc(friend)
                return type!=='no'
            }).map(friend=>{
                const {remark,msg,type}=filterDesc(friend)
                console.log(222,type)
                return(
                    <Option key={friend.id} value={friend.id} label={remark}>
                        <StyledOptionInnerBox highlightColor={colorPrimary}>
                            <Avatar size={42} shape={"square"} src={friend.friendInfo.avatar} />
                            <div className={'desc'}>
                                <Text>{type!=="remark"?remark:msg}</Text>
                                <br/>
                                {type!=="remark" && <Text type={"secondary"}>
                                    {msg}
                                </Text>}
                            </div>

                        </StyledOptionInnerBox>
                    </Option>
                )
            })}
        </Select>
    </StyledSearchBox>
  )
}
export default SearchHeader
