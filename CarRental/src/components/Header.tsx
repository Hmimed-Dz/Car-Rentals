import React from 'react'
import {Button, Layout} from 'antd';
import logo from '../assets/carlogo.svg'
import { MenuOutlined } from '@ant-design/icons';
const { Header} = Layout;
function ContentHeader() {
  return (
    <Header style={{ display: 'flex', alignItems: 'center',background: "border-box" , borderBottom:" 1px solid gainsboro"}}>
        <Button type="primary" shape="circle">
        <MenuOutlined />
      </Button>
      
        <img src={logo} alt="icon" style={{width:"17rem",position:"relative",left:'33px'}} />
       
      </Header>
  )
}

export default ContentHeader
