import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImage from "../assets/logo.svg";
import user from "../data/user";
import { LayoutDashboard, LogOut, Menu, ShieldCheck, X } from "lucide-react";

const Navbar = ({ setAuthModalOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md h-16 shadow-sm border-b border-outline-variant/10" : "bg-transparent h-20 border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6 md:px-10">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img
              src={LogoImage}
              alt="Logo"
              className={`h-8.5 ${scrolled || (location.pathname === "/" && "ivert")}`}
            />
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className={`text-sm transition-colors pb-1 border-b-2 cursor-pointer ${location.pathname === "/" ? (scrolled ? "text-amber-800 border-amber-800" : "text-black --this to be white border-black") : "text-black/55 hover:text-amber-800 border-transparent"}`}
            >
              Discover
            </Link>
            <Link
              to="/search"
              className={`text-sm transition-colors pb-1 border-b-2 border-transparent cursor-pointer ${location.pathname.startsWith("/search") ? "text-amber-800 border-amber-800" : scrolled || location.pathname !== "/search" ? "text-black/55 hover:black/55 " : "text-white/80 hover:text-white"}`}
            >
              Restaurants
            </Link>

            <button
              className={`text-sm transition-colors pb-1 border-b-2 border-transparent cursor-pointer ${location.pathname.startsWith("/dashboard") ? "text-amber-800 border-amber-800" : scrolled || location.pathname !== "/dashboard" ? "text-black/55 hover:black/55 " : "text-white/80 hover:text-white"}`}
            >
              My Bookings
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className={`flex items-center gap-2 text-sm transition-colors cursor-pointer ${scrolled || location.pathname !== "/" ? "test-black" : "text-black"}`}
              >
                <span className="size-7 rounded-full bg-black/20 border flex items-center justify-center text-xs uppercase">
                  {user.name.charAt(0)}
                </span>{" "}
                <span className="max-w-[120px] truncate">
                  {user.name.split(" ")[0]}
                </span>
              </button>

              {dropDownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-outline-variant/30 ambient-shadow rounded-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ">
                  <div className="px-4 py-2 border-b border-outline-variant/10">
                    <p className="text-sm text-black/55 truncate">
                      {user.name}
                    </p>
                    <p className="text-sm text-black/55 truncate">
                      {user.email}
                    </p>
                  </div>
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-black/55 hover:text-black/55 hover:bg-surface transition-colors cursor-pointer text-left">
                    <LayoutDashboard size={14} />
                    My Bookings
                  </button>

                  {user.role === "admin" && (
                    <Link
                      to="/admin/dashboard"
                      className="flex items-center px-4 gap-3 py-2.5 text-xs text-black/55 hover:text-black/55 hover:bg-surface transition-colors cursor-pointer"
                    >
                      <ShieldCheck size={14} /> Admin Panel
                    </Link>
                  )}

                  {user.role === "owner" && (
                    <Link
                      to="/owner/dashboard"
                      className="flex items-center px-4  gap-3 py-2.5 text-xs text-black/55 hover:text-black/55 hover:bg-surface transition-colors cursor-pointer"
                    >
                      <ShieldCheck size={14} /> Owner Panel
                    </Link>
                  )}

                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-red-700 hover:bg-red-100 transition-colors border-outline-variant/10 text-left  cursor-pointer">
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => setAuthModalOpen(true)}
                className={`text-sm transition-colors cursor-pointer ${scrolled || location.pathname !== "/" ? "text-black/55 hover:text-black/55" : "text-black/80 hover:text-white"}`}
              >
                Sign In
              </button>
              onClick={() => setAuthModalOpen(true)}
              <button
                className={`text-sm transition-colors cursor-pointer ${scrolled || location.pathname !== "/" ? "text-black/55 hover:text-black/55" : "text-black/80 hover:text-white"}`}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* mobile menu button  */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors cursor-pointer ${scrolled || location.pathname !== "/" ? "text-black/55" : "text-black/55"}`}
          >
            {" "}
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu drawer  */}

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white border-b border-[#c4c7c7]/10 py-6 px-6 z-50 ambient-shadow flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <Link
            to="/"
            className="text-base text-on-surface hover:text-black/55"
          >
            Discover
          </Link>
          <Link
            to="/search"
            className="text-base text-on-surface hover:text-black/55"
          >
            Restaurants
          </Link>
          <button className="text-base text-on-surface hover:text-black/55 text-left cursor-pointer">
            Reservations
          </button>

          <div className="border-t border-[#c4c7c7]/10 my-2"></div>

          {user ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-[#775a19] text-sm uppercase">
                  {user.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm text-black">{user.name}</p>
                  <p className="text-xs text-black/55">{user.email}</p>
                </div>
              </div>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-black/55 hover:text-black"
              >
                My Bookings
              </Link>
              {user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="text-sm font-medium text-black/55 hover:text-black"
                >
                  Admin Console
                </Link>
              )}

              {user.role === "owner" && (
                <Link
                  to="/owner/dashboard"
                  className="text-sm font-medium text-black/55 hover:text-black"
                >
                  Owner Console
                </Link>
              )}
              <button className=" text-sm text-red-700 text-left  cursor-pointer font-medium">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button className="w-full border border-[#c4c7c7]/50 text-center py-3 text-sm font-medium hover:border-black cursor-pointer">
                Sign In
              </button>
              <button className="w-full bg-black text-white tracking-widest uppercase border-[#c4c7c7]/50 text-center py-3 text-sm font-medium hover:border-black cursor-pointer">
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
