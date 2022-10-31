import { Outlet } from "react-router-dom";
import SidebarLayout from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex items-start justify-start w-full">
      <SidebarLayout />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;