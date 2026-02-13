import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Typography } from "@mui/material";
import logo from "../../assets/ProfileSection.svg";
import { socialLinks, pages } from "../../content/page.jsx";

function AppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <header className="w-full bg-primary text-primary shadow-md px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="logo-hover">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <Typography
                variant="h6"
                className="text-base sm:text-lg font-semibold hidden sm:block"
              >
                Utsav's Portfolio
              </Typography>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-6">
          {pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-hover space-x-2 text-primary font-medium hover:text-highlight transition-colors duration-300"
            >
              <span>{page.icon}</span>
              <span>{page.name}</span>
            </a>
          ))}
        </nav>

        {/* Right: Social Links + Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.slice(0, 3).map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="text-hover hover:text-highlight transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-highlight hover:text-white transition-all duration-300 border border-white/10 hover:border-highlight"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <LightModeIcon sx={{ fontSize: 20 }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: 20 }} />
            )}
          </button>
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-highlight hover:text-white transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <LightModeIcon sx={{ fontSize: 20 }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: 20 }} />
            )}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon sx={{ fontSize: 28 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 28 }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-secondary p-6 rounded-lg space-y-6 animate-fadeIn">
          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-highlight uppercase tracking-wider mb-3">
              Navigation
            </h3>
            {pages.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-primary hover:text-highlight transition-colors duration-300 py-2"
              >
                <span className="text-highlight">{icon}</span>
                <span className="font-medium">{name}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-highlight uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-highlight transition-colors duration-300 py-2"
                >
                  <span className="text-highlight">{icon}</span>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default AppBar;
