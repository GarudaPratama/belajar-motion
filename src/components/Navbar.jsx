import React from 'react';
import { NavLink, Link } from 'react-router';

function Navbar() {
  // Helper class untuk animasi & indikator menu aktif
  const linkStyle = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
      isActive
        ? 'text-white bg-white/15 shadow-inner font-semibold'
        : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`;

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-2xl shadow-black/40">
        
        {/* 1. Logo / Brand */}
        <Link to="/" className="text-xl font-extrabold tracking-wider text-white flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></span>
          DEV<span className="text-blue-500">.</span>
        </Link>

        {/* 2. Menu Links */}
        <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-full border border-slate-800/80">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* 3. Tombol CTA (Opsional) */}
        <button className="px-5 py-2 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded-full transition-all duration-300 active:scale-95 shadow-md shadow-white/10 cursor-pointer">
          Get Started
        </button>

      </nav>
    </header>
  );
}

export default Navbar;