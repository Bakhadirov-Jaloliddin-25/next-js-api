"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ILink } from "@/types";
import { links } from "@/static";

const Header = () => {
  const pathname = usePathname();

  const activeClassName = (currentPath: string) => {
    if (currentPath === pathname) return "text-amber-500";
    return "";
  };

  return (
    <div className="flex gap-5 p-8 bg-slate-900 justify-center">
      {links?.map((link: ILink) => (
        <Link
          key={link.href}
          className={`font-semibold text-lg ${activeClassName(link.href)}`}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
