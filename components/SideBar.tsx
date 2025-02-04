"use client";
import React from "react";
import { ChartNoAxesColumnIncreasing, Medal, StickyNote } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface SideBarDataInterface {
  name: string;
  link: string;
  icon: React.ElementType;
}
const SideBarData: SideBarDataInterface[] = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    name: "Skill Test",
    link: "/",
    icon: Medal,
  },
  {
    name: "Internship",
    link: "/internship",
    icon: StickyNote,
  },
];

function SideBar() {
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-3 py-6 w-16 sm:w-64 mx-2 sm:mx-3 text-muted-foreground items-center sm:items-start border-r-2">
      {SideBarData.map((data, index) => (
        <Link key={index} href={data.link} className="group">
          <div
            className={`flex items-center justify-center sm:justify-start rounded-full p-3 gap-3 font-bold transition-all duration-300 
              ${
                pathName === data.link
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-blue-300 hover:text-blue-700 active:scale-95"
              }`}
          >
            {/* Icon Size: Mobile (w-7 h-7), Desktop (w-6 h-6) */}
            <data.icon className="w-7 h-7 sm:w-6 sm:h-6" />

            {/* Name Hidden on Mobile, Visible on Desktop */}
            <span className="hidden sm:block">{data.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
