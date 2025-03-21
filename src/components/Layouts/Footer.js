import { Link } from 'react-router-dom';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 mt-auto">
      <div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <Link to="/" className="hover:underline">Lexicon</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {/** Social Media Links */}
          {socialLinks.map(({ href, icon, label }) => (
            <Link key={label} to={href} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {icon}
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    href: "/",
    label: "Instagram page",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06..." clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "/",
    label: "Twitter page",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178..." />
      </svg>
    ),
  },
  {
    href: "/",
    label: "GitHub account",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425..." clipRule="evenodd" />
      </svg>
    ),
  },
];

