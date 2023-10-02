import { addGridArea } from "@/add-grid-area";
import { useNavigationContext } from "@/contexts/nav";
import { ChartIcon } from "@/icons/ChartIcon";
import { DashboardIcon } from "@/icons/DashboardIcon";
import { NavLink } from "./NavLink";
import { SideNavExpander } from "./SideNavExpander";

export function SideNav() {
  const { isNavCollapsed, setIsNavCollapsed } = useNavigationContext();

  return (
    <aside
      className={`side-nav-areas grid grid-rows-[3.5rem_3.5rem_1fr_3.5rem] h-full z-10 bg-white overflow-hidden border-r border-gray-400 hover:w-[216px] transition-[width] duration-150 shadow-[2px_0_2px_0_rgba(0,0,0,0.05)] ${
        isNavCollapsed ? "fixed w-[56px]" : "w-[216px]"
      }`}
    >
      {isNavCollapsed ? (
        <div
          className="grid-area bg-slate-800 text-slate-100 h-14 w-full text-center flex justify-start items-center p-4"
          style={addGridArea("logo")}
        >
          SE
        </div>
      ) : (
        <div
          className="grid-area bg-slate-800 text-slate-100 h-14 text-center flex justify-start items-center p-4"
          style={addGridArea("logo")}
        >
          SOLDIER ENGAGEMENT
        </div>
      )}
      <SideNavExpander />
      <nav
        className="flex flex-col gap-2 px-2 grid-area"
        style={addGridArea("nav")}
      >
        <NavLink href="/" content="Home" icon={DashboardIcon} />
        <NavLink href="/about" content="About" icon={ChartIcon} />
      </nav>
      <div
        className="grid-area grid place-items-center"
        style={addGridArea("logout")}
      >
        Logout
      </div>
    </aside>
  );
}
