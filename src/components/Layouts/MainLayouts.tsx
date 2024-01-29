import { Layout } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import SideItems from "./SideItems";

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
    <Layout style={{ minHeight: "100vh" }}>
      <SideItems />
      <Layout>
        <Header style={{ padding: 0 }}></Header>
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
