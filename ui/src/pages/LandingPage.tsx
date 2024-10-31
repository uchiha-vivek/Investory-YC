import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const LandingPage = () => {
    // Khôi phục trạng thái sidebar từ localStorage
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(() => {
        const savedToggle = localStorage.getItem('sidebarToggle');
        return savedToggle ? JSON.parse(savedToggle) : false; // Mặc định là false nếu không có giá trị
    });

    // Lưu trạng thái sidebar vào localStorage khi thay đổi
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
