import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const LandingPage = () => {
   // Restore sidebar state from localStorage
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(() => {
        const savedToggle = localStorage.getItem('sidebarToggle');
        return savedToggle ? JSON.parse(savedToggle) : false; // Mặc định là false nếu không có giá trị
    });

    // Save sidebar state to localStorage when changed
    useEffect(() => {
        localStorage.setItem('sidebarToggle', JSON.stringify(sidebarToggle));
    }, [sidebarToggle]);

    return (
        <div className="flex">
            <Sidebar sidebarToggle={sidebarToggle} />
            <Dashboard
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
        </div>
    );
};

export default LandingPage;
