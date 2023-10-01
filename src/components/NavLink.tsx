import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";

type NavLinkProps = {
  href: string;
  content: string;
  icon: ElementType;
};
export function NavLink({ href, content, icon: Icon }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  console.log({ isActive });

  return (
    <Link
      href={href}
      className={`flex gap-4 p-2 hover:bg-slate-200 rounded-[4px] transition-[background] duration-150 ${
        isActive ? "text-blue-600 font-normal" : "text-slate-700"
      }`}
    >
      <div>
        <Icon />
      </div>
      {content}
    </Link>
  );
}
