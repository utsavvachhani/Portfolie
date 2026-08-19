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

  // Scroll handler for dynamic navbar glass effect
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
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`w-full text-primary px-4 sm:px-6 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 sm:py-3 bg-primary/85 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "py-3.5 sm:py-4 bg-primary backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-highlight/10 group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-9 sm:h-10 sm:w-10 group-hover:rotate-12 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Typography
                variant="h6"
                className="text-sm sm:text-base font-black tracking-tight text-primary drop-shadow-sm"
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

        {/* Center: Sleek Borderless Navigation Links Container (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 bg-secondary/60 backdrop-blur-2xl px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.href}
              className="relative flex items-center space-x-2 px-4 py-2 text-primary font-semibold rounded-full hover:text-highlight transition-all duration-300 group"
            >
              <span className="text-highlight group-hover:scale-110 transition-transform duration-300 flex items-center">
                {page.icon}
              </span>
              <span className="text-xs font-bold tracking-wide">{page.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Social Links + Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Social Links */}
          <div className="flex items-center space-x-1.5">
            {socialLinks.slice(0, 4).map(({ href, icon, label, textColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="group p-2 rounded-xl text-primary/70 bg-secondary/40 hover:bg-secondary/80 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <span className={`transition-all duration-300 ${textColor} flex items-center justify-center`}>
                  {icon}
                </span>
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-highlight transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDarkMode ? "dark" : "light"}
                initial={{ y: -6, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 6, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDarkMode ? (
                  <LightModeIcon className="text-amber-400" sx={{ fontSize: 20 }} />
                ) : (
                  <DarkModeIcon className="text-indigo-400" sx={{ fontSize: 20 }} />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary text-primary cursor-pointer flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <LightModeIcon className="text-amber-400" sx={{ fontSize: 18 }} />
            ) : (
              <DarkModeIcon className="text-indigo-400" sx={{ fontSize: 18 }} />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary text-primary cursor-pointer flex items-center justify-center"
            aria-label="Open navigation menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon sx={{ fontSize: 24 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 24 }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 pt-3 border-t border-divider/10 bg-secondary/95 backdrop-blur-2xl rounded-2xl p-4 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-primary font-bold rounded-xl hover:bg-highlight/10 hover:text-highlight transition-all"
                >
                  <span className="text-highlight">{page.icon}</span>
                  <span className="text-sm">{page.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-3 border-t border-divider/10 flex items-center justify-around">
              {socialLinks.slice(0, 4).map(({ href, icon, label, textColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-primary/40 text-primary hover:text-highlight transition-all"
                >
                  <span className={textColor}>{icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default AppBar;
