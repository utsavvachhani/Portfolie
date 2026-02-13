import React from "react";
import { Typography } from "@mui/material";
import { pages, socialLinks } from "../../content/page.jsx";
import uvPhoto from "../../assets/uvPhoto.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";

function AppFooter() {
  return (
    <footer className="bg-primary text-primary py-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <img
                src={uvPhoto}
                alt="Utsav Vachhani"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-highlight shadow-lg object-cover"
              />
              <div className="text-center sm:text-left">
                <Typography variant="h6" className="font-bold text-white mb-2">
                  Utsav Vachhani
                </Typography>
                <p className="text-sm text-gray-400">Full-Stack Developer</p>
                <p className="text-sm text-gray-400">B.Tech IT Student</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <Typography variant="h6" className="font-bold text-highlight mb-4">
              Quick Links
            </Typography>
            <div className="grid grid-cols-2 gap-3">
              {pages.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-highlight transition-colors duration-300"
                >
                  <span className="text-sm">{icon}</span>
                  <span className="text-sm font-medium">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <Typography variant="h6" className="font-bold text-highlight mb-4">
              Get in Touch
            </Typography>

            {/* Contact Info */}
            <div className="space-y-2 mb-4 text-center md:text-left">
              <p className="text-sm text-gray-400">
                📞{" "}
                <a
                  href="tel:9512655868"
                  className="hover:text-highlight transition-colors"
                >
                  9512655868
                </a>
              </p>
              <p className="text-sm text-gray-400">
                📧{" "}
                <a
                  href="mailto:vachhaniutsav2@gmail.com"
                  className="hover:text-highlight transition-colors"
                >
                  vachhaniutsav2@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="p-2 rounded-lg bg-secondary hover:bg-highlight hover:text-white transition-all duration-300 border border-white/10 hover:border-highlight"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Utsav Vachhani. All rights reserved.
          </div>

          {/* Made with Love */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <FavoriteIcon
              className="text-red-500 animate-pulse"
              sx={{ fontSize: 16 }}
            />
            <span>in India</span>
          </div>

          {/* Tech Stack */}
          <div className="text-sm text-gray-400 text-center sm:text-right">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
