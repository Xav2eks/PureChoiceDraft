"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBasket, Mail, Star } from "lucide-react";

const links = [
  { label: "Dashboard", href: "/admin", Icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", Icon: ShoppingBasket },
];

const staticItems = [
  { label: "Customer Inquiries", Icon: Mail },
  { label: "Customer Reviews", Icon: Star },
];

export default function Sidebar() {
  const pathname = usePathname();

  const itemBase =
    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer select-none transition-colors duration-150";
  const activeClasses = "bg-[#2E9F63] text-white";
  const inactiveClasses =
    "text-[#AFC4B4] hover:bg-white/10 hover:text-white active:bg-[#2E9F63] active:text-white";

  return (
    <aside className="w-64 shrink-0 bg-[#123524] text-white flex flex-col justify-between py-6 px-4">
      <div>
        <div className="flex items-center gap-2 px-2 mb-8">
          <span className="w-8 h-8 rounded-full bg-[#2E9F63] flex items-center justify-center text-sm font-semibold">
            P
          </span>
          <span className="font-semibold text-[15px] tracking-tight">
            PureChoice Admin
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map(({ label, href, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`${itemBase} ${isActive ? activeClasses : inactiveClasses}`}
              >
                <Icon />
                {label}
              </Link>
            );
          })}

          {staticItems.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              className={`${itemBase} ${inactiveClasses} text-left`}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 px-2 pt-4 border-t border-white/10 cursor-pointer hover:bg-white/5 rounded-lg py-2 transition-colors duration-150">
        <span className="w-9 h-9 rounded-full bg-[#2E9F63] flex items-center justify-center text-sm font-semibold shrink-0">
          AD
        </span>
        <div>
          <p className="text-sm font-medium leading-tight">Alex Director</p>
          <p className="text-xs text-[#8FA398] leading-tight">
            System Overseer
          </p>
        </div>
      </div>
    </aside>
  );
}
