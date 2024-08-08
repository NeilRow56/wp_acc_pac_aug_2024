import { Logo } from "@/components/Logo";
import { WpNavigation } from "./WpNavigation";

function Sidebar() {
  return (
    <div className="flex h-[80vh] flex-col  px-3  md:px-2">
      <div className="fixed bottom-0 z-50 -ml-3 flex  w-full flex-1 flex-row  space-x-2     md:relative md:ml-0 md:h-full md:flex-col md:justify-between md:space-x-0 md:space-y-0 md:border-2 border p-2 rounded-md">
        <div className="">
          <Logo />
        </div>

        <WpNavigation />
      </div>
    </div>
  );
}

export default Sidebar;
