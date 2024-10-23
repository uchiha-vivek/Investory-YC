// LandingPage.tsx
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const LandingPage = () => {
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
    
    return (
        <>
            <div className="flex">
                <Sidebar sidebarToggle={sidebarToggle} />
                <Dashboard
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
            </div>
        </>
    );
};

export default LandingPage;
