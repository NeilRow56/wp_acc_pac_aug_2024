import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  PartyPopper,
  PoundSterling,
  ShoppingBag,
  User2,
} from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Revenue</CardTitle>
          <PoundSterling className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            £{new Intl.NumberFormat("en-GB").format(250000 / 100)}
          </p>
          <p className="text-xs text-muted-foreground">Based on 100 Charges</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
          <ShoppingBag className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+15</p>
          <p className="text-xs text-muted-foreground">Total Sales on BT2024</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Products</CardTitle>
          <PartyPopper className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-muted-foreground">
            Total Products created
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Users</CardTitle>
          <User2 className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">3</p>
          <p className="text-xs text-muted-foreground">Total Users Signed Up</p>
        </CardContent>
      </Card>
    </div>
  );
}
