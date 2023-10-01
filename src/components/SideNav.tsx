import { useNavigationContext } from "@/contexts/nav";
import { ChartIcon } from "@/icons/ChartIcon";
import { DashboardIcon } from "@/icons/DashboardIcon";
import { NavLink } from "./NavLink";
import { SideNavExpander } from "./SideNavExpander";

export function SideNav() {
  const { isNavCollapsed, setIsNavCollapsed } = useNavigationContext();

  return (
    <aside
      className={`h-full z-10 bg-white overflow-hidden border-r border-gray-400 hover:w-[216px] transition-[width] duration-150 shadow-[2px_0_2px_0_rgba(0,0,0,0.05)] ${
        isNavCollapsed ? "fixed w-[56px]" : "w-[216px]"
      }`}
    >
      {isNavCollapsed ? (
        <div className="bg-slate-800 text-slate-100 h-14 w-full text-center flex justify-start items-center p-4">
          SE
        </div>
      ) : (
        <div className="bg-slate-800 text-slate-100 h-14 text-center flex justify-start items-center p-4">
          SOLDIER ENGAGEMENT
        </div>
      )}
      <SideNavExpander />
      <nav className="flex flex-col gap-2 px-2">
        <NavLink href="/" content="Home" icon={DashboardIcon} />
        <NavLink href="/about" content="About" icon={ChartIcon} />
      </nav>
    </aside>
  );
}
