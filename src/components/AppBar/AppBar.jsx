import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import logo from "../../assets/ProfileSection.svg";
import { socialLinks, pages } from "../../content/page.jsx";

function AppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-primary  shadow-md px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="logo-hover">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <Typography variant="h6" className="text-lg font-semibold">
                Utsav's Portfolio
              </Typography>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-hover space-x-2 text-primary font-semibold hover:font-extrabold transition"
            >
              <span>{page.icon}</span>
              <span>{page.name}</span>
            </a>
          ))}
        </div>

        {/* Right (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="text-hover transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <CloseIcon
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: 28, cursor: "pointer" }}
            />
          ) : (
            <MenuIcon
              onClick={() => setIsMobileMenuOpen(true)}
              style={{ fontSize: 28, cursor: "pointer" }}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-hover p-4 rounded-md space-y-4 grid grid-cols-3">
          {/* Navigation Links Section (Left) */}
          <div className="space-y-2 flex flex-col items-start">
            {pages.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-hover transition"
              >
                {icon}
                <span className="font-bold hover:font-extrabold text-hover">
                  {name}
                </span>
              </a>
            ))}
          </div>

          {/* Vertical Divider (Center) */}
          <div className="flex flex-col items-center ">
            {/* Top Circle */}
            <div className="w-2 h-2 rounded-full border-divider" />

            {/* Vertical Line */}
            <div className="w-px border-divider h-full mx-auto" />

            {/* Bottom Circle */}
            <div className="w-2 h-2 rounded-full border-divider" />
          </div>

          {/* Social Media Links Section (Right) */}
          <div className="space-y-2 flex flex-col items-start">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-hover transition"
              >
                {icon}
                <span className="font-bold hover:font-extrabold text-hover">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default AppBar;
