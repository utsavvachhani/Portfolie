import React from "react";
import { Typography } from "@mui/material";
import { pages, socialLinks } from "../../content/page.jsx";
import uvPhoto from "../../assets/uvPhoto.jpg";

function AppFooter() {
  return (
    <footer className="bg-primary text-primary py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Profile Section */}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row sm:items-center space-x-8 space-y-2">
            <img
              src={uvPhoto}
              alt="Utsav Vachhani"
              className="h-24 w-24 rounded-full border-4 border-primary shadow-md object-cover"
            />
            <div>
              <Typography variant="h6" className="font-semibold">
                Utsav Vachhani
              </Typography>
              <p>📞 9512655868</p>
              <p>
                📧{" "}
                <a
                  href="mailto:vachhaniutsav2@gmail.com"
                  className="hover:underline text-hover transition"
                >
                  vachhaniutsav2@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Pages & Social Section */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-3 sm:grid-cols-4">
            {/* Vertical Divider (Center) */}
            <div className="hidden flex-col items-center sm:flex">
              <div className="w-2 h-2 rounded-full border-divider" />
              <div className="w-px border-divider h-full mx-auto" />
              <div className="w-2 h-2 rounded-full border-divider" />
            </div>

            <div className="flex flex-col space-y-2">
              <Typography variant="h6" className="font-semibold pb-4">
                Pages
              </Typography>
              {pages.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="hover:underline text-hover transition"
                >
                  {name}
                </a>
              ))}
            </div>

            {/* Vertical Divider (Center) */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full border-divider" />
              <div className="w-px border-divider h-full mx-auto" />
              <div className="w-2 h-2 rounded-full border-divider" />
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-2">
              <Typography variant="h6" className="font-semibold pb-4">
                Social Links
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-hover transition"
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-divider my-6" />

      {/* Bottom copyright */}
      <div className="mt-4 text-center text-xs text-hover">
        © {new Date().getFullYear()} Utsav Vachhani. All rights reserved.
      </div>
    </footer>
  );
}

export default AppFooter;
