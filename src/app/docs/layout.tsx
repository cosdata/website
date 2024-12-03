import Link from "next/link";
import SideBar from "./SideBar";
import { commonStyles } from "@/app/styles/common";

export default function DocsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-white">
      <div className={`pl-0 ${commonStyles.mainContainer} flex justify-center py-10 min-h-screen bg-white`}>
        {/* Sidebar */}
        <div className="sticky top-16 h-full">
          <SideBar />
        </div>
        {/* Main Content */}
        <div className="w-full min-h-full px-3 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}