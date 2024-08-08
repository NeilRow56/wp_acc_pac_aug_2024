import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            <AvatarImage src="/men.jpeg" alt="Avatar Image" />
            <AvatarFallback>Ben</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Ben</p>
            <p className="text-sm text-muted-foreground">ben@bt.com</p>
          </div>
          <p className="ml-auto font-medium">
            +${new Intl.NumberFormat("en-US").format(25000 / 100)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
