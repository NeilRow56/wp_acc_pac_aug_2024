"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
  },
  {
    name: "Completion",
    href: "/dashboard/completion",
  },
  {
    name: "Planning",
    href: "/dashboard/planning",
  },
  {
    name: "Working Papers",
    href: "/dashboard/working_papers",
  },
];

export function DashboardNavigation() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-foreground font-bold text-lg"
              : "text-muted-foreground hover:text-primary text-lg"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
