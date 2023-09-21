import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { SideNav } from "./SideNav";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = { children: ReactNode };
export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} grid grid-cols-[40px_1fr] bg-white min-h-screen [&:has(aside:hover)]:grid-cols-[200px_1fr] transition-all duration-300 ease-in-out`}
    >
      <SideNav />
      <main className="p-7">{children}</main>
    </div>
  );
}
