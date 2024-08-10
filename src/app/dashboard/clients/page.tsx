import { Button } from "@/components/ui/button";

import db from "@/lib/db";

import Link from "next/link";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { DataTable } from "./create/data-table";
import { columns } from "./columns";
import { PlusCircle } from "lucide-react";

async function getData() {
  const data = await db.client.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return data;
}

export default async function ClientsPage() {
  noStore();
  const data = await getData();
  return (
    <>
      <div className="pl-[206px] mt-6 flex w-full justify-between items-center">
        <div className="">
          <h1 className="text-3xl font-bold text-primary">Clients</h1>
        </div>
        <div className="flex items-center justify-end">
          <Button asChild className="flex items-center gap-x-2">
            <Link href="/dashboard/clients/create">
              <PlusCircle className="w-4 h-4" />
              <span>Add Client</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-6">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
