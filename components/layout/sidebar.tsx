"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Recruitment",
    icon: Briefcase,
    children: [
      { title: "Jobs", href: "/jobs" },
      { title: "Candidates", href: "/candidates" },
      { title: "Referrals", href: "/referrals" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.children?.some(
              (child) => child.href === pathname
            );

            return (
              <li key={item.title}>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-[5px] px-[15px] py-[10px] text-[15px] font-medium transition-colors",
                    isActive
                      ? "bg-[rgba(254,159,67,0.08)] text-[#FE9F43]"
                      : "text-[#3B7080] hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43]"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      isActive ? "text-[#FE9F43]" : "text-[#637381]"
                    )}
                  />
                  <span className={cn(
                    isActive ? "text-[#FE9F43]" : "text-[#4B5563]"
                  )}>{item.title}</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </div>
                {item.children && (
                  <ul className="ml-[30px] mt-1 space-y-[5px]">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <li key={child.href} className="rounded-[5px] overflow-hidden">
                          <Link
                            href={child.href}
                            className={cn(
                              "block rounded-[5px] px-2 py-2 text-[14px] font-medium transition-colors",
                              isChildActive
                                ? "bg-[#E8E9EA] text-[#F26522]"
                                : "text-[#111827] hover:bg-[rgba(254,159,67,0.08)] hover:text-[#FE9F43]"
                            )}
                          >
                            {child.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

