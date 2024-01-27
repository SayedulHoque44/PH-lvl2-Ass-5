import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "Gadgets Management",
    label: <NavLink to={"/dashboard"}>Gadgets Managment</NavLink>,
  },
  {
    key: "Sales Management",
    label: <NavLink to={"/dashboard/SalesManagement"}>Sales Managment</NavLink>,
  },
  {
    key: "Sales History",
    label: <NavLink to={"/dashboard/SalesHistory"}>Sales History</NavLink>,
  },
];
const MainLayouts = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;
