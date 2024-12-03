"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const docs = [
        { title: "API Reference", slug: "api-doc" },
        { title: "Cos Graph Query Language", slug: "cos-graph-query-language" },
    ];
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            {/* Mobile Toggle Button */}
            <div className=" h-full relative w-10 md:hidden">
                <button
                    className={`md:hidden absolute top-0 left-0 w-10 h-10 bg-white cursor-pointer ${isSidebarOpen ? "w-64" : ""}`}
                    onClick={toggleSidebar}
                >
                    ☰ {/* Hamburger Icon */}
                </button>
            </div>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 md:relative py-[5.5rem] z-[1] md:py-0 w-64 h-screen bg-white transform transition-all duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:w-64 md:h-auto `}
            >
                {/* Close Button (only for mobile view) */}
                <div className="flex justify-end md:hidden">
                    <button
                        className={`w-10 h-10 bg-white cursor-pointer border-black border-2 border-solid`}
                        onClick={toggleSidebar}
                    >
                        X
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-4 p-4">
                    {docs.map((doc) => (
                        <Link
                            key={doc.slug}
                            href={`/docs/${doc.slug}`}
                            className={`block p-2 rounded transition-colors duration-200 ${pathname === `/docs/${doc.slug}`
                                ? " text-[#0055c8] font-semibold"
                                : " text-gray-700"
                                }`}
                        >
                            {doc.title}
                        </Link>
                    ))}
                </nav>
            </aside>

        </div>
    );
}
