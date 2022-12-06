import React, {FC} from 'react';
import { Outlet } from 'umi';
import {FullBox} from "@/styles/FullBox";

const Layout:FC=()=>{
    return (
        <FullBox>
            <Outlet />
        </FullBox>
    );
}
export default Layout