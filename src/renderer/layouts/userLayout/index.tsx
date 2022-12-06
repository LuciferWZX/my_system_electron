import React, {FC} from "react";
import {Outlet} from "umi";

const UserLayout:FC = () => {
    return(
        <div>
            UserLayout
            <Outlet />
        </div>
    )
}
export default UserLayout