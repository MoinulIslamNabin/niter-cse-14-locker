import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 20);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (current <= 0) {
            setVisible(true);
          } else if (current > lastScrollY.current && current > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }
          lastScrollY.current = current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-9999 lg:px-24 backdrop-blur-sm border-b transition-all duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-[#0F1623]/50 border-[#1DA0E3] shadow-[0_10px_70px_#1DA0E3]/30" : "bg-transparent border-b-transparent"}
      `}
    >
      <div className="flex navbar-start">
        <a className="btn btn-ghost rounded-2xl p-0 md:p-2 md:py-8 text-start border hover:bg-transparent shadow-none border-none transition-all duration-300 ">
          <div className="title flex items-center gap-2">
            <img
              src={logo}
              alt="Dtd Logo"
              className="w-1/2 md:mr-2 hover:scale-110 transition-all duration-300"
            />
            
          </div>
        </a>
      </div>

      <div className="hidden md:flex navbar-center gap-6">
        <a className="cursor-pointer outline-none bg-transparent border border-transparent rounded-xl text-base text-white/70 font-medium transition-all duration-300 hover:text-[#1DA0E3] hover:[text-shadow:0_0_10px_#1DA0E3]">
          Gallery
        </a>

        <a className="cursor-pointer outline-none bg-transparent border border-transparent rounded-xl text-base text-white/70 font-medium transition-all duration-300 hover:text-[#1DA0E3] hover:[text-shadow:0_0_10px_#1DA0E3]">
          Legacy
        </a>
      </div>
      <div className="flex  items-end md:flex-row gap-2 md:mr-3 navbar-end">
        <a className="btn w-3/10 md:w-auto btn-ghost md:px-6 md:py-6 bg-transparent border border-[#0D5D88] rounded-xl md:text-lg text-xs text-[#01CDEE] font-semibold hover:border-[#1DA0E3] hover:shadow-[0_8px_15px_#1DA0E3]/50 transition-all duration-300">
          Login
        </a>
        <a className="btn w-5/10 md:w-auto btn-ghost md:px-6 md:py-6 bg-linear-to-l to-[#00B3FF] from-[#0077FF] border border-transparent rounded-xl md:text-lg text-xs text-white font-semibold hover:border-[#1DA0E3] hover:shadow-[0_8px_15px_#1DA0E3]/50 transition-all duration-300">
          Register Now
        </a>
      </div>
    </div>
  );
}
