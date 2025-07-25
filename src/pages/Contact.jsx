import React from 'react';
import { socialLinks } from '../content/page';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-hover">Contact Me</h1>

      {/* Email Card */}
      <div className="flex justify-center mb-10 ">
        <a
          href="mailto:vachhaniutsav2@gmail.com?subject=Hello%20Utsav,%20I%20just%20Wanted%20to%20Connect&body=I%20wanted%20to%20connect%20with%20you!"
          className="cursor-pointer bg-secondary backdrop-blur-md border border-white/20 hover:text-red-400 hover:border-red-400 p-6 rounded-xl text-center shadow-md transition transform hover:scale-105"
        >
          <EmailIcon className="text-4xl mb-2" />
          <p className="text-lg font-semibold">Email</p>
          <p className="text-sm">vachhaniutsav2@gmail.com</p>
          <p className="text-sm mt-8">Send a message</p>
        </a>
      </div>

      {/* Social Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {socialLinks.map(({ href, icon, label, textColor, borderColor }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group border ${borderColor} bg-secondary backdrop-blur-md p-6 rounded-lg transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}
          >
            <div
              className={`flex flex-col items-center transition duration-300 group-hover:scale-110 ${textColor}`}
            >
              <div className="text-4xl mb-2">{icon}</div>
              <p className="font-semibold">{label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
