import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userRole, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  // Get profile link based on role
  const getProfileLink = () => {
    if (userRole === "admin") return "/dashboard/manage-users";
    if (userRole === "manager") return "/dashboard/manager-profile";
    return "/dashboard/profile";
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-loans"
        className={({ isActive }) =>
          `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
          }`
        }
      >
        All Loans
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
          }`
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
          }`
        }
      >
        Contact
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard/my-loans"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
            }`
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/60">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md shadow-primary-500/30">
              <span className="text-white font-bold text-lg font-heading">
                L
              </span>
            </div>
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              LoanLink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">{navLinks}</div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-primary-300 dark:hover:ring-primary-700 transition-all duration-300"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-400 ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold ring-2 ring-primary-300 ring-offset-2 ring-offset-white dark:ring-offset-slate-900">
                      {user.displayName?.charAt(0) || user.email?.charAt(0)}
                    </div>
                  )}
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 py-2 border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/20">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      to={getProfileLink()}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiUser size={16} /> My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                    >
                      <FiLogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-full hover:shadow-glow transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks}
              {!user && (
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/login"
                    className="px-4 py-2.5 text-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2.5 text-center bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
