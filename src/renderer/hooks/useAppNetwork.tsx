import {useMount, useNetwork, useUpdateEffect} from "ahooks";
import {notification} from "antd";
import React from "react";
import {IconFont, IconType} from "@/components";
import noNetwork from "@/assets/jsons/no_signal.json";
import Lottie from "react-lottie";


export const useAppNetwork = () => {
    const {online} = useNetwork();
    const [api, contextHolder] = notification.useNotification();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: noNetwork,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    ///首次是未联网就通知一下
    useMount(()=>{
        if(!online){
            errorNotification()
        }
    })
    ///之后状态改变就通知
    useUpdateEffect(()=>{
        if(online){
            successNotification()
        }else{
            errorNotification()
        }
    },[online])
    const successNotification=()=>{
        api.success({
            className:'app-notification network-status',
            message:"网络已连接",
            placement:'bottomRight',
            key:'online-notification',
            icon:<IconFont style={{color:'green'}} type={IconType.error}/>,
            closeIcon:<IconFont type={IconType.close}/>,
            description:"当前网络可以使用",
            style:{
                width:200
            },
            duration:2
        });
    }
    const errorNotification=()=>{
        api.error({
            className:'app-notification network-status',
            message:"网络未连接",
            description:(
                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                    isClickToPauseDisabled={true}
                />
            ),
            placement:'bottomRight',
            key:'online-notification',
            icon:<IconFont style={{color:'red'}} type={IconType.error}/>,
            closeIcon:<IconFont type={IconType.close}/>,
            style:{
                width:200
            },
            duration:null
        });
    }
    return [
        contextHolder,
    ]
}