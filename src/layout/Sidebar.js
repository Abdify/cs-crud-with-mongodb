import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <Sidebar className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <Sidebar.ItemGroup className="space-y-2">
          <Sidebar.Item as={Link} to="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item as={Link} to="/dashboard/products">
              All Products
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/dashboard/add-product">
              Add Product
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </aside>
  );
};

export default SidebarLayout;