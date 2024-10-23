// Dashboard.tsx
import Navbar from "./Navbar";

interface DashboardProps {
    sidebarToggle: boolean;
    setSidebarToggle: (value: boolean) => void;
}

const Dashboard = ({ sidebarToggle, setSidebarToggle }: DashboardProps) => {
    return (
        <>
            <div className={`${sidebarToggle ? " " : "ml-64"} w-full`}>
                <Navbar
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
            </div>
        </>
    );
};

export default Dashboard;
