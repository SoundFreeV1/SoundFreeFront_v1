import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
      <Link to="/" className="flex items-center gap-4 text-[#101418] hover:opacity-70 transition">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">SoundOff</h2>
      </Link>

      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-[#101418] text-sm font-medium leading-normal" to="/shop">Shop</Link>
          <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Learn</a>
          <a className="text-[#101418] text-sm font-medium leading-normal" href="#">Support</a>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center h-10 px-2.5 rounded-full bg-[#eaedf1]">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11..." />
            </svg>
          </button>
          <button className="flex items-center justify-center h-10 px-2.5 rounded-full bg-[#eaedf1]">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,40H40A16,16,0..." />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
