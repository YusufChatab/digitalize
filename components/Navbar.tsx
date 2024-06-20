"use client";
import { useState } from "react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { NAV_LINKS } from "../constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h1 className="text-4xl  bold-16">Digitalize</h1>
      </Link>

      {/* Hamburger menu for small screens */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XIcon className="h-8 w-8" />
          ) : (
            <MenuIcon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-md py-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
