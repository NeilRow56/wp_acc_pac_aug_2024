import { DashboardNavigation } from "@/components/dashboard/DashboardNavigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, MenuIcon } from "lucide-react";
import { ReactNode } from "react";

import { redirect } from "next/navigation";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }
  return (
    <div className="flex flex-col w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 ">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b ">
        <nav className="hidden font-medium xl:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 md:pl-[260px]">
          <DashboardNavigation />
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="shrink-0 xl:hidden"
                variant="outline"
                size="icon"
              >
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
                <DashboardNavigation />
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <LogoutLink>{user.email}</LogoutLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogoutLink>Logout</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="">{children}</main>
    </div>
  );
}
