import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { DashboardStats } from "@/components/dashboard/DashboardStats";

export default function DashboardPage() {
  return (
    <>
      <DashboardStats />
      <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>Chart</CardContent>
        </Card>
        <RecentSales />
      </div>
    </>
  );
}
