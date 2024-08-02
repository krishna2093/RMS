import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  LogoutOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../style/DefaultLayout.css";
import {  message } from 'antd';
const { Sider, Content } = Layout; // add Header if you use toggler.


const DefaultLayout = ({ children }) => {
  const [collapsed, setcollapsed] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const toggle = () => {
    setcollapsed(!collapsed);
  };
  // eslint-disable-next-line
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}> 
        <div className="logo">
          <h1 className="text-center text-light font-wight-bold mt-4">Admin</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            <Link to="/admin">Home</Link>
          </Menu.Item>
          <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
            <Link to="/admin/item">Items</Link>
          </Menu.Item>
          <Menu.Item key="/tables" icon={<TableOutlined />}>
            <Link to="/admin/table">Book Table</Link>
          </Menu.Item>
          <Menu.Item key="/feedback" icon={<UserOutlined />}>
            <Link to="/admin/feedback">Review</Link>
          </Menu.Item>
          <Menu.Item
            key="/logout"
            icon={<LogoutOutlined />}
            onClick={() => {
              
              localStorage.removeItem("token");
              message.success("Logout Successfully..")
             
              navigate("/admin/login");
            }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }}>
        <div>
        {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        <h3>Admin Panel</h3>
        </div>
        </Header> */}
        <Content
          className="site-layout-background"
          style={{
            margin: "2px 7px", //24px & 16px
            padding: 24,
            minHeight: 650, //Changed this 12/03/24 6:15pm  //with toggler 520 otherwise 600
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
