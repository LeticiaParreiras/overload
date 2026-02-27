"use client"; // Necessário para usar o useState

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#Home" },
    { label: "ABOUT", href: "#About" },
    { label: "LISTEN", href: "#Listen" },
    { label: "SHOWS", href: "#Shows" },
    { label: "CONTACT", href: "#Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto h-16 px-6 md:px-32 flex justify-between md:justify-center items-center gap-24">
        {/* Mobile: Botão Hambúrguer */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu & Mobile Drawer */}
        <div
          className={`
          absolute md:static top-16 left-0 w-full md:w-auto 
          bg-stone-950/95 md:bg-transparent
          flex flex-col md:flex-row items-center gap-8 md:gap-24
          py-8 md:py-0 transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible md:opacity-100 md:visible"
          }
        `}
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)} // Fecha ao clicar
              className={`
                text-base font-['Bakbak_One'] transition-colors cursor-pointer
                ${
                  item.label === "LISTEN"
                    ? "text-red-700 hover:text-white"
                    : "text-white hover:text-red-700"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
