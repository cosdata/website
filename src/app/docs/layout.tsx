import Link from "next/link";
import SideBar from "./SideBar";
import { commonStyles } from "@/app/styles/common";

export default function DocsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-white">
      <div className={` ${commonStyles.mainContainer} flex justify-center py-10 min-h-screen bg-white`}>
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="w-full min-h-full px-3 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}