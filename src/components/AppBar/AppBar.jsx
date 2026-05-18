import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Typography } from "@mui/material";
import logo from "../../assets/ProfileSection.svg";
import { socialLinks, pages } from "../../content/page.jsx";
import { motion, AnimatePresence } from "framer-motion";

function AppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler for dynamic styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light-mode");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("light-mode");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      // Dark mode
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      // Light mode
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`w-full bg-primary text-primary px-4 sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-opacity-85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-divider/10"
          : "py-5 bg-opacity-95 backdrop-blur-sm shadow-sm border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-tr from-highlight/10 to-cyan-500/10 group-hover:scale-105 transition-all duration-300 shadow-md">
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-9 sm:h-11 sm:w-11 group-hover:rotate-12 transition-transform duration-500"
              />
              <span className="absolute inset-0 rounded-xl bg-highlight/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
            </div>
            <div className="flex flex-col justify-center">
              <Typography
                variant="h6"
                className="text-sm sm:text-lg font-black tracking-tight text-primary drop-shadow-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Utsav Vachhani
              </Typography>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-highlight font-bold leading-none mt-0.5">
                Full-Stack Developer
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.href}
              className="relative flex items-center space-x-2 px-4 py-2.5 text-primary font-semibold rounded-xl hover:text-highlight transition-colors duration-300 group"
            >
              {/* Subtle hover background highlight */}
              <span className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 scale-95 group-hover:scale-100"></span>
              
              <span className="text-highlight group-hover:scale-110 transition-transform duration-300 z-10 flex items-center">
                {page.icon}
              </span>
              <span className="z-10 text-sm font-medium">{page.name}</span>
              
              {/* Bottom slide line indicator */}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-10"></span>
            </Link>
          ))}
        </nav>

        {/* Right: Social Links + Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-5">
          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.slice(0, 4).map(({ href, icon, label, textColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="p-2 rounded-xl text-primary/70 hover:text-white bg-secondary/30 hover:bg-secondary border border-divider/10 hover:border-highlight/20 hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center"
              >
                <span className={`transition-colors duration-300 ${textColor} flex items-center justify-center`}>
                  {icon}
                </span>
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-highlight transition-all duration-300 border border-divider/10 hover:border-highlight/30 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDarkMode ? "dark" : "light"}
                initial={{ y: -10, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDarkMode ? (
                  <LightModeIcon sx={{ fontSize: 20 }} className="text-yellow-400" />
                ) : (
                  <DarkModeIcon sx={{ fontSize: 20 }} className="text-indigo-400" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-highlight transition-all duration-300 border border-divider/10 hover:border-highlight/30 active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDarkMode ? "dark" : "light"}
                initial={{ y: -10, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDarkMode ? (
                  <LightModeIcon sx={{ fontSize: 20 }} className="text-yellow-400" />
                ) : (
                  <DarkModeIcon sx={{ fontSize: 20 }} className="text-indigo-400" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl hover:bg-secondary/50 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon sx={{ fontSize: 24 }} className="text-highlight" />
            ) : (
              <MenuIcon sx={{ fontSize: 24 }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-secondary p-6 rounded-2xl space-y-6 border border-divider/10 overflow-hidden shadow-2xl"
          >
            {/* Navigation Links */}
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-highlight uppercase tracking-wider mb-2 px-3">
                Navigation
              </h3>
              {pages.map(({ name, href, icon }, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={name}
                >
                  <Link
                    to={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-primary hover:text-highlight transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-primary/40 group"
                  >
                    <span className="text-highlight group-hover:scale-115 transition-transform duration-300 flex items-center">
                      {icon}
                    </span>
                    <span className="font-semibold text-sm">{name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-divider/10"></div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-highlight uppercase tracking-wider mb-2 px-3">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map(({ href, icon, label, textColor }, idx) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    key={label}
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:text-highlight transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-primary/40 group"
                    >
                      <span className={`text-highlight transition-transform duration-300 ${textColor} group-hover:scale-110 flex items-center`}>
                        {icon}
                      </span>
                      <span className="text-xs font-medium">{label}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default AppBar;
