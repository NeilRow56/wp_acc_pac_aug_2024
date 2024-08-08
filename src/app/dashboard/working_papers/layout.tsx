import Sidebar from "@/components/dashboard/working_papers/Sidebar";
import React, { ReactNode } from "react";

function WpLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full h-screen flex-col fixed  md:flex-row md:overflow-hidden">
      <div className="w-20 pt-5 flex-none border-gray-600 md:border-r lg:w-64">
        <Sidebar />
      </div>
      <div className="flex  w-full flex-col p-5">{children}</div>
    </div>
  );
}
export default WpLayout;
