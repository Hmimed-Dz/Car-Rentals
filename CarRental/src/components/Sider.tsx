import React, { useState } from "react"
import { Divider, Layout, Menu, MenuProps, theme } from "antd"
import {
  AppstoreOutlined,
  DiffOutlined,
  GroupOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"
import Link from "antd/es/typography/Link"
import MenuItem from "antd/es/menu/MenuItem"

function SiderContent() {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const { Sider } = Layout
  type MenuItem = Required<MenuProps>["items"][number]
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    theme?: "light"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      theme,
    } as MenuItem
  }

  const items = [
    getItem(
      '',
      '55',
      collapsed ? (
        <MenuUnfoldOutlined onClick={handleCollapse} />
      ) : (
        <MenuFoldOutlined onClick={handleCollapse} />
      )
    ),
    getItem(
      <Link to="/" replace>
        Sign in
      </Link>,
      0,
      <HomeOutlined />,
      
    ),

    getItem(
      <Link to="/gestion-espaces">Gestion des espaces</Link>,
      "gestion-espaces",
      <AppstoreOutlined />
    ),
    getItem(
      <Link to="/roles">Gestion des rôles</Link>,
      "roles",
      <TeamOutlined />
    ),

    getItem(
      <Link to="/users">Gestion des utilisateurs</Link>,
      "users",
      <UserOutlined />
    ),

    getItem(
      <Link to="/Periodicite">Périodicité</Link>,
      "Periodicite",
      <DiffOutlined />
    ),

    getItem(
      <Link to="/MesTableaux">Mes tableaux</Link>,
      "MesTableaux",
      <TableOutlined />
    ),

    getItem(
      <Link to="/Tableaux">Tableaux</Link>,
      "Tableaux",
      <GroupOutlined />
    ),
  ]
  return (
    <Sider
    trigger={null}
      width={250}
      style={{ background: colorBgContainer , borderRight:"1px solid gainsboro"}}
      collapsible
      collapsed={collapsed}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  )
}

export default SiderContent
