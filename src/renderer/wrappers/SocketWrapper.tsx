import React, {FC} from "react";
import {Outlet} from "umi";
import {useAppSocket} from "@/hooks/useAppSocket";


const SocketWrapper:FC = () => {
    useAppSocket()
    return (
        <Outlet/>
    )
}
export default SocketWrapper