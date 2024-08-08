import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function VehiclesPage() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="w-4 h-4" />
            <span>Add Motor Vehicle</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Motor Vehicles</CardTitle>
          <CardDescription>
            Register of vehicles cost and depreciation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[200px] font-bold">Name</TableHead>
                <TableHead className="text-bold">Date acquired</TableHead>
                <TableHead className="text-bold">
                  Registration or serial number
                </TableHead>
                {/* <TableHead>Documents</TableHead> */}
                {/* <TableHead>Status</TableHead> */}
                <TableHead className="text-bold">Cost (£) - b/fwd</TableHead>
                <TableHead className="min-w-[120px] text-bold">
                  Additions (£)
                </TableHead>
                <TableHead className="min-w-[120px] text-bold">
                  Disposals (£)
                </TableHead>
                <TableHead className="text-bold">Cost (£) - c/fwd</TableHead>
                <TableHead className="text-end text-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-4">
                <TableCell className="font-bold">Tesla series 3</TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat("en-GB").format(27.2)}
                </TableCell>
                <TableCell>TES 125</TableCell>

                {/* <TableCell>
                  <Image
                    alt="Product Image"
                    src="/mascot.svg"
                    height={64}
                    width={64}
                    className="rounded-md object-cover h-16 w-16"
                  />
                </TableCell> */}
                {/* <TableCell>Active</TableCell> */}
                <TableCell>35,099</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>35,099</TableCell>

                <TableCell className="text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/products/1`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/products/1/delete`}>
                          Delete
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              <TableRow className="text-primary">
                <TableCell className="font-bold">Totals</TableCell>
                <TableCell className="font-bold"></TableCell>
                <TableCell className="font-bold"></TableCell>

                {/* <TableCell>
                  <Image
                    alt="Product Image"
                    src="/mascot.svg"
                    height={64}
                    width={64}
                    className="rounded-md object-cover h-16 w-16"
                  />
                </TableCell> */}
                {/* <TableCell>Active</TableCell> */}
                <TableCell className="">35,099</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>35,099</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
