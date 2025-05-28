import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
            <a className="text-[#5c738a] text-base font-normal" href="#">About Us</a>
            <a className="text-[#5c738a] text-base font-normal" href="#">Contact</a>
            <a className="text-[#5c738a] text-base font-normal" href="#">FAQ</a>
            <a className="text-[#5c738a] text-base font-normal" href="#">Privacy Policy</a>
            <a className="text-[#5c738a] text-base font-normal" href="#">Terms of Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
          </div>
          <p className="text-[#5c738a] text-base font-normal">@2025 SoundWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
