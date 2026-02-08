import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500"></div>
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md shadow-primary-500/30">
                <span className="text-white font-bold text-lg font-heading">
                  L
                </span>
              </div>
              <span className="text-xl font-heading font-bold text-white">
                LoanLink
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Simplifying microfinance for everyone. We connect borrowers with
              smart, transparent lending solutions built for the modern world.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FiFacebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-heading font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-loans"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  All Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-heading font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full"></span>
              Support
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary-400 hover:pl-1 transition-all duration-300"
                >
                  Report Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-heading font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <FiMapPin className="text-primary-400" size={15} />
                </div>
                <span className="text-sm leading-relaxed">
                  45 Greenway Avenue, Suite 12, Gulshan, Dhaka 1212
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <FiPhone className="text-primary-400" size={15} />
                </div>
                <span className="text-sm">+880 1711-223344</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <FiMail className="text-primary-400" size={15} />
                </div>
                <span className="text-sm">hello@loanlink.io</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} LoanLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
