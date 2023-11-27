import React from 'react'
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { AppstoreOutlined, DiffOutlined, GroupOutlined, HomeOutlined, LaptopOutlined,   NotificationOutlined, TableOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import MenuItem from 'antd/es/menu/MenuItem';


function SiderContent() {
  const {  Sider } = Layout;
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        // eslint-disable-next-line @typescript-eslint/no-shadow
        user?: IAppUser,
        theme?: "light"
      ): MenuItem {
        return {
          key,
          icon,
          children,
          user,
          label,
          theme,
        } as MenuItem
      }
    
const items = [
  getItem(<Link to="/" replace>Accueil</Link>,0,<HomeOutlined />),
 
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
    <Sider width={250} style={{ background: colorBgContainer }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  </Sider>
  )
}

export default SiderContent
