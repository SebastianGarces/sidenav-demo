import { useNavigationContext } from "@/contexts/nav";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { SideNav } from "./SideNav";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = { children: ReactNode };
export function Layout({ children }: LayoutProps) {
  const { isNavCollapsed } = useNavigationContext();

  console.log("RENDERING LAYOUT");

  return (
    <div
      className={`${inter.className} grid ${
        isNavCollapsed
          ? "grid-cols-[56px_1fr] transition-[grid-template-columns]"
          : "grid-cols-[216px_1fr]"
      } bg-slate-50 min-h-screen  duration-200 ease-in-out`}
    >
      <SideNav />
      <main className="p-4 w-full col-start-2 text-slate-900">{children}</main>
    </div>
  );
}
