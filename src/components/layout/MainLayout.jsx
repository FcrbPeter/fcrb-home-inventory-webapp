import {AppBar} from "./AppBar.jsx";
import {AppDrawer} from "./AppDrawer.jsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AppBar />
        <Outlet />
      </div>
      <AppDrawer />
    </div>
  )
}