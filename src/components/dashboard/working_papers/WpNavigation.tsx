"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Taxation",
    href: "/dashboard/working_papers/taxation",
  },
  {
    name: "Related Parties",
    href: "/dashboard/working_papers/related_parties",
  },
  {
    name: "Fixed Assets - Tangible",
    href: "/dashboard/working_papers/fixed_assets_tangible",
  },
  {
    name: "Fixed Assets - Intangible",
    href: "/dashboard/working_papers/fixed_assets_intangible",
  },
  {
    name: "Stocks",
    href: "/dashboard/working_papers/stocks",
  },
  {
    name: "Sales and Debtors",
    href: "/dashboard/working_papers/sales_debtors",
  },
  {
    name: "Purchases and Creditors",
    href: "/dashboard/working_papers/purchases_creditors",
  },
  {
    name: "Provisions for Liabilities and Charges",
    href: "/dashboard/working_papers/provisions",
  },
  {
    name: "Share Capital, Reserves and Statutory Information",
    href: "/dashboard/working_papers/share_capital_reserves",
  },
  {
    name: "Wages and Salaries",
    href: "/dashboard/working_papers/wages_salaries",
  },
  {
    name: "Trial Balance, Journals etc;",
    href: "/dashboard/working_papers/tria;_balance_journals",
  },
  {
    name: "VAT",
    href: "/dashboard/working_papers/vat",
  },
];

export function WpNavigation() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-primary font-bold text-lg"
              : "text-muted-foreground hover:text-primary text-lg"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
