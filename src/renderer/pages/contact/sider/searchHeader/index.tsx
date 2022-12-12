import React, {FC} from "react";
import {StyledSearchBox} from "@/pages/contact/sider/searchHeader/style";
import {Button, Input} from "antd";
import {IconFont, IconType} from "@/components";

const SearchHeader:FC = () => {
  return(
    <StyledSearchBox >
      <Button  icon={<IconFont type={IconType.addAccount} />} />
      <Input placeholder={'请输入手机号/邮箱'} />
    </StyledSearchBox>
  )
}
export default SearchHeader
