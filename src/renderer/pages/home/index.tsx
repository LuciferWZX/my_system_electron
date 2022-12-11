import React, {FC} from "react";
import {Button, message} from "antd";




const HomePage:FC = () => {
    return(
        <div id={'xxx'}>
            <Button onClick={()=> {message.success("xxx",0)}}>跳转</Button>
            HomePage
        </div>
    )
}
export default HomePage
