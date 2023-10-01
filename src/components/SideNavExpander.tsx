import { useNavigationContext } from "@/contexts/nav";

export function SideNavExpander() {
  const { isNavCollapsed, setIsNavCollapsed } = useNavigationContext();
  return (
    <div className="h-14 text-center flex justify-start items-center p-2">
      <div
        className="hover:bg-slate-200 rounded-[4px] transition-[background] duration-150 cursor-pointer p-2 text-slate-700"
        onClick={() => {
          setIsNavCollapsed(!isNavCollapsed);
        }}
      >
        {isNavCollapsed ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 18L5.59998 16.6L10.2 12L5.59998 7.4L6.99998 6L13 12L6.99998 18ZM16 18V6H18V18H16Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18V6H8V18H6ZM17 18L11 12L17 6L18.4 7.4L13.8 12L18.4 16.6L17 18Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
