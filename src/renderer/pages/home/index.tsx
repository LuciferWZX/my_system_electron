import React, {FC} from "react";
import {Button} from "antd";
import {history} from "umi";

const HomePage:FC = () => {
    return(
        <div>
            <Button onClick={()=> history.replace("/entrance/login")}>跳转</Button>
            HomePage
        </div>
    )
}
export default HomePage