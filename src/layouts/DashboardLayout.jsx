import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiList,
  FiUser,
  FiPlus,
  FiCheckCircle,
  FiClock,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DashboardLayout = () => {
  const { userRole } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminLinks = [
    {
      path: "/dashboard/manage-users",
      label: "Manage Users",
      icon: <FiUsers />,
    },
    { path: "/dashboard/all-loans", label: "All Loans", icon: <FiList /> },
    {
      path: "/dashboard/loan-applications",
      label: "Loan Applications",
      icon: <FiFileText />,
    },
  ];

  const managerLinks = [
    { path: "/dashboard/add-loan", label: "Add Loan", icon: <FiPlus /> },
    {
      path: "/dashboard/manage-loans",
      label: "Manage Loans",
      icon: <FiList />,
    },
    {
      path: "/dashboard/pending-applications",
      label: "Pending Applications",
      icon: <FiClock />,
    },
    {
      path: "/dashboard/approved-applications",
      label: "Approved Applications",
      icon: <FiCheckCircle />,
    },
    {
      path: "/dashboard/manager-profile",
      label: "My Profile",
      icon: <FiUser />,
    },
  ];

  const borrowerLinks = [
    { path: "/dashboard/my-loans", label: "My Loans", icon: <FiFileText /> },
    { path: "/dashboard/profile", label: "My Profile", icon: <FiUser /> },
  ];

  const getLinks = () => {
    if (userRole === "admin") return adminLinks;
    if (userRole === "manager") return managerLinks;
    return borrowerLinks;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            <span className="font-medium">
              {sidebarOpen ? "Close Menu" : "Dashboard Menu"}
            </span>
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50
            w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
            transition-transform duration-300 ease-in-out
            overflow-y-auto
          `}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-heading font-bold text-primary-600 dark:text-primary-400">
                Dashboard
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FiX size={22} />
              </button>
            </div>
            <nav className="space-y-1">
              <NavLink
                to="/"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                  }`
                }
              >
                <FiHome className="text-lg" />
                <span>Home</span>
              </NavLink>
              {getLinks().map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
